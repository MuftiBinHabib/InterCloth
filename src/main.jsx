import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout.jsx';
import Suppliers from '../components/pages/Suppliers.jsx';
import Home from '../components/pages/Home.jsx';
import FAQ from '../components/pages/FAQ.jsx';
import Contact from '../components/pages/Contact.jsx';
import firebaseConfig from './firebase.config.js';
import Login from '../components/pages/Login.jsx';
import Signup from '../components/pages/Signup.jsx';
import Product from '../components/pages/Product.jsx';
import RFQ from '../components/pages/RFQ.jsx';
import IndividualProducts from '../components/IndividualProducts.jsx';
import Cart from '../components/pages/Cart.jsx';
import Checkout from '../components/pages/Checkout.jsx';
import TrackOrder from '../components/pages/TrackOrder.jsx';
import OrderConfirmation from '../components/pages/OrderConfirmation.jsx';
import ViewOrder from '../components/pages/ViewOrder.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // This makes Home the default route
        element: <Home />,
      },
      {
        path: '/items',
        element: <Suppliers />,
      },
      {path: '/faq',
        element: <FAQ />
      },
      {path: '/contact',
        element: <Contact />
      },
      {path: '/login',
        element: <Login />
      },
      {path: '/signup',
        element: <Signup />
      },
       {path: '/products',
        element: <Product />
      },
      {path: '/rfq',
        element: <RFQ />
      },
      {path: '/ip',
        element: <IndividualProducts />
      },
      {path: '/add',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
       {
        path: '/trackorder',
        element: <TrackOrder />
      },
       {
        path: '/orderconfirm',
        element: <OrderConfirmation />
      },
       {
        path: '/vieworder',
        element: <ViewOrder />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
