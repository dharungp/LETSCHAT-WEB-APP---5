// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBjx7f3Zgylu8o3I0Zh8gY8PVo1Y5uhh7o",
    authDomain: "twitter-da0d3.firebaseapp.com",
    databaseURL: "https://twitter-da0d3-default-rtdb.firebaseio.com",
    projectId: "twitter-da0d3",
    storageBucket: "twitter-da0d3.appspot.com",
    messagingSenderId: "383636186966",
    appId: "1:383636186966:web:e940de991977ff312b18f7"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



