import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from './layout/RootLayout.jsx';
import Suppliers from '../components/Suppliers.jsx';

const router = createBrowserRouter([
  {
    path : "/",
    Component : RootLayout,
    children : [
      {

        path : "/items",
      element : <Suppliers />
      
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
