let cx = document.querySelector("canvas").getContext("2d");

  let lastTime = null; // used to keep track of previous frame

  function frame(time) {
    if (lastTime != null) {
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    }
    lastTime = time;
    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame); // in-built function to handle animations

  let x = 100, y = 200; // starting position of the ball before floating
  let radius = 15; // radius of ball
  let speedX = 150, speedY = 150; // speed of ball 

  function updateAnimation(step) {

    cx.clearRect(0, 0, 400, 400); // clear rectrangular area of the canvas
    cx.strokeStyle = "blue"; // setting color of stroke
    cx.lineWidth = 4; // setting widht of line
    cx.strokeRect(25, 25, 350, 350); // rectrangular box
    
    x += step * speedX;
    y += step * speedY;
    // border condition to avoid ball moving out of the frame
    if (x < 25 + radius || x > 375 - radius) speedX = -speedX; // moving in opposite direction in X
    if (y < 25 + radius || y > 375 - radius) speedY = -speedY; // moving in opposite direction in Y

    cx.fillStyle = "red";
    cx.beginPath();
    cx.arc(x, y, radius, 0, 7); // draws the path of the ball
    cx.fill();
  }