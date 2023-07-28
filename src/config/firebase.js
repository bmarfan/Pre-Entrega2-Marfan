import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT79uZ923Ogf4I0x2u3QoGmQqHuT02Ra4",
  authDomain: "proyecto-final-react-85c84.firebaseapp.com",
  projectId: "proyecto-final-react-85c84",
  storageBucket: "proyecto-final-react-85c84.appspot.com",
  messagingSenderId: "766605631127",
  appId: "1:766605631127:web:403027572c15b50f4793d2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);