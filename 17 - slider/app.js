const images = [
  "https://images.unsplash.com/photo-1545105366-5d6173ec720a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1464030871258-a01dfd38220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1629&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1534855327944-f702878b1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1514695805554-81c35e2360c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1514696110109-42fb775767ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
];

const n = images.length;
const flexContainer = document.getElementById("flex-container");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

const containerWidth = 80;
const flexContainerWidth = n * containerWidth;
flexContainer.style.width = flexContainerWidth;

const dotsContainer = document.querySelector(".dots");

for (let i = 0; i < n; i++) {
  const newImg = document.createElement("img");
  newImg.src = images[i];
  newImg.classList.add("img-styles");
  flexContainer.appendChild(newImg);

  const dot = document.createElement("div");
  dot.classList.add("single-dot");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", (event) => {
    const index = [...dotsContainer.children].indexOf(event.target);
    showImg(index);
  });
}

let currentPosition = 0;
showImg(0);
leftBtn.addEventListener("click", () => {
  if (currentPosition > 0) {
    showImg(currentPosition - 1);
  } else {
    showImg(n - 1);
  }
});
rightBtn.addEventListener("click", () => {
  if (currentPosition < n - 1) {
    showImg(currentPosition + 1);
  } else {
    showImg(0);
  }
});

function showImg(position) {
  const prevDot = dotsContainer.children[currentPosition];
  prevDot.classList.remove("active");
  currentPosition = position;

  const curDot = dotsContainer.children[currentPosition];
  curDot.classList.add("active");

  const translateXDistance = -currentPosition * containerWidth;
  flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}
