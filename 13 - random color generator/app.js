const genNew = document.getElementById("gen-new");
const color = document.getElementById("color");

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerText = "#" + randomColor;
};

genNew.addEventListener("click", setBg);
setBg();
