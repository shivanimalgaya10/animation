import React from 'react'

import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
    // const userInfo=useSelector(getUserInfo);
    const userInfo=localStorage.getItem('userInfo');
    return Object.keys(userInfo || {})?.length ? <Outlet /> : <Navigate to="/" />;
 
}

export default PrivateLayout                                                                                