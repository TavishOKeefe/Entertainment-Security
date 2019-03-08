import Firebase from 'firebase';
import { firebaseConfig } from '../constants/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const images = firebase.database().ref('images');

export function addImage(_image) {
  return () => images.push({
    image: _image,
    timeTaken: new Date().getTime()
  });
}
