import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import Loadding from '../../../Pages/Components/Loadding/Loadding';
import { AuthContext } from '../../../Pages/context/AuthProvider';

const AdminRoutes = ({ children }) => {
    const { user, loadding } = useContext(AuthContext)
    const [isAdmin, isAdminLoadding] = useAdmin(user?.email)
    const location = useLocation()
    if (loadding || isAdminLoadding) {
        return <Loadding></Loadding>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;