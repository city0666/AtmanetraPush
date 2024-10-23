const express = require("express");
const admin = require("firebase-admin");
const axios = require("axios");
const serviceAccount = require("./expocity-af82b-firebase-adminsdk-8yg3q-718a83629e.json");

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Root route to avoid "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("Welcome to the Firebase Notification Service!");
});

// Define a route handler for sending FCM message
app.get("/send-notification", async (req, res) => {
  const uid = "66870927691";
  //const uid = admin.auth().getUserByEmail("expocity2021@gmail.com").uid;

  // Replace with the actual user's UID
  const registrationToken =
    "cSGYJ_TtSlSfdxRwK60-uS:APA91bGBxmDdK1ad7WYmWFNnCUhOAmYrbinJgDLY_MoWL7rCLIQy-zKV0aeF65S-1u5WUa7cg8u7LuOif0goXIE4QdV-1iMst2BYyacKjx2lMc42qJ1OzBBB9-GKTpRti4wyyMCoizmw"; // Replace with the actual registration token

  try {
    // Generate a Firebase custom token for the user
    const customToken = await admin.auth().createCustomToken(uid);

    console.log("Firebase Custom Token:", customToken);

    // Construct the message payload
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

    // Send the FCM message using Axios
    const response = await axios.post(
      "https://fcm.googleapis.com/v1/projects/expocity-af82b/messages:send",
      message,
      {
        headers: {
          Authorization: `Bearer ${customToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Successfully sent message:");
    res.send(`Notification sent successfully:`);
  } catch (error) {
    //  console.error("Error sending message:", error);
    res.status(500).send("Error sending notification");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
