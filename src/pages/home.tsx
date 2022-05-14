import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

const ToastLoginSuccess = () => {
    useEffect(() => {
        toast('Login successfuly !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }, [])
    return (
        <></>
    )

}

const home = () => {



    return (

        <h1 className="text-3xl font-bold underline">
            <ToastLoginSuccess />
            Hello Home
        </h1>
    )
}

export default home;