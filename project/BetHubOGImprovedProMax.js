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
let screen0btns = []
let screen1btns = []

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
        backbutton.mousePressed(screen0);

        betbutton = createButton('Place bets');
        betbutton.style('width', '300px');
        betbutton.style('height', '40px');
        betbutton.position(windowWidth*2/3, windowHeight*3/7);
        betbutton.mousePressed(screen1)
        screen0btns.push(betbutton)

        missionbutton = createButton('Missions');
        missionbutton.style('width', '300px');
        missionbutton.style('height', '40px');
        missionbutton.position(windowWidth*2/3, windowHeight*2/7)
        screen0btns.push(missionbutton)
        missionbutton.mousePressed(screen2)
   // }
    //QUESTION ONE BUTTONS
        button1 = createButton('Over');
        button1.position(100, 400);
        button1.mousePressed(VoteCount1);
        button2 = createButton('Under');
        button2.position(300, 400);
        button2.mousePressed(VoteCount2);

        screen1btns.push(button1)
        screen1btns.push(button2)

        // showOnly(screen0btns)
    
  }

function draw() {

  console.log("screen = "+screen)

  if(screen==0){
    backbutton.hide()
    screen1btns[0].hide()
    screen1btns[1].hide()
    screen0btns[0].show()
    screen0btns[1].show()
    textSize(80)
    background(100, 68, 227);
    image(img, windowWidth/4, windowHeight/2);
    text("BetHub", 140, 430, 400);

  }

  if(screen==1){
    backbutton.show()
    screen0btns[0].hide()
    screen0btns[1].hide()
    screen1btns[0].show()
    screen1btns[1].show()
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
    textAlign(CENTER)
    text('Over/Under 35.5 sandwiches on Friday?', windowWidth/13, 250, 250)

    text(votes1, 160, 450);
    text(votes2, 360, 450);
    }

  if(screen==2){
    backbutton.show()
    screen0btns[0].hide()
    screen0btns[1].hide()
    screen1btns[0].hide()
    screen1btns[1].hide()
    background(100, 68, 227);
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
    console.log(group)
    group[n].hide()

  }
    
}

function showGroup(group) {
  for (n = 0; n < length.group; n += 1){
group[n].show()
}

}

function screen0() {
  screen = 0
}

function screen1() {
  screen = 1
}

function screen2() {
  screen = 2
}