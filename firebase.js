import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyAA2PMXzhHnI1UqtGxpRSLVylYU7J64Q1Y",
    authDomain: "chatapp-88ddd.firebaseapp.com",
    projectId: "chatapp-88ddd",
    storageBucket: "chatapp-88ddd.appspot.com",
    messagingSenderId: "622319699847",
    appId: "1:622319699847:web:9a2cf0b532a2ff48f83522"
  };

let app;
if(firebase.apps.length===0){
    app=firebase.initializeApp(firebaseConfig);
}
else{

    app=firebase.app()
}
const db=app.firestore();
const auth= firebase.auth();
export {db,auth};