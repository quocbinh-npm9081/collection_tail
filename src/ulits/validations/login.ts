import React from 'react';
import { ILogin } from '../../redux/type';
import { validateEmail } from './validateEmail';
const login = (user: ILogin) => {

    const errors: string[] = [];

    const { email, password } = user;

    if (!email.trim()) errors.push('Please enter your email !')
    else if (!validateEmail(email)) errors.push('Youi have entered an invaid email address !')


    if (!password.trim()) errors.push('Please enter your password !')

    return {
        errorMsg: errors,
        errorLenght: errors.length
    }
}

export default login