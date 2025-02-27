// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzHHUEBIrF74rHvqaw4f6EFg5ugdGiHcs",
    authDomain: "train-tuber.firebaseapp.com",
    projectId: "train-tuber",
    storageBucket: "train-tuber.firebasestorage.app",
    messagingSenderId: "714803586060",
    appId: "1:714803586060:web:db6eba8bdb9f87b589fa29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
