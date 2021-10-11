const info = document.getElementById("info");
const button = document.getElementById("button");
const counter = document.getElementById("counter");
const html = document.getElementsByTagName("html")[0];
const colorDivs = document.getElementsByClassName("color-div");

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateColor = () => {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const getColors = () => {
  let i = 0;
  for (i; i < colorDivs.length; i++) {
    colorDivs[i].style.backgroundColor = generateColor();
    colorDivs[i].style.opacity = 1;
  }
  const rN = randomNumber(0, colorDivs.length - 1);
  info.innerText = colorDivs[rN].style.backgroundColor;
};

button.onclick = getColors;

getColors();

const click = () => {
  const element = event.target;
  if (element.style.backgroundColor === info.innerText) {
    counter.innerText++;
    html.style.backgroundColor = element.style.backgroundColor;
    document.body.style.backgroundColor = element.style.backgroundColor;
    getColors();
    return;
  }
  element.style.opacity = "0";
};

let i = 0;
for (i; i < colorDivs.length; i++) {
    colorDivs[i].onclick = click;
}