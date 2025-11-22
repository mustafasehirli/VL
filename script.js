const animatedText = document.querySelector(".animated-text");
const textArray = [
  { text: "Bütçeyi Doğru Kullanın", color: "#1a73e8" },
  { text: "Veriyi Netleştirin", color: "#ea4335" },
  { text: "Reklamı Akıllandırın", color: "#1fa05e" },
  { text: "Merkezi Yönetim", color: "#f9a20f" },
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
