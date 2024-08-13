import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Read from './components/Read.jsx'
import Create from './components/Create.jsx'
import Update from './components/Update.jsx'
import Navbar from './components/Navbar.jsx'
import Layout from './components/Layout.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [{
      path: "/create",
      element: <Create/>
    },
  {
    path:"/all",
    element: <Read/>
  }]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
