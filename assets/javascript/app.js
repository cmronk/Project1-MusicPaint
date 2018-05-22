$(document).ready(function() {

    // only shows form initially until user specifies level
$("#subwrapper").hide();

    // shows keyboard, youtube and user input
$(document).on("click", ".btn", function(event) {
    event.preventDefault();
    $("#wrapper").hide();

    $("#subwrapper").show();

  
// updates HTML with user input, but we'll end up using firebase...
var name = $("#user-name-input").val().trim();
var level = $("#level-input").val().trim();
var song = $("#song-input").val().trim();
var fav = $("#musician-input").val().trim();

console.log(name);
console.log(level);
console.log(song);
console.log(fav);

$("#name-display").append(name);
$("#level-display").append(level);
$("#song-display").append(song);
$("#fav-display").append(fav);

  });
// youtube api
$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlists?part=player&id=PLaq-_cPy3RZxKTFYyCwuD1zEGhxvIYHbR&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
}).then(function(data){
    console.log(data);
    
    $("#player").append(data.items[0].player.embedHtml)
});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtY8RN8kHeOSCoIz3K6ZR5TFgarg2r-zA",
    authDomain: "music-project-1.firebaseapp.com",
    databaseURL: "https://music-project-1.firebaseio.com",
    projectId: "music-project-1",
    storageBucket: "music-project-1.appspot.com",
    messagingSenderId: "881035365487"
};
firebase.initializeApp(config);


})