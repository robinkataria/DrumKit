
// Detecting Button Press

var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makesound(this.innerHTML);
    animation(this.innerHTML);
  });
}


// Detecting Keyboard's key Press

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});


// makesound() function Play Sound

function makesound(key) {

  switch (key) {

    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      alert("Invalid Input!");
  }
}

// animation() function apply Shadow animation to the Button

function animation(key) {

  document.querySelector('.' + key).classList.add("pressed");

  setTimeout(function(){
    document.querySelector('.' + key).classList.remove("pressed");
  } , 100);

}
