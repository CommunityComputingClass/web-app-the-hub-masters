let screen = 0
let img;
let sizeVar = 50
let sizeChange = 1
let myFont;
let votes1 = 0
let votes2 = 0

let betbutton;
let missionbutton;
let button1;
let button2;
let backbutton;
let screen0btns = [betbutton, missionbutton]
let screen1btns = [button1, button2, backbutton]

//FONT
function preload(){
    myFont = loadFont("Casino3DLinesMarquee-Italic.ttf")
    img = loadImage('coins.jpg');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    textFont(myFont);
    fill(255)
    strokeWeight(5);
    textAlign(CENTER);
    imageMode(CENTER);
    console.log("screen = " + screen)
    //HOMESCREEN BUTTONS
        backbutton = createButton('Back')
        backbutton.style('width', '60px');
        backbutton.style('height', '20px')
        backbutton.position(30, 30)
       // backbutton.mousePressed();
        betbutton = createButton('Place bets');
        betbutton.style('width', '300px');
        betbutton.style('height', '40px');
        betbutton.position(windowWidth*2/3, windowHeight*3/7);
        //betbutton.mousePressed(Screen1)
        missionbutton = createButton('Missions');
        missionbutton.style('width', '300px');
        missionbutton.style('height', '40px');
        missionbutton.position(windowWidth*2/3, windowHeight*2/7)
       // missionbutton.mousePressed(Screen2)
   // }
    //QUESTION ONE BUTTONS
        button1 = createButton('More than 35 sandwiches');
        button1.position(100, 400);
        button1.mousePressed(VoteCount1);
        button2 = createButton('Less than 35 sandwiches');
        button2.position(300, 400);
        button2.mousePressed(VoteCount2);

        // showOnly(screen0btns)
    
  }

function draw() {

  console.log("screen = "+screen)

  if(screen==0){
    hideGroup(screen1btns);
    textSize(80)
    background(100, 68, 227);
    image(img, windowWidth/4, windowHeight/2);
    text("BetHub", 140, 430, 400);
    showGroup(screen0btns);
   

  }

  if(screen==1){
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
  }
  
function VoteCount1() {
    votes1 = votes1 + 1
    console.log(votes1);
    fill(255)
   
  }
function VoteCount2() {
    votes2 = votes2 + 1
    console.log(votes2)
}

function hideGroup(group) {
  for (n = 0; n < length.group; n += 1){
group[n].hide()

  }
    
}

function showGroup(group) {
  for (n = 0; n < length.group; n += 1){
group[n].show()
}

}