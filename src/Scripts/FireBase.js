import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL942LmGUpbZ8Co-fDMCVYv44EmswsNU4",
    authDomain: "ignite-vortex.firebaseapp.com",
    projectId: "ignite-vortex",
    storageBucket: "ignite-vortex.appspot.com",
    messagingSenderId: "354356701559",
    appId: "1:354356701559:web:687916101b95258cb25972",
    measurementId: "G-7J9VJQXR5Y"
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