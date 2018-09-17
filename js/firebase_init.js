// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBsQXOszAtI7__glWi9c-2vpaJi0oh-fNE",
  authDomain: "code-sharer.firebaseapp.com",
  databaseURL: "https://code-sharer.firebaseio.com",
  projectId: "code-sharer",
  storageBucket: "code-sharer.appspot.com",
  messagingSenderId: "424977100383"
};

firebase.initializeApp(config);

var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});