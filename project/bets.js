
let sizeVar = 20
let sizeChange = 1
function setup() {
    createCanvas(400, 400);
  }

function draw() {
  background(100, 68, 227);
  fill(255)
  strokeWeight(5);
    textAlign(CENTER)

   
   
    textSize(sizeVar)
    sizeVar = sizeVar + sizeChange
    
    if(sizeVar == 120){
      sizeChange = -1
    }

    
    
  //     for (let i = 0; i<10; i = i+1) {
  //       textSize(10 + i);
  // }
    text("Bets!", 200, 200);
}