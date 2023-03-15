const a = ["crash","kick","snare","tom1","tom2","tom3"];
const id = ["a","b","c","d","e","f"];

for (let i = 0; i < a.length; ++i) {
  const drum = document.querySelector("#"+id[i]);
  drum.style.backgroundImage = "url(images/" + a[i] + ".png)";
  if (i % 2 == 0) {
    drum.style.marginRight = "8vw";
  }
  drum.addEventListener("click", () => {
    drum.classList.toggle("pressed");
    const audio = new Audio("sounds/" + a[i] + ".mp3");
    audio.play();
    setTimeout(() => {
      drum.classList.toggle("pressed");
    }, 100);
  });
}