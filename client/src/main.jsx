import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import App from './App.jsx';
import Home from './Pages/home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import ProductDetail from './Pages/ProductDetails.jsx';
import NoMatch from './Pages/NoMatch.jsx';
import CatagoryPage from './Pages/CatagoryPage.jsx';
import OrderHistory from './Pages/OrderHistory.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/catagory/:id',
        element: <CatagoryPage />
      },
      {
        path: '/products/:id',
        element: <ProductDetail />
      },
      {
        path:'/orderHistory',
        element: <OrderHistory />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
