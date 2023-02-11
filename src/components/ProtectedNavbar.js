import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';

export default function ProtectedNavbar({children}) {
    const { user } = UserAuth();

    if (!user) {
        return <Navigate to='/' />;
    }
    return children;

}

