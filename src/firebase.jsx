import firebase from 'firebase/app';
import 'firebase/firestore';
require('dotenv').config();


const app = firebase.initializeApp(
    {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: "ecommerce-mauna.firebaseapp.com",
        projectId: "ecommerce-mauna",
        storageBucket: "ecommerce-mauna.appspot.com",
        messagingSenderId: "512448140727",
        appId: process.env.FIREBASE_API_ID,
    }
)

export const getFirebase = () =>{
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}