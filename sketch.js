// let bubble1;
// let bubble2;

let bubbles=[];
function setup() {
  var canvas = createCanvas(600, 400);

  canvas.parent('project')
  
//   for (let i = 0; i < 10; i++){
    
//     let x = random(width);
    
//     let y = random(height);
        
//     let r = random (10,50);
    
//     bubbles[i] = new Bubble(x,y,r);
  // }
  // bubbles [0] = new Bubble(200, 200, 40);
  // bubbles [1] = new Bubble(400, 200, 20);
}

function mouseDragged(){
  let r = random(10,40);
  // let x = random(width);
  // let y = random(height);
  let b = new Bubble(mouseX, mouseY,r);
  bubbles.push (b);
}


function draw() {
  background(0);
 
  
  for ( let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();

  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    // noFill();
    // noStroke();
    fill(random(100), random(250),random(151));
    ellipse(this.x, this.y, this.r * 2);
  }
}
