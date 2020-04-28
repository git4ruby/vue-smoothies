import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDyOc-jcQMu4Lv3ZEtj0y5zsjPY65jV62c",
  authDomain: "vue-smoothies-f88c8.firebaseapp.com",
  databaseURL: "https://vue-smoothies-f88c8.firebaseio.com",
  projectId: "vue-smoothies-f88c8",
  storageBucket: "vue-smoothies-f88c8.appspot.com",
  messagingSenderId: "321910979434",
  appId: "1:321910979434:web:0846cedbaca2e62a824313",
  measurementId: "G-3M10537WWW"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

//export firestore databse
export default firebaseApp.firestore()