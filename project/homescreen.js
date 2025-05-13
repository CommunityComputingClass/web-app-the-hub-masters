let img;
let myFont;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    background(100, 68, 227);
    textFont(myFont);
    textAlign(CENTER);
    imageMode(CENTER);
    image(img, 200, 400);
    background(100, 68, 227);
        image(img, windowWidth/4, windowHeight/2);
        let betbutton = createButton('Place bets');
        betbutton.style('width', '300px');
        betbutton.style('height', '40px');
        betbutton.position(windowWidth*2/3, windowHeight*3/7);
        betbutton.mousePressed(screen = screen + 1)
        let missionbutton = createButton('Missions');
        missionbutton.style('width', '300px');
        missionbutton.style('height', '40px');
        missionbutton.position(windowWidth*2/3, windowHeight*2/7)
}

function preload() {
    img = loadImage('coins.jpg');
    myFont = loadFont("Casino3DLinesMarquee-Italic.ttf")
}

function draw() {
    fill(255)
    strokeWeight(5);
    textAlign(CENTER)
    textSize(80)
    text("BetHub", 140, 430, 400);
}