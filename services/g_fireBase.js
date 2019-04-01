// var firebase = require("firebase");
// // Initialize Firebase
// // TODO: Replace with your project's customized code snippet
// var config = {
//     apiKey: "AIzaSyD7XOzVmDi2McfHastpvl11TRhB3sRa8jM",
//     authDomain: "mimetic-surfer-236205.firebaseapp.com",
//     databaseURL: "https://mimetic-surfer-236205.firebaseio.com",
//     storageBucket: "gs://mimetic-surfer-236205.appspot.com",
//   };q
const vision = require('./gcloud-service')
const image = require('C:/Users/menga/Documents/GitHub/trash3/routes/images');

var admin = require("firebase-admin");

var serviceAccount = require("./service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
 // databaseURL: "https://mimetic-surfer-236205.firebaseio.com"
});
var db = admin.firestore();
var docRef = db.collection('users').doc('alovelace');//stores a new folder

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelave',
    born: 1815
})

//function quickstart
async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('C:/Users/menga/Documents/GitHub/trash3/services/beach.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    let array = [];
    let array2 = [];
    labels.forEach(label => {
        console.log(label.description+" "+label.score+" "+label.topicality);
        array.push([label.description,label.score, label.topicality]);
    })
    const [result2] = await client.labelDetection('C:/Users/menga/Documents/GitHub/trash3/services/beach2.jpg');
    const labels2 = result2.labelAnnotations;
    i=0;
    labels2.forEach(label => {
        array2.push([label.description,label.score,label.topicality]);
    })
    return image(array,array2);
  }


  let x = 0;
quickstart().then((myNum) => {
    var db = admin.firestore();
var docRef = db.collection('users').doc('trash');//stores a new folder
x = myNum
console.log(x);
var setAda = docRef.set({
    myNum
})
});
module.exports = x;

// // Initialize the default app
// var defaultApp = firebase.initializeApp(config);

// console.log(defaultApp.name);  // "[DEFAULT]"

// // You can retrieve services via the defaultApp variable...
// var defaultStorage = defaultApp.storage();
// var defaultDatabase = defaultApp.database();

// // ... or you can use the equivalent shorthand notation
// defaultStorage = firebase.storage();
// defaultDatabase = firebase.database();