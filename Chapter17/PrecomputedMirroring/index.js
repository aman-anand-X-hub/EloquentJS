    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = 100;
    offscreenCanvas.height = 100;
    const offscreenCtx = offscreenCanvas.getContext('2d');

    const image = new Image();
    image.src = './image.png';

    image.onload = () => {
      offscreenCtx.drawImage(image, 0, 0, 100, 100);

      const imageData = offscreenCtx.getImageData(0, 0, 100, 100);
      const data = imageData.data;
      // inverting the colors in the image
      for (let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];  
        data[i + 1] = 255 - data[i + 1]; 
        data[i + 2] = 255 - data[i + 2]; 
      }
      offscreenCtx.putImageData(imageData, 0, 0);

      drawInvertedImage();
    };


    function drawInvertedImage() {
      const mainCanvas = document.getElementById('mainCanvas');
      const mainCtx = mainCanvas.getContext('2d');
    
      mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    
      const scaleFactor = 2;
      mainCtx.drawImage(offscreenCanvas, 50, 50, 100 * scaleFactor, 100 * scaleFactor);
    }
    
    