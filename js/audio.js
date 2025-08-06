const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const currentTimeSpan = document.getElementById("current-time");
const durationSpan = document.getElementById("duration");

// Format time (s -> mm:ss)
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

// Toggle play/pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
});

// Update duration when audio loaded
audio.addEventListener("loadedmetadata", () => {
  seekBar.max = Math.floor(audio.duration);
  durationSpan.textContent = formatTime(audio.duration);
});

// Update seek bar while playing
audio.addEventListener("timeupdate", () => {
  seekBar.value = Math.floor(audio.currentTime);
  currentTimeSpan.textContent = formatTime(audio.currentTime);
});

// Seek when user changes bar
seekBar.addEventListener("input", () => {
  audio.currentTime = seekBar.value;
});