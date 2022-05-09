import { RootState } from '../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthState, ILogin, IRegister } from '../type';
import { registerApi, loginApi } from '../actions/auth.action';
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import {
    browserLocalPersistence,
    browserSessionPersistence,
    signInWithEmailLink,
    setPersistence
} from "firebase/auth";

const authen = getAuth();



const initialState: IAuthState = {
    currentUser: undefined,
    loading: false
}

export const authRegister = createAsyncThunk(

    'auth/register',

    async (user: IRegister, thunkAPI) => {

        return registerApi(user)

    }

)


export const authLogin = createAsyncThunk(
    'auth/login',

    async (user: ILogin) => {
        return await loginApi(user);
    }
)


export const authConfirmLoginWithEmail = createAsyncThunk(
    'auth/confirm',
    async (user: ILogin) => {

        try {
            const { email, remember } = user;

            await setPersistence(authen, remember ? browserLocalPersistence : browserSessionPersistence);
            const res = await signInWithEmailLink(authen, email, window.location.href);


            return res.user;

        } catch (error: any) {
            console.log('error' + error.message);

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
)

const auth = createSlice({

    name: 'auth',

    initialState: initialState,

    reducers: {

        addUser: (state, action) => {

            state.currentUser = action.payload

        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(authRegister.pending, (state, action) => {
                state.loading = true
            })
            .addCase(authRegister.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(authLogin.pending, (state, action) => {
                state.loading = true
            })
            .addCase(authLogin.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(authConfirmLoginWithEmail.pending, (state, action) => {
                state.loading = true
            })
            .addCase(authConfirmLoginWithEmail.fulfilled, (state, action) => {
                state.loading = false
            })
    }
})

export const getStateAuth = (state: RootState) => state.auth;
export const { addUser } = auth.actions;

export default auth.reducer;