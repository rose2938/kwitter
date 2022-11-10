
const firebaseConfig = {
      apiKey: "AIzaSyDGBS00bq0kRt-GgZjJj8qqC3ciARqQLC0",
      authDomain: "kwitter-ab173.firebaseapp.com",
      databaseURL: "https://kwitter-ab173-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab173",
      storageBucket: "kwitter-ab173.appspot.com",
      messagingSenderId: "303341731619",
      appId: "1:303341731619:web:3d894323edec4983359696"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});

document.getElementById("msg").value = "";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      //End code
      });});}
getData();


 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location = "index.html";
 }










