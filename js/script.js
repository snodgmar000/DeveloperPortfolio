const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");

if (playBtn && music) {
    playBtn.addEventListener("click", function () {
        if (music.paused) {
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