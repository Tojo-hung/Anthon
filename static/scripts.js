
document.addEventListener('keydown', function(event) {
  var x = event.key;
  if (x === "ArrowLeft"){
    document.getElementById("Left").style.backgroundColor = "red";
  }
  else if (x == "ArrowRight") {
    document.getElementById("Right").style.backgroundColor = "red";
  }
  else if (x == "ArrowDown") {
    document.getElementById("Down").style.backgroundColor = "red";
  }
  else if (x == "ArrowUp") {
    document.getElementById("Up").style.backgroundColor = "red";
  }
  else if (x === "a"){
    document.getElementById("Left").style.backgroundColor = "red";
  }
  else if (x == "d") {
    document.getElementById("Right").style.backgroundColor = "red";
  }
  else if (x == "s") {
    document.getElementById("Down").style.backgroundColor = "red";
  }
  else if (x == "w") {
    document.getElementById("Up").style.backgroundColor = "red";
  }
});

document.addEventListener('keyup', function(event) {

      document.getElementById("Left").style.backgroundColor = "DarkBlue";
      document.getElementById("Right").style.backgroundColor = "DarkBlue";
      document.getElementById("Up").style.backgroundColor = "DarkBlue";
      document.getElementById("Down").style.backgroundColor = "DarkBlue";

});
