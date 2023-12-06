// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFD3N2DFrOUuqRXvi8UDD4aGN1u6VHQbI",
  authDomain: "surveybase2023.firebaseapp.com",
  projectId: "surveybase2023",
  storageBucket: "surveybase2023.appspot.com",
  messagingSenderId: "127458460628",
  appId: "1:127458460628:web:e63c9d4d88e69fe3b64c41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = document.getElementById('login').value;
  var password = document.getElementById('pwd').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in successful');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name, email, emailVerified);
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// add  a google login choice here 
$('#google').click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  // The signed-in user info.
    var user = result.user;
    console.log("sign in through google", user);
    
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});