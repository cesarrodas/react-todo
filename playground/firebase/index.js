import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDWJcKUZ8ljBViRuFJeEP0Qu7nYg287Grk",
    authDomain: "react-todo-app-4543b.firebaseapp.com",
    databaseURL: "https://react-todo-app-4543b.firebaseio.com",
    storageBucket: "react-todo-app-4543b.appspot.com",
    messagingSenderId: "71473712009"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
// set wipes data in that section and replaces.
firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Cesar',
		age: 24
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Todo 1'
});

todosRef.push({
	text: 'Todo 2'
});
/*
var notesRef = firebaseRef.child('notes');
var newNoteRef = notesRef.push({
	text: 'Walk the dog'
});
console.log('Todo id', newNoteRef.key);

notesRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
	console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
	console.log('child_removed', snapshot.key, snapshot.val());
});

/*
var logData = (snapshot) => {
	console.log("User ref changed", snapshot.val());
}
firebaseRef.child('user').on('value', logData);

firebaseRef.child('user').update({name: 'Mike'});

/*
var logData = (snapshot) => {
	console.log('Got value', snapshot.val());
}
firebaseRef.on('value', logData);

firebaseRef.off(logData);

firebaseRef.update({isRunning: false});
/*
firebaseRef.child('app').once('value').then((snapshot) => {
	console.log("Got entire database", snapshot.key, snapshot.val());
}, (e) => {
	console.log('Unable to fetch value', e);
});

/*
firebaseRef.update({
	isRunning: null
});

firebaseRef.child('user/age').remove();

/*
firebaseRef.child('app').update({
	version: '2.0',
	name: null
});
//firebaseRef.child('app/name').remove();
//firebaseRef.remove();
/*
firebaseRef.update({
	'app/name': 'Todo Application',
	'user/name': 'Jen'
});

firebaseRef.child('app').update({
	name: 'Todo Application'
});
firebaseRef.child('user').update({
	name: 'Mike'
});
*/
/*
firebaseRef.child('app').update({
	name: 'Todo Application'
}).then(() => {
	console.log("update worked!");
}, (e) => {
	console.log("update failed!");
}); */

// update also come with a promise as its return value
// you can tack on a then method

// update changes specified properties.
// only updates first level of properties.
/*
firebaseRef.update({
	isRunning: false,
	'app/name': 'Todo Application'
});
*/
