document.addEventListener("DOMContentLoaded", function () {
  const words = ["Ugali.", "Chips.", "Pilau.", "Chapati."];
  let wordIndex = 0;
  const changingWord = document.getElementById("changing-word");

  function changeWord() {
    changingWord.style.opacity = 0;
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      changingWord.textContent = words[wordIndex];
      changingWord.style.opacity = 1;
    }, 500);
  }

  setInterval(changeWord, 2000);
});

/*delivering cook message */
function deliver() {
  alert("Your order submitted successfully👩‍🍳");
}
