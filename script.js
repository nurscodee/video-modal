const btnVideo = document.getElementById("btn-video");
const btnClose = document.getElementById("close");
const videoModal = document.getElementById("video-modal");
const videoElement = videoModal.querySelector("video");

btnVideo.addEventListener("click", showVideo);
btnClose.addEventListener("click", hideVideo);

function showVideo() {
  videoModal.classList.add("active");
}

function hideVideo() {
  videoModal.classList.remove("active");
  videoElement.pause(); //Stop the video
  videoElement.currentTime = 0; //Rewind the video
}
