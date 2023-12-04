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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  // get the username(email) and password from the form
  // change the following code
  var username = $('input[name="fullname"]').val();
  var emailaddress = $('input[name="username"]').val();
  var password = $('input[name="password"]').val();
  var confirmed_password = $('input[name="cpassword"]').val();;
  console.log(username, password, emailaddress, confirmed_password);
  //check if confirm and pass are the same
  if (confirmed_password = password){
    console.log("the same password...");
  }
  else{
    console.log("not matching...")
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailaddress, password)
    .then((result) => {
      // Signed in
      let user = result.user;
      user.updateprofile({
        displayName: username
      }).then(()=>{
        console.log("update profile successfully")
        console.log(user.displayName, "are signed up");
        var date = "Today";
        var userinfo = {
          "username": user.displayName,
          "email": emailaddress,
          "signupdate": date
        };
        var db = firebase.firestore();
        db.collection("userdata").doc(user.displayName).set(userinfo).then(()=>{
          console.log("info saved to firestore");
          window.location.href = "Login.html";
        });
      })
      console.log(user);
      console.log(username, "You are signed up");
      
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
