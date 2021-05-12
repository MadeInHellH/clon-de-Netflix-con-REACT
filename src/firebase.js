import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDmBeTPwtA44XcbewEEnM_kKzU2kzId6uQ",
    authDomain: "nuevo-netflix-63f0b.firebaseapp.com",
    projectId: "nuevo-netflix-63f0b",
    storageBucket: "nuevo-netflix-63f0b.appspot.com",
    messagingSenderId: "188012983042",
    appId: "1:188012983042:web:c933ec3b0dd5354073c81b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth} 