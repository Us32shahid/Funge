import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDhFty1BrHXBUAklPb4rcCRmXYq_Z_a6s8",
    authDomain: "otp-authentication-f54a3.firebaseapp.com",
    projectId: "otp-authentication-f54a3",
    storageBucket: "otp-authentication-f54a3.appspot.com",
    messagingSenderId: "649943908422",
    appId: "1:649943908422:web:d3f05573168ab041b80a47"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;