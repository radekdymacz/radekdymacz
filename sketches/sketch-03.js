const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');
const { WebMidi } = require('webmidi')

const settings = {
  // dimensions: [1080, 1080],
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
  let midiOutputs = null;
  let midiOutput = null;
  let channel = null;
  let currentNote = null;

  window.addEventListener('playNote', (e) => {

    // let notes = []
    // notes = e.detail.findOther(agents, notes);


    // console.log(notes);

    channel.sendControlChange(21, Math.floor(math.mapRange(e.detail.pos.y, 0, width, 0, 127, true)));
    channel.sendControlChange(22, Math.floor(math.mapRange(e.detail.pos.x, 0, width, 0, 127, true)));
    channel.sendControlChange(7, Math.floor(math.mapRange(e.detail.pos.x, 0, width, 0, 127, true)));
    channel.octaveOffset = Math.floor(random.range(0, 1));
    channel.playNote(e.detail.note, {
      duration: random.range(1, 3000),
      rawAttack: Math.floor(random.range(30, 127))
    });
    // e.detail.others = [];
  });

  WebMidi.enable().then(function () {

    midiOutputs = WebMidi.outputs;

    midiOutput = WebMidi.getOutputByName('IAC Driver Bus 1');
    channel = midiOutput.channels[1];
    // channel.playNote("C3", { duration: 1000 });
    // midiOutput.sendAllSoundOff();


  }).catch(err => alert(err));

  //const myOutput = WebMidi.getOutputByName("SP-404MKII");
  const notes = new Array("A2", "G2", "F2", "C4", "D4", "E4");

  for (let i = 0; i < 16; i++) {
    agents.push(new Circle(random.range(0, width), random.range(0, height), notes[Math.floor(Math.random() * notes.length)]));
  }

  return ({ context, width, height }) => {


    context.fillStyle = "hsl(0, 0%, 0%)";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for (let j = i; j < agents.length; j++) {
        const other = agents[j];
        const dist = agent.getDistance(other);

        if (dist <= 200) {
          if (!agent.connected) {
            //agent.others.push(other);
          }
          agent.connected = true;
          context.strokeStyle = 'white';
          context.lineWidth = math.mapRange(dist, 0, 200, 3, 0);
          context.beginPath();
          context.moveTo(agent.pos.x, agent.pos.y);
          context.lineTo(other.pos.x, other.pos.y);
          context.stroke();

        } else {
          agent.connected = false;
        }

      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
      agent.play(width, height, channel);
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

class Circle {
  constructor(x, y, note) {
    this.pos = new Vector(x, y);
    this.radius = random.range(3, 7);
    this.vel = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.width = random.range(1, 30);
    this.note = note;
    this.others = [];
    this.connected = false;
    this.lineWidth = 1;
    this.color = {
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 100),
      v: Math.floor(Math.random() * 100)
    }
  }

  findOther(agents, notes) {

   
  }

  currentNote(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) return this.note;
    if (this.pos.y <= 0 || this.pos.y >= height) return this.note;
  }

  getDistance(v) {
    const dx = this.pos.x - v.pos.x
    const dy = this.pos.y - v.pos.y
    return Math.sqrt(dx * dx + dy * dy);
  }

  bounce(width, height) {
    if (this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= width) this.vel.x *= -1;
    if (this.pos.y - this.radius <= 0 || this.pos.y + this.radius >= height) this.vel.y *= -1;
  }

  play(width, height, ch) {
    if (this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= width) {
      // ch.playNote(this.note, { duration: random.range(1,3000) });
      window.dispatchEvent(new CustomEvent('playNote', { detail: this }));
    }
    if (this.pos.y - this.radius <= 0 || this.pos.y + this.radius >= height) {
      window.dispatchEvent(new CustomEvent('playNote', { detail: this }))
    }
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.fillStyle = 'white';
    context.save();
    context.translate(this.pos.x, this.pos.y);
    context.lineWidth = 2;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    //context.strokeStyle = `hsl(${this.color.h},${this.color.s}% ,${this.color.v}%)`;
    context.strokeStyle = 'white';
    context.stroke();
    context.restore();
  }
}