const express = require("express");
const admin = require("firebase-admin");

const serviceAccount = require("./athama-a30a1-firebase-adminsdk-tz0cp-110a9f4cc1.json");

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
});

//firebase-adminsdk-8yg3q@expocity-af82b.iam.gserviceaccount.com
// const email = "firebase-adminsdk-8yg3q@expocity-af82b.iam.gserviceaccount.com";
const registrationToken =
  "cd577GmxTXu3OjjSv1hApl:APA91bH6dbW7Zmyst9KUdRP8yeISRQ3xG-B5LFRzYvVLNTvDFVPaCEQRF6VRer868IM_xmZW1Fk1PqdkEtyshWkY9D61s31C9Gpb3AZ7Amik5-xeboD2ODkIFuj1OMqOoqimejE2A3Dh";

const sendNotfication = async (registrationToken) => {
  const message = {
    message: {
      token: registrationToken,
      android: {
        notification: {
          sound: "src_assets_new.wav",
          channelId: "sound_channel",
          body: "testt",
          title: "testneee",
        },
        data: {
          body: "test",
        },
      },
    },
  };

  admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("ma", response);
    })
    .catch((err) => {
      console.log("er", err);
    });
};

sendNotfication(registrationToken);
// app.get("/", async (req, res) => {
//   try {
//     const uid = "Warthevalue";
//     const customToken = await admin.auth().createCustomToken(uid);
//     console.log("Firebase Custom Token:", customToken);
//     res.send(`Hello, World! Firebase Custom Token: ${customToken}`);
//   } catch (error) {
//     console.error("Error creating custom token:", error);
//     res.status(500).send("Error creating custom token");
//   }
// });

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
