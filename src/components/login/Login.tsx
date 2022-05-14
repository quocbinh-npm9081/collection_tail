import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginSociaMedia from './LoginSociaMedia';
import validLogin from '../../ulits/validations/login';
import { toast } from 'react-toastify';
import { ILogin } from '../../redux/type';
import Error from '../errors/Errors';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { authLogin, isForgotPassword, isRegister } from '../../redux/slides/auth.slides';
import Loading from '../loading/Loading';
const Login = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [remember, setRememberMe] = useState(false);

    const dispatch = useAppDispatch();

    const { loading } = useAppSelector(state => state.auth);

    const onHandleSumit = (e: FormEvent) => {

        e.preventDefault();

        const user: ILogin = { email, password, remember };

        const resultValid_register = validLogin(user);

        if (resultValid_register.errorLenght > 0) {

            setEmail('');

            setPassword('');

            toast.error(() => (<Error errors={resultValid_register.errorMsg} />), {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            })
        } else {
            dispatch(authLogin(user));
        }
    }


    return (
        <>
            {loading && <Loading />}
            <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div className="my-3 text-4xl font-bold tracking-wider text-center">
                            <h2>Collection_Tail</h2>
                        </div>
                        <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            With the power of K-WD, you can now focus only on functionaries htmlFor your digital products, while leaving the
                            UI design on us!
                        </p>
                        <p className="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Don't have an account? </span>
                            <span onClick={() => dispatch(isRegister(true))}>

                                <Link to="/register" className="underline">Register</Link>

                            </span>
                        </p>

                    </div>
                    <div className="p-5 bg-white md:flex-1">
                        <h1 className="text-gray-800 font-bold text-2xl mb-1 uppercase">login</h1>
                        <form onSubmit={onHandleSumit}
                            className="flex flex-col space-y-5
                    
                    ">
                            <div className="flex flex-col space-y-1">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    name='email'
                                    type="text"
                                    id="email"
                                    autoFocus
                                    value={email}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="off"
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                                </div>
                                <input
                                    name='password'
                                    type="password"
                                    id="password"
                                    value={password}
                                    autoComplete="off"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div className="flex items-center justify-between space-x-2">
                                <div className="flex items-center justify-between space-x-2">
                                    <input
                                        type="checkbox"
                                        name='checkbox'
                                        id="remember"
                                        defaultChecked={remember}
                                        onClick={() => setRememberMe(!remember)}
                                        className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                    />
                                    <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>

                                </div>
                                <Link to='/forgot_password'
                                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                                    onClick={() => dispatch(isForgotPassword(true))}
                                >Forgot Password?</Link>

                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Log in
                                </button>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <span className="flex items-center justify-center space-x-2">
                                    <span className="h-px bg-gray-400 w-14"></span>
                                    <span className="font-normal text-gray-500">or login with</span>
                                    <span className="h-px bg-gray-400 w-14"></span>
                                </span>
                            </div>
                        </form>
                        <LoginSociaMedia />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login