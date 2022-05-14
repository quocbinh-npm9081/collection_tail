import React from 'react';
import { Link } from 'react-router-dom';
import AvataNavbar from './AvataNavbar';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { isRegister, authLogout, isForgotPassword } from '../../redux/slides/auth.slides';
const itemsNav = [{
    display: 'Login',
    path: '/login'
}, {
    display: 'Register',
    path: '/register'
}];


const Navbar = () => {

    const dispatch = useAppDispatch();

    const { currentUser } = useAppSelector(state => state.auth);

    const onHandleClickLogin = () => {
        dispatch(isRegister(false));
        dispatch(isForgotPassword(false));
    }

    return (
        <div>
            {
                currentUser ? (
                    <div className="flex items-center">
                        <AvataNavbar />
                        <button className='px-5 py-2 rounded-md bg-emerald-500 text-white hover:bg-neutral-900'
                            onClick={() => dispatch(authLogout())}
                        >
                            Log out
                        </button>
                    </div>

                ) : (
                    <>
                        {
                            itemsNav.map((item, index) => (

                                item.path === '/register' ? (
                                    <Link to={item.path} key={index}>
                                        <button className='px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-neutral-900'
                                            onClick={() => dispatch(isRegister(true))}

                                        >
                                            {
                                                item.display
                                            }
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to={item.path} key={index}>
                                        <button className='px-5 py-2 rounded-md hover:text-blue-600'
                                            onClick={onHandleClickLogin}

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

                )
            }




        </div >
    )
}

export default Navbar