import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxt5pxU84oeNsgJcbLots5sEO765F1dCk",
    authDomain: "crwn-clothing-e3422.firebaseapp.com",
    databaseURL: "https://crwn-clothing-e3422.firebaseio.com",
    projectId: "crwn-clothing-e3422",
    storageBucket: "",
    messagingSenderId: "31994910189",
    appId: "1:31994910189:web:555ffb3bc95b3f6b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;