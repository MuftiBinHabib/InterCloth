import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RootLayout from './layout/RootLayout.jsx';
import Suppliers from '../components/Suppliers.jsx';
import Home from '../components/pages/Home.jsx';
import FAQ from '../components/FAQ.jsx';
import Contact from '../components/Contact.jsx';

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
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
