// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpGPpVz0_xS0XTjqT9lWW0CqtgB-2S24E",
  authDomain: "fahad-social.firebaseapp.com",
  databaseURL: "https://fahad-social-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fahad-social",
  storageBucket: "fahad-social.appspot.com",
  messagingSenderId: "874910779772",
  appId: "1:874910779772:web:c60f7ad5ae566f98093cf9",
  measurementId: "G-BZC3ZR9R5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;