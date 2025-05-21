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

let buttons = [];
let createMissionButton;
let resetTasksButton;
let baseYOffset = 100;
let buttonSpacing = 60;
let columns = 2;
let hubCoins = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(24);

  // "Create Mission" button
  createMissionButton = createButton("Create Your Own Mission");
  createMissionButton.style('font-size', '22px');
  createMissionButton.style('padding', '15px 30px');
  createMissionButton.style('margin', '10px');
  createMissionButton.style('background-color', '#3498db');
  createMissionButton.style('color', 'white');
  createMissionButton.style('border', 'none');
  createMissionButton.style('border-radius', '8px');

  createMissionButton.mousePressed(() => {
    let newMission = prompt("Enter your new mission:");
    if (newMission) {
      missions.push(newMission);
      updateMissionButtons();
    }
  });

  // "Reset All Tasks" button
  resetTasksButton = createButton("Reset All Tasks");
  resetTasksButton.style('font-size', '22px');
  resetTasksButton.style('padding', '15px 30px');
  resetTasksButton.style('margin', '10px');
  resetTasksButton.style('background-color', '#e74c3c');
  resetTasksButton.style('color', 'white');
  resetTasksButton.style('border', 'none');
  resetTasksButton.style('border-radius', '8px');

  resetTasksButton.mousePressed(() => {
    resetAllTasks();
  });

  updateMissionButtons(); // Initial render
}

function draw() {
  background(50);

  // Display HubCoins
  fill(255, 223, 0); // gold color
  textSize(28);
  text(`💰 HubCoins: ${hubCoins}`, 30, 40);
}

function updateMissionButtons() {
  // Clear old buttons
  for (let btn of buttons) {
    btn.remove();
  }
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

  // Move buttons below the last row
  let totalRows = Math.ceil(missions.length / columns);
  let controlBtnY = baseYOffset + totalRows * buttonSpacing + 20;
  createMissionButton.position(windowWidth / 2 - 320, controlBtnY);
  resetTasksButton.position(windowWidth / 2 + 50, controlBtnY);
}

function resetAllTasks() {
  for (let btn of buttons) {
    if (btn.completed) {
      btn.completed = false;
      btn.style('background-color', '#444');
      btn.style('opacity', '1');
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateMissionButtons();
}
