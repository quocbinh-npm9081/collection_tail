import React from "react"

import { IRegister } from "../../redux/type";
import { validateEmail } from "./validateEmail";

const checkNameContainsSpecialChars = (userName: string) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(userName);
}


const checkExistPassword = (password: string, cfPassword: string) => {
    if (password !== cfPassword) return ("Confirm password did not match. !")
    else if (password.length < 6) return ("Password must be at least 6 chars !")

}

const registerValid = (user: IRegister) => {

    const { userName, email, password, cfPassword } = user;

    const errors: string[] = [];

    if (!userName.trim()) {

        errors.push('Please enter your name !');

    } else if (userName.length >= 20) {

        errors.push('Your name cannot be larger than 20 chars');

    } else if (checkNameContainsSpecialChars(userName)) {

        errors.push('Your name cannot be contains special chars !');

    }

    if (!email.trim()) {

        errors.push('Please enter your email');

    } else if (!validateEmail(email)) {

        errors.push("You have entered an invalid email address!")

    }

    if (!password.trim()) {

        errors.push('Please enter your password !');

    }
    if (!cfPassword.trim()) {

        errors.push("Please enter your confirm password !")

    }


    if (password && cfPassword) {

        const msg_checkExistPassword = checkExistPassword(password, cfPassword);

        if (msg_checkExistPassword) {

            errors.push(msg_checkExistPassword)

        }

    }


    return {
        errorMsgs: errors,
        errorLenght: errors.length
    }
}



export default registerValid;  