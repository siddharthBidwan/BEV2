const admin = require('firebase-admin');
const serviceAccount = require('./galiv1-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL // Use environment variable
});

module.exports = admin;
