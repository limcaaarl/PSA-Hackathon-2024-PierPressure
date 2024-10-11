const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw5q1BUiLo8S6BzO9hU5kAKyw05obooPs",
    authDomain: "pierpressure-5a9cf.firebaseapp.com",
    projectId: "pierpressure-5a9cf",
    storageBucket: "pierpressure-5a9cf.appspot.com",
    messagingSenderId: "333517113388",
    appId: "1:333517113388:web:e17189bc92490b1618a989"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const query = collection(db, "Query");

// Export the query object
module.exports = { query, addDoc };