import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your actual Firebase configuration
// You can find this in your Firebase Project Settings
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "entrenos-8ef3a.firebaseapp.com",
  projectId: "entrenos-8ef3a",
  storageBucket: "entrenos-8ef3a.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
