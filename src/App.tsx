import React from 'react';
import './App.css';
import Route from './router/index';
import Header from './components/header/Header';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


var firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_API}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

function App() {
  console.log(db);

  return (
    <>
      <Header />
      <Route />
    </>
  );
}

export default App;
