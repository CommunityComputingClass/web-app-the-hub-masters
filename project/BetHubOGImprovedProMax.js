let screen = 0;
let img;
let sizeVar = 50;
let sizeChange = 1;
let myFont;
let votes1 = 0;
let votes2 = 0;

let betbutton;
let missionbutton;
let button1;
let button2;
let backbutton;

let screen0btns = [];
let screen1btns = [];

// Missions section
let buttons = [];
let createMissionButton;
let resetTasksButton;
let baseYOffset = 100;
let buttonSpacing = 60;
let columns = 2;
let hubCoins = 0;

let missions = [
  "Finish Homework",
  "Study for Test",
  "Get an A on Test",
  "Sign up for a Job",
  "Daily Shower",
  "Wash Dishes",
  "Meet with Teacher",
  "Bethub is the Best"
];

// Load font and image
function preload(){
  myFont = loadFont("Casino3DLinesMarquee-Italic.ttf");
  img = loadImage('coins.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  textFont(myFont);
  fill(255);
  strokeWeight(5);
  textAlign(CENTER);
  imageMode(CENTER);

  // Back button
  backbutton = createButton('Back');
  backbutton.style('width', '60px');
  backbutton.style('height', '20px');
  backbutton.position(30, 30);
  backbutton.mousePressed(screen0);

  // Screen 0 buttons
  betbutton = createButton('Place bets');
  betbutton.style('width', '300px');
  betbutton.style('height', '40px');
  betbutton.position(windowWidth * 2 / 3, windowHeight * 3 / 7);
  betbutton.mousePressed(screen1);
  screen0btns.push(betbutton);

  missionbutton = createButton('Missions');
  missionbutton.style('width', '300px');
  missionbutton.style('height', '40px');
  missionbutton.position(windowWidth * 2 / 3, windowHeight * 2 / 7);
  missionbutton.mousePressed(screen2);
  screen0btns.push(missionbutton);

  // Screen 1 buttons
  button1 = createButton('Over');
  button1.position(100, 400);
  button1.mousePressed(VoteCount1);

  button2 = createButton('Under');
  button2.position(300, 400);
  button2.mousePressed(VoteCount2);

  screen1btns.push(button1);
  screen1btns.push(button2);

  // Mission control buttons
  createMissionButton = createButton("Create Your Own Mission");
  styleButton(createMissionButton, '#3498db');
  createMissionButton.mousePressed(() => {
    let newMission = prompt("Enter your new mission:");
    if (newMission) {
      missions.push(newMission);
      updateMissionButtons();
    }
  });
  createMissionButton.hide();

  resetTasksButton = createButton("Reset All Tasks");
  styleButton(resetTasksButton, '#e74c3c');
  resetTasksButton.mousePressed(resetAllTasks);
  resetTasksButton.hide();

  updateMissionButtons(); // Initial mission buttons
}

function draw() {
  background(100, 68, 227);

  if (screen === 0) {
    // Front page — top right
    fill(255, 223, 0);
    textSize(28);
    textAlign(RIGHT);
    text(`💰 HubCoins: ${hubCoins}`, windowWidth - 20, 50);

    backbutton.hide();
    screen1btns.forEach(btn => btn.hide());
    screen0btns.forEach(btn => btn.show());
    createMissionButton.hide();
    resetTasksButton.hide();
    buttons.forEach(btn => btn.hide());

    image(img, windowWidth / 4, windowHeight / 2);
    textSize(80);
    textAlign(CENTER);
    fill(255);
    text("BetHub", 140, 430, 400);
  }

  else if (screen === 1) {
    // Place bets page — top right
    fill(255, 223, 0);
    textSize(28);
    textAlign(RIGHT);
    text(`💰 HubCoins: ${hubCoins}`, windowWidth - 20, 50);

    backbutton.show();
    screen0btns.forEach(btn => btn.hide());
    screen1btns.forEach(btn => btn.show());
    createMissionButton.hide();
    resetTasksButton.hide();
    buttons.forEach(btn => btn.hide());

    textSize(sizeVar);
    sizeVar += sizeChange;
    if (sizeVar === 70 || sizeVar === 50) sizeChange *= -1;
    textAlign(CENTER);
    fill(255);
    text("Bets!", windowWidth / 2, 100);

    textSize(30);
    text('Over/Under 35.5 sandwiches on Friday?', windowWidth / 13, 250, 250);
    text(votes1, 160, 450);
    text(votes2, 360, 450);
  }

  else if (screen === 2) {
    // Missions page — top center
    fill(255, 223, 0);
    textSize(28);
    textAlign(CENTER);
    text(`💰 HubCoins: ${hubCoins}`, windowWidth / 2, 50);

    backbutton.show();
    screen0btns.forEach(btn => btn.hide());
    screen1btns.forEach(btn => btn.hide());
    createMissionButton.show();
    resetTasksButton.show();
    buttons.forEach(btn => btn.show());
  }
}

function VoteCount1() {
  votes1 += 1;
}

function VoteCount2() {
  votes2 += 1;
}

function screen0() {
  screen = 0;
}

function screen1() {
  screen = 1;
}

function screen2() {
  screen = 2;
}

function updateMissionButtons() {
  buttons.forEach(btn => btn.remove());
  buttons = [];

  let perColumn = Math.ceil(missions.length / columns);

  for (let i = 0; i < missions.length; i++) {
    let col = i < perColumn ? 0 : 1;
    let row = i % perColumn;

    let x = col === 0 ? windowWidth / 10 : windowWidth / 2;
    let y = baseYOffset + row * buttonSpacing;

    let btn = createButton(missions[i]);
    btn.style('font-size', '18px');
    btn.style('padding', '10px 20px');
    btn.style('margin', '5px');
    btn.style('background-color', '#444');
    btn.style('color', 'white');
    btn.style('border', 'none');
    btn.style('border-radius', '5px');
    btn.position(x, y);
    btn.completed = false;

    btn.mousePressed(() => {
      if (!btn.completed) {
        btn.completed = true;
        hubCoins += 1;
        btn.style('background-color', '#2ecc71');
        btn.style('opacity', '0.6');
      } else {
        if (hubCoins > 0) hubCoins -= 1;
        btn.completed = false;
        btn.style('background-color', '#444');
        btn.style('opacity', '1');
      }
    });

    buttons.push(btn);
  }

  // Position the control buttons
  let totalRows = Math.ceil(missions.length / columns);
  let controlBtnY = baseYOffset + totalRows * buttonSpacing + 20;
  createMissionButton.position(windowWidth / 2 - 320, controlBtnY);
  resetTasksButton.position(windowWidth / 2 + 50, controlBtnY);
}

function resetAllTasks() {
  buttons.forEach(btn => {
    if (btn.completed) {
      btn.completed = false;
      btn.style('background-color', '#444');
      btn.style('opacity', '1');
    }
  });
}

function styleButton(btn, bgColor) {
  btn.style('font-size', '22px');
  btn.style('padding', '15px 30px');
  btn.style('margin', '10px');
  btn.style('background-color', bgColor);
  btn.style('color', 'white');
  btn.style('border', 'none');
  btn.style('border-radius', '8px');
}
