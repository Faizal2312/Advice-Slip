const dice = document.querySelector(".dice");
const title = document.querySelector(".title");
const advice = document.querySelector(".advice");

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data;
}

function setData(data) {
  console.log(data.slip);
  title.innerHTML = `ADVICE #${data.slip.id}  `;
  advice.innerHTML = `"${data.slip.advice}"`;
}

function setting() {
  getData().then((data) => setData(data));
}

dice.addEventListener("click", setting);
setting();
