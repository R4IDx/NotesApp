import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyAv3wk0BvZCyPdiaMvwvhBwFwKv_ZsjMx4",
    authDomain: "notesapp-ddb15.firebaseapp.com",
    projectId: "notesapp-ddb15",
    storageBucket: "notesapp-ddb15.appspot.com",
    messagingSenderId: "560587254388",
    appId: "1:560587254388:web:80013be81f2f810654ff21",
    measurementId: "G-NB1YTDBRLW"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export{ firebase };
