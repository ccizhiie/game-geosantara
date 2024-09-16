const admin = require('firebase-admin');
const serviceAccount = require('./firebase-credential-2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: "db-geosantara",
//     privateKey:  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD0ciI+Q9fGKf+n\ngavu40kNiEKhwROWcl9VsJ77AebZG/PFdszlUdrezkuWynqh/g/GeDvLF8V6Odc+\n6bzELUdrGw5miXcoUvmyRr98ReKk/CsnrvKYcP/hyo//LmLOcFT1HzFKnt3jg0M/\ntLyl66SismL5AewhEgWOAGOrxn/cUGiYQQO0+hp9HtTcSVei2fTrQ2HcqccTLy7c\nQNlphZHWSRk+W9W37xp5a9GGDWzKGjfXLqUoO+Qm69iPPRx+6oz6REjRdf9s4lTI\nBV+115FRVNfSNDRP30VGb+JkeWM6rTHu2AXeIV4CiLBY0E2gJV+1UFIMqEBCjdFX\neKm0rhpPAgMBAAECggEANF+N0axkezs9YMzKIy1EVidnK1P8V+QaY/grH9mI9eRk\nxt6MyOdQTyOBE4Y/XxzZkWrqWLm3oFfrM7oNrTSMVDjgTXzPcG7Su+0nkr9Ab5vt\nvRthM+MmF+D4GDL+jX+I3Fn6DCRcoyXZDzmwn5YM2KUCyposVuuPEB0qPcASXgfb\nI/zkARlGCKb/Mk2F6ENA7VLb/lp6GtkIhKUXYxG2kt2Zo7Z1RevJsm45DSkmA6bA\n2NMsgOtgrOwtuqHGmlIT94Euk8Ik2B2KZEmxFJXhDYs9x6IXQAwMMw78HvLfbwpF\ntP6e9+mNvfwdgCWbCQMlInlRq4qGXAfRUZACoWA0zQKBgQD+ALfmxapSTGCl79ol\ni7PxPHv2DAsHcvj7Re46bSRjwsB5n8J0Zq0XSwHWn+q/V39RgK/6IRm3hIMG5362\n7CLwDM6b7a7+CNiBY2Mwr96kKFoKgrK2FKVn9e/aYowqN1Xkq5rwenGG6GBe6mOe\nj1tIvZ0NP1NtW+NR0VgS08nTwwKBgQD2Xi2eFpGIN4Gcf+Na3D+GsbDaioUWlcDb\nFmFHWjdYRaY9owcUkspdbJE0sgs/I/6N2Vor4OUNCuXXAnuQdivDcMLuOVpQwfOq\nP1ImKF39u+vtnDogmZ/LFLJm8OhSDktkW3i8/hcqWOeF42D3eHOPPV+Z2vlk0TRA\nEh9PRD0yhQKBgQCYWbv0ekkvtcoenZ/d906F+n5r1UtkO2zl4ksC1mYGRFEIYm/T\nO6bEmuPOZPr7q7KdIy/qOqJfNecVZBLYCwjlrPjcBBN7Ibki2ocrM8G5+s4PEde5\naObRVW15MrTZuXkWgGudpAOmJIlxROtdtqTNG5Yw1PPoWz4c3BEUsd2T2wKBgEGX\nQT3ddFF3taIcykLecGtD03nbdyNUK0wo4S1F74YoxOGUDcaEbiwBQ4dr/2KICrVp\nMICOF20pgZeEqbEERRJ7aupRiqIFgQHKaeyOwrdS2LUh6rfTLp+6muSdLrzp4ViO\noc5vN2umz7ztlFtOTjXMeS9VBSC6Mdb8/Cj2WfShAoGBAIgBfNcimTCdEoA21VUH\nl2BUuAAcy3rbGmncVifQZ3AyRwdnH1RF/QFpqjkXTY14K1jiL1WDfsPv5SZCvhJ1\nP0SWDL14ARdeXFr9tdf6O/qGXptMolPhYXDvxoLuaB1h8BhQqzDHW77uPL7HG0qS\nyjUwruFimB6XAuxvd3wVFXvO\n-----END PRIVATE KEY-----\n",
//     clientEmail: "firebase-adminsdk-iyze5@db-geosantara.iam.gserviceaccount.com",
//   }),
// });

module.exports = admin;

// const admin = require('firebase-admin');
// const serviceAccount = require('./firebase-credential.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://DB-Geosantara.firebaseio.com"
// });

// const auth = admin.auth();
// const db = admin.database();  // Realtime Database
// module.exports = { db, auth };
