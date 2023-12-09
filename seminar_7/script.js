"use strict";

const buttonPlayPauseEl = document.querySelector(".options__buttons");
const buttonPlayEl = buttonPlayPauseEl.querySelector(".options__button-play");
const buttonPauseEl = buttonPlayPauseEl.querySelector(".options__button-pause");
const videoEl = document.querySelector(".video");

buttonPlayPauseEl.addEventListener("click", playVideo);
videoEl.addEventListener("click", playVideo);

function playVideo() {
  buttonPauseEl.classList.toggle("show-button");
  buttonPlayEl.classList.toggle("hide-button");
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
}

// 1. реализовать прогресс видео
// 2. реализовать прогресс пройденного времени
// 3. выставить элемент input type range

const videoTimeDuration = document.querySelector(".options__video-duration");

videoEl.addEventListener("loadedmetadata", videoDuration);

function videoDuration() {
  const duration = videoEl.duration;
  videoRangeEl.max = duration;
  const minuts = Math.floor(duration / 60);
  const seconds = Math.ceil(duration % 60);
  videoTimeDuration.textContent =
    (minuts < 10 ? "0" + minuts : minuts) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

let currentTimeEl = document.querySelector(".options__current-time");

let currentTimeRangeEl = document.querySelector(".controls__time-pointer");

const videoRangeEl = document.querySelector(".controls__range");

videoEl.addEventListener("timeupdate", () => {
  // let time = ;
  changeCurrentTime(videoEl.currentTime);
});

function changeCurrentTime(time) {
  if (time / 60 < 10) {
    currentTimeEl.innerText =
      "0" + Math.floor(time / 60) + ":" + Math.ceil(time % 60);
    videoRangeEl.value = time;
    currentTimeRangeEl.innerText =
      "0" + Math.floor(time / 60) + ":" + Math.ceil(time % 60);
  } else {
    currentTimeEl.innerText =
      Math.floor(time / 60) + ":" + Math.ceil(time % 60);
    videoRangeEl.value = time;
    currentTimeRangeEl.innerText =
      Math.floor(time / 60) + ":" + Math.ceil(time % 60);
  }
}

videoRangeEl.addEventListener("change", changeRangePlace);

function changeRangePlace() {
  videoEl.currentTime = videoRangeEl.value;
  changeCurrentTime(videoEl.currentTime);
}

const volumeButtonEl = document.querySelector(".options__volume-button");

const volumeRangeEl = document.querySelector(".options__volume-range");

volumeRangeEl.addEventListener("change", changeVolume);

function changeVolume() {
  videoEl.volume = volumeRangeEl.value;
}
