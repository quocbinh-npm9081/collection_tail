import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
const Header = () => {
    return (
        <header className='sticky top-0 py-4 bg-gray-50 min-h-16 z-50'>
            <div className='flex flex-wrap justify-between items-center max-w-6xl px-4 mx-auto'>
                <h1 className='text-2xl font-semibold'>
                    <Link to="/">
                        Collection_tail
                    </Link>
                </h1>
                <Navbar />
            </div>
        </header>
    )
}

export default Header