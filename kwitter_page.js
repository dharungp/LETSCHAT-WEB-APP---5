user_name = localStorage.getItem("user_name");
document.getElementById("User").innerHTML = "Welcome "+user_name+" !";

room_name = localStorage.getItem("room_name");
document.getElementById("room").innerHTML = "Your are in  "+room_name+" !";
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
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
  };

function back() {
    localStorage.removeItem("room_name");
    window.location.replace("chat_room.html");
};
function Send(){
    msg = document.getElementById("text_input").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("input").innerHTML = row;
    
}

function getData(){firebase.database().ref("/"+room_name).on('value',
function(snapshot){document.getElementById("input").innerHTML="";
snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;childData=
childSnapshot.val();if(childKey !="purpose"){
        firebase_message_id = childKey;
        message_data = childData;
        
    //Start code
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>"+name+"<img class ='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
    like_button = "<button class='btn btn-danger' id = '"+firebase_message_id+"' value = '"+like+"' onclick='updateLike(this,id)'>";
    span_with_tag = "<span class = 'glphicon glphicon-thumbs-up'>Like: "+like+"</span></button><hr>"
    row = name_with_tag + message_with_tag + like_button + span_with_tag;

    //End code

        } });});}
    getData();

function updateLike(message_id){
    console.log("Clicked on like button - " + message_id.value);
    likes = document.getElementById(message_id);
    updatelikes = Number(likes) + 1;
    console.log(updatelikes);

    firebase.database().ref(room_name).child(message_id).update({
        like:updatelikes
    });
}