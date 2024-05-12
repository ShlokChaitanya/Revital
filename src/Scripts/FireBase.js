import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtdITdiO4AbqE8cPNNKYIGDifn9KVHHYg",
    authDomain: "revital-91590.firebaseapp.com",
    projectId: "revital-91590",
    storageBucket: "revital-91590.appspot.com",
    messagingSenderId: "788129808143",
    appId: "1:788129808143:web:2f0f08c2429cd1043d887a",
    measurementId: "G-MBVEMQMCQT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);;
const db = getFirestore(app);

function generateToken(tokenLength) {
    const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenIdLength = tokenLength || 10;
    let tokenId = '';

    for (let i = 0; i < tokenIdLength; i++) {
        const randomIndex = Math.floor(Math.random() * alphanumericCharacters.length);
        tokenId += alphanumericCharacters[randomIndex];
    }

    return tokenId;
}


export { db, generateToken };