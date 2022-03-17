/*
  dungeon battle
  main.js
*/

// get elements in document
// canvas - background layer
const backgLay = document.getElementById("backg_lay");
const backgCtx = backgLay.getContext("2d");
// canvas - character layer
const charaLay = document.getElementById("chara_lay");
const charaCtx = charaLay.getContext("2d");
// canvas - UI layer
const useriLay = document.getElementById("useri_lay");
const useriCtx = useriLay.getContext("2d");



// get resouce path
// image - background
let backImage = new Image();
backImage.src = "./img/background.png";
let fighterImage1 = new Image();
fighterImage1.src = "./img/fighter1.png";
let fighterImage2 = new Image();
fighterImage2.src = "./img/fighter2.png";
let slimeImage1 = new Image();
slimeImage1.src = "./img/slime1.png";
let slimeImage2 = new Image();
slimeImage2.src = "./img/slime2.png";
let gobImage1 = new Image();
gobImage1.src = "./img/gob1.png";
let gobImage2 = new Image();
gobImage2.src = "./img/gob2.png";
let ohakaImage = new Image();
ohakaImage.src = "./img/ohaka.png";
let zkeyImage1 = new Image();
zkeyImage1.src = "./img/pressZkey1.png";
let zkeyImage2 = new Image();
zkeyImage2.src = "./img/pressZkey2.png";



// some variables 
// for window
const gridSize = 32; // grid cell
const windowFrameSize = 12;
const windowFrameColor = "rgba(255, 255, 255, 1.0)";
const windowCenterColor = "rgba(40, 130, 80, 0.80)";
const windowStrokeColor = "rgba(40, 130, 80, 1.0)";
const windowCursorColor = "rgba(190, 140, 120, 1.0)";
let mainWindowText = ["", ""];
let statusWindowText = [""];
// for text in canvas
const textSize = 24;
const textPaddingLeft = 8;
const textColor = "rgba(255, 255, 255, 1.0)";
// for key inputs
let keyInput = [];
let keyPressed = [];
let keyPressedPrevious = [];
// for some uses
const counterMax = 100; // timeCounter counts 0 - counterMax-1
let timeCounter = 0; // time counter in game loop
let cursor = 0;
let animeCount = 0; // animation counter
// for showing character
let characterY = 160;
let fighterX = 80;
let enemyX = 400;
// for game scene
let scene = "encount";
let sceneInit = false; // Whenever scene changes, Don't forget set this true!!



// object
let CharacterObject = function (type, name, hp, image1, image2) {
  this.type = type;
  this.name = name;
  this.hp = hp;
  this.maxhp = hp;
  this.image1 = image1;
  this.image2 = image2;
};

CharacterObject.prototype.drawAnime = function (posX, posY, ctx) {
  let image = timeCounter < counterMax / 2 ? this.image1 : this.image2;
  ctx.drawImage(image, posX, posY);
};

let fighter = new CharacterObject("player", "闘士", 20, fighterImage1, fighterImage2);
let enemy = new CharacterObject("enemy", "スライム", 15, slimeImage1, slimeImage2);

let enemyData = {
  "slime": {name: "スライム", hp:  9, image1: slimeImage1, image2: slimeImage2},
  "gob"  : {name: "ちびゴブ", hp: 15, image1:   gobImage1, image2:   gobImage2}
};

// enemy moves
let enemyMove = {
  "slime":{
    func:() => {
      fighter.hp -= 2;
      mainWindowText[0] = enemy.name + "の攻撃！"
    }
  },
  "gob":{
    func:() => {
      if (enemy.hp > 5) {
        fighter.hp -= 2;
        mainWindowText[0] = enemy.name + "の攻撃！"
      }
      else {
        fighter.hp -= 4;
        mainWindowText[0] = enemy.name + "の怒りの一撃！"
      }
    }
  }
};



// Show text with window
let drawTextInWindow = function (textArray, x, y, width, ctx) {
  // window
  drawWindow(x, y, width, (textArray.length + 2) * gridSize, ctx);
  // text in window
  ctx.font = textSize + "px sans-serif"
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = textColor;
  for (let i = 0; i < textArray.length; i++){
    if (textArray[i] === null) continue;
    ctx.fillText(textArray[i], x + textPaddingLeft + windowFrameSize, y + (i + 1) * gridSize + gridSize / 2);
  }
};

let drawTextInWindowWithCursor = function (textArray, x, y, width, cursorRow, ctx) {
  // window
  drawWindow(x, y, width, (textArray.length + 2) * gridSize, ctx);
  // cursor
  if (textArray[cursorRow] != null){
    ctx.fillStyle = windowCursorColor;
    ctx.fillRect(x + windowFrameSize, y + (cursorRow + 1) * gridSize, width - 2 * windowFrameSize, gridSize);
  }
  // text in window
  ctx.font = textSize + "px sans-serif"
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = textColor;
  for (let i = 0; i < textArray.length; i++){
    if (textArray[i] === null) continue;
    ctx.fillText(textArray[i], x + textPaddingLeft + windowFrameSize, y + (i + 1) * gridSize + gridSize / 2);
  }
};

let drawTextOnGridAt = function(text, x, y, ctx) {
  ctx.font = textSize + "px sans-serif"
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillStyle = setTextColorByHp();
  ctx.fillText(text, x * gridSize, y * gridSize);
};

let drawWindow = function (x, y, w, h, ctx) {
  ctx.fillStyle = windowFrameColor;
  ctx.fillRect(x, y, w, h);
  ctx.clearRect(x + windowFrameSize, y + windowFrameSize, w - 2 * windowFrameSize, h - 2 * windowFrameSize);
  ctx.fillStyle = windowCenterColor;
  ctx.fillRect(x + windowFrameSize, y + windowFrameSize, w - 2 * windowFrameSize, h - 2 * windowFrameSize);
  ctx.lineWidth = 2.0;
  ctx.strokeStyle = windowStrokeColor;
  ctx.strokeRect(x, y, w, h);
};



// get key event
// pressed key
window.onkeydown = function (e) {
  //if (isAcceptKeyInput === false) return;
  if (e.defaultPrevented) return false;
  // read pressed key
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    if (keyInput.indexOf("u") == -1) keyInput.push("u");
  }
  if (e.code === "ArrowDown" || e.code === "KeyS") {
    if (keyInput.indexOf("d") == -1) keyInput.push("d");
  }
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    if (keyInput.indexOf("l") == -1) keyInput.push("l");
  }
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    if (keyInput.indexOf("r") == -1) keyInput.push("r");
  }
  if (e.code === "KeyZ") {
    if (keyInput.indexOf("z") == -1) keyInput.push("z");
  }
  // prevent default key input
  if (!e.metaKey && !e.shiftKey && !e.ctrlKey){
    e.preventDefault();
  }
};

// released key
window.onkeyup = function (e) {
  //if (isAcceptKeyInput === false) return;
  if (e.defaultPrevented) return false;
  // read released key
  let idx;
  if (e.code === "ArrowUp" || e.code === "KeyW") {
    idx = keyInput.indexOf("u");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowDown" || e.code === "KeyS") {
    idx = keyInput.indexOf("d");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    idx = keyInput.indexOf("l");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowRight" || e.code === "KeyD") {
    idx = keyInput.indexOf("r");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "KeyZ") {
    idx = keyInput.indexOf("z");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  // prevent default key input
  if (!e.metaKey && !e.shiftKey && !e.ctrlKey){
    e.preventDefault();
  }
};

// check if the key pressed in this loop
let isKeyPressedNow = function(key) {
  return (keyPressed.indexOf(key) != -1 && keyPressedPrevious.indexOf(key) === -1);
};



// z key animation
let zkeyAnime = function() {
  if (timeCounter < counterMax / 2) {
    useriCtx.drawImage(zkeyImage1, 560, 400);
  }
  else {
    useriCtx.drawImage(zkeyImage2, 560, 400);
  }
};



// get random integer (min ~ max)
let randInt = function(min, max) {
  let minInt = Math.ceil(min);
  let maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};



// game loop --------------------------------------------------------

let gameLoop = function() {
  // reset canvas
  charaCtx.clearRect(0,0,640,480);
  useriCtx.clearRect(0,0,640,480);
  timeCounter++;
  if (animeCount > 0) animeCount--;
  if (timeCounter > counterMax) timeCounter = 0;
  // get key input
  keyPressedPrevious = keyPressed.slice(); // storage previous key input
  keyPressed = keyInput.slice();
  //console.log(keyPressed,keyPressedPrevious);
  // text window
  drawTextInWindow(mainWindowText, 0, 352, 640, useriCtx);
  statusWindowText[0] = fighter.name + " HP：" + fighter.hp + "/" + fighter.maxhp;
  drawTextInWindow(statusWindowText, 0, 0, 640, useriCtx);
  // bunki
  if (scene === "encount") {
    encount();
  }
  else if (scene === "combat") {
    combat();
  }
  else if (scene === "wallop") {
    wallop();
  }
  else if (scene === "magic") {
    magic();
  }
  else if (scene === "enemyturn") {
    enemyturn();
  }
  else if (scene === "victory") {
    victory();
  }
  else if (scene === "defeated") {
    defeated();
  }
  else {
    /* 何も　しない */
  }
};

// scene: encount（エンカウント）
let encount = function () {
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // create new enemy
    let enemyDatakeys = Object.keys(enemyData); // make key list from enemy data
    let eKey = enemyDatakeys[randInt(0, enemyDatakeys.length - 1)]; // choose key randomly
    console.log(eKey);
    enemy = new CharacterObject(
      eKey,
      enemyData[eKey].name,
      enemyData[eKey].hp,
      enemyData[eKey].image1,
      enemyData[eKey].image2
    );
    // text
    mainWindowText[0] = enemy.name + "が立ちはだかる！"
    // anime count
    animeCount = 32;
  }
  // update
  let edx = 8 * animeCount;
  fighter.drawAnime(fighterX, characterY, charaCtx);
  enemy.drawAnime(enemyX + edx, characterY, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0){
    scene = "combat";
    sceneInit = true;
  } 
}

// scene: combat（コマンド選択）
let combat = function () {
  if (sceneInit) {
    sceneInit = false;
    mainWindowText[0] = fighter.name + "のターン";
  }
  // character animation
  fighter.drawAnime(fighterX, characterY, charaCtx);
  enemy.drawAnime(enemyX, characterY, charaCtx);
  // combat menu
  let combatMenu = ["なぐる", "まほう", "どうぐ"];
  if (isKeyPressedNow("u")) cursor--;
  if (isKeyPressedNow("d")) cursor++;
  if (cursor < 0) cursor = 2;
  if (cursor > 2) cursor = 0;
  drawTextInWindowWithCursor(combatMenu, 480, 320, 160, cursor, useriCtx);
  // press z key and change scene
  if (isKeyPressedNow("z")) {
    if (cursor === 0) { // cursor0 → なぐる
      scene = "wallop";
      sceneInit = true;
    }
    else if (cursor === 1) { // cursor1 → まほう
      scene = "magic";
      sceneInit = true;
    }
  }
};

// scene: wallop（なぐる）
let wallop = function () {
  // initial
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // deal damage
    enemy.hp -= 3;
    // text
    mainWindowText[0] = fighter.name + "の攻撃！"
    // anime count
    animeCount = 32;
  }
  // update
  // character animation
  let fdx = 0;
  let edx = 0;
  let edy = 0;
  // fighter
  if (animeCount > 16) {
    fdx = 4 * (- animeCount + 32);
  }
  else{
    fdx = 4 * animeCount;
  }
  // if enemy is killed
  if (enemy.hp <= 0) {
    edx = 12 * (- animeCount + 32);
    edy = -12 * (- animeCount + 32);
  }
  fighter.drawAnime(fighterX + fdx, characterY, charaCtx);
  enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0){
    if (enemy.hp <= 0) {
      scene = "victory";
      sceneInit = true;
    }
    else {
      scene = "enemyturn";
      sceneInit = true;
    }
  } 
};

// scene: magic（まほう）
let magic = function () {
  // initial
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // apply magic
    fighter.hp += 12;
    if (fighter.hp > fighter.maxhp) fighter.hp = fighter.maxhp;
    // text
    mainWindowText[0] = fighter.name + "のヒール！"
    // anime count
    animeCount = 32;
  }
  // update
  let fdy = 0;
  // character animation
  if (animeCount > 16) {
    fdy = -4 * (- animeCount + 32);
  }
  else {
    fdy = -4 * animeCount;
  }
  fighter.drawAnime(fighterX, characterY + fdy, charaCtx);
  enemy.drawAnime(enemyX, characterY, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0) {
    scene = "enemyturn";
    sceneInit = true;
  }
};

// scene: enemy（敵の行動）
let enemyturn = function () {
  // initial
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // enemy move
    enemyMove[enemy.type].func();
    // anime count
    animeCount = 32;
  }
  // update
  let edx = 0;
  // character animation
  if (animeCount > 16) {
    edx = -4 * (- animeCount + 32);
  }
  else {
    edx = -4 * animeCount;
  }
  fighter.drawAnime(fighterX, characterY, charaCtx);
  enemy.drawAnime(enemyX + edx, characterY, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0) {
    if (fighter.hp <= 0) {
      scene = "defeated";
      sceneInit = true;
    }
    else {
      scene = "combat";
      sceneInit = true;
    }
  }
};

// scene: victory（戦闘勝利）
let victory = function () {
  //initial
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // text 
    mainWindowText[0] = enemy.name + "に勝利した！"
  }
  fighter.drawAnime(fighterX, characterY, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0) {
    scene = "encount";
    sceneInit = true;
  }
}

// scene :defeated (負け)
let defeated = function () {
  //initial
  if (sceneInit) {
    // init flag
    sceneInit = false;
    // text 
    mainWindowText[0] = fighter.name + "は死んでしまった……";
    mainWindowText[1] = "Zキーでリトライ";
  }
  // update
  charaCtx.drawImage(ohakaImage, fighterX, characterY); // ohaka
  enemy.drawAnime(enemyX, characterY, charaCtx);
  if (animeCount === 0) zkeyAnime();
  if (isKeyPressedNow("z") && animeCount === 0) {
    mainWindowText[0] = "";
    mainWindowText[1] = "";
    fighter = new CharacterObject("player", "闘士", 20, fighterImage1, fighterImage2);
    scene = "encount";
    sceneInit = true;
  }
}

// ------------------------------------------------------------------

window.onload = function() {
  backgCtx.drawImage(backImage, 0, 0);
  console.log("a");
  scene = "encount";
  sceneInit = true;
  setInterval(gameLoop, 10);
};