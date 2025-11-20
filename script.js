const animatedText = document.querySelector(".animated-text");
const textArray = [
  { text: "Sat??lar? Art?r?n", color: "#1a73e8" }, // mavi
  { text: "?n Plana ??k?n", color: "#ea4335" }, // k?rm?z?
  { text: "Bulunabilir Olun", color: "#1fa05e" }, // ye?il
  { text: "G?r?n?n", color: "#f9a20f" }, // turuncu
];
const intervalMs = 2600;
let textIndex = 0;

function changeText() {
  if (!animatedText) return;
  animatedText.classList.remove("text-cycle-active");
  void animatedText.offsetWidth; // force reflow to restart animation
  const current = textArray[textIndex];
  animatedText.textContent = current.text;
  animatedText.style.color = current.color;
  animatedText.classList.add("text-cycle-active");
  textIndex = (textIndex + 1) % textArray.length;
}

changeText();
setInterval(changeText, intervalMs);
