const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const tracks = [
    "audio/01 Full Moon Full Life.mp3",
    "audio/01. Pursuing My True Self.mp3",
    "audio/08. Your Affection.mp3",
    "audio/10 When The Moon\u2019s Reaching Out Stars -Reload-.mp3",
    "audio/11. Reach Out to the Truth -First Battle-.mp3",
    "audio/14 Mass Destruction -Reload-.mp3",
    "audio/25 During the Exams.mp3",
    "audio/27 Joy.mp3",
    "audio/30 It\u2019s Going Down Now.mp3",
    "audio/33 Changing Seasons -Reload-.mp3",
    "audio/52 Battle Hymn of the Soul.mp3",
    "audio/colorYourNight.mp3"
];

if (playBtn && music) {
    playBtn.addEventListener("click", function () {
        if (music.paused) {
            const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
            music.src = randomTrack;
            music.play();
            playBtn.textContent = "Pause";
        } else {
            music.pause();
            playBtn.textContent = "Play";
        }
    });
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}
const darkBtn = document.getElementById("darkBtn");
if (darkBtn) {
    darkBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        darkBtn.textContent = document.body.classList.contains("dark-mode")
            ? "Light Mode"
            : "Dark Mode";
    });
}