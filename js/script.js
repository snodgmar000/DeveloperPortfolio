const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        playBtn.textContent = "Pause";
    } else {
        music.pause();
        playBtn.textContent = "Play";
    }
});

const darkBtn = document.getElementById("darkBtn");
darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("inverted");
});