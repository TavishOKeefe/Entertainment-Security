import Firebase from 'firebase';
import firebaseConfig from '../constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const email = firebase.database().ref('email');
const images = firebase.database().ref('images');
const patternCode = firebase.database().ref('patternCode');

export function addEmail(_email) {
  email.push({
    email: _email,
  });
}

export function addImage(_images) {
  images.push({
    images: _images,
  });
}

export function addPattern(_patternCode) {
  console.log(_patternCode);
  patternCode.push({
    patternCode: _patternCode,
  });
}
