const admin = require("firebase-admin");
const express = require("express");

const serviceAccount = require("./athama-a30a1-firebase-adminsdk-tz0cp-110a9f4cc1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
});

const app = express();
app.use(express.json()); // Middleware to parse JSON

// POST endpoint to accept body and title of notification
app.post("/send-notification", (req, res) => {
  const { body, title } = req.body;

  if (!body || !title) {
    return res
      .status(400)
      .json({ error: "Invalid request data. Body and title are required." });
  }

  // Fetch tokens from Firestore
  const db = admin.firestore();

  db.collection("NOTFICATION")
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return res.status(404).json({ message: "No tokens found." });
      }

      const tokens = [];
      snapshot.forEach((doc) => {
        const token = doc.data().token;
        if (token) {
          tokens.push(token);
        }
      });
      console.log("Retrieved tokens:", tokens);

      if (tokens.length === 0) {
        return res.status(404).json({ message: "No valid tokens found." });
      }

      // Create message payload
      const message = {
        notification: {
          body,
          title,
        },
        android: {
          notification: {
            sound: "bellnot.mp3",
            channelId: "sound_channel",
          },
        },
        apns: {
          payload: {
            aps: {
              category: "NEW_MESSAGE_CATEGORY",
              sound: "src_assets_new.wav",
            },
          },
        },
        tokens, // Tokens handled here, not in the API request
      };

      // Send notification to FCM
      admin
        .messaging()
        .sendEachForMulticast(message)
        .then((response) => {
          return res.status(200).json({
            successCount: response.successCount,
            failureCount: response.failureCount,
            message: `${response.successCount} messages were sent successfully.`,
          });
        })
        .catch((error) => {
          return res
            .status(500)
            .json({ error: `Error sending notification: ${error.message}` });
        });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ error: `Error retrieving tokens: ${error.message}` });
    });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
