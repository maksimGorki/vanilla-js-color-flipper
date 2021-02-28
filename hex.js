const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
  let randomColorArray = "";
  randomColorArray += "#";
  for (let i = 0; i < 6; i++) {
    randomColorArray += hex[generateRandomNumber()];
  }

  document.body.style.backgroundColor = randomColorArray;
  color.textContent = randomColorArray;
});

const generateRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
};
