import React from 'react'
import { Link } from 'react-router-dom';
import { BiUserCircle } from '@react-icons/all-files/bi/BiUserCircle';


const AvataNavbar = () => {
    return (
        <div>
            <Link to="/profile" className='flex items-center'>
                <div className='w-10 h-10 overflow-hidden rounded-full mr-2'>
                    <BiUserCircle
                        fontSize={34}
                    />
                </div>
                <span className='mr-4 font-semibold capitalize'>
                    Quoc Binh
                </span>
            </Link>
        </div>
    )
}

export default AvataNavbar