function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(key);
  }
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var btn = this.innerHTML;
    makeSound(btn);
    console.log(btn);
    addActive(btn);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  addActive(event.key);
});

function addActive(activeKey) {
  //   document.querySelector("." + activeKey).classList.toggle("active");

  var actBtn = document.querySelector("." + activeKey);
  actBtn.classList.add("active");

  setTimeout(() => {
    actBtn.classList.remove("active");
  }, 100);
  // var activeButton = document.querySelector("." + currentKey);

  //   activeButton.classList.add("pressed");

  //   setTimeout(function() {
  //     activeButton.classList.remove("pressed");
  //   }, 100);
}
