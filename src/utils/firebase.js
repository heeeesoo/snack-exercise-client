import localforage from "localforage";
import "firebase/messaging";
import firebase from "firebase/app";

const firebaseCloudMessaging = {
  init: async () => {
    if (!firebase?.apps?.length) {

      // Initialize the Firebase app with the credentials
        firebase?.initializeApp({
            apiKey: "AIzaSyCj8cmzn94XS6HfqVXvMnmRvSH66LcrblQ",
            authDomain: "snackpot-2aff6.firebaseapp.com",
            projectId: "snackpot-2aff6",
            storageBucket: "snackpot-2aff6.appspot.com",
            messagingSenderId: "772201837506",
            appId: "1:772201837506:web:0085abde733e5281e89c5b",
            measurementId: "G-LMYXYKQNXN"
        });

        try {
            const messaging = firebase.messaging();
            const tokenInLocalForage = await localforage.getItem("fcm_token");

            // Return the token if it is alredy in our local storage
            if (tokenInLocalForage !== null) {
            return tokenInLocalForage;
            }

            // Request the push notification permission from browser
            const status = await Notification.requestPermission();
            if (status && status === "granted") {
            // Get new token from Firebase
            const fcm_token = await messaging.getToken({
                vapidKey: "BCBh3ZRUXHGlkwPGgpM7CyVLQAWSEBsamHEB18XRuZ0pRj2-5jFSJjD-ik01e4syF1V7nfDOjLJy9t9yfu7y9Vc",
            });

            // Set token in our local storage
            if (fcm_token) {
                localforage.setItem("fcm_token", fcm_token);
                return fcm_token;
            }
            }
        } catch (error) {
            console.error(error);
            return null;
        }
        }
  },
};
export { firebaseCloudMessaging };