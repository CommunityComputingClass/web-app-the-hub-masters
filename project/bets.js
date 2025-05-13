
let sizeVar = 50
let sizeChange = 1
let myFont;
let votes1 = 0
let votes2 = 0
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    textFont(myFont);
    textAlign(CENTER);
    //QUESTION ONE BUTTONS
    let button1 = createButton('More than 35 sandwiches');
    button1.position(100, 400);
    button1.mousePressed(VoteCount1);
    let button2 = createButton('Less than 35 sandwiches');
    button2.position(300, 400);
    button2.mousePressed(VoteCount2);
  }
//FONT
function preload(){
  myFont = loadFont("Casino3DLinesMarquee-Italic.ttf")
}

function draw() {
  background(100, 68, 227);
  fill(255)
  strokeWeight(5);
    textAlign(CENTER)
    //BETS! SIGN
    textSize(sizeVar)
    sizeVar = sizeVar + sizeChange
    if(sizeVar == 70){
      sizeChange = -1
    }
    if(sizeVar == 50){
      sizeChange = 1
    }
  
    text("Bets!", windowWidth/2, 100);

    //QUESTION ONE TEXT
  textSize(30);
  text('How many sandwiches will be at lunch on Friday?', 85, 300, 400, 200)

  text(votes1, 160, 450);
  text(votes2, 360, 450);
  
  }
// VOTE COUNTERS
  function VoteCount1() {
    votes1 = votes1 + 1
    console.log(votes1);
    fill(255)
   
  }
  function VoteCount2() {
    votes2 = votes2 + 1
    console.log(votes2)
  }

  //