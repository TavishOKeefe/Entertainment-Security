import Firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const email = firebase.database().ref('email');

export function addEmail(_email) {
  console.log(email);
  console.log(_email);
  return () => email.push({
    email: _email,
  });
}
