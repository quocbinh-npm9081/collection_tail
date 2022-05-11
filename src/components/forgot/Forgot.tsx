import React, { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store.hooks';
import { authForgotPassword } from '../../redux/slides/auth.slides';
import Loading from '../loading/Loading';
const Forgot = () => {

    const [email, setEmail] = useState('');

    const dispatch = useAppDispatch();

    const { loading } = useAppSelector((state) => state.auth);

    const onHandleSubmit = (e: FormEvent) => {

        e.preventDefault();

        dispatch(authForgotPassword(email));
    };

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh - 6rem)]'>
            {
                loading && <Loading />
            }
            <div className='container max-w-md shadow-sm p-5'>
                <h3 className='text-2xl font-semibold'>
                    FORGOT PASSWORD
                </h3>
                <form onSubmit={onHandleSubmit} >
                    <div className='my-3'>
                        <label htmlFor="email">Email address</label>
                        <div className=' flex items-center justify-center'>
                            <input type="text"
                                name="email"
                                id="email"
                                className="w-full p-2 border-solid outline-none border-2 rounded-md"
                                placeholder='email@example.com'
                                required
                                onChange={(e) => { setEmail(e.target.value) }}
                                value={email}
                                autoComplete="on"
                            />
                            <button type='submit'
                                disabled={loading}
                                className='w-1/5 m-auto p-2 rounded-md  border-2 border-solid bg-slate-700 text-white hover:bg-neutral-900'
                            >
                                Send
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot;
