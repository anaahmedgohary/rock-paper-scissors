// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2in_UpDpI0sv7X1sKn894BAgkbCq4Guw",
    authDomain: "nodefirstapp-50c84.firebaseapp.com",
    databaseURL: "https://nodefirstapp-50c84-default-rtdb.firebaseio.com",
    projectId: "nodefirstapp-50c84",
    storageBucket: "nodefirstapp-50c84.appspot.com",
    messagingSenderId: "957663321287",
    appId: "1:957663321287:web:41bf3bbc998068ae57b2e2",
    measurementId: "G-3B0CVC2TCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);