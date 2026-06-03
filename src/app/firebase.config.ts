import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCclMBr98J6aXPaYWtvk8vABWgMNjznOSw",
  authDomain: "entrenos-8ef3a.firebaseapp.com",
  projectId: "entrenos-8ef3a",
  storageBucket: "entrenos-8ef3a.firebasestorage.app",
  messagingSenderId: "131134122760",
  appId: "1:131134122760:web:7266c9817df93c0c4f5abd",
  measurementId: "G-CR54SJ0QHZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
