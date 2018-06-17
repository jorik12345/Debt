import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDqbdAKxwv1P-57oRPxV2FHTrVOVlO__Vo",
  authDomain: "debt-8214a.firebaseapp.com",
  databaseURL: "https://debt-8214a.firebaseio.com",
  projectId: "debt-8214a",
  storageBucket: "debt-8214a.appspot.com",
  messagingSenderId: "79164602927"
};

const firebaseApp = Firebase.initializeApp(config);
export const db = firebaseApp.database();