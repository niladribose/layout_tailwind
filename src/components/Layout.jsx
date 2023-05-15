// components/Layout.js

import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col space-y-16  h-screen overflow-hidden">
        <Navbar className="h-16"/>
        <main className="flex-grow overflow-auto ">
            {children}
        </main>
    </div>
    );
};

export default Layout;
