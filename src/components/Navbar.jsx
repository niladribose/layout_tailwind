// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-6 bg-blue-500 fixed w-full z-10">
            <Link className="text-2xl font-bold text-white" href="/">
                MySaaS
            </Link>
            <div className="flex space-x-4">
                <Link className="text-white" href="/features">
                    Features
                </Link>
                <Link className="text-white" href="/pricing">
                    Pricing
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
