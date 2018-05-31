$(document).ready(function () {

  // only shows form initially until user specifies level
  $("#subwrapper").hide();


  //Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtY8RN8kHeOSCoIz3K6ZR5TFgarg2r-zA",
    authDomain: "music-project-1.firebaseapp.com",
    databaseURL: "https://music-project-1.firebaseio.com",
    storageBucket: "music-project-1.appspot.com",
    messagingSenderId: "881035365487"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //Button for adding User
  $("#add-user-btn").on("click", function (event) {
    event.preventDefault();


    //Grabs user input
    var userName = $("#user-name-input").val().trim();
    var userLevel = $("#level-input").val().trim();
    var userSong = $("#song-input").val().trim();
    var userFav = $("#fav-input").val().trim();


    //Creates local "temporary" object for holding data
    var newUser = {
      name: userName,
      level: userLevel,
      song: userSong,
      fav: userFav
    };

    // Uploads data to the database
    database.ref().push(newUser);

    //Clears all of the text-boxes

    $("#user-name-input").val("");
    $("#level-input").val("");
    $("#song-input").val("");
    $("#fav-input").val("");
  });


  //Create Firebase event for adding data to the database 
  database.ref().on("child_added", function (childSnapshot, prevChildKey) {

    //Store everything into a variable.
    var userName = childSnapshot.val().name;
    var userLevel = childSnapshot.val().level;
    var userSong = childSnapshot.val().song;
    var userFav = childSnapshot.val().fav;


    //Add each data into the table
    $("#music-table > tbody").prepend("<tr><td>" + userName + "</td><td>" + userLevel + "</td><td>" +
      userSong + "</td><td>" + userFav + "</td></tr>");

  });


  // shows keyboard, youtube and user input
  $(document).on("click", ".btn", function (event) {
    event.preventDefault();
    $("#wrapper").hide();

    $("#subwrapper").show();




    //Piano___________________________________
    var synth = new Tone.Synth().toMaster()
    var listItems = $(".dropdown-item");


    $("#ss1").click(function (event) {
      event.preventDefault();
      synth = new Tone.AMSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    $("#ss2").click(function (event) {
      event.preventDefault();
      synth = new Tone.DuoSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    $("#ss3").click(function (event) {
      event.preventDefault();
      synth = new Tone.FMSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    $("#ss4").click(function (event) {
      event.preventDefault();
      synth = new Tone.MembraneSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    // $("#ss5").click(function(){
    //   synth = new Tone.MetalSynth().toMaster()
    //   listItems.removeClass("active");
    //     $(this).toggleClass("active");
    //     console.log("5");
    //     console.log(synth);
    // })
    $("#ss6").click(function (event) {
      event.preventDefault();
      synth = new Tone.MonoSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    // $("#ss7").click(function(){
    //   synth = new Tone.MonophonicSynth().toMaster()
    //   listItems.removeClass("active");
    //     $(this).toggleClass("active");
    //     console.log("7");
    //     console.log(synth);
    // })
    // $("#ss8").click(function(){
    //   synth = new Tone.NoiseSynth().toMaster()
    //   listItems.removeClass("active");
    //     $(this).toggleClass("active");
    //     console.log("8");
    //     console.log(synth);
    // })
    $("#ss9").click(function (event) {
      event.preventDefault();
      synth = new Tone.PluckSynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    $("#ss10").click(function (event) {
      event.preventDefault();
      synth = new Tone.PolySynth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })
    $("#ss11").click(function (event) {
      event.preventDefault();
      synth = new Tone.Synth().toMaster()
      listItems.removeClass("active");
      $(this).toggleClass("active");
      console.log(synth);
    })

    //Piano Click________
    if (Tone.context.state !== 'running') {
      Tone.context.resume();
      // document.documentElement.addEventListener(
      //   "mousedown", function(){
      //     mouse_IsDown = true;
      //     if (Tone.context.state !== 'running') {
      //     Tone.context.resume();
      //   }})
    }
    $("body").on("click", "#c", function () {
      synth.triggerAttackRelease('C4', '8n')
    });
    $("body").on("click", "#cSharp", function () {
      synth.triggerAttackRelease('C#4', '8n')
    });
    $("body").on("click", "#d", function () {
      synth.triggerAttackRelease('D4', '8n')
    });
    $("body").on("click", "#dSharp", function () {
      synth.triggerAttackRelease('D#4', '8n')
    });
    $("body").on("click", "#e", function () {
      synth.triggerAttackRelease('E4', '8n')
    });
    $("body").on("click", "#f", function () {
      synth.triggerAttackRelease('F4', '8n')
    });
    $("body").on("click", "#fSharp", function () {
      synth.triggerAttackRelease('F#4', '8n')
    });
    $("body").on("click", "#g", function () {
      synth.triggerAttackRelease('G4', '8n')
    });
    $("body").on("click", "#gSharp", function () {
      synth.triggerAttackRelease('G#4', '8n')
    });
    $("body").on("click", "#a", function () {
      synth.triggerAttackRelease('A4', '8n')
    });
    $("body").on("click", "#aSharp", function () {
      synth.triggerAttackRelease('A#4', '8n')
    });
    $("body").on("click", "#b", function () {
      synth.triggerAttackRelease('B4', '8n')
    });
    $("body").on("click", "#c1", function () {
      synth.triggerAttackRelease('C5', '8n')
    });





    //______Key Events Test__________________________________________________________________________________________________




    //____Keydown events___________________________________________________
    var down = {};
    $(document).keydown(function (event) {
      Tone.context.resume();

      var keycode = (event.keyCode ? event.keyCode : event.which);
      if (keycode == event.which) {
        if (down[event.which] == null) { // first press
          var noteToPlay = ""
          var keyToPress = ""
          var blackKeyPress = ""
          if (event.key.toLowerCase() == "a") {
            noteToPlay = "C4";
            keyToPress = $("#c");
          } else if (event.key.toLowerCase() == "w") {
            noteToPlay = "C#4";
            blackKeyPress = $("#cSharp");
          } else if (event.key.toLowerCase() == "s") {
            noteToPlay = "D4";
            keyToPress = $("#d");
          } else if (event.key.toLowerCase() == "e") {
            noteToPlay = "D#4";
            blackKeyPress = $("#dSharp");
          } else if (event.key.toLowerCase() == "d") {
            noteToPlay = "E4";
            keyToPress = $("#e");
          } else if (event.key.toLowerCase() == "f") {
            noteToPlay = "F4";
            keyToPress = $("#f");
          } else if (event.key.toLowerCase() == "t") {
            noteToPlay = "F#4";
            blackKeyPress = $("#fSharp");
          } else if (event.key.toLowerCase() == "g") {
            noteToPlay = "G4";
            keyToPress = $("#g");
          } else if (event.key.toLowerCase() == "y") {
            noteToPlay = "G#4";
            blackKeyPress = $("#gSharp");
          }
          else if (event.key.toLowerCase() == "h") {
            noteToPlay = "A4";
            keyToPress = $("#a");
          }
          else if (event.key.toLowerCase() == "u") {
            noteToPlay = "A#4";
            blackKeyPress = $("#aSharp");
          }
          else if (event.key.toLowerCase() == "j") {
            noteToPlay = "B4";
            keyToPress = $("#b");

          } else if (event.key.toLowerCase() == "k") {
            noteToPlay = "C5";
            keyToPress = $("#c1");
          } else { }
          if (noteToPlay) {
            synth.triggerAttack(noteToPlay);
          }

          if (keyToPress) {
            keyToPress.toggleClass("pressed");
            keyToPress.toggleClass("bpressed");
          }

          if (blackKeyPress) {
            blackKeyPress.toggleClass("bpressed");
          }

          down[event.which] = true; // record that the key's down
        }




      }
      $(this).keyup(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        down[keycode] = null;
        if (keyToPress) {
          synth.triggerRelease()
          keyToPress.removeClass("pressed");
          keyToPress.toggleClass("unpressed");
        } else if (blackKeyPress) {
          synth.triggerRelease()
          blackKeyPress.removeClass("bpressed");
          blackKeyPress.toggleClass("bunpressed");

        } else { }





      })

    });

  });

  //____________________________________________________________

  // YOUTUBE API CALL

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlists?part=player&id=PLaq-_cPy3RZz-qNEAf7U1PMtJwJmxjrBT&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
  }).then(function (data) {
    // console.log(data);

    $("#player").append(data.items[0].player.embedHtml.replace("http://", "https://"))
  });

  // $("#add-songs-btn").on("click", function (event) {
  //   event.preventDefault();

  //   var search = $("#user-song-input").val().trim();
  //   console.log(search);
  // });

  // $.ajax({
  //   url: "https://www.googleapis.com/youtube/v3/search=" + search + "/part=player&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
  // }).then(function (data) {
  //   console.log(data);

  //   $("#player1").append(data.items[0].player.embedHtml.replace("http://", "https://"))
  // });

})
