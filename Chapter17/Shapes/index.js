let cx = document.querySelector("canvas").getContext("2d");

    function trapezoid(x, y) {
      cx.beginPath();
      cx.moveTo(x, y);  // move to starting point
      cx.lineTo(x + 50, y);  // draw horizontal line to right
      cx.lineTo(x + 70, y + 50);  // right side vertical tilted line
      cx.lineTo(x - 20, y + 50);  // left side vertical tilted line
      cx.closePath();  // closing the three edges with the 4th edge
      cx.stroke();  // make the figure
    }
    trapezoid(30, 30);

    function diamond(x, y) {
      cx.save(); // save the current state of canvas
      cx.translate(x + 30, y + 30); // move the start point to a new point
      cx.rotate(Math.PI / 4);  // rotate the canvas by 45 degrees 
      cx.fillStyle = "red";  // defining the color of the fill
      cx.fillRect(-30, -30, 60, 60);  // make a rectangle with center as origin and fill it with red, parameters: (X,Y,len, breath) -> X & Y are top left cornor coordinates
      cx.restore();  // restore the change i.e. rotate it back to its original place
    }
    diamond(140, 30);

    function zigzag(x, y) {
      cx.beginPath();
      cx.moveTo(x, y);
      for (let i = 0; i < 8; i++) {
        cx.lineTo(x + 80, y + i * 8 + 4);
        cx.lineTo(x, y + i * 8 + 8);
      }
      cx.stroke();
    }
    zigzag(240, 20);

    function spiral(x, y) {
      let radius = 50, xCenter = x + radius, yCenter = y + radius;
      cx.strokeStyle = "blue"; 
      cx.beginPath();
      cx.moveTo(xCenter, yCenter);

      for (let i = 0; i < 300; i++) {
        let angle = i * Math.PI / 30; // calculate angle
        let dist = radius * i / 300;  // calculate distance
        cx.lineTo(xCenter + Math.cos(angle) * dist, yCenter + Math.sin(angle) * dist); // draw line
      }

      cx.stroke();
    }
    spiral(340, 20);

    function star(x, y) {
      let radius = 50, xCenter = x + radius, yCenter = y + radius;
      cx.fillStyle = "gold"; 
      cx.beginPath();
      cx.moveTo(xCenter + radius, yCenter);

      for (let i = 1; i <= 8; i++) {
        
        let angle = i * Math.PI / 4;
        cx.quadraticCurveTo(xCenter, yCenter, xCenter + Math.cos(angle) * radius,
                             yCenter + Math.sin(angle) * radius);
      }
      cx.closePath(); 
      cx.fill();
    }
    star(440, 20);