import React, { useEffect, memo } from 'react';
import './App.css';
import Route from './router/index';
import Header from './components/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './redux/store.hooks';
import { onAuthStateChanged, sendSignInLinkToEmail, sendEmailVerification, signOut } from "firebase/auth";
import { auth } from './config/firebase';
import { addUser } from './redux/slides/auth.slides';
import { actionCodeSettings } from './redux/actions/auth.action';
function App() {
  const { currentUser } = useAppSelector(state => state.auth);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const authListender = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const email: any = user.email;
        console.log(user);

        console.log(user.emailVerified);
        console.log("URL: ", window.location.href);

        const providerId = user.providerData.some(p => p.providerId === 'password');;

        if (providerId && !user.emailVerified) {


          //await sendEmailVerification(user); // gui mail yeu cau xac thuc den user

          // await signOut(auth);// sau khi gui emal xac thuc cho user thi` redirect user den trang email_verifiled 
          // console.log(user.emailVerified)  


          await sendSignInLinkToEmail(auth, email, actionCodeSettings);

          await signOut(auth);

          return navigate('/email_verified');

        }
        dispatch(addUser(user))



      } else {
        dispatch(addUser(undefined));

      }
    });
    return authListender;
  }, [dispatch, navigate])

  return (
    <>
      <Header />
      <Route />
      <ToastContainer />
    </>
  );
}

export default App;
