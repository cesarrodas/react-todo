import firebase from 'firebase';

try {
	var config = {
    apiKey: "AIzaSyDWJcKUZ8ljBViRuFJeEP0Qu7nYg287Grk",
    authDomain: "react-todo-app-4543b.firebaseapp.com",
    databaseURL: "https://react-todo-app-4543b.firebaseio.com",
    storageBucket: "react-todo-app-4543b.appspot.com",
    messagingSenderId: "71473712009"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;