import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyASSlGoHJDRzi75cb3lG1Hk_q5wRl7Npec ",
  authDomain: "byte-buddy.firebaseapp.com",
  databaseURL: "https://byte-buddy.firebaseio.com",
  storageBucket: "byte-buddy.appspot.com",
  messagingSenderId: "136600537321"
};
var fire = firebase.initializeApp(config);
export default fire;
