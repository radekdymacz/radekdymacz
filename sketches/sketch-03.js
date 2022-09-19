const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1048,1048],
  orientation: "portrait",
  // Print-ready size
  // pixelsPerInch: 300,
  animate: true,
  // You can work in 'cm', 'in' or 'px'
 // units: "px"
};

const sketch = ({ context, width, height }) => {

  const agents = [];
  const margin = 10;

  for (let i = 0; i < 40; i++) {
    agents.push(new Agent(random.range(0, width), random.range(0, height)));
  }
  
  return ({ context, width, height }) => {


    context.fillStyle = "hsl(0, 0%, 98%)";
    context.fillRect(0, 0, width, height);

    for(let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for(let j = i + 1; j < agents.length;j++){
        const other = agents[j];
        const dist = agent.getDistance(other);
    
        if (dist  >  200 ) continue  

        context.lineWidth = math.mapRange(dist,0,200,1,0.001);

        context.beginPath();
        context.moveTo(agent.pos.x,agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }

      for(let i = 0; i < agents.length; i++) { 
        context.lineWidth = 0.005 
        context.beginPath();
        context.moveTo(agent.pos.x - agent.width/2,agent.pos.y);
        context.lineTo(0, agent.pos.y);
        context.stroke();
      }

      for(let i = 0; i < agents.length; i++) { 
        context.lineWidth = 0.005
        context.beginPath();
        context.moveTo(agent.pos.x,agent.pos.y + agent.width/2);
        context.lineTo(agent.pos.x,height);
        context.stroke();
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
      agent.play(width, height);
    })

  };
};

canvasSketch(sketch, settings);


class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.radius = random.range(1, 1);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.width = random.range(1, 30);
    this.color = {
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 100),
      v: Math.floor(Math.random() * 100)
    }
  }

  getDistance(v) {
    const dx = this.pos.x - v.pos.x
    const dy = this.pos.y - v.pos.y
    return Math.sqrt(dx * dx + dy * dy);
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  play(width, height) {
    // if(this.pos.x <= 0 || this.pos.x >= width) console.log(this.pos.x);
    // if(this.pos.y <= 0 || this.pos.y >= height) console.log(this.pos.y);
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.fillStyle = 'black';
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = this.width;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
   //  context.strokeStyle = `hsl(${this.color.h},${this.color.s}% ,${this.color.v}%)`;
    context.stroke();


    context.restore();
  }
}