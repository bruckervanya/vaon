import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
    apiKey: "AIzaSyBnJ1fPMZu38IMmthNazy3PeMHVI5GOIs8",
    authDomain: "bruckerpartners.firebaseapp.com",
    databaseURL: "https://bruckerpartners-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bruckerpartners",
    storageBucket: "bruckerpartners.appspot.com",
    messagingSenderId: "159782287859",
    appId: "1:159782287859:web:f929138b1f1c37f9f6fa86",
    measurementId: "G-HF6D18BW1P"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Insight(props) {
    return (
        <div className="come-in margin--top--layout-05">
            <a href={props.url}>
                <h3 className="expressive-heading-04">{props.title}</h3>
                <p className="margin--top--layout-03">{props.date}</p>
            </a>
        </div>
    )
}

function InsightBlock() {
  return (
      <div>
          <Insight url="index.html" title="Hey there, how are you" date="23. Februar 2021"></Insight>
          <Insight url="index.html" title="Hey there" date="2. Sept 2021"></Insight>
      </div>
  );
}

ReactDOM.render(
    <InsightBlock />,
    document.getElementById('root')
);