import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCrIYb4kbMBYvXSfwP5tdmOdYtTDeTOzMQ",
    authDomain: "ecomerce-clone.firebaseapp.com",
    databaseURL: "https://ecomerce-clone.firebaseio.com",
    projectId: "ecomerce-clone",
    storageBucket: "ecomerce-clone.appspot.com",
    messagingSenderId: "505850048090",
    appId: "1:505850048090:web:faaa075ae71284738df263",
    measurementId: "G-S65PNBVYQB"
});


const auth = firebase.auth();
export {auth};