import React from 'react'
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
const Login = () => {
    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    <div className="my-3 text-4xl font-bold tracking-wider text-center">
                        <a>Collection_Tail</a>
                    </div>
                    <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                        With the power of K-WD, you can now focus only on functionaries htmlFor your digital products, while leaving the
                        UI design on us!
                    </p>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span>Don't have an account?</span>
                        <a className="underline">Get Started!</a>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-300">
                        Read our <a className="underline">terms</a> and <a className="underline">conditions</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                    <form action="#" className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address</label>
                            <input
                                type="email"
                                id="email"
                                autoFocus
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password</label>
                            </div>
                            <input
                                type="password"
                                id="password"
                                className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                            />
                        </div>
                        <div className="flex items-center justify-between space-x-2">
                            <div className="flex items-center justify-between space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                />
                                <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Remember me</label>

                            </div>
                            <a className="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>

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
                    <div className='flex items-center justify-center'>
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
        </div>
    )
}

export default Login