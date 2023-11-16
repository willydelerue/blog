import { initializeApp } from "firebase/app";

 const firebaseConfig = {

        apiKey: "AIzaSyCfNlgLpwdOSMVxn4nD1M6ZzOi55a44UAI",

        authDomain: "myblog-88f52.firebaseapp.com",

        databaseURL: "https://myblog-88f52-default-rtdb.europe-west1.firebasedatabase.app",

        projectId: "myblog-88f52",

        storageBucket: "myblog-88f52.appspot.com",

        messagingSenderId: "548196445570",

        appId: "1:548196445570:web:4ef4c5d7e2dc6db3c3339b"

  };


  // Initialize Firebase

  const firebase = initializeApp(firebaseConfig);

  export default firebase;