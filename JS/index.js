window.addEventListener("load", Loaded);

AOS.init();

function Loaded() {
  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("active", window.scrollY > 0);
  });

  // MUSIC PLAYER TO THE CODES START
  let index = 0;

  const MusicPlayerName = ["Burn It down", "MBAND", "User not found"];

  function MusicPlayerFunction(song) {
    $(
      ".main__section_box_music_play_img"
    ).src = `../IMG/MUSIC-IMAGES/${song}.jpg`;
    $("#audio").src = `../MUSIC/${song}.mp3`;
    $(".main__section_box_music_play_title").innerHTML = song;
  }
  MusicPlayerFunction(MusicPlayerName[index]);

  // MUSIC PLAY BUTTON

  $(".main__section_box_music_play_icons .fa-play").addEventListener(
    "click",
    justPlay
  );

  function justPlay() {
    faPauserMusicPlayer();
    $("#audio").play();
    $(".main__section_box_music_play_icons .fa-play").style.display = "none";
    $(".main__section_box_music_play_icons .fa-pause").style.display = "block";
  }

  // MUSIC PAUSE TO THE CODES START

  $(".main__section_box_music_play_icons .fa-pause").addEventListener(
    "click",
    justPause
  );

  function justPause() {
    $("#audio").pause();
    $(".main__section_box_music_play_icons .fa-play").style.display = "block";
    $(".main__section_box_music_play_icons .fa-pause").style.display = "none";
  }

  // MUSIC NEXT TO THE CODES START

  $(".fa-forward").addEventListener("click", justNextPlay);

  function justNextPlay() {
    index++;
    if (index > MusicPlayerName.length - 1) {
      index = 0;
    }
    MusicPlayerFunction(MusicPlayerName[index]);
    $("#audio").play();
    justPlay();
    $(".nav__text").innerHTML = `0${1 + index}/03`;
  }

  // MUSIC PREV TO THE CODES START

  $(".fa-backward").addEventListener("click", justPrevPlay);

  function justPrevPlay() {
    index--;
    if (index < 0) {
      index = MusicPlayerName.length - 1;
    }
    MusicPlayerFunction(MusicPlayerName[index]);
    $("#audio").play();
    justPlay();
    $(".nav__text").innerHTML = `0${1 + index}/03`;
  }

  // SETPROGRESS TO THE CODES START

  $("#audio").addEventListener("timeupdate", Progress);

  function Progress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressTime = (currentTime / duration) * 100;
    $(
      ".main__section_box_music_play_border_box"
    ).style.width = `${progressTime}%`;
  }

  $(".main__section_box_music_play_border").addEventListener(
    "click",
    setProgress
  );

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    $("#audio").currentTime = (clickX / width) * duration;
  }

  // FAPLAY TO THE CODES START
  $(".fa-circle-play").addEventListener("click", faPlayerMusicPlayer);

  function faPlayerMusicPlayer() {
    $(".fa-circle-play").style.display = "none";
    $("#fa-pause").style.display = "block";
    MusicPlayerFunction(MusicPlayerName[index]);
    justPause();
    $(".section__box_third_content_video").play();
  }

  // FAPAUSE TO THE CODES START

  $("#fa-pause").addEventListener("click", faPauserMusicPlayer);

  function faPauserMusicPlayer() {
    $(".fa-circle-play").style.display = "block";
    $("#fa-pause").style.display = "none";
    MusicPlayerFunction(MusicPlayerName[index]);
    $("#audio").pause();
  }

  // VIDEO TO THE CODES PLAY VIDEO START

  $("#section__box_third_content_play").addEventListener("click", playerVideo);

  function playerVideo() {
    $(".section__box_third_content_video").play();
    $("#section__box_third_content_play").style.display = "none";
    $("#section__box_third_content_pause").style.display = "block";
  }

  // VIDEO TO THE CODES PAUSE VIDEO START

  $("#section__box_third_content_pause").addEventListener("click", pauserVideo);

  function pauserVideo() {
    $(".section__box_third_content_video").pause();
    $("#section__box_third_content_play").style.display = "block";
    $("#section__box_third_content_pause").style.display = "none";
  }

  // AOS LIBRARY TO THE CODES START

  // SECRET BUTTON LINK TO THE CODES START

  $$(".secret__navbar_link").forEach((item) => {
    item.addEventListener("click", secretButtonNavbar);

    function secretButtonNavbar() {
      $(".secret__navbar").style.transform = "translateY(-100%)";
    }
  });

  // OPEN NAVBAR TO THE CODES START

  $(".nav__list .fa-bars").addEventListener("click", OpenNavbar);

  function OpenNavbar() {
    $(".secret__navbar").style.transform = "translateY(0)";
  }

  // CLOSE NAVBAR TO THE CODES START

  $(".fa-times").addEventListener("click", closeNavbar);

  function closeNavbar() {
    $(".secret__navbar").style.transform = "translateY(-100%)";
  }
}
