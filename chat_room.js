user_name = localStorage.getItem("user_name");
document.getElementById("User").innerHTML = "Welcome "+user_name+" !";

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

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  };

function addRoom(){
    room_name = document.getElementById("input_user_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";	
  };

  function getData() {firebase.database().ref("/").on('value',
  function(snapshot){document.getElementById("output").innerHTML = 
  "";snapshot.forEach(function(childSnapshot) {childKey = 
    childSnapshot.key;
                     Room_names = childKey
                     //start code
                     console.log("Room Name - "+Room_names);
                     row = "<div class = 'room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
                     document.getElementById("output").innerHTML += row;
                     //end code
                    });});}
                getData();
            
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name)
window.location = "kwitter_page.html"
}