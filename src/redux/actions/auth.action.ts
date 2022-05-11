import {
    createUserWithEmailAndPassword,
    browserLocalPersistence,
    browserSessionPersistence,
    signInWithEmailAndPassword,
    updateProfile,
    setPersistence,
    signInWithPopup

} from "firebase/auth";
import { toast } from "react-toastify";
import { ILogin, IRegister } from "../type";
import { auth, googleProvider } from './../../config/firebase';
// import { useLocation, useNavigate } from "react-router-dom";
export const registerApi = async (user: IRegister) => {


    try {
        const res = await createUserWithEmailAndPassword(auth, user.email, user.password);



        await updateProfile(res.user, {
            displayName: user.userName // update name for user
        })

        // console.log(res);

    } catch (error: any) {

        //console.log(error);
        toast.error(error.message)

    }
}


export const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this                                                                                                                                                                                                                                                                                                                                                                                                            
    // URL must be in the authorized domains list in the Firebase Console.                                                                                                  
    url: 'http://localhost:3000/confirm',
    // This must be true.
    handleCodeInApp: true,

};


export const loginApi = async (user: ILogin) => {
    try {


        const { email, password, remember } = user;

        await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);

        const res = await signInWithEmailAndPassword(auth, email, password);

        return res.user;

    } catch (error) {

        toast.error('Email or password wrong !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }

}


export const googleApi = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        return res.user;

    } catch (error: any) {
        toast.error('Some thing went wrong !', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
    }
}

