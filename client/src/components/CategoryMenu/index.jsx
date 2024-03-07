import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Search a Brand:</h2>
      {categories.map((item) => (
        <Link to={`/catagory/${item._id}`}>
          <button>
            <img src={`/images/${item.image}`}
            alt="Brand logo"
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          /></button>
        </Link>
      ))}
      <Link to='/catagory/65e6636cd81cc86a20fdd589'>
        <button>
          <img src='/images/alllego.jpg'
          alt="Other category"
          onClick={() => {
            handleClick('');
          }}
        />
        </button>
      </Link>
    </div>
  );
}

export default CategoryMenu;