import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

 

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

   const database=firebase.database();
 export {firebase, database as default};







// Database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childsnapshot)=>{
//         expenses.push({
//             id:childsnapshot.key,
//             ...childsnapshot.val()
//         })
//     })
//     console.log(expenses);
// })



// Database.ref('expenses').push({
//     description:"rent",
//     amount:23.42,
//     note:"",
//     createdAt:"15 may,2020"
// }
// ),

// Database.ref('expenses').push(
//     {
//         description:"bill",
//         amount:232.42,
//         note:"",
//         createdAt:"11 may,2020"
//     }
// ),
// Database.ref('expenses').push(
//     {
//         description:"food",
//         amount:133.42,
//         note:"",
//         createdAt:"1 may,2020"
//     }
// )





   //   Database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
//   })
//    Database.ref().set({
//       name: 'dhruv patel',
//       age:19,
//       married:false,
//       location : {
//           city:'ahmedabad',
//           state:'gujarat'
//       }

//   }).then(()=>{
//       console.log('data is resolved!!!');
//   }).catch((e)=>{
//       console.log('failed',e);
//   })

// //   Database.ref().remove().then(()=>{
// //    console.log("data is removed");
// //   }).catch((e)=>{
// //       console.log('erroe:',e);
// //   })
// Database.ref().update(
//     {
//         name: 'dhruvi',
//         age:18,
//         job:'software devloper'
//     }
// )