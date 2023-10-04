import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import AboutUS from './Components/AboutUS/AboutUS'

const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path:'/about',
      element:<AboutUS></AboutUS>
    }
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
