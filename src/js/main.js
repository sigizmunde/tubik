var player;

document.addEventListener('DOMContentLoaded',
  () => console.log(YT)
);

function onYouTubeIframeAPIReady() {
  console.log(YT);
  player = new YT.Player('ytplayer', {
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  console.log(event);
  playVideo();
}

function playVideo() {
  player.playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function stopVideo() {
  player.stopVideo();
}