window.addEventListener("load", Loaded);

function Loaded() {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // MUSIC PLAYER TO THE CODES START

  let navText = document.querySelector(".nav__text");
  let MusicImage = document.querySelector(".main__section_box_music_play_img");
  let musicPlay = document.querySelector(
    ".main__section_box_music_play_icons .fa-play"
  );
  let musicPause = document.querySelector(
    ".main__section_box_music_play_icons .fa-pause"
  );
  let next = document.querySelector(".fa-forward");
  let prev = document.querySelector(".fa-backward");
  let title = document.querySelector(".main__section_box_music_play_title");
  let audio = document.getElementById("audio");
  let progress = document.querySelector(
    ".main__section_box_music_play_border_box"
  );
  let progressContainer = document.querySelector(
    ".main__section_box_music_play_border"
  );
  let video = document.querySelector(".section__box_third_content_video");
  let playVideo = document.getElementById("section__box_third_content_play");
  let pauseVideo = document.getElementById("section__box_third_content_pause");
  let faPause = document.getElementById("fa-pause");
  let faPlay = document.querySelector(".fa-circle-play");
  let index = 0;

  let MusicPlayerName = ["Burn It down", "MBAND", "User not found"];

  function MusicPlayerFunction(song) {
    MusicImage.src = `../IMG/MUSIC-IMAGES/${song}.jpg`;
    audio.src = `../MUSIC/${song}.mp3`;
    title.innerHTML = song;
  }
  MusicPlayerFunction(MusicPlayerName[index]);

  // MUSIC PLAY BUTTON

  musicPlay.addEventListener("click", justPlay);

  function justPlay() {
    faPauserMusicPlayer();
    audio.play();
    musicPlay.style.display = "none";
    musicPause.style.display = "block";
  }

  // MUSIC PAUSE TO THE CODES START

  musicPause.addEventListener("click", justPause);

  function justPause() {
    audio.pause();
    musicPlay.style.display = "block";
    musicPause.style.display = "none";
  }

  // MUSIC NEXT TO THE CODES START

  next.addEventListener("click", justNextPlay);

  function justNextPlay() {
    index++;
    if (index > MusicPlayerName.length - 1) {
      index = 0;
    }
    MusicPlayerFunction(MusicPlayerName[index]);
    audio.play();
    justPlay();
    navText.innerHTML = `0${1 + index}/03`;
  }

  // MUSIC PREV TO THE CODES START

  prev.addEventListener("click", justPrevPlay);

  function justPrevPlay() {
    index--;
    if (index < 0) {
      index = MusicPlayerName.length - 1;
    }
    MusicPlayerFunction(MusicPlayerName[index]);
    audio.play();
    justPlay();
    navText.innerHTML = `0${1 + index}/03`;
  }

  // SETPROGRESS TO THE CODES START

  audio.addEventListener("timeupdate", Progress);

  function Progress(e) {
    let { duration, currentTime } = e.srcElement;
    let progressTime = (currentTime / duration) * 100;
    progress.style.width = `${progressTime}%`;
  }

  progressContainer.addEventListener("click", setProgress);

  function setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  // FAPLAY TO THE CODES START
  faPlay.addEventListener("click", faPlayerMusicPlayer);

  function faPlayerMusicPlayer() {
    faPlay.style.display = "none";
    faPause.style.display = "block";
    MusicPlayerFunction(MusicPlayerName[index]);
    justPause();
    audio.play();
  }

  // FAPAUSE TO THE CODES START

  faPause.addEventListener("click", faPauserMusicPlayer);

  function faPauserMusicPlayer() {
    faPlay.style.display = "block";
    faPause.style.display = "none";
    MusicPlayerFunction(MusicPlayerName[index]);
    audio.pause();
  }

  // VIDEO TO THE CODES PLAY VIDEO START

  playVideo.addEventListener("click", playerVideo);

  function playerVideo() {
    video.play();
    playVideo.style.display = "none";
    pauseVideo.style.display = "block";
  }

  // VIDEO TO THE CODES PAUSE VIDEO START

  pauseVideo.addEventListener("click", pauserVideo);

  function pauserVideo() {
    video.pause();
    playVideo.style.display = "block";
    pauseVideo.style.display = "none";
  }

  // AOS LIBRARY TO THE CODES START

  AOS.init();

  // SECRET BUTTON LINK TO THE CODES START

  let secretLink = document.querySelectorAll(".secret__navbar_link");
  let secretNavbar = document.querySelector(".secret__navbar");
  let barsIcon = document.querySelector(".nav__list .fa-bars");
  let timesIcon = document.querySelector(".fa-times");
  let secretJob = false;
  secretLink.forEach((item) => {
    item.addEventListener("click", secretButtonNavbar);

    function secretButtonNavbar() {
      secretNavbar.style.transform = "translateY(-100%)";
    }
  });

  // OPEN NAVBAR TO THE CODES START

  barsIcon.addEventListener("click", OpenNavbar);

  function OpenNavbar() {
    secretNavbar.style.transform = "translateY(0)";
  }

  // CLOSE NAVBAR TO THE CODES START

  timesIcon.addEventListener("click", closeNavbar);

  function closeNavbar() {
    secretNavbar.style.transform = "translateY(-100%)";
  }
}
