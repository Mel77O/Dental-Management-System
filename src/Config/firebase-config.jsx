import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAgMccShH8TU097jz-BjY8hGy7hQPPqwRQ",
  authDomain: "dental-management-2d6c0.firebaseapp.com",
  projectId: "dental-management-2d6c0",
  storageBucket: "dental-management-2d6c0.appspot.com",
  messagingSenderId: "903638458679",
  appId: "1:903638458679:web:b0dfabcf8cc2c8fee73ab2",
  measurementId: "G-976T72LYDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);