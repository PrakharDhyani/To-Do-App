import { initializeApp } from "@firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDF8S-No_ZC0RBiCDpqElCPuFPfUGWRNWg",
    authDomain: "to-do-app-9f192.firebaseapp.com",
    projectId: "to-do-app-9f192",
    storageBucket: "to-do-app-9f192.appspot.com",
    messagingSenderId: "367818556267",
    appId: "1:367818556267:web:db29d1847f398724d1c22e"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};
