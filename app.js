const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
  const randomNumber = generateRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

const generateRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
