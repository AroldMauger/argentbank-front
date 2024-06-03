import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function Guard() {

const { token } = useSelector(state => state.auth);

if (!token){
    return <Navigate to={"/"}/>
}  
    return <Outlet/>
}

export default Guard