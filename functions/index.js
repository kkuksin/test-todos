const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser());

admin.initializeApp();
const db = admin.database();
app.get('/getToDos', (req, res) => {
    const ref = db.ref('/todos');
    ref.once("value", function (snapshot) {
        res.send({ data: snapshot.val() });
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });
});
app.post('/addToDo', (req, res) => {
    const ref = db.ref('/todos');
    ref.push(req.body)
        .then(() => {
            ref.once("value", (snapshot) => {
                res.send({ data: snapshot.val() });
            });
        })
        .catch((e) => {
            console.error("Saving error");
            console.error(e);
        });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
