'use client'
import { useEffect, useState } from "react";
import PushNotificationLayout from "@/components/push/PushNotificationLayout";
// import firebase from 'firebase'; 

// const firebaseConfig = {
//   apiKey: "AIzaSyCj8cmzn94XS6HfqVXvMnmRvSH66LcrblQ",
//   authDomain: "snackpot-2aff6.firebaseapp.com",
//   projectId: "snackpot-2aff6",
//   storageBucket: "snackpot-2aff6.appspot.com",
//   messagingSenderId: "772201837506",
//   appId: "1:772201837506:web:0085abde733e5281e89c5b",
//   measurementId: "G-LMYXYKQNXN"
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging
//   .requestPermission()
//   .then(() => {
//     console.log("허가");
//     return messaging.getToken(); //등록 토큰 받기
//   })
//   .then(function (token) {
//     console.log(token); //토큰 출력
//   })
//   .catch(function (error) {
//     console.log("FCM Error : ", error);
//   });

//   messaging.onMessage((payload) => {
//   console.log(payload.notification.title);
//   console.log(payload.notification.body);
// });



const Test = () => {

    return (
        <PushNotificationLayout>
          <div>
              test
          </div>
        </PushNotificationLayout>
    );
};

export default Test;