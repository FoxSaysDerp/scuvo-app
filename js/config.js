    // Initialize Firebase
var firebaseConfig = {
  apiKey: "X,
  authDomain: "X",
  projectId: "X",
  storageBucket: "X",
  messagingSenderId: "0",
  ppId: "0"
};
firebase.initializeApp(firebaseConfig);
    
    // Make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

    // Update firestore settings
db.settings({ timestampsInSnapshots: true });
