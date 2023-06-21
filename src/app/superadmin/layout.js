import React from 'react';
import SuperAdminDashboard from '@/components/SuperAdminDashboard';

export default function Layout({children}){
    return (
        <SuperAdminDashboard>
            {children}
        </SuperAdminDashboard>
    );
}


