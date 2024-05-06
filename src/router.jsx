import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx';
import SignIn from './pages/SignIn/SignIn.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserPage from './pages/UserPage/UserPage.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';


const HeaderFooterLayout = () => {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
}
const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout/>,
    errorElement: <NotFound404/>, 
    children :[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/sign-in",
        element: <SignIn/>
      },
      {
        path: "/user",
        element: <UserPage/>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

