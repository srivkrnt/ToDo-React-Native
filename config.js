import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyD-GIH4tBHcmr-FQawV_JyKbcoJpMpTGjg",
    authDomain: "todo2-8315b.firebaseapp.com",
    databaseURL: "https://todo2-8315b.firebaseio.com",
    projectId: "todo2-8315b",
    storageBucket: "todo2-8315b.appspot.com",
    messagingSenderId: "218514326023",
    appId: "1:218514326023:web:876441fd47967ae72220a2",
    measurementId: "G-LZYSKGF6TR"
};

let app = Firebase.initializeApp(config);
export const db = app.database();