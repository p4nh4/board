import React from 'react';
import AdminDashboard from '@/components/AdminDashboard';

export default function Layout({children}){
    return (
        <AdminDashboard>
            {children}
        </AdminDashboard>
    );
}


