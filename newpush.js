// const admin = require("firebase-admin");

// const serviceAccount = require("./expocity-af82b-firebase-adminsdk-8yg3q-718a83629e.json");

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
// });

// //firebase-adminsdk-8yg3q@expocity-af82b.iam.gserviceaccount.com
// // const email = "firebase-adminsdk-8yg3q@expocity-af82b.iam.gserviceaccount.com";
// const registrationToken =
//   "cd577GmxTXu3OjjSv1hApl:APA91bH6dbW7Zmyst9KUdRP8yeISRQ3xG-B5LFRzYvVLNTvDFVPaCEQRF6VRer868IM_xmZW1Fk1PqdkEtyshWkY9D61s31C9Gpb3AZ7Amik5-xeboD2ODkIFuj1OMqOoqimejE2A3Dh";

// const sendNotfication = async (registrationToken) => {
//   const messagedata = {
//     message: {
//       token: registrationToken,
//       notification: {
//         title: "hello",
//         body: "hellooooo",
//       },
//     },
//   };

//   admin
//     .messaging()
//     .send(messagedata)
//     .then((response) => {
//       console.log("ma", response);
//     })
//     .catch((err) => {
//       console.log("er", err);
//     });
// };

// sendNotfication(registrationToken);

const admin = require("firebase-admin");

const serviceAccount = require("./athama-a30a1-firebase-adminsdk-tz0cp-110a9f4cc1.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://expocity-af82b-default-rtdb.firebaseio.com",
});

// const android =
//   "cSGYJ_TtSlSfdxRwK60-uS:APA91bGBxmDdK1ad7WYmWFNnCUhOAmYrbinJgDLY_MoWL7rCLIQy-zKV0aeF65S-1u5WUa7cg8u7LuOif0goXIE4QdV-1iMst2BYyacKjx2lMc42qJ1OzBBB9-GKTpRti4wyyMCoizmw";
// const registrationToken =
//   "cd577GmxTXu3OjjSv1hApl:APA91bH6dbW7Zmyst9KUdRP8yeISRQ3xG-B5LFRzYvVLNTvDFVPaCEQRF6VRer868IM_xmZW1Fk1PqdkEtyshWkY9D61s31C9Gpb3AZ7Amik5-xeboD2ODkIFuj1OMqOoqimejE2A3Dh";

// const ariyNandu =
//   "dRRld4BbS8ShfpoJi4aO0J:APA91bFDtwe6UwNcj91p3zUTnVj_UJ8G2Kq7H1LmvWMSa-wU5yoOSBOlKirQaulz1YZm2YAMU_mZSircmdpcmW3BfM6K1IWHhcT1qXPxMHcCrza8mkceDW7y-2S4pOC5ggSVMqLlcc9-";

// const iphone =
//   "ewdyCl6Gf0S9pYVnXd1p34:APA91bEHviqx7Udg6F0EGepmg_yFacm7QsdiDBelw9DutbjX1tVVoUcqqIlLN_gE1hhVGkO_QWf_PS-NYZHIdu9s3gjCVeJ9zC_8CDiecwghHKcdajKkMwzfEvSyBpb_xaxgiUgwMTLk";

// const simi =
//   "cd577GmxTXu3OjjSv1hApl:APA91bH6dbW7Zmyst9KUdRP8yeISRQ3xG-B5LFRzYvVLNTvDFVPaCEQRF6VRer868IM_xmZW1Fk1PqdkEtyshWkY9D61s31C9Gpb3AZ7Amik5-xeboD2ODkIFuj1OMqOoqimejE2A3Dh";

// const ipp =
//   "deiaCVvS9E1ysCR5wv365H:APA91bHEq-K0viFke09wjTfrG6JtHLpzY7HI1tN7jSHemYLoEvK5kGCVAWbt6PXWPuh9uPgjI0iGoOlH0pBoC804rXxFllssclwxvscZouTB1Cz796qxyOUhFf1rEnQJtV2ZXWbpSV8i";

// const joySir =
//   "e7xl42BtlkYNvQVhlzd8nH:APA91bEzSXshQCfFxCW8F0LjM87EdX9a_j74ubcN2k3huqZDotO9nOcAc3eonaiUFhd5QHRFcBs_6xMpZk2Y2pNDz_5w5WIRwhjj34txDqYQ85Wh9ttkkfZU0AnYw32Uf2YvMh9-Y3l9";

const emulatorToken =
  "dQkO1HLXTqijXPllWKK1sI:APA91bH1hJr9J19UCC0V2oNx_6QIx1MAJN-AtagJNfhCOZgCFy0hhIiSJJTFIYXE3XewjCVJnfdcOfhnUwmycl9wB4z_tOHltKX5E8quySdAL082U46YB05yGE5fCzU9ACKPZQ6Dj8W4";

const mobile =
  "eTluq38fQvmAXzQxqzv26c:APA91bEMedIJn1QNh_CnEIPCJNdkYzXfj-l10FaujuN09EfHQiRgejYk0VYHyrx8lkSw5MI4g0F4JGJpFJeo0hp_jqFowRT1HBbhg0H9RnJwamTCCzI7jmUSh_dFGsoVbrtymBJCMLRL";

// // ... (initialization code)
// const registrationTokens = [iphone, ariyNandu, android];
// const array = new Array(iphone, ariyNandu, android);

const data = [
  "f2uUn992TSWVCivPrOMvhi:APA91bHyarNOApGq_zms3hkBktYCEIyCf4NqKJyvnxDyvW0nUX_d5MFflX6GHEnPVrdfrEmeP3dYjnXTAp70NhytOISGFWN-huem3BwOLj3_UG1KAy_ly9F1ajO0fH2tt8wNboz4t803",
  "fPGt9fVGQFWKOhStXw_T6a:APA91bEkeJyVSmwYvWB_nmGTjtIrCS4FpXwQ5UsnjXZqqaiDKzLD3a7MgzOmEBxVNw1ctlE78yG1YEp1X_1HzHy53gWMAsf6LOW2cBvHYiyeVUK0tthXtSuz6uVp5mHfn2J3uLZZ3daH",
];

const message = {
  notification: {
    body: "Ammachi New",
    title: "testii Mummy Test end",
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
  tokens: data,
};
// admin
//   .messaging()
//   .send(message)
//   .then((response) => {
//     console.log("Notification sent:", response);
//   })
//   .catch((error) => {
//     console.error("Error sending notification:", error);
//   });

admin
  .messaging()
  .sendEachForMulticast(message)
  .then((response) => {
    console.log(response.successCount + " messages were sent successfully");
  });
