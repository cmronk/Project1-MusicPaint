$(document).ready(function () {

  // TZ Initialize Firebase
  var config = {
      apiKey: "AIzaSyDtY8RN8kHeOSCoIz3K6ZR5TFgarg2r-zA",
      authDomain: "music-project-1.firebaseapp.com",
      databaseURL: "https://music-project-1.firebaseio.com",
      storageBucket: "music-project-1.appspot.com",
      messagingSenderId: "881035365487"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  // TZ Button for adding User
  $("#add-user-btn").on("click", function (event) {
      event.preventDefault();

      // TZ Grabs user input
      var userName = $("#user-name-input").val().trim();
      var userLevel = $("#level-input").val().trim();
      var userSong = $("#song-input").val().trim();
      var userFav = $("#fav-input").val().trim();


      // TZ Creates local "temporary" object for holding data
      var newUser = {
          name: userName,
          level: userLevel,
          song: userSong,
          fav: userFav
      };

      // TZ Uploads data to the database
      database.ref().push(newUser);

      // TZ Clears all of the text-boxes
      $("#user-name-input").val("");
      $("#level-input").val("");
      $("#song-input").val("");
      $("#fav-input").val("");
  });


  // TZ Create Firebase event for adding data to the database 
  database.ref().on("child_added", function (childSnapshot, prevChildKey) {

      // TZ Store everything into a variable.
      var userName = childSnapshot.val().name;
      var userLevel = childSnapshot.val().level;
      var userSong = childSnapshot.val().song;
      var userFav = childSnapshot.val().fav;

      // TZ Add each data into the table
      $("#music-table > tbody").append("<tr><td>" + userName + "</td><td>" + userLevel + "</td><td>" +
          userSong + "</td><td>" + userFav + "</td><td>");
  });






//Piano Click
var synth = new Tone.Synth().toMaster();
if (Tone.context.state !== 'running') {
  Tone.context.resume();
  // document.documentElement.addEventListener(
  //   "mousedown", function(){
  //     mouse_IsDown = true;
  //     if (Tone.context.state !== 'running') {
  //     Tone.context.resume();
  //   }})
}
$("body").on("click", "#c", function(){
  synth.triggerAttackRelease('C4', '8n')
  Tone.context.resume();

})
$("body").on("click", "#d", function(){
  synth.triggerAttackRelease('D4', '8n')
})
$("body").on("click", "#e", function(){
  synth.triggerAttackRelease('E4', '8n')
})
$("body").on("click", "#f", function(){
  synth.triggerAttackRelease('F4', '8n')
})
$("body").on("click", "#g", function(){
  synth.triggerAttackRelease('G4', '8n')
})
$("body").on("click", "#a", function(){
  synth.triggerAttackRelease('A4', '8n')
})
$("body").on("click", "#b", function(){
  synth.triggerAttackRelease('B4', '8n')
});




//______Key Events Test__________________________________________________________________________________________________

//Keycode table
var notes = {
cNote : "synth.triggerAttack('C4')",
cSNote : "synth.triggerAttack('C#4')",
dNote : "synth.triggerAttack('D4')",
dSNote : "synth.triggerAttack('D#4')",
eNote : "synth.triggerAttack('E4')",
fNote : "synth.triggerAttack('F4')",
fSNote : "synth.triggerAttack('F#4')",
gNote : "synth.triggerAttack('G4')",
gSNote : "synth.triggerAttack('G#4')",
aNote : "synth.triggerAttack('A4')",
aSNote : "synth.triggerAttack('A#4')",
bNote : "synth.triggerAttack('B4')",
cHighNote : "synth.triggerAttack('C5')"
}

var pianoKeys = {
  65 :  notes.cNote,
  87 : notes.cSNote,
  83 : notes.dNote,
  69 : notes.dSNote,
  68 : notes.eNote,
  70 : notes.fNote,
  84 : notes.fSNote,
  71 : notes.gNote,
  89 : notes.gSNote,
  72 : notes.aNote,
  85 : notes.aSNote,
  74 : notes.bNote,
  75 : notes.cHighNote,
}

var compKeys = {
a : pianoKeys[65],
w : pianoKeys[87],
s : pianoKeys[83],
e : pianoKeys[69],
d : pianoKeys[68],
f : pianoKeys[70],
t : pianoKeys[84],
g : pianoKeys[71],
y : pianoKeys[89],
h : pianoKeys[72],
u : pianoKeys[85],
j : pianoKeys[74],
k : pianoKeys[75],
}


//____Stop repeat key on hold___________________________________________________
var down = {};
//Piano key C keyboard-A
$(document).keydown(function(event){
     var keycode = (event.keyCode ? event.keyCode : event.which);
     if(keycode == event.keyCode){
          if (down[keycode] == null) { // first press
            synth.triggerAttack('C4') 
            $("#c").toggleClass("pressed");
              down[keycode] = true; // record that the key's down
          }
     } 
   $(this).keyup(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
     down[keycode] = null;
     synth.triggerRelease()
    $("#c").removeClass("pressed");
    $("#c").toggleClass("unpressed");
   })
});
//_____Simple Piano Key Events_____________________________________________________________________________________________________-
// //Piano key C keyboard-A
// $(document).keydown(function(e) {
//   if (e.repeat){return}
//   if(e.which == 65) { 
//     synth.triggerAttack('C4') 
//     $("#c").toggleClass("pressed");
//     }
    
//     $(this).keyup(function(){
//       synth.triggerRelease()
//     $("#c").removeClass("pressed");
//     $("#c").toggleClass("unpressed");
//     })
// });
// //Piano key C# keyboard-W
// $(document).keydown(function(e) {
//   if(e.which == 87) { 
//     synth.triggerAttack('C#4') 
//     $("#cSharp").toggleClass("bpressed");
//     }
//     $(this).keyup(function(){
//       synth.triggerRelease()
//     $("#cSharp").removeClass("bpressed");
//     $("#cSharp").toggleClass("bunpressed");
//     })
// });


// //Piano key D keyboard-S
// $(document).keydown(function(e) {
//   if(e.which == 83) { 
//     synth.triggerAttack('D4') 
//     $("#d").toggleClass("pressed");
//     }
// });

// $(document).keyup(function(e) {
//   if(e.which == 83) { 
//     synth.triggerRelease()
//     $("#d").removeClass("pressed");
//     $("#d").toggleClass("unpressed");
//     }
// });

// //Piano key E keyboard-D
// $(document).keydown(function(e) {
//   if(e.which == 68) { 
//     synth.triggerAttack('E4') 
//     $("#e").toggleClass("pressed");
//     }
// });

// $(document).keyup(function(e) {
//   if(e.which == 68) { 
//     synth.triggerRelease() 
//     $("#e").removeClass("pressed");
//     $("#e").toggleClass("unpressed");
//     }
// });





$.ajax({
  url: "https://www.googleapis.com/youtube/v3/playlists?part=player&id=PLaq-_cPy3RZz-qNEAf7U1PMtJwJmxjrBT&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
}).then(function (data) {
  console.log(data);

  $("#player").append(data.items[0].player.embedHtml.replace("http://", "https://"))
});
// only shows form initially until user specifies level
$("#subwrapper").hide();

// shows keyboard, youtube and user input
$(document).on("click", ".btn", function(event) {
      event.preventDefault();
      $("#wrapper").hide();

      $("#subwrapper").show();

  });


})

