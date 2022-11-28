import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useSeller from '../../../hooks/useSeller';
import Loadding from '../../../Pages/Components/Loadding/Loadding';
import { AuthContext } from '../../../Pages/context/AuthProvider';

const SellerRoutes = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const [isSeller, isSellerLoadding] = useSeller(user?.email)
    const location = useLocation()
    if (loadding || isSellerLoadding) {
        return <Loadding></Loadding>
    }
    if (user && isSeller) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;