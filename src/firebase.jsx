import firebase from 'firebase/app'
import 'firebase/firestore'


const app = firebase.initializeApp(
    {
        apiKey: 'JXg_CdflEtalLHR4bnhGhu3djXrCMi4',
        authDomain: "ecommerce-mauna.firebaseapp.com",
        projectId: "ecommerce-mauna",
        storageBucket: "ecommerce-mauna.appspot.com",
        messagingSenderId: "512448140727",
        appId: '1:512448140727:web:5a9d80cf62a312a8620432',
    }
)

export const getFirebase = () =>{
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}