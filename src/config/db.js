import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { config } from "dotenv";
config();

const firebaseConfig = {
  apikey: process.env.APIKEY,
  authdomain: process.env.AUTHDOMAIN,
  projectid: process.env.PROJECTID,
  storagebucket: process.env.STORAGEBUCKET,
  messagingsenderid: process.env.MESSAGINGSENDERID,
  appid: process.env.APPID,
  measurementid: process.env.MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { db };