import React from 'react';
import EditorDashboard from '@/components/EditorDashboard';

export default function Layout({children}){
    return (
        <EditorDashboard>
            {children}
        </EditorDashboard>
    );
}


