function setup() {
    createCanvas(400, 400);
    background(100, 68, 227);
  }
  
  function draw() {
    strokeWeight(2);
    fill(255)
    textSize(12 + (mouseX / width)*72);
    text("Attention, please.", 50, 200);
  }