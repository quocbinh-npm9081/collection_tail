import * as FireAuth from 'firebase/auth';

export interface IRegister {
    userName: string,
    email: string,
    password: string,
    cfPassword: string
}

export interface ILogin {
    email: string,
    password: string,
    remember: Boolean
}

export interface IUser {
    userName: string,
    email: string,
    gender: string
}

export interface IAuth extends FireAuth.User {

}
export interface IAuthState {
    forgotPassword: boolean,
    register: boolean,
    currentUser?: IAuth,
    loading: boolean
}