// var firebase = require("firebase");
// // Initialize Firebase
// // TODO: Replace with your project's customized code snippet
// var config = {
//     apiKey: "AIzaSyD7XOzVmDi2McfHastpvl11TRhB3sRa8jM",
//     authDomain: "mimetic-surfer-236205.firebaseapp.com",
//     databaseURL: "https://mimetic-surfer-236205.firebaseio.com",
//     storageBucket: "gs://mimetic-surfer-236205.appspot.com",
//   };

  
var admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
 // databaseURL: "https://mimetic-surfer-236205.firebaseio.com"
});
var db = admin.firestore();
var docRef = db.collection('users').doc('alovelace');

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelave',
    born: 1815
})


// // Initialize the default app
// var defaultApp = firebase.initializeApp(config);

// console.log(defaultApp.name);  // "[DEFAULT]"

// // You can retrieve services via the defaultApp variable...
// var defaultStorage = defaultApp.storage();
// var defaultDatabase = defaultApp.database();

// // ... or you can use the equivalent shorthand notation
// defaultStorage = firebase.storage();
// defaultDatabase = firebase.database();