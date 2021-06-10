
document.addEventListener('keydown', function(event) {
  var x = event.key;
  if (x === "ArrowLeft" || x === "a"){
    document.getElementById("Left").style.backgroundColor = "red";
    $.post( "/postmethod", {
      direction: "left" 
    });
    console.log('left');
  }
  else if (x == "ArrowRight" || x === "d") {
    document.getElementById("Right").style.backgroundColor = "red";
  }
  else if (x == "ArrowDown" || x === "s") {
    document.getElementById("Down").style.backgroundColor = "red";
  }
  else if (x == "ArrowUp" || x === "w") {
    document.getElementById("Up").style.backgroundColor = "red";
  }
});

document.addEventListener('keyup', function(event) {

      document.getElementById("Left").style.backgroundColor = "DarkBlue";
      document.getElementById("Right").style.backgroundColor = "DarkBlue";
      document.getElementById("Up").style.backgroundColor = "DarkBlue";
      document.getElementById("Down").style.backgroundColor = "DarkBlue";

});
