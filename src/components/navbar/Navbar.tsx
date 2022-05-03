import React from 'react';
import { Link } from 'react-router-dom';
import AvataNavbar from './AvataNavbar';
const itemsNav = [{
    display: 'Login',
    path: '/login'
}, {
    display: 'Register',
    path: '/register'
}];


const Navbar = () => {
    return (
        <div>
            <div className="flex items-center">
                <AvataNavbar />
                <button className='px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'>
                    Log out
                </button>
            </div>
            <>
                {
                    itemsNav.map((item, index) => (

                        item.path === '/register' ? (
                            <Link to={item.path} key={index}>
                                <button className='px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-neutral-900'>
                                    {
                                        item.display
                                    }
                                </button>
                            </Link>
                        ) : (
                            <Link to={item.path} key={index}>
                                <button className='px-5 py-2 rounded-md hover:text-blue-600'

                                >
                                    {
                                        item.display
                                    }
                                </button>
                            </Link>
                        )
                    ))
                }

            </>

        </div >
    )
}

export default Navbar