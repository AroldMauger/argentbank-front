import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage/HomePage.jsx';
import SignIn from './pages/SignIn/SignIn.jsx'
import NotFound404 from './components/NotFound404/NotFound404.jsx';

import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserPage from './pages/UserPage/UserPage.jsx';
import Header from './layout/Header/Header.jsx';
import Footer from './layout/Footer/Footer.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import Guard from './components/Guard/Guard.jsx';


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
        path: "/",
        children :[
          {
            path: "/user",
            element: <UserPage/>
          }
        ],
        element: <Guard/>  // permet de sécuriser les routes privées
      },
    ],
  },
]);

// On entoure toute notre App avec le Provider de Redux.

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>   
      <RouterProvider router={router} />
  </Provider>

)

