const secondHand = document.querySelector(".hand-seconds");
const minsHand = document.querySelector(".hand-minute");
const hourHand = document.querySelector(".hand-hour");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getMinutes();
  const hourDegrees = (mins / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
