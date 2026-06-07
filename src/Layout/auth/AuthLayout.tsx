import Login from '@/pages/auth/Login';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <Routes>
                <Route path='/auth/login' element={<Login/>}/>
            </Routes>
        </div>
    );
};

export default AuthLayout;