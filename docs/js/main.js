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
// canvas - transition layer
const transLay = document.getElementById("trans_lay");
const transCtx = transLay.getContext("2d");



// get resouce path
// image - background
let backImage = new Image();
backImage.src = "./img/background.png";
// image - fighter
let fighterImage1 = new Image();
let fighterImage2 = new Image();
fighterImage1.src = "./img/fighter1.png";
fighterImage2.src = "./img/fighter2.png";
// image - slime
let slimeImage1 = new Image();
let slimeImage2 = new Image();
slimeImage1.src = "./img/slime1.png";
slimeImage2.src = "./img/slime2.png";
// image - gob
let gobImage1 = new Image();
let gobImage2 = new Image();
gobImage1.src = "./img/gob1.png";
gobImage2.src = "./img/gob2.png";
// image - tree
let treeImage1 = new Image();
let treeImage2 = new Image();
treeImage1.src = "./img/tree1.png";
treeImage2.src = "./img/tree2.png";
// image - fairy
let fairyImage1 = new Image();
let fairyImage2 = new Image();
fairyImage1.src = "./img/fairy1.png";
fairyImage2.src = "./img/fairy2.png";
// image - grave
let ohakaImage = new Image();
ohakaImage.src = "./img/ohaka.png";
// image - itemselect
let itemSelectImage1 = new Image();
itemSelectImage1.src = "./img/itemselect1.png";
let itemSelectImage2 = new Image();
itemSelectImage2.src = "./img/itemselect2.png";
// image - magic:flame
let magicFlameImage = new Image();
magicFlameImage.src = "./img/magic_flame.png";
// image - magic:heal
let magicHealImage = new Image();
magicHealImage.src = "./img/magic_heal.png";
// image - magic:thunder
let magicThunderImage = new Image();
magicThunderImage.src = "./img/magic_thunder.png";
// image - cannot cast magic
let cannotCastImage = new Image();
cannotCastImage.src = "./img/cannotcast.png";
// image - status:stun
let statusStunImage = new Image();
statusStunImage.src = "./img/status_stun.png";
// image - z key animation
let zkeyImage1 = new Image();
let zkeyImage2 = new Image();
zkeyImage1.src = "./img/pressZkey1.png";
zkeyImage2.src = "./img/pressZkey2.png";
// image - merchant
let merchantImage1 = new Image();
let merchantImage2 = new Image();
merchantImage1.src = "./img/merchant1.png";
merchantImage2.src = "./img/merchant2.png";



// some variables 
// for window
const gridSize = 32; // grid cell
const windowFrameSize = 12;
const windowFrameColor = "rgba(255, 255, 255, 1.0)";
const windowCenterColor = "rgba(40, 130, 80, 0.80)";
const windowStrokeColor = "rgba(40, 130, 80, 1.0)";
const windowCursorColor = "rgba(190, 140, 120, 1.0)";
let mainWindowText = ["", "", ""];
let statusWindowText = [""];
// for text in canvas
const textSize = 24;
const textPaddingLeft = 8;
const fontFamily = '"筑紫A丸ゴシック","游ゴシック体",system-ui';
const textColor = "rgba(255, 255, 255, 1.0)";
// for key inputs
let keyInput = [];
let keyPressed = [];
let keyPressedPrevious = [];
// for some uses
const counterMax = 100; // timeCounter counts 0 - counterMax-1
let timeCounter = 0; // time counter in game loop
const combatMenu = ["なぐる", "まほう", "どうぐ"];
const shopMenu = ["かう", "はなす", "たちさる"];
let menuCursor = 0;
let animeCount = 0; // animation counter
let enemyStrategyParam = 0; // a parameter for strategy of enemy
let enemyStrategyCategory = "attack";
// for magic
let fighterMagic = ["flame", "heal", "thunder"]; // magic can be cast
let magicCursor = 0;
let fighterMp = 6;
let castMagic;
let fighterLv = 1;
let dungeonFloor = 0;
let money = 10;
// for showing character
let characterY = 128;
let fighterX = 80;
let enemyX = 432;
let hpBarY = 256;
let hpBarWidth = 128;
let HpBarHeight = 16;
// for game scene
let scene = "encount";
let sceneInit = false; // Whenever scene changes, Don't forget set this true!!
// for transition animation
let transScene = "none";
const transAnimeCountInit = 50;
let transAnimeCount = 0;
let sceneAfterTrans;



// object
class CharacterObject {
  constructor(type, name, hp, image1, image2) {
    this.type = type;
    this.name = name;
    this.hp = hp;
    this.maxhp = hp;
    this.image1 = image1;
    this.image2 = image2;
    this.status = [];
  };
  drawAnime(posX, posY, ctx) {
    let image = timeCounter < counterMax / 2 ? this.image1 : this.image2;
    ctx.drawImage(image, posX, posY);
  };
  addHp(amount) {
    this.hp += amount;
    if (this.hp > this.maxhp) this.hp = this.maxhp;
    if (this.hp < 0) this.hp = 0;
  };
  addStatus(name, amount) {
    let indexOfStatus = this.status.findIndex((elem) => elem.name === name);
    if (indexOfStatus != -1) {
      this.status[indexOfStatus].amount += amount;
      // remove if amount is 0
      if (this.status[indexOfStatus].amount === 0) {
        this.status.splice(indexOfStatus, 1);
      }
    }
    else {
      this.status.push({name: name, amount: amount});
    }
  };
  isStatusExist(name) {
    return (this.status.findIndex((elem) => elem.name === name) != -1);
  };
}


let fighter = new CharacterObject("player", "闘士", 45, fighterImage1, fighterImage2);
let enemy = new CharacterObject("enemy", "スライム", 15, slimeImage1, slimeImage2);

// enemy data
let enemyData = {
  "slime":{
    name: "スライム",
    hp: 20,
    image1: slimeImage1,
    image2: slimeImage2,
    strategy: () => {
      fighter.addHp(-7);
      mainWindowText[0] = enemy.name + "の攻撃！"
    },
  },
  "gob":{
    name: "ちびゴブ",
    hp: 25,
    image1: gobImage1,
    image2: gobImage2,
    strategy: () => {
      if (enemy.hp * 4 >= enemy.maxhp) {
        fighter.addHp(-5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！"
      }
      else {
        fighter.addHp(-15);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の怒りの一撃！"
      }
    }
  },
  "tree":{
    name: "モクモク",
    hp: 50,
    image1: treeImage1,
    image2: treeImage2,
    strategy: () => {
      enemyStrategyParam += 1;
      fighter.addHp(-Math.ceil(enemyStrategyParam));
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "の攻撃！"
    }
  },
  "fairy":{
    name: "ようせい",
    hp: 25,
    image1: fairyImage1,
    image2: fairyImage2,
    strategy: () => {
      if (enemy.hp < enemy.maxhp / 2 && enemyStrategyParam < 3) {
        enemyStrategyParam += 1;
        enemy.addHp(18);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "は回復した！";
      }
      else {
        fighter.addHp(-randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！"
      }
    }
  }
};



// magic data
let magicData = {
  "flame": {
    name: "フレイム",
    mp: 2,
    image: magicFlameImage,
    description: "炎で攻撃。自分のLvに応じてダメージ量が上昇。",
    effect: () => {
      enemy.addHp(-(15 + fighterLv));
    }
  },
  "heal": {
    name: "カイフク",
    mp: 3,
    image: magicHealImage,
    description: "自分のHPを最大HPの50%だけ回復する。",
    effect: () => {
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "thunder": {
    name: "ビリビリ",
    mp: 3,
    image: magicThunderImage,
    description: "雷で攻撃。敵にシビレ2を与える。",
    effect: () => {
      enemy.addHp(-8);
      enemy.addStatus("stun", 2);
    }
  }
};



// status image
let statusImageData = {
  "stun": statusStunImage
};



// oyakudachi info
let oyakudachiInfo = [
  ["ちびゴブはHPがピンチになると", "強い攻撃をしてくるよ。怖いねー」"],
  ["ようせいの回復行動は3回までだよー」", ""],
  ["モクモクはターン数がかかるほど", "攻撃が強くなっていくよー」"],
  ["スライム？かわいいよねー」", ""],
  ["フレイムはLvに応じて強くなるよー」", ""],
  ["敵に勝つとレベルアップ！", "最大HPとMPが増えるよー」"],
  ["シビレ状態になると動けなくなるよー」", ""],
  ["まほうを使うとMPを消費するよ", "MP切れに気をつけてねー」"]
];


// level up
let levelUp = function () {
  // level up
  fighterLv++;
  // increase maxhp
  fighter.maxhp += 4;
  fighter.addHp(4);
  // recover mp
  fighterMp += 2;
};



// Show text with window
let drawTextInWindow = function (textArray, x, y, width, ctx) {
  // window
  drawWindow(x, y, width, (textArray.length + 2) * gridSize, ctx);
  // text in window
  ctx.font = textSize + "px " + fontFamily;
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
  ctx.font = textSize + "px " + fontFamily;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = textColor;
  for (let i = 0; i < textArray.length; i++){
    if (textArray[i] === null) continue;
    ctx.fillText(textArray[i], x + textPaddingLeft + windowFrameSize, y + (i + 1) * gridSize + gridSize / 2);
  }
};

let drawTextOnGridAt = function(text, x, y, ctx) {
  ctx.font = textSize + "px " + fontFamily;
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
  if (e.code === "KeyX") {
    if (keyInput.indexOf("x") == -1) keyInput.push("x");
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
  if (e.code === "KeyX") {
    idx = keyInput.indexOf("x");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  // prevent default key input
  if (!e.metaKey && !e.shiftKey && !e.ctrlKey){
    e.preventDefault();
  }
};

// check if the key pressed in this loop
let isKeyPressedNow = function(key) {
  if (transScene != "none") return false; // トランジション中はキー入力を受け付けない
  return (keyPressed.indexOf(key) != -1 && keyPressedPrevious.indexOf(key) === -1);
};



// draw animation
let drawAnimation = function (image1, image2, posX, posY, ctx) {
  let image = timeCounter < counterMax / 2 ? image1 : image2;
  ctx.drawImage(image, posX, posY);
}



// z key animation
let zkeyAnime = function () {
  if (transScene != "none") return false; // トランジション中は表示しない
  drawAnimation(zkeyImage1, zkeyImage2, 560, 400, useriCtx);
};

// hp bar
let drawHpBar = function (characterObj, x, y, ctx) {
  // hp bar
  ctx.fillStyle = "#fff9e4";
  ctx.fillRect(x, y, hpBarWidth, HpBarHeight);
  ctx.fillStyle = "#2a2349";
  ctx.fillRect(x + 4, y + 4, hpBarWidth - 8, HpBarHeight - 8);
  ctx.fillStyle = "#7bb24e";
  if (characterObj.hp * 4 < characterObj.maxhp) ctx.fillStyle = "#c16c5b";
  ctx.fillRect(x + 4, y + 4, (hpBarWidth - 8) * characterObj.hp / characterObj.maxhp, HpBarHeight - 8);
  // text
  let hpText = characterObj.hp + "/" + characterObj.maxhp;
  ctx.font = "bold 20px " + fontFamily;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.strokeStyle = "#2a2349";
  ctx.fillStyle = "#fff9e4";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeText(hpText, x + (hpBarWidth / 2), y + HpBarHeight);
  ctx.fillText(hpText, x + (hpBarWidth / 2), y + HpBarHeight);
  // status
  ctx.font = "bold 16px " + fontFamily;
  ctx.strokeStyle = "#7d3840";
  for (let i = 0; i < characterObj.status.length; i++) {
    ctx.drawImage(statusImageData[characterObj.status[i].name], x + i * 64, y + HpBarHeight + 4);
    ctx.strokeText(characterObj.status[i].amount, x + i * 64 + 32,  y + HpBarHeight + 32);
    ctx.fillText(characterObj.status[i].amount, x + i * 64 + 32,  y + HpBarHeight + 32);
  }
};



// change scene
let setScene = function(nextscene) {
  scene = nextscene;
  sceneInit = true;
}

// set transition animation
let setTransition = function (nextscene) {
  transScene = "in";
  transAnimeCount = transAnimeCountInit;
  sceneAfterTrans = nextscene;
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
  transCtx.clearRect(0,0,640,480);
  // counter
  timeCounter++;
  if (animeCount > 0) animeCount--;
  if (timeCounter > counterMax) timeCounter = 0;
  // get key input
  keyPressedPrevious = keyPressed.slice(); // storage previous key input
  keyPressed = keyInput.slice();
  // text window
  drawTextInWindow(mainWindowText, 0, 480 - gridSize * 5, 640, useriCtx);
  statusWindowText[0] = fighter.name + " Lv." + fighterLv + "    HP " + fighter.hp + "/" + fighter.maxhp + "    MP " + fighterMp + "    " + dungeonFloor + "階    " + money + "円";
  drawTextInWindow(statusWindowText, 0, 0, 640, useriCtx);
  // scene transition
  transCtx.fillStyle = "rgba(0, 0, 0, 1.0)"; // black
  if (transScene === "in") {
    //transCtx.globalAlpha = 1.0;
    transCtx.fillRect(640 * (transAnimeCount / transAnimeCountInit), 0, 640, 480);
    transCtx.globalAlpha = 1.0 - (transAnimeCount / transAnimeCountInit);
    //transCtx.fillRect(0, 0, 640, 480);
    if (--transAnimeCount <= 0) {
      // set transition animation
      transScene = "wait";
      transAnimeCount = transAnimeCountInit;
    }
  }
  else if (transScene === "wait") {
    transCtx.fillRect(0, 0, 640, 480);
    if (--transAnimeCount <= 0) {
      // change scene
      setScene(sceneAfterTrans);
      // set transition animation
      transScene = "out";
      transAnimeCount = transAnimeCountInit;
    }
  }
  else if (transScene === "out") {
    transCtx.globalAlpha = transAnimeCount / transAnimeCountInit;
    //transCtx.fillRect(0, 0, 640, 480);
    transCtx.fillRect(0, 0, 640 * (transAnimeCount / transAnimeCountInit), 480);
    if (--transAnimeCount <= 0) {
      // finish transition
      transScene = "none";
    }
  }
  // scene
  sceneList[scene]();
};



// scene list ======================================================================

let sceneList = {

  // scene: encount（エンカウント）-----------------------------------
  "encount": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // create new enemy
      let enemyDatakeys = Object.keys(enemyData); // make key list from enemy data
      let eKey = enemyDatakeys[randInt(0, enemyDatakeys.length - 1)]; // choose key randomly
      enemy = new CharacterObject(
        eKey,
        enemyData[eKey].name,
        enemyData[eKey].hp,
        enemyData[eKey].image1,
        enemyData[eKey].image2
      );
      enemyStrategyParam = 0;
      // floor
      dungeonFloor++;
      //cursor
      menuCursor = 0;
      // text
      mainWindowText[0] = enemy.name + "が立ちはだかる！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // anime count
      animeCount = 32;
    }
    // update
    let edx = 8 * animeCount;
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0){
      setScene("combat");
    }
  },

  // scene: combat（コマンド選択）-----------------------------------
  "combat": () => {
    if (sceneInit) {
      sceneInit = false;
      mainWindowText[0] = fighter.name + "のターン";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
    }
    // character animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    // combat menu
    if (isKeyPressedNow("u")) menuCursor--;
    if (isKeyPressedNow("d")) menuCursor++;
    if (menuCursor < 0) menuCursor = 2;
    if (menuCursor > 2) menuCursor = 0;
    drawTextInWindowWithCursor(combatMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // press z key and change scene
    if (isKeyPressedNow("z")) {
      if (menuCursor === 0) { // cursor0 → なぐる
        setScene("wallop");
      }
      else if (menuCursor === 1) { // cursor1 → まほう
        setScene("magicmenu");
      }
    }
  },

  // scene: wallop（なぐる）------------------------------------------------
  "wallop": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // deal damage
      enemy.addHp(-(6 + fighterLv));
      // text
      mainWindowText[0] = fighter.name + "の攻撃！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
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
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0){
      if (enemy.hp <= 0) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    } 
  },

  // scene: magicmenu（まほうー選択）--------------------------------------------------
  "magicmenu": () => {
    if (sceneInit) {
      sceneInit = false;
    }
    // cursor
    if (isKeyPressedNow("l")) magicCursor--;
    if (isKeyPressedNow("r")) magicCursor++;
    if (magicCursor < 0) magicCursor = fighterMagic.length - 1;
    if (magicCursor >= fighterMagic.length) magicCursor = 0;
    // image
    if (timeCounter < counterMax / 2) {
      charaCtx.drawImage(itemSelectImage1, 192, 118);
    }
    else {
      charaCtx.drawImage(itemSelectImage2, 192, 118);
    }
    charaCtx.drawImage(magicData[fighterMagic[magicCursor]].image, 288, 150);
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    // magic information
    castMagic = magicData[fighterMagic[magicCursor]];
    mainWindowText[0] = castMagic.name + "    MP：" + castMagic.mp;
    mainWindowText[1] = castMagic.description;
    mainWindowText[2] = "";
    if (fighterMp < castMagic.mp) {
      mainWindowText[2] = "MPが足りない！";
      charaCtx.drawImage(cannotCastImage, 288, 150);
    }
    // cast magic
    if (isKeyPressedNow("z") && fighterMp >= castMagic.mp) {
      // consume mp
      fighterMp -= castMagic.mp;
      // change scene
      setScene("magiccast");
    }
    // cancel
    if (isKeyPressedNow("x")) {
      // back to combat menu
      setScene("combat");
    }
  },

  // scene: magicmenu（まほうー使用）--------------------------------------------------
  "magiccast": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // apply magic
      castMagic.effect();
      // text
      mainWindowText[0] = fighter.name + "は" + castMagic.name + "を使った！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // anime count
      animeCount = 32;
    }
    // update
    let fdy = 0;
    let edx = 0;
    let edy = 0;
    // character animation
    if (animeCount > 16) {
      fdy = -4 * (- animeCount + 32);
    }
    else {
      fdy = -4 * animeCount;
    }
    // if enemy is killed
    if (enemy.hp <= 0) {
      edx = 12 * (- animeCount + 32);
      edy = -12 * (- animeCount + 32);
    }
    fighter.drawAnime(fighterX, characterY + fdy, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      if (enemy.hp <= 0) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    }
  },

  // scene: enemyturn（敵のターン）------------------------------------------------
  "enemyturn": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // reset main window
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // enemy move
      if (enemy.isStatusExist("stun")) {
        mainWindowText[0] = enemy.name + "はシビレて動けない！";
        enemy.addStatus("stun", -1);
        enemyStrategyCategory = "stun";
      } 
      else {
        enemyData[enemy.type].strategy();
      }
      // anime count
      animeCount = 32;
    }
    // update
    let edx = 0;
    let edy = 0;
    // character animation
    if (enemyStrategyCategory === "attack") {
      if (animeCount > 16) {
        edx = -4 * (- animeCount + 32);
      }
      else {
        edx = -4 * animeCount;
      }
    } else if (enemyStrategyCategory === "magic") {
      if (animeCount > 16) {
        edy = -4 * (- animeCount + 32);
      }
      else {
        edy = -4 * animeCount;
      }
    }
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      if (fighter.hp <= 0) {
        setScene("defeated");
      }
      else {
        setScene("combat");
      }
    }
  },

  // scene: victory（勝利！）-------------------------------------------------------
  "victory": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // level up
      levelUp();
      // text 
      mainWindowText[0] = enemy.name + "に勝利した！"
      mainWindowText[1] = fighter.name + "はレベルが上がった！";
      mainWindowText[2] = "";
    }
    fighter.drawAnime(fighterX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setTransition("encount");
      //scene = "encount";
      //sceneInit = true;
    }
  },

  // scene: defeated（負け）--------------------------------------------------------
  "defeated": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // text 
      mainWindowText[0] = fighter.name + "は死んでしまった……";
      mainWindowText[1] = "Zキーでリトライ";
      mainWindowText[2] = "";
    }
    // update
    charaCtx.drawImage(ohakaImage, fighterX, characterY); // ohaka
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      // rebirth
      fighter = new CharacterObject("player", "闘士", 45, fighterImage1, fighterImage2);
      fighterMp = 6;
      setTransition("encount");
    }
  },

  // scene: shop（店）-------------------------------------------------------
  "shop" : () => {
    // init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // counter (buffer)
      animeCount = 8;
      // cursor
      menuCursor = 0;
      // text 
      mainWindowText[0] = "商人「いらっしゃー」";
      mainWindowText[1] = "";
      mainWindowText[2] = ""; 
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // merchant animation
    drawAnimation(merchantImage1, merchantImage2, 400, 64, charaCtx);
    // menu
    if (isKeyPressedNow("u")) menuCursor--;
    if (isKeyPressedNow("d")) menuCursor++;
    if (menuCursor < 0) menuCursor = 2;
    if (menuCursor > 2) menuCursor = 0;
    drawTextInWindowWithCursor(shopMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // scene change
    if (isKeyPressedNow("z") && animeCount === 0) {
      if (menuCursor === 0) {
        setScene("buy");
      }
      else if (menuCursor === 1) {
        setScene("dialog");
      }
      else if (menuCursor === 2) {
        setTransition("encount");
      }
    }
  },

  // scene: buy（ショップ購入）-------------------------------------------------------
  "buy": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // counter (buffer)
      animeCount = 8;
      // cursor
      menuCursor = 0;
      // text 
      mainWindowText[0] = "商人「ごめんねー、まだ実装されてないの」";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // merchant animation
    drawAnimation(merchantImage1, merchantImage2, 400, 64, charaCtx);
    // change scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setScene("shop");
    }
  },

  // scene: dialog（ショップ会話）-------------------------------------------------------
  "dialog": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // counter (buffer)
      animeCount = 8;
      // cursor
      menuCursor = 0;
      // text 
      let oyakudachiIndex = randInt(0, oyakudachiInfo.length - 1)
      mainWindowText[0] = "商人「" + oyakudachiInfo[oyakudachiIndex][0];
      mainWindowText[1] = "　　　" + oyakudachiInfo[oyakudachiIndex][1];
      mainWindowText[2] = "";
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // merchant animation
    drawAnimation(merchantImage1, merchantImage2, 400, 64, charaCtx);
    // change scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setScene("shop");
    }
  }

};

// scene list ここまで ==============================================================


window.onload = function() {
  backgCtx.drawImage(backImage, 0, 0);
  //console.log("a");
  scene = "shop";
  sceneInit = true;
  setInterval(gameLoop, 10);
};