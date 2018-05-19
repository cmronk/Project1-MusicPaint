<<<<<<< HEAD
console.log("two");
SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});
=======




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
>>>>>>> 9302cb2de9117f51b86add460b979f511a89cd90
