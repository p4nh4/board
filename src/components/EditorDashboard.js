import React from 'react';
import ASide from './Asidebar';

export default function Editor({children}){
    return (
        <div>
        <ASide/>
        {children}
            
        </div>
    );
}


