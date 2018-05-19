
// var queryURL = "https://www.googleapis.com/youtube/v3/playlists/&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo&part=player,contentDetails,statistics,status"
// var queryURL = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo&part=snippet,statistics";
// var queryURL = "https://www.googleapis.com/youtube/v3/playlists/&channelId=UC3VOC7g-hjwIBVYTwKil3BA&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo&part=snippet,contentDetails,statistics,status";

// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {

    

// console.log(response);
// });
$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlists?part=player&id=PLaq-_cPy3RZxKTFYyCwuD1zEGhxvIYHbR&key=AIzaSyAmH5A7wXlMygxeB0YdiFoHysWyoxtnMDo"
}).then(function(data){
    console.log(data);
    
    $("body").append(data.items[0].player.embedHtml)
});

// // 2. This code loads the IFrame Player API code asynchronously.
// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }

// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
// function stopVideo() {
//   player.stopVideo();
// }