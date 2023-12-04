// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFD3N2DFrOUuqRXvi8UDD4aGN1u6VHQbI",
  authDomain: "surveybase2023.firebaseapp.com",
  projectId: "surveybase2023",
  storageBucket: "surveybase2023.appspot.com",
  messagingSenderId: "127458460628",
  appId: "1:127458460628:web:e63c9d4d88e69fe3b64c41"
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//global variable
currentuser = "";
currentemail= "";

//check if user is logged in
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    currentuser=user.displayName;
    currentemail=user.email;
    console.log("Logged in", currentuser, currentemail);
  }
  else{
    console.log("user is logged out");
    window.location.href="Login.html";
  }
});

//signout code
$('#signout').click(function(){
  firebase.auth().signOut().then(()=>{
    console.log("user sign out");
    window.location.href="index.html";
  }).catch((error)=>{
    console.log(error.message);
  });
});



// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  



});

// update the result in table
