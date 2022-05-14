import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import registerValid from '../../ulits/validations/register';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { toast } from 'react-toastify';
import Errors from '../errors/Errors';
import { authRegister, isRegister } from '../../redux/slides/auth.slides';
const Register: React.FC = () => {

    const [userName, setUserName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [cfPassword, setCfPassword] = useState('');

    const { loading, currentUser, register } = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    const onSubmitHandle = (e: FormEvent) => {

        e.preventDefault();

        const user = { userName, email, password, cfPassword };

        const resultValid_register = registerValid(user);

        if (resultValid_register.errorLenght > 0) {

            toast.error(() => (<Errors errors={resultValid_register.errorMsgs} />), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });

        } else {

            dispatch(authRegister(user));

        }
    }



    return (
        <>
            {loading && <Loading />}
            <div className="h-screen md:flex w-full">
                <div
                    className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700  justify-around items-center hidden">
                    <div>
                        <h1 className="text-white font-bold text-4xl font-sans">GoFinance</h1>
                        <p className="text-white mt-1">I already have an account ?
                            <Link to='/login' className="w-28 text-white mt-4 py-2 rounded-2xl mb-2 text-sm hover:underline ">Login</Link>
                        </p>
                    </div>
                    <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                    <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                </div>
                <div className="flex md:w-1/2  justify-center py-10 items-center bg-white flex-col">
                    <form className="bg-white md:w-2/3"
                        onSubmit={onSubmitHandle}
                    >
                        <h1 className="text-gray-800 font-bold text-2xl mb-1 uppercase">register</h1>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl  mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input className="pl-2 outline-none border-none w-full"
                                type="text"
                                name="userName"
                                id=""
                                autoComplete="off"

                                placeholder="Username"
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl  mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none  w-full"
                                type="text"
                                name="email"
                                id=""
                                autoComplete="off"
                                placeholder="Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl  mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none w-full"
                                type="password"
                                name="password"
                                id=""
                                autoComplete="off"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none w-full"
                                type="password"
                                name="cfPassword"
                                id=""
                                autoComplete="off"
                                placeholder="Confirm password"
                                onChange={(e) => setCfPassword(e.target.value)}
                            />
                        </div>

                        <div className='py-2 md:hidden w-full flex text-xs'>
                            I already have an account ?
                            <span
                                onClick={() => dispatch(isRegister(false))}
                            >
                                <Link to='/login'

                                >Login
                                </Link>
                            </span>
                        </div>
                        <button type="submit" className="block w-full bg-indigo-600 md:mt-4 py-2 mt-2 rounded-2xl text-white font-semibold mb-2">Register</button>
                        <div className='flex flex-col py-3'>
                            <span className='flex items-center justify-center space-x-2'>
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or register with</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>
                        </div>

                    </form>

                    <div className='flex items-center md:w-2/3 '>
                        <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                        >
                            <FcGoogle
                                fontSize={36}
                            />
                            Google
                        </button>
                        <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                        >
                            <SiFacebook
                                fontSize={36}
                                color='#3A559F'
                            />
                            Facebook
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Register