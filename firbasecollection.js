// const admin = require("firebase-admin");

// const serviceAccount = require("./athama-a30a1-firebase-adminsdk-tz0cp-110a9f4cc1.json");

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
// });

// // Initialize Firestore
// const db = admin.firestore();

// // Retrieve tokens from the "NOTFICATION" collection
// db.collection("NOTFICATION") // Double-check the spelling of your collection name here
//   .get()
//   .then((snapshot) => {
//     console.log("Snapshot size:", snapshot.size); // Log the size of the snapshot
//     if (snapshot.empty) {
//       console.log("No matching documents.");
//       return;
//     }

//     // Create an array to store tokens
//     const tokens = [];

//     // Iterate through each document in the collection
//     snapshot.forEach((doc) => {
//       console.log("Document data:", doc.data()); // Log each document's data
//       const token = doc.data().token; // Assuming each document has a 'token' field
//       if (token) {
//         tokens.push(token);
//       }
//     });

//     // Log the retrieved tokens
//     console.log("Retrieved tokens:", tokens);
//   });

const admin = require("firebase-admin");

const serviceAccount = require("./athama-a30a1-firebase-adminsdk-tz0cp-110a9f4cc1.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
});

// Initialize Firestore
const db = admin.firestore();

// Retrieve tokens from the "NOTFICATION" collection
db.collection("NOTFICATION") // Double-check the spelling of your collection name here
  .get()
  .then((snapshot) => {
    console.log("Snapshot size:", snapshot.size); // Log the size of the snapshot
    if (snapshot.empty) {
      console.log("No matching documents.");
      return;
    }

    // Create an array to store tokens
    const tokens = [];

    // Iterate through each document in the collection
    snapshot.forEach((doc) => {
      console.log("Document data:", doc.data()); // Log each document's data
      const token = doc.data().token; // Assuming each document has a 'token' field
      if (token) {
        tokens.push(token);
      }
    });

    // Log the retrieved tokens
    console.log("Retrieved tokens:", tokens);

    // You can now proceed with sending notifications if there are tokens
    if (tokens.length > 0) {
      const message = {
        notification: {
          body: "🕉 Amma Devi Today RAhukalam Finish 🕉 ",
          title: " 🕉 RahuKalam ⏰ 12:00:26 PM to 1:27:48 PM  ⏳",
        },
        apns: {
          payload: {
            aps: {
              category: "NEW_MESSAGE_CATEGORY",
              sound: "src_assets_new.wav",
            },
          },
        },
        android: {
          notification: {
            sound: "bellnot.mp3",
            channelId: "sound_channel",
          },
        },
        data: {
          sreeraj: "New Notification",
          test: "Hello, this is a test notification!",
        },
        tokens: tokens, // Use tokens retrieved from Firestore
      };

      // Send the notification
      admin
        .messaging()
        .sendEachForMulticast(message)
        .then((response) => {
          console.log(
            response.successCount + " messages were sent successfully"
          );
        })
        .catch((error) => {
          console.error("Error sending notification:", error);
        });
    } else {
      console.log("No valid tokens found.");
    }
  })
  .catch((err) => {
    console.error("Error retrieving tokens:", err);
  });
