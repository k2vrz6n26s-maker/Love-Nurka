const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

yes.onclick = () => {
  result.innerHTML = "🥰 Урааа! Кездесуге барамыз ❤️";
};

no.onclick = () => {
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  no.style.transform = `translate(${x}px, ${y}px)`;
};