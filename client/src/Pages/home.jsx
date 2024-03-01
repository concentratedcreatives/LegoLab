import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to LEGO Lab</h2>
            <div>
                <Link to="/legolab">
                    <button>LEGO Lab</button>
                </Link>
                <Link to="/categories">
                    <button>Categories</button>
                </Link>
                <Link to="/cart">
                    <button>Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;