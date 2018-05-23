$(document).ready(function() {

$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlists?part=player&id=PLaq-_cPy3RZxKTFYyCwuD1zEGhxvIYHbR&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
}).then(function (data) {
    console.log(data);

    $("#player").append(data.items[0].player.embedHtml)
});

console.log("two");
SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
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

// stream track id 293
SC.stream('/tracks/293').then(function (player) {
    player.play().then(function () {
        console.log('Playback started!');
    }).catch(function (e) {
        console.error('Playback rejected. Try calling play() from a user interaction.', e);
    });
});




// TZ Initialize Firebase
var config = {
    apiKey: "AIzaSyDtY8RN8kHeOSCoIz3K6ZR5TFgarg2r-zA",
    authDomain: "music-project-1.firebaseapp.com",
    databaseURL: "https://music-project-1.firebaseio.com",
    projectId: "music-project-1",
    storageBucket: "music-project-1.appspot.com",
    messagingSenderId: "881035365487"
};
firebase.initializeApp(config);

<<<<<<< HEAD
var database = firebase.database();

// TZ Button for adding User
$("#add-user-btn").on("click", function (event) {
    event.preventDefault();

    // TZ Grabs user input
    var userName = $("#user-name-input").val().trim();
    var userLevel = $("#level-input").val().trim();
    var userSong = $("#song-input").val().trim();
    var userMusician = $("#musician-input").val().trim();

    // TZ Creates local "temporary" object for holding data
    var newUser = {
        name: userName,
        level: userLevel,
        song: userSong,
        musican: userMuscian
    };

    // TZ Uploads data to the database
    database.ref().push(newUser);

    // TZ Clears all of the text-boxes
    $("#user-name-input").val("");
    $("#level-input").val("");
    $("#song-input").val("");
    $("#musician-input").val("");
});

// TZ Create Firebase event for adding data to the database 
database.ref().on("child_added", function (childSnapshot, prevChildKey) {

// TZ Store everything into a variable.
    var userName = childSnapshot.val().name;
    var userLevel = childSnapshot.val().level;
    var userSong = childSnapshot.val().song;
    var userMuscian = childSnapshot.val().musician;
});


})
