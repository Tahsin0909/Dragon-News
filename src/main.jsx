import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import AboutUS from './Components/AboutUS/AboutUS'
import MainSection from './Components/MainSection/MainSection'
import { AuthProvider } from './Components/AuthContext/AuthContext'
import Login from './Components/LogInPAge/Login'
import SignUp from './Components/SignUpPage/SignUp'
import JobDetails from './Components/JobDetail/JobDetails'
import PrivetRoute from './Components/PRivetRoute/PrivetRoute'


const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/about',
      element: <AboutUS></AboutUS>
    },
    {
      path: '/',
      loader: () => fetch('./news.json'),
      element: <MainSection></MainSection>
    },
    {
      path:'/news/:_id',
      element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>
    },
    {
      path:'/signIn',
      element:<Login></Login>
    },
    {
      path:'/signUp',
      element:<SignUp></SignUp>
    },


  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </React.StrictMode>,
)
