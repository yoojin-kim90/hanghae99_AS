import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import word from "./modules/word";
import firebase from "firebase/app";
import "firebase/firestore";

const middlewares = [thunk];

const firebaseConfig = {
    apiKey: "AIzaSyB1iCXwSmW_I3nclO6S2_pUglwXxB0iE1w",
    authDomain: "my-first-project-aea25.firebaseapp.com",
    projectId: "my-first-project-aea25",
    storageBucket: "my-first-project-aea25.appspot.com",
    messagingSenderId: "88748168333",
    appId: "1:88748168333:web:55507d9373b0de1965fec4",
    measurementId: "G-JDZR23XJY2",
  };

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ word });
const store = createStore(rootReducer, enhancer);

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };
export default store;
