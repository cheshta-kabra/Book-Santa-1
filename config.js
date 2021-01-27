import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMn2fZx0mHJWs5PxXgwaNa3_scKSOmFMs",
    authDomain: "book-santa-85f93.firebaseapp.com",
    projectId: "book-santa-85f93",
    storageBucket: "book-santa-85f93.appspot.com",
    messagingSenderId: "70929282317",
    appId: "1:70929282317:web:a68ac64d8ebfefd3f6ac44"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()