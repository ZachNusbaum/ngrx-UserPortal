import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
import { ulid } from 'ulid';

const mailgun = require('mailgun-js')({apiKey: functions.config().mailgun.private, domain: 'mg.zncodes.com'});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
})

export const generateULID = functions.https.onRequest((request, response) => {
  response.contentType('application/json');
  response.status(200);
  response.send(JSON.stringify({success: true, result: ulid()}));
})

export const assignULID = functions.auth.user().onCreate((user) => {
  const customClaims = {ulid: ulid()};
  return admin.auth().setCustomUserClaims(user.uid, customClaims)
    .catch((error) => console.log(error));
});

export const sendNewEmail = functions.auth.user().onCreate((user) => {
  const data = {
    from: 'User Auth Demo <no-reply@mg.zncodes.com>',
    to: user.email,
    subject: 'Welcome aboard!',
    text: `
      Your account is now active and enabled for sign in.

      Email: ${user.email}
      User ID: ${user.uid}
      Login at: https://ngrx-auth-f6e75.firebaseapp.com
      Login Method: ${user.toJSON}
    `
  };

  return mailgun.messages().send(data, (error, body) => console.log(error))
})
