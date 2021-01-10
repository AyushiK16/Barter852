import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDx6DCvQ4UrXkKQR8Yl4SHOOIm1CvwcqNo",
    authDomain: "bartersystemapp-66491.firebaseapp.com",
    projectId: "bartersystemapp-66491",
    storageBucket: "bartersystemapp-66491.appspot.com",
    messagingSenderId: "37289957211",
    appId: "1:37289957211:web:425b9720cfd640c340ac7e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
