// Your web app's Firebase configuration

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCCyk_XCDSDRNnMawLgGK9z5z3JTe5MaxA",
    authDomain: "react-samulife.firebaseapp.com",
    databaseURL: "https://react-samulife.firebaseio.com",
    projectId: "react-samulife",
    storageBucket: "react-samulife.appspot.com",
    messagingSenderId: "298604988746",
    appId: "1:298604988746:web:89dfc126b795d4e16319b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }