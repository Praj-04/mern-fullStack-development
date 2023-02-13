const button = document.querySelector("button");
const pauseButton = document.getElementById("pause");

button.addEventListener("click", () => {
  const audio = new Audio(
    "https://www.soundjay.com/free-music/sounds/midnight-ride-01a.mp3"
  );
  audio.play();

  pauseButton.addEventListener("click", () => {
    audio.pause();
  });
});
