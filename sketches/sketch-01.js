const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;
    const size = 5;
    let x, y;

    
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        x = ix + (w + gap) * i;
        y = iy + (w + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.7) {
          context.beginPath();
          context.rect(x + off/2, y + off/2, w - off, h - off);
          context.stroke();
        } else {
          // context.beginPath();
          // context.lineWidth = Math.random() * 4;
          // context.arc(x + 30, y + 30, 20, 0, Math.PI * 2);
          // context.stroke();
        }
      }


    }
  };
};

canvasSketch(sketch, settings);
