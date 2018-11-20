import * as functions from 'firebase-functions';
import { ulid } from 'ulid';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const generateULID = functions.https.onRequest((request, response) => {
  response.send(ulid());
})

export const assignULID = functions.auth.user().onCreate((user) => {
  user.customClaims = {ulid: ulid()}
})
