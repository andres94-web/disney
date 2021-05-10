import firebase from 'firebase';

console.log(process.env.FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: 'AIzaSyA78MwEQU6DlK_yWi6abwvpcaT1G6-MdEY',
  authDomain: 'disney-plus-clone-3bcc3.firebaseapp.com',
  projectId: 'disney-plus-clone-3bcc3',
  storageBucket: 'disney-plus-clone-3bcc3.appspot.com',
  messagingSenderId: '502220613670',
  appId: '1:502220613670:web:ef0353c5fb17d420211ee7',
  measurementId: 'G-Y9ZQFLCVZJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
