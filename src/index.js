import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwvuIOXFb_W-zXIsYsZqhCMl0m1FlMKps",
  authDomain: "mps-shop.firebaseapp.com",
  projectId: "mps-shop",
  storageBucket: "mps-shop.appspot.com",
  messagingSenderId: "1032683968051",
  appId: "1:1032683968051:web:f3ff533eb6d3a265bf3546"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
