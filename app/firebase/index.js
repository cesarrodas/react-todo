import firebase from 'firebase';

try {
	var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    storageBucket: process.env.STORAGE_BUCKET
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;