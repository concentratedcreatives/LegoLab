import { useState } from 'react'; // Import useState hook

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Cart from "../Cart";

function Nav() {
  // State variable to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    // Toggle dark mode state
    setDarkMode(!darkMode);
    // Toggle dark-mode class on the body element
    document.body.classList.toggle('dark-mode');
  }

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Cart />
          </li>
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <img src='/images/sitelogo.jpg' alt="LegoLab" className="logo"/>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </nav>
    </header>
  );
}

export default Nav;
