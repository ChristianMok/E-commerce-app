import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyBHSwoyHPW89EqB-T72i-bXAu9LEwdNTYk",
        authDomain: "e-commerce-app-82316.firebaseapp.com",
        databaseURL: "https://e-commerce-app-82316.firebaseio.com",
        projectId: "e-commerce-app-82316",
        storageBucket: "e-commerce-app-82316.appspot.com",
        messagingSenderId: "300384685650",
        appId: "1:300384685650:web:66c30459abc50aaba7d98b",
        measurementId: "G-FC01P5LC0T"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;