import { useEffect, useState } from 'react';
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
  const [scrollOpacity, setScrollOpacity] = useState(0);

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

  useEffect(() => {
    // JavaScript logic for random rainbow color
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const generateRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * rainbowColors.length);
      return rainbowColors[randomIndex];
    };
    document.documentElement.style.setProperty('--hover-color', generateRandomColor());

    // JavaScript logic for fading image on scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = document.body.scrollHeight - windowHeight;
      const scrollPercentage = scrollTop / maxScroll;
      setScrollOpacity(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once on component mount

  return (
    <div className="CategoryMenu"> {/* Add the .CategoryMenu class here */}
      {/* Fading image */}
      <div className="fading-image" style={{ opacity: scrollOpacity }}></div>
      <h2>Search a Brand:</h2>
      {categories.map((item) => (
        <Link to={`/catagory/${item._id}`} key={item._id}> {/* Add key prop here */}
          <button className="rainbow-hover">
            <img
              src={`/images/${item.image}`}
              alt={item.name}
              onClick={() => handleClick(item._id)}
            />
          </button>
        </Link>
      ))}
      <Link to='/catagory/65e6636cd81cc86a20fdd589'>
        <button className="rainbow-hover">
          <img
            src='/images/all.png'
            alt="All products"
            onClick={() => handleClick('')}
          />
        </button>
      </Link>
    </div>
  );
}

export default CategoryMenu;
