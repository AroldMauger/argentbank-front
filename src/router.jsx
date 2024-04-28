import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx';
import SignIn from './pages/SignIn/SignIn.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

{/*Ici on crée un Layout pour une mise en page uniforme.*/}

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
       // element: 
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)

