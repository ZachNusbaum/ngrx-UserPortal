import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
import { ulid } from 'ulid';
import * as request from 'request';

// Set up mailgun for sending emails in functions
const mailgun = require('mailgun-js')({apiKey: functions.config().mailgun.private, domain: 'mg.zncodes.com'});

/*********************/
/* BEGIN EXPRESS APP */
/*********************/
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res
    .status(403)
    .contentType('application/json')
    .send(JSON.stringify({error: 'Invalid entrypoint.'}))
})

app.get('/ip', (req, res) => {
  const ipAddresses = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ipAddress = ipAddresses.split(',')[0]
  console.log('IP Lookup Success', ipAddresses);
  res.send(JSON.stringify({success: true, ip: ipAddress}));
})

app.get('/zip/:code', (req, res) => {
  request(`https://petshop.zchry.cc/api/zip/${req.params.code}`, (error, response, body) => {
    console.error(error);
    console.log(response);
    res.send(body);
  });
});

app.get('/ulid', (req, res) => {
  res.contentType('application/json');
  res.status(200);
  res.send(JSON.stringify({success: true, result: ulid()}));
});

exports.api = functions.https.onRequest(app);
/********************/
/* END EXPRESS APP */
/*******************/

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
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

      Thank you!
        - Zach Nusbaum
    `
  };

  return mailgun.messages().send(data, (error, body) => console.log(error))
})
