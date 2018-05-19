
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




$(document).keydown(function(event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

switch (event.key) {
  case "a":
  synth.triggerAttack('C4')
  $("#c").toggleClass(".white:active");
      break;
  case "s":
  synth.triggerAttack('D4')
      break;
  case "d":
  synth.triggerAttack('E4')
      break;
  case "f":
  synth.triggerAttack('F4')
      break;
  case "g":
  synth.triggerAttack('G4')
    break;
  case "h":
  synth.triggerAttack('A4')
    break;
  case "j":
  synth.triggerAttack('B4')
    break;
}
});

$(document).keyup(function(event) {
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"

switch (event.key) {
  case "a":
  synth.triggerRelease()
      break;
  case "s":
  synth.triggerRelease()
      break;
  case "d":
  synth.triggerRelease()
      break;
  case "f":
  synth.triggerRelease()
      break;
  case "g":
  synth.triggerRelease()
    break;
  case "h":
  synth.triggerRelease()
    break;
  case "j":
  synth.triggerRelease()
    break;
}
});


var synth = new Tone.Synth().toMaster()


//play a middle 'C' for the duration of an 8th note
// $("body").keydown(function() {
//   synth.triggerAttack('C4', '8n')
// })

// $("body").keyup(function(){
//   synth.triggerRelease()
// })




// function playsound(){

//   for(i = 0; i < pianoKeys.length; i++){
  
//   }



// };

$("body").on("click", "#c", function(){
synth.triggerAttackRelease('C4', '8n')
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
})
