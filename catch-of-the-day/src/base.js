import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBhyXj3XSCKODvY6QPzXpdMLJVQBO4o80c",
    authDomain: "catch-of-the-day-80ae9.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-80ae9.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
