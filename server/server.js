// BASE SETUP =====================================================
const express = require('express');
const	bodyParser = require('body-parser');
const app = express();
const port =process.env.PORT || 3000;

// FIREBASE SETUP =====================================================
const	firebase = require('firebase');
firebase.initializeApp({
 	apiKey: "AIzaSyA5QqiYnZRRUPfD9TkmchFtnGs9M8eF740",
  authDomain: "postlt-54c26.firebaseapp.com",
  databaseURL: "https://postlt-54c26.firebaseio.com",
  projectId: "postlt-54c26",
  storageBucket: "postlt-54c26.appspot.com",
  messagingSenderId: "1002590696573"
});

// CALLING THE MODULES================================================================
const index = require('../server/index');
const register = require('../server/register');
const signin = require('../server/signin');
const group = require('../server/group');
const create = require('../server/addgroupmember');

// body parser, this grap information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Routes =================================================================
index(app);
register(app);
signin(app);
group(app);
create(app);


//START THE SERVER ===========================================================
app.listen(port);
