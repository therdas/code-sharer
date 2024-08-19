// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "***************************************",
  authDomain: "**********.firebaseapp.com",
  databaseURL: "https://********.firebaseio.com",
  projectId: "**********",
  storageBucket: "*******.appspot.com",
  messagingSenderId: "**********"
};

firebase.initializeApp(config);

var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});
