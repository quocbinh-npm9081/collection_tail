import React from 'react'
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { authLoginWithGoogle, authLoginWithFacebook } from '../../redux/slides/auth.slides';
import { useAppDispatch } from '../../redux/store.hooks';
const LoginSociaMedia = () => {

    const dispatch = useAppDispatch();





    return (
        <div className='flex items-center justify-center'>
            <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                onClick={() => dispatch(authLoginWithGoogle())}
            >
                <FcGoogle
                    fontSize={36}
                />
                Google
            </button>
            <button className='w-full my-2 p-2 font-semibold flex items-center justify-center border-2 border-transparent rounded-md hover:border-slate-100	'
                onClick={() => dispatch(authLoginWithFacebook())}
            >
                <SiFacebook
                    fontSize={36}
                    color='#3A559F'
                />
                Facebook
            </button>
        </div>
    )
}

export default LoginSociaMedia