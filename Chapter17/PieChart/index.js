let cx = document.querySelector("canvas").getContext("2d");

    let results = [
      { count: 10, color: 'red' },
      { count: 20, color: 'green' },
      { count: 30, color: 'blue' },
      { count: 40, color: 'yellow' },
    ];

    let total = results.reduce((sum, {count}) => sum + count, 0);
    let currentAngle = -0.5 * Math.PI;
    let centerX = 300, centerY = 150;

    for (let result of results) {
      
      let sliceAngle = (result.count / total) * 2 * Math.PI; // calculate the slide angle based on its count
      cx.beginPath(); // start fresh
      cx.arc(centerX, centerY, 100, currentAngle, currentAngle + sliceAngle); // make arc
      currentAngle += sliceAngle; // update the current angle 
      cx.lineTo(centerX, centerY); // connect arc endpoints to the center of circle
      cx.fillStyle = result.color; // specify color to be filled in the arc
      cx.fill(); // fill the arc
    }