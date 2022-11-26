import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loadding from '../../../Pages/Components/Loadding/Loadding';
import { AuthContext } from '../../../Pages/context/AuthProvider';

const PrivetRoutes = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const location = useLocation()
    if (loadding) {
        return <Loadding></Loadding>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoutes;