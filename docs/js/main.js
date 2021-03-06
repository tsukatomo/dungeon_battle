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

// canvas - button
// canvas - transition layer
const btnLay = document.getElementById("btn");
const btnCtx = btnLay.getContext("2d");


// get resouce path
// image - background
let backImage = new Image();
backImage.src = "./img/background.png";
// image - background(chooseroom)
let bunkiBackImage = new Image();
bunkiBackImage.src = "./img/background_bunki.png";
// image - background(shop)
let shopBackImage = new Image();
shopBackImage.src = "./img/background_shop.png";
// image - background(title)
let titleBackImage = new Image();
titleBackImage.src = "./img/background_title.png";
// image - title
let titleImage = new Image();
titleImage.src = "./img/title.png";

// image - gate
let gateImage = new Image();
gateImage.src = "./img/gate.png";
// image - icon:enemy
let iconEnemyImage = new Image();
iconEnemyImage.src = "./img/icon_enemy.png";
// image - icon:shop
let iconShopImage = new Image();
iconShopImage.src = "./img/icon_shop.png";
// image - icon:gem
let iconGemImage = new Image();
iconGemImage.src = "./img/icon_gem.png";
// image - icon:fighter
let iconFighterImage1 = new Image();
iconFighterImage1.src = "./img/icon_fighter1.png";
let iconFighterImage2 = new Image();
iconFighterImage2.src = "./img/icon_fighter2.png";
// image - icon:stair
let iconStairImage = new Image();
iconStairImage.src = "./img/icon_stair.png";
// image - zkey on stair
let zkeyBaroonImage1 = new Image();
zkeyBaroonImage1.src = "./img/pressZbaroon1.png";
let zkeyBaroonImage2 = new Image();
zkeyBaroonImage2.src = "./img/pressZbaroon2.png";


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
// image - coffee
let coffeeImage1 = new Image();
let coffeeImage2 = new Image();
let coffeeImage3 = new Image();
let coffeeImage4 = new Image();
coffeeImage1.src = "./img/coffee1.png";
coffeeImage2.src = "./img/coffee2.png";
coffeeImage3.src = "./img/coffee3.png";
coffeeImage4.src = "./img/coffee4.png";
// image - fairy
let fairyImage1 = new Image();
let fairyImage2 = new Image();
fairyImage1.src = "./img/fairy1.png";
fairyImage2.src = "./img/fairy2.png";
// image - yadokarinamekuji
let yadoTsumuImage1 = new Image();
let yadoTsumuImage2 = new Image();
yadoTsumuImage1.src = "./img/yadotsumu1.png";
yadoTsumuImage2.src = "./img/yadotsumu2.png";
// image - renchin
let renchinImage1 = new Image();
let renchinImage2 = new Image();
renchinImage1.src = "./img/renchin1.png";
renchinImage2.src = "./img/renchin2.png";
// image - shieldkusa
let shieldkusaImage1 = new Image();
let shieldkusaImage2 = new Image();
shieldkusaImage1.src = "./img/shieldkusa1.png";
shieldkusaImage2.src = "./img/shieldkusa2.png";
// image - dragon
let dragonImage1 = new Image();
let dragonImage2 = new Image();
dragonImage1.src = "./img/dragon1.png";
dragonImage2.src = "./img/dragon2.png";
// image - death
let deathImage1 = new Image();
let deathImage2 = new Image();
deathImage1.src = "./img/death1.png";
deathImage2.src = "./img/death2.png";
// image - mahoslime
let mahoSlimeImage1 = new Image();
let mahoSlimeImage2 = new Image();
mahoSlimeImage1.src = "./img/mahoslime1.png";
mahoSlimeImage2.src = "./img/mahoslime2.png";
// image - merchant(boss)
let merchantBossImage1 = new Image();
let merchantBossImage2 = new Image();
let merchantBossImage3 = new Image();
let merchantBossImage4 = new Image();
merchantBossImage1.src = "./img/merchant_boss1.png";
merchantBossImage2.src = "./img/merchant_boss2.png";
merchantBossImage3.src = "./img/merchant_boss3.png";
merchantBossImage4.src = "./img/merchant_boss4.png";
// image - grave
let ohakaImage = new Image();
ohakaImage.src = "./img/ohaka.png";
let yarareImage1 = new Image();
yarareImage1.src = "./img/yarare1.png";
let yarareImage2 = new Image();
yarareImage2.src = "./img/yarare2.png";


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
// image - magic:power
let magicPowerImage = new Image();
magicPowerImage.src = "./img/magic_power.png";
// image - magic:hena
let magicHenaImage = new Image();
magicHenaImage.src = "./img/magic_hena.png";
// image - magic:shield
let magicShieldImage = new Image();
magicShieldImage.src = "./img/magic_shield.png";
// image - magic:jinx
let magicJinxImage = new Image();
magicJinxImage.src = "./img/magic_jinx.png";
// image - magic:three
let magicThreeImage = new Image();
magicThreeImage.src = "./img/magic_sansan.png";
// image - magic:burst
let magicBurstImage = new Image();
magicBurstImage.src = "./img/magic_burst.png";
// image - magic:money
let magicMoneyImage = new Image();
magicMoneyImage.src = "./img/magic_money.png";
// image - magic:regen
let magicRegenImage = new Image();
magicRegenImage.src = "./img/magic_regen.png";
// image - magic:pachi
let magicPachiImage = new Image();
magicPachiImage.src = "./img/magic_pachi.png";
// image - cannot cast magic
let cannotCastImage = new Image();
cannotCastImage.src = "./img/cannotcast.png";

// image - tool:mirror
let toolMirrorImage = new Image();
toolMirrorImage.src = "./img/tool_mirror.png";
// image - tool:apple
let toolAppleImage = new Image();
toolAppleImage.src = "./img/tool_apple.png";
// image - tool:bomb
let toolBombImage = new Image();
toolBombImage.src = "./img/tool_bomb.png";
// image - tool:potion
let toolPotionImage = new Image();
toolPotionImage.src = "./img/tool_potion.png";
// image - tool:dice
let toolDiceImage = new Image();
toolDiceImage.src = "./img/tool_dice.png";
// image - tool:battery
let toolBatteryImage = new Image();
toolBatteryImage.src = "./img/tool_battery.png";


// image - status:stun
let statusStunImage = new Image();
statusStunImage.src = "./img/status_stun.png";
// image - status:power
let statusPowerImage = new Image();
statusPowerImage.src = "./img/status_power.png";
// image - status:weak
let statusWeakImage = new Image();
statusWeakImage.src = "./img/status_weak.png";
// image - status:shield
let statusShieldImage = new Image();
statusShieldImage.src = "./img/status_shield.png";
// image - status:m_shield
let statusMShieldImage = new Image();
statusMShieldImage.src = "./img/status_magicshield.png";
// image - status:mirror
let statusMirrorImage = new Image();
statusMirrorImage.src = "./img/status_mirror.png";
// image - status:silence
let statusSilenceImage = new Image();
statusSilenceImage.src = "./img/status_silence.png";
// image - status:regen
let statusRegenImage = new Image();
statusRegenImage.src = "./img/status_regen.png";

// image - z key animation
let zkeyImage1 = new Image();
let zkeyImage2 = new Image();
zkeyImage1.src = "./img/pressZkey1.png";
zkeyImage2.src = "./img/pressZkey2.png";
// image - arrow (up)
let arrowUpImage = new Image();
arrowUpImage.src = "./img/arrow_up.png";
// image - arrow (down)
let arrowDownImage = new Image();
arrowDownImage.src = "./img/arrow_down.png";
// image - cursor
let cursorImage = new Image();
cursorImage.src = "./img/cursor.png";

// image - merchant
let merchantImage1 = new Image();
let merchantImage2 = new Image();
merchantImage1.src = "./img/merchant1.png";
merchantImage2.src = "./img/merchant2.png";
// image - merchant face
let merchantFaceImage = new Image();
merchantFaceImage.src = "./img/merchant_face.png";
// image - merchant sad
let merchantSadImage = new Image();
merchantSadImage.src = "./img/merchant_face_sad.png";
// image - merchant fury
let merchantFuryImage = new Image();
merchantFuryImage.src = "./img/merchant_face_fury.png";
// image - death face
let deathFaceImage = new Image();
deathFaceImage.src = "./img/death_face.png";

// image - gemspot
let gemSpotImage1 = new Image();
gemSpotImage1.src = "./img/gemspot1.png";
let gemSpotImage2 = new Image();
gemSpotImage2.src = "./img/gemspot2.png";
let gemSpotEmptyImage = new Image();
gemSpotEmptyImage.src = "./img/gemempty.png";
// image - whitebox
let whiteBoxImage = new Image();
whiteBoxImage.src = "./img/whitebox.png";
let doubleLuckyImage = new Image();
doubleLuckyImage.src = "./img/double_lucky.png";

// image - golden apple
let goldenAppleImage1 = new Image();
let goldenAppleImage2 = new Image();
goldenAppleImage1.src = "./img/goldenapple1.png";
goldenAppleImage2.src = "./img/goldenapple2.png";

// image - button
let buttonImage = new Image();
buttonImage.src = "./img/button.png";



// some variables 
// for window
const gridSize = 32; // grid cell
const windowFrameSize = 12;
const windowImageSize = 128;
const windowFrameColor = "rgba(255, 255, 255, 1.0)";
const windowCenterColor = "rgba(40, 130, 80, 0.80)";
const windowStrokeColor = "rgba(40, 130, 80, 1.0)";
const windowCursorColor = "rgba(190, 140, 120, 1.0)";
let windowImage = null;
let mainWindowText = ["", "", ""];
let statusWindowText = [""];
let displayWindowFlag = true;
// for text in canvas
const textSize = 22;
const textPaddingLeft = 12;
const fontFamily = '"??????A???????????????","??????????????????",system-ui';
const textColor = "rgba(255, 255, 255, 1.0)";
// for key inputs
let keyInput = [];
let keyPressed = [];
let keyPressedPrevious = [];
let keyInterval = 0;
let buttonPressed;
// for some uses
const counterMax = 100; // timeCounter counts 0 - counterMax-1
let timeCounter = 0; // time counter in game loop
let animeCount = 0; // animation counter
const combatMenu = ["?????????", "?????????", "?????????"];
const shopMenu = ["??????", "?????????", "????????????"];
const gemMenu = ["????????????", "????????????", "????????????"];
const tweetMenu = ["???????????????", "????????????", ""];
let menuCursor = 0;
let goodLuck = false;
let slainEnemy = 0;
let gameClear = false;
// for room
let roomList = [];
let room1, room2;
// for enemy
let enemyStrategyParam = 0; // a parameter for strategy of enemy
let enemyStrategyCategory = "attack";
// for magic & magic list
let fighterMagic = ["flame"]; // magic can be cast
let magicCursor = 0;
let fighterMp = 99;
let castMagic;
// for tool
let fighterTool = [];
let toolCursor = 0;
let useTool;
let obtainedTool;
let toolDropChance = 40;
// for combat
let isFighting = false;
let isStartTurn = false; // start of turn
let damageAmount = 0;
let isSansanFatal = false; // fatal with "sansan"
let isResurrection = false; // resurrection (merchant)
// for info
let fighterLv = 1;
let dungeonFloor = 0;
let money = 20;
let listTop = 0;
let listCursor = 0;
// for shop
let shopInit = false;
const numOfItem = 5;
let shopItem = [];
let shopCursor = 0;
// for showing character
const characterY = 128;
const fighterX = 80;
const enemyX = 432;
const hpBarY = 256;
const hpBarWidth = 128;
const HpBarHeight = 16;
const bigCharacterY = characterY - 64;
const dotSize = 4;
// for game scene (main/sub)
let scene = "encount";
let subScene = "none";
let sceneInit = false; // Whenever scene changes, Don't forget set this true!!
let subSceneInit = false;
// for transition animation
const transAnimeCountInit = 50;
let transAnimeCount = 0;
let sceneAfterTrans;
// for dungeon map
const dungeonWidth = 6;
const dungeonHeight = 4;
let dungeonMap = new Maze(dungeonWidth, dungeonHeight); // ref: mazegen.js
let mapWithIcon;
let fighterMapX = 1;
let fighterMapY = 1;
let fighterMapPrevX = 1;
let fighterMapPrevY = 1;
let stairMapX = dungeonWidth * 2 - 1;
let stairMapY = dungeonHeight * 2 - 1;
const wallSize = 8;
const aisleSize = 64;
const mapImageWidth = (wallSize + aisleSize) * dungeonWidth + wallSize;
const mapImageHeight = (wallSize + aisleSize) * dungeonHeight + wallSize;
const mapImageLeftTopX = (640 - mapImageWidth) / 2;
const mapImageLeftTopY = ((480 - 3 * gridSize) - mapImageHeight) / 2 + 3 * gridSize;
let mapInit = true;



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

  addStatus(tag, amount) {
    let indexOfStatus = this.status.findIndex((elem) => elem.tag === tag);
    if (indexOfStatus != -1) {
      this.status[indexOfStatus].amount += amount;
      // remove if amount is 0
      if (this.status[indexOfStatus].amount === 0) {
        this.status.splice(indexOfStatus, 1);
      }
    }
    else {
      this.status.push({tag: tag, amount: amount});
    }
  };

  isStatusExist(tag) {
    return (this.status.findIndex((elem) => elem.tag === tag) != -1);
  };

  turnStart() {
    // status: regen
    let regenIdx = this.status.findIndex((elem) => elem.tag === "regen");
    if (regenIdx != -1) {
      this.addHp(Math.floor(this.maxhp * 0.20));
    }
    // reduce buff/debuff which is categorised as a "turn_start"
    for (let i = this.status.length - 1; i >= 0; i--) {
      if (statusData[this.status[i].tag].type === "turn_start") {
        this.addStatus(this.status[i].tag, -1);
      }
    }
  };

  turnEnd() {
    // reduce buff/debuff which is categorised as a "turn_end"
    for (let i = this.status.length - 1; i >= 0; i--) {
      if (statusData[this.status[i].tag].type === "turn_end") {
        this.addStatus(this.status[i].tag, -1);
      }
    }
  };

  dealAttackDamage(opponent, amount) {
    // buff: power
    if (this.isStatusExist("power")) {
      amount *= 2;
      this.addStatus("power", -1);
    }
    // debuff: weak
    if (this.isStatusExist("weak")) {
      amount /= 2;
      this.addStatus("weak", -1);
    }
    // opponent buff: shield
    if (opponent.isStatusExist("shield")) {
      amount /= 2;
    }
    amount = Math.floor(amount)
    opponent.addHp(-Math.floor(amount));
    return amount;
  };

  dealMagicDamage(opponent, amount) {
    // buff: mirror
    if (this.isStatusExist("mirror")) {
      amount *= 2;
      this.addStatus("mirror", -1);
    }
    // opponent buff: m_shield
    if (opponent.isStatusExist("m_shield")) {
      amount /= 2;
    }
    amount = Math.floor(amount)
    opponent.addHp(-amount);
    return amount;
  };

}



let fighter = new CharacterObject("player", "??????", 45, fighterImage1, fighterImage2);
let enemy = new CharacterObject("enemy", "????????????", 15, slimeImage1, slimeImage2);

// enemy data
let enemyData = {
  "slime":{
    name: "????????????",
    hp: 16,
    image1: slimeImage1,
    image2: slimeImage2,
    floor_min: 0,
    floor_max: 0,
    strategy: () => {
      damageAmount = enemy.dealAttackDamage(fighter, 7);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "????????????";
    },
  },
  "gob":{
    name: "????????????",
    hp: 28,
    image1: gobImage1,
    image2: gobImage2,
    floor_min: 0,
    floor_max: 1,
    strategy: () => {
      if (enemy.hp * 4 >= enemy.maxhp) {
        damageAmount = enemy.dealAttackDamage(fighter, 5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 15);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "?????????????????????";
      }
    }
  },
  "coffee":{
    name: "????????????",
    hp: 36,
    image1: coffeeImage1,
    image2: coffeeImage2,
    floor_min: 1,
    floor_max: 1,
    strategy: () => {
      if (!enemy.isStatusExist("shield")) {
        enemy.image1 = coffeeImage1;
        enemy.image2 = coffeeImage2;
      }
      if (enemyStrategyParam === 0 && enemy.hp * 2 <= enemy.maxhp) {
        enemy.addStatus("shield", 2);
        enemy.addStatus("m_shield", 2);
        enemyStrategyParam = 1;
        enemy.image1 = coffeeImage3;
        enemy.image2 = coffeeImage4;
        enemyStrategyCategory = "none";
        mainWindowText[0] = enemy.name + "??????????????????????????????"
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, enemy.isStatusExist("shield") ? randInt(6, 10) : randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
    }
  },
  "tree":{
    name: "????????????",
    hp: 50,
    image1: treeImage1,
    image2: treeImage2,
    floor_min: 1,
    floor_max: 1,
    strategy: () => {
      enemyStrategyParam += 1;
      damageAmount = enemy.dealAttackDamage(fighter, enemyStrategyParam);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "????????????";
    }
  },
  "fairy":{
    name: "????????????",
    hp: 40,
    image1: fairyImage1,
    image2: fairyImage2,
    floor_min: 2,
    floor_max: 2,
    strategy: () => {
      if (enemy.hp < enemy.maxhp / 2 && enemyStrategyParam < 3) {
        enemyStrategyParam += 1;
        enemy.addHp(15);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "??????????????????";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
    }
  },
  "yadotsumu":{
    name: "????????????",
    hp: 80,
    floor_min: 2,
    floor_max: 2,
    image1: yadoTsumuImage1,
    image2: yadoTsumuImage2,
    strategy: () => {
      if (enemyStrategyParam % 3 === 1) {
        enemyStrategyParam += 1;
        fighter.addStatus("weak", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????????????????";
        mainWindowText[1] = "???????????????????????????????????????";
      }
      else {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 13);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
    }
  },
  "renchin":{
    name: "????????????",
    hp: 120,
    image1: renchinImage1,
    image2: renchinImage2,
    floor_min: 3,
    floor_max: 3,
    strategy: () => {
      if (enemyStrategyParam % 6 === 5) {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 7);
        fighter.addStatus("stun", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "??????????????????";
      }
      else if (enemyStrategyParam % 2 === 1) {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 12);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "???????????????????????????";
      }
      else {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
    }
  },
  "shieldkusa":{
    name: "????????????",
    hp: 90,
    image1: shieldkusaImage1,
    image2: shieldkusaImage2,
    floor_min: 2,
    floor_max: 2,
    strategy: () => {
      if (enemyStrategyParam++ % 2 === 0) {
        if (randInt(0, 1) === 1) {
          enemy.addStatus("shield", 2);
          mainWindowText[0] = enemy.name + "????????????????????????????????????????????????";
        }
        else {
          enemy.addStatus("m_shield", 2);
          mainWindowText[0] = enemy.name + "????????????????????????????????????????????????";
        }
        enemyStrategyCategory = "none";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 12);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "????????????";
      }
    }
  },
  "dragon":{
    name: "????????????",
    hp: 156,
    image1: dragonImage1,
    image2: dragonImage2,
    floor_min: 3,
    floor_max: 3,
    strategy: () => {
      if (enemy.hp * 2 <= enemy.maxhp && (!enemy.isStatusExist("power"))) {
        enemyStrategyParam = 1;
        enemy.addStatus("power", 99);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "???????????????????????????";
      }
      else {
        if (enemyStrategyParam % 3 === 0) {
          damageAmount = enemy.dealAttackDamage(fighter, 7);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "????????????????????????";
        }
        else if (enemyStrategyParam % 3 === 1) {
          enemyStrategyCategory = "none";
          mainWindowText[0] = enemy.name + "????????????????????????????????????";
          
        }
        else {
          damageAmount = enemy.dealAttackDamage(fighter, 20);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "??????????????????????????????";
        }
        enemyStrategyParam++;
      }
    }
  },
  "death": {
    name: "????????????",
    hp: 160,
    image1: deathImage1,
    image2: deathImage2,
    floor_min: 3,
    floor_max: 3,
    strategy: () => {
      enemyStrategyParam++;
      if (enemyStrategyParam >= 7) {
        enemy.dealAttackDamage(fighter, 999999);
        enemyStrategyCategory = "attack";
        windowImage = deathFaceImage;
        mainWindowText[0] = "??????????????????";
      }
      else {
        enemyStrategyCategory = "none";
        windowImage = deathFaceImage;
        mainWindowText[0] = "???" + (7 - enemyStrategyParam) + "?????????";
      }
    }
  },
  "mahoslime": {
    name: "????????????",
    hp: 96,
    image1: mahoSlimeImage1,
    image2: mahoSlimeImage2,
    floor_min: 2,
    floor_max: 3,
    strategy: () => {
      if (enemyStrategyParam === 0) {
        enemyStrategyParam++;
        fighter.addStatus("silence", 3);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "??????????????????????????????";
        mainWindowText[1] = fighter.name + "?????????????????????????????????";
      }
      else if (enemyStrategyParam === 1 && enemy.hp * 2 <= enemy.maxhp) {
        enemyStrategyParam++;
        enemy.addHp(Math.floor(enemy.maxhp / 2));
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "??????????????????????????????";
      }
      else if (enemyStrategyParam === 2 && enemy.hp * 2 <= enemy.maxhp) {
        enemyStrategyParam++;
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "??????????????????????????????";
        mainWindowText[1] = "????????????????????????MP??????????????????";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 8);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "???" + fighter.name + "?????????????????????";
      }
    }
  },
  // ???????????????????????????????????????????????????????????????????????????
  "merchant":{
    name:"??????",
    hp: 200,
    image1: merchantBossImage3,
    image2: merchantBossImage4,
    floor_min: 4,
    floor_max: 99,
    strategy: () => {
      // before resurrection
      if (isResurrection === true) {
        if (enemy.hp <= 0){
          isResurrection = false;
          enemyStrategyParam = 0;
          enemy.addHp(200);
          enemyStrategyCategory = "none";
          enemy.image1 = merchantBossImage1;
          enemy.image2 = merchantBossImage2;
          windowImage = merchantFuryImage;
          mainWindowText[0] = "???????????????????????????????????????????????????????????????";
        }
        else if (enemy.hp * 2 <= enemy.maxhp && enemyStrategyParam === 0) {
          enemyStrategyParam = 1;
          if (fighterMp > 10) {
            enemy.addStatus("m_shield", 4);
          }
          else {
            enemy.addStatus("shield", 4);
          }
          windowImage = merchantSadImage;
          enemyStrategyCategory = "none";
          mainWindowText[0] = "???????????????????????????????????????????????????"  
        }
        else {
          damageAmount = enemy.dealAttackDamage(fighter, randInt(12, 16));
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "????????????";
        }
      }
      // after resurrection
      else {
        if (enemyStrategyParam % 3 === 0) {
          damageAmount = enemy.dealAttackDamage(fighter, 26);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "????????????";
        }
        else if (enemyStrategyParam % 3 === 1) {
          enemy.addStatus("m_shield", 2);
          fighter.addStatus("weak", 1);
          enemyStrategyCategory = "magic";
          mainWindowText[0] = enemy.name + "???????????????????????????????????????????????????";
        }
        else {
          enemy.addStatus("power", 1);
          enemyStrategyCategory = "none";
          windowImage = merchantFuryImage;
          mainWindowText[0] = "?????????????????????????????????????????????";
        }
        enemyStrategyParam++;
      }
    }
  }
};



// magic data
let magicData = {
  "flame": {
    name: "????????????",
    mp: 3,
    image: magicFlameImage,
    description: "????????????????????????Lv???????????????????????????????????????",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 8 + (fighterLv * 2));
    }
  },
  "heal": {
    name: "????????????",
    mp: 5,
    image: magicHealImage,
    description: "??????HP???50%??????????????????",
    effect: () => {
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "thunder": {
    name: "????????????",
    mp: 4,
    image: magicThunderImage,
    description: "???????????????50%??????????????????3?????????????????????????????????",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 6 + fighterLv);
      if (randInt(0, 1) === 1) return;
      enemy.addStatus("stun", 3);
    }
  },
  "power": {
    name: "????????????",
    mp: 3,
    image: magicPowerImage,
    description: "??????2?????????????????????????????????2???????????????",
    effect: () => {
      fighter.addStatus("power", 2);
    }
  },
  "hena": {
    name: "????????????",
    mp: 2,
    image: magicHenaImage,
    description: "??????????????????????????????????????????3??????????????????",
    effect: () => {
      enemy.addStatus("weak", 3);
    }
  },
  "shield": {
    name: "????????????",
    mp: 3,
    image: magicShieldImage,
    description: "5????????????????????????????????????????????????????????????",
    effect: () => {
      fighter.addStatus("shield", 5);
    }
  },
  "jinx": {
    name: "????????????",
    mp: 5,
    image: magicJinxImage,
    description: "????????????????????????????????????????????????????????????",
    effect: () => {
      let isDebuffExist = false;
      for (let i = 0; i < enemy.status.length; i++) {
        isDebuffExist |= !statusData[enemy.status[i].tag].isBuff;
      }
      if (isDebuffExist) {
        damageAmount = fighter.dealMagicDamage(enemy, 50 + (fighterLv * 2));
      }
      else {
        damageAmount = fighter.dealMagicDamage(enemy, 5);
      }
    }
  },
  "sansan": {
    name: "????????????",
    mp: 3,
    image: magicThreeImage,
    description: "??????3???????????????????????????????????????Lv????????????1????????????",
    effect: () => {
      damageAmount = 3;
      enemy.addHp(-damageAmount);
      if (enemy.hp <= 0 && isResurrection === false) {
        isSansanFatal = true;
      }
    }
  },
  "burst": {
    name: "????????????",
    mp: "ALL",
    image: magicBurstImage,
    description: "???????????????MP???????????????????????????????????????",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, fighterMp * 6);
    }
  },
  "money": {
    name: "????????????",
    mp: 3,
    image: magicMoneyImage,
    description: "????????????50%????????????????????????????????????????????????20%?????????",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, Math.floor(money * 0.50));
      money = Math.floor(money * 0.80);
    }
  },
  "regen": {
    name: "????????????",
    mp: 7,
    image: magicRegenImage,
    description: "???????????????????????????HP???20%??????????????????4??????????????????",
    effect: () => {
      fighter.addStatus("regen", 4);
    }
  },
  "pachi": {
    name: "????????????",
    mp: 1,
    image: magicPachiImage,
    description: "??????????????????80%??????????????????????????????????????????",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 4);
      if (randInt(0, 99) < 20) return;
      enemy.addStatus("stun", 1);
    }
  }
};



// tool data
let toolData = {
  "mirror": {
    name: "????????????",
    image: toolMirrorImage,
    description: "????????????????????????????????????????????????2???????????????",
    isAvailableFromList: false,
    effect: () => {
      fighter.addStatus("mirror", 1);
    }
  },
  "fruit": {
    name: "????????????",
    image: toolAppleImage,
    description: "??????HP???50%??????????????????",
    isAvailableFromList: true,
    effect: () => {
      if (fighter.hp === fighter.maxhp) {
        // increase maxhp
        fighter.maxhp += 6;
        fighter.addHp(6);
      }
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "bomb": {
    name: "????????????",
    image: toolBombImage,
    isAvailableFromList: false,
    description: "??????25????????????????????????????????????",
    effect: () => {
      damageAmount = 25
      enemy.addHp(-damageAmount);
      mainWindowText[1] = enemy.name + "???" + damageAmount + "??????????????????????????????";
    }
  },
  "potion": {
    name: "????????????",
    image: toolPotionImage,
    isAvailableFromList: true,
    description: "MP +5???",
    effect: () => {
      fighterMp += 5;
    }
  },
  "dice": {
    name: "????????????",
    image: toolDiceImage,
    isAvailableFromList: false,
    description: "???????????????????????????????????????????????????MP?????????????????????",
    effect: () => {
      if (fighterMagic.length === 0) {
        mainWindowText[1] = "???????????????????????????????????????";
        return;
      }
      let randomMagic = fighterMagic[randInt(0, fighterMagic.length - 1)];
      magicData[randomMagic].effect();
      mainWindowText[1] = magicData[randomMagic].name + "??????????????????";
      if (damageAmount > 0) {
        mainWindowText[2] = enemy.name + "???" + damageAmount + "??????????????????????????????";
      }
    }
  },
  "battery": {
    name: "????????????",
    image: toolBatteryImage,
    isAvailableFromList: false,
    description: "??????3?????????????????????????????????",
    effect: () => {
      enemy.addStatus("stun", 3);
    }
  }
};



// status data
let statusData = {
  "stun": {
    name: "?????????",
    image: statusStunImage,
    isBuff: false,
    type: "turn_end"
  },
  "power": {
    name: "?????????",
    image: statusPowerImage,
    isBuff: true,
    type: "stack"
  },
  "weak": {
    name: "????????????",
    image: statusWeakImage,
    isBuff: false,
    type: "stack"
  },
  "shield": {
    name: "????????????",
    image: statusShieldImage,
    isBuff: true,
    type: "turn_start"
  },
  "m_shield": {
    name: "?????????????????????",
    image: statusMShieldImage,
    isBuff: true,
    type: "turn_start"
  },
  "mirror": {
    name: "?????????",
    image: statusMirrorImage,
    isBuff: true,
    type: "stack"
  },
  "silence": {
    name: "????????????",
    image: statusSilenceImage,
    isBuff: false,
    type: "turn_end"
  },
  "regen": {
    name: "????????????",
    image: statusRegenImage,
    isBuff: true,
    type: "turn_start"
  }
};



// oyakudachi info
// ?????????2?????????????????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????????????????
// ????????????????????????????????????????????????????????????????????????????????????
let oyakudachiInfo = [
  ["???????????????HP????????????????????????", "????????????????????????????????????????????????"],
  ["???????????????????????????????????????", ""],
  ["????????????????????????????????????Lv+5????????????", ""],
  ["????????????????????????????????????", "??????HP???MP?????????????????????"],
  ["?????????????????????MP??????????????????", "MP?????????????????????????????????"],
  ["??????????????????MP???1??????????????????", ""],
  ["??????????????????????????????????????????", "??????????????????????????????"],
  ["??????????????????????????????????????????", "S?????????????????????????????????????????????"],
  ["A?????????????????????????????????????????????", "????????????????????????"],
  ["HP?????????????????????????????????????????????", "??????HP?????????????????????"],
  ["????????????????????????????????????????????????", "2???????????????????????????????????????"],
  ["?????????????????????????????????????????????", "??????????????????????????????"],
  ["???????????????????????????Lv????????????", "???????????????????????????"],
];



// room icon data
let roomIconData = {
  "encount": iconEnemyImage,
  "shop": iconShopImage,
  "gemspotin" : iconGemImage
};



// initialize param
let initParam = function () {
  fighter = new CharacterObject("player", "??????", 45, fighterImage1, fighterImage2);
  fighterMp = 6;
  fighterMagic = ["flame"];
  fighterTool = [{tag: "fruit", amount: 1}];
  fighterLv = 1;
  dungeonFloor = 0;
  money = 50;
  toolDropChance = 40;
  slainEnemy = 0;
  shopInit = true;
  mapInit = true;
  gameClear = false;
};



// level up
let levelUp = function () {
  // level up
  fighterLv++;
  // increase maxhp
  fighter.maxhp += 4;
  fighter.addHp(4);
  // recover mp
  fighterMp += 1;
};



// add tool to fighter
let addTool = function (tag, amount) {
  let indexOfStatus = fighterTool.findIndex((elem) => elem.tag === tag);
  if (indexOfStatus != -1) {
    fighterTool[indexOfStatus].amount += amount;
    // remove if amount is 0 or less
    if (fighterTool[indexOfStatus].amount <= 0) {
      fighterTool.splice(indexOfStatus, 1);
    }
  }
  else {
    fighterTool.push({tag: tag, amount: amount});
  }
};

// check if tool is exist
let isToolExist = function (tag) {
  return fighterTool.findIndex((elem) => elem.tag === tag) != -1;
};



// create map
let createDungeonMap = function () {
  let numList;
  // make maze
  dungeonMap.createMazeWithDFS();
  // copy maze to mapWithIcon
  mapWithIcon = dungeonMap.map;
  // break a horizontal wall (flavor)
  // - create 0 to ((MapW - 1) * MapH) num list
  numList = new Array(dungeonWidth * (dungeonHeight - 1)).fill().map((_, i) => i);
  // - make a wall into an aisle
  while (numList.length > 0) {
    let num = numList.splice(randInt(0, numList.length - 1), 1);
    let x = (num % dungeonWidth) * 2 + 1;
    let y = Math.floor(num / dungeonWidth) * 2 + 2;
    if (mapWithIcon[x][y] === WALL){
      mapWithIcon[x][y] = AISLE;
      break;
    }
  }
  // put map icon randomly
  // - create 1 to (MapW * MapH - 2) num list
  numList = new Array(dungeonWidth * dungeonHeight - 2).fill().map((_, i) => i + 1);
  // - room icon list
  let roomList = ["encount", "encount", "encount", "encount", "shop", "gemspotin", "gemspotin"];
  // - put icons
  while (roomList.length > 0) {
    // - pick a num and an icon
    let num = numList.splice(randInt(0, numList.length - 1), 1);
    let icon = roomList.pop();
    // - put an icon
    mapWithIcon[(num % dungeonWidth) * 2 + 1][Math.floor(num / dungeonWidth) * 2 + 1] = icon;
  }
  // set position of fighter and stair
  fighterMapX = (dungeonFloor % 2 === 1) ? 1 : 2 * dungeonWidth - 1;
  fighterMapY = (dungeonFloor % 2 === 1) ? 1 : 2 * dungeonHeight - 1;
  stairMapX = (dungeonFloor % 2 === 1) ? 2 * dungeonWidth - 1 : 1;
  stairMapY = (dungeonFloor % 2 === 1) ? 2 * dungeonHeight - 1 : 1;
};

let createFinalMap = function () {
  // reset map
  mapWithIcon = new Array(dungeonWidth * 2 + 1);
  for (let i = 0; i < mapWithIcon.length; i++) {
    mapWithIcon[i] = new Array(dungeonHeight * 2 + 1).fill(WALL);
  }
  // define fixed map
  let finalMap =  [
    "0000000000000",
    "0111000000000",
    "0011000000000",
    "000b000111110",
    "0001101111110",
    "000111111g110",
    "0000001111110",
    "0000000111110",
    "0000000000000",
  ];
  // decode
  for (let y = 0; y < dungeonHeight * 2 + 1; y++){
    for (let x = 0; x < dungeonWidth * 2 + 1; x++) {
      switch (finalMap[y][x]) {
        case 'b':
          mapWithIcon[x][y] = "encount";
          break;
        case 'g':
          mapWithIcon[x][y] = "gemspotin";
          break;
        case '1':
          mapWithIcon[x][y] = AISLE;
          break;
        case '0':
          mapWithIcon[x][y] = WALL;
          break;
        default:
          mapWithIcon[x][y] = WALL;
          break;
      }
    }
  }
  // set position of fighter and stair
  fighterMapX = 2 * dungeonWidth - 1;
  fighterMapY = 2 * dungeonHeight - 1;
  stairMapX = 1;
  stairMapY = 1;
};

// ??????????????????????????????????????????????????????
let mapIndex2RectX = function (x) {
  let rectX = x % 2 == 0 ? (wallSize + aisleSize) * (x / 2)
    : (wallSize + aisleSize) * ((x - 1) / 2) + wallSize;
  rectX += mapImageLeftTopX;
  return rectX;
};

let mapIndex2RectY = function (y) {
  rectY = y % 2 == 0 ? (wallSize + aisleSize) * (y / 2)
    : (wallSize + aisleSize) * ((y - 1) / 2) + wallSize;
  rectY += mapImageLeftTopY;
  return rectY;
};



// Show text with window
let drawTextInWindow = function (image, textArray, x, y, width, ctx) {
  // window
  drawWindow(x, y, width, (textArray.length + 2) * gridSize, ctx);
  // text in window
  ctx.font = textSize + "px " + fontFamily;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.fillStyle = textColor;
  if (image === null){
    for (let i = 0; i < textArray.length; i++){
      if (textArray[i] === null) continue;
      ctx.fillText(textArray[i], x + textPaddingLeft + windowFrameSize, y + (i + 1) * gridSize + gridSize / 2);
    }
  }
  else {
    ctx.drawImage(image, x + textPaddingLeft / 2 + windowFrameSize, y + ((textArray.length + 2) * gridSize - windowImageSize) / 2);
    for (let i = 0; i < textArray.length; i++){
      if (textArray[i] === null) continue;
      ctx.fillText(textArray[i], x + textPaddingLeft + windowFrameSize + windowImageSize, y + (i + 1) * gridSize + gridSize / 2);
    }
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

let drawTextOnGridAt = function (text, x, y, ctx) {
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
  if (e.code === "ArrowUp" || e.code === "KeyK") {
    if (keyInput.indexOf("u") == -1) keyInput.push("u");
  }
  if (e.code === "ArrowDown" || e.code === "KeyJ") {
    if (keyInput.indexOf("d") == -1) keyInput.push("d");
  }
  if (e.code === "ArrowLeft" || e.code === "KeyH") {
    if (keyInput.indexOf("l") == -1) keyInput.push("l");
  }
  if (e.code === "ArrowRight" || e.code === "KeyL") {
    if (keyInput.indexOf("r") == -1) keyInput.push("r");
  }
  if (e.code === "KeyZ" || e.code === "Enter") {
    if (keyInput.indexOf("z") == -1) keyInput.push("z");
  }
  if (e.code === "KeyX") {
    if (keyInput.indexOf("x") == -1) keyInput.push("x");
  }
  if (e.code === "KeyA") {
    if (keyInput.indexOf("a") == -1) keyInput.push("a");
  }
  if (e.code === "KeyS") {
    if (keyInput.indexOf("s") == -1) keyInput.push("s");
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
  if (e.code === "ArrowUp" || e.code === "KeyK") {
    idx = keyInput.indexOf("u");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowDown" || e.code === "KeyJ") {
    idx = keyInput.indexOf("d");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowLeft" || e.code === "KeyH") {
    idx = keyInput.indexOf("l");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "ArrowRight" || e.code === "KeyL") {
    idx = keyInput.indexOf("r");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "KeyZ" || e.code === "Enter") {
    idx = keyInput.indexOf("z");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "KeyX") {
    idx = keyInput.indexOf("x");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "KeyA") {
    idx = keyInput.indexOf("a");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  if (e.code === "KeyS") {
    idx = keyInput.indexOf("s");
    if (idx != -1) keyInput.splice(idx, 1);
  }
  // prevent default key input
  if (!e.metaKey && !e.shiftKey && !e.ctrlKey){
    e.preventDefault();
  }
};



// get touch event
let buttonList = {
  "u": { x:  24, y: 24 },
  "d": { x:  24, y: 72 },
  "l": { x:   0, y: 48 },
  "r": { x:  48, y: 48 },
  "z": { x: 136, y: 48 },
  "x": { x: 112, y: 72 },
  "a": { x:  88, y: 48 },
  "s": { x: 112, y: 24 }
};

let pushButton = function(evt) {
  evt.preventDefault();
  //console.log("touch start!");
  // ?????????????????????????????????
  const touches = evt.changedTouches;
  // btnLay????????????????????????
  const btnLayRect = evt.target.getBoundingClientRect();
  for (let i = 0; i < touches.length; i++) {
    //console.log("client:", touches[i].clientX, touches[i].clientY);
    //console.log("page:", touches[i].pageX, touches[i].pageY);
    //console.log("screen:", touches[i].screenX, touches[i].screenY);
    // ??????????????????btnLay???????????????????????????????????????
    const viewX = touches[i].clientX - btnLayRect.left;
    const viewY = touches[i].clientY - btnLayRect.top;
    // ???????????????????????????btnLay??????????????????????????????
    const ratioX = btnLay.width / btnLay.clientWidth;
    const ratioY = btnLay.height / btnLay.clientHeight;
    // ?????????????????????????????????????????????btnLay?????????????????????
    const canvX = Math.floor(viewX * ratioX);
    const canvY = Math.floor(viewY * ratioY);
    //console.log("canvas:", canvX, canvY);
    // ??????????????????????????????????????????
    buttonPressed = "";
    const buttonKeys = Object.keys(buttonList);
    for (let i = 0; i < buttonKeys.length; i++) {
      if (canvX < buttonList[buttonKeys[i]].x || buttonList[buttonKeys[i]].x + 24 < canvX) continue;
      if (canvY < buttonList[buttonKeys[i]].y || buttonList[buttonKeys[i]].y + 24 < canvY) continue;
      buttonPressed = buttonKeys[i];
      break;
    }
    console.log("pressed:", buttonPressed);
    if (buttonPressed === "") return;
    // ????????????????????????????????????
    if (keyInput.indexOf(buttonPressed) == -1) keyInput.push(buttonPressed);
  }
};

let releaseButton = function(evt) {
  // ???????????????????????????????????????
  idx = keyInput.indexOf(buttonPressed);
  if (idx != -1) keyInput.splice(idx, 1);
};

let cancelButton = function(evt) {
  // ???????????????????????????????????????
  idx = keyInput.indexOf(buttonPressed);
  if (idx != -1) keyInput.splice(idx, 1);
};

btnLay.addEventListener("touchstart", pushButton, false);
btnLay.addEventListener("touchend", releaseButton, false);
btnLay.addEventListener("touchcancel", cancelButton, false);

// check if the key pressed in this loop
let isKeyPressedNow = function(key) {
  if (subScene != "none") return false; // ??????????????????????????????????????????????????????
  return (keyPressed.indexOf(key) != -1 && keyPressedPrevious.indexOf(key) === -1);
};

// check if the key pressed in this loop (in sub scene)
let isKeyPressedNowSub = function(key) {
  return (keyPressed.indexOf(key) != -1 && keyPressedPrevious.indexOf(key) === -1);
};

// get key function (with interval)
let isKeyPressedInterval = function(key) {
  if (keyInterval > 0) return false;
  if (keyPressed.indexOf(key) != -1) {
    // reset key interval
    keyInterval = 20;
    return true;
  };
  return false;
};



// draw animation
let drawAnimation = function (image1, image2, posX, posY, ctx) {
  let image = timeCounter < counterMax / 2 ? image1 : image2;
  ctx.drawImage(image, posX, posY);
}

// fix coordinate into dot size
let fixCoordinate = function (num) {
  return dotSize * Math.floor(num / dotSize);
}



// z key animation
let zkeyAnime = function () {
  if (subScene != "none") return false; // ????????????????????????????????????
  drawAnimation(zkeyImage1, zkeyImage2, 560, 400, useriCtx);
};

// z key animation (in sub scene)
let zkeyAnimeSub = function () {
  drawAnimation(zkeyImage1, zkeyImage2, 560, 400, useriCtx);
};



// hp bar
let drawHpBar = function (characterObj, x, y, ctx) {
  // status
  ctx.font = "bold 16px " + fontFamily;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff9e4";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#7d3840";
  for (let i = 0; i < characterObj.status.length; i++) {
    ctx.drawImage(statusData[characterObj.status[i].tag].image, x + i * 40, y + HpBarHeight + 4);
    ctx.strokeText(characterObj.status[i].amount, x + i * 40 + 32,  y + HpBarHeight + 32);
    ctx.fillText(characterObj.status[i].amount, x + i * 40 + 32,  y + HpBarHeight + 32);
  }
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
  ctx.fillStyle = "#fff9e4";
  ctx.strokeStyle = "#2a2349";
  ctx.strokeText(hpText, x + (hpBarWidth / 2), y + HpBarHeight);
  ctx.fillText(hpText, x + (hpBarWidth / 2), y + HpBarHeight);
};



// change scene
let setScene = function(nextscene) {
  scene = nextscene;
  sceneInit = true;
};

// change sub scene
let setSubScene = function(nextscene) {
  subScene = nextscene;
  subSceneInit = true;
};

// set transition animation
let setTransition = function (nextscene) {
  subScene = "transin";
  transAnimeCount = transAnimeCountInit;
  sceneAfterTrans = nextscene;
};



/* defined in "mazegen.js"
// get random integer (min ??? n ??? max)
let randInt = function(min, max) {
  let minInt = Math.ceil(min);
  let maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
*/

// share to twitter
let tweet = function () {
  // reset key inputs
  keyInput.length = 0;
  // create tweet message
  let tweetmes;
  if (gameClear) {
    tweetmes = "?????????????????????????????????\n"
  }
  else {
    tweetmes = dungeonFloor + "??????" + enemy.name + "?????????????????????\n"
  }
  tweetmes += "&url=https://tsukatomo.github.io/dungeon_battle";
  tweetmes += "&hashtags=???????????????????????????";
  const url = "https://twitter.com/intent/tweet?text=" + tweetmes;
  window.open(url, '_blank');
  //window.location.href = url; // ?????????????????????????????????
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
  keyInterval--;
  // text window
  if (scene != "title" && scene != "map") {
    drawTextInWindow(windowImage, mainWindowText, 0, 480 - gridSize * 5, 640, useriCtx);
  }
  // info window
  if (scene != "title") {
    statusWindowText[0] = fighter.name + " Lv." + fighterLv + "    HP " + fighter.hp + "/" + fighter.maxhp + "    MP " + fighterMp + "    " + dungeonFloor + "???    " + money + "???";
    drawTextInWindow(null, statusWindowText, 0, 0, 640, useriCtx);
  }
  // a key: show magic list
  if (isKeyPressedNow("a") && subScene === "none" && scene != "title") {
    setSubScene("magiclist");
  }
  // s key: show magic list
  if (isKeyPressedNow("s") && subScene === "none" && scene != "title") {
    setSubScene("toollist");
  }
  // scene
  sceneList[scene]();
  // sub scene
  subSceneList[subScene]();
};



// scene list ======================================================================

let sceneList = {
  // scene: title??????????????????----------------------------------------
  "title": () => {
    if (sceneInit) {
      sceneInit = false;
      // initialize parameters of fighter
      initParam();
      // draw background
      backgCtx.drawImage(titleBackImage, 0, 0);
      animeCount = 64;
    }
    fighter.drawAnime(fighterX, 224, charaCtx);
    charaCtx.drawImage(titleImage, 192, fixCoordinate(18 - (animeCount * animeCount / 100) * 4)); 
    if (isKeyPressedNow("z")) {
      setTransition("map");
    }
  },

  // scene: map?????????????????????----------------------------------------
  "map": () => {
    // init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // if mapInit, create dungeon map
      if (mapInit) {
        mapInit = false;
        dungeonFloor++;
        if (dungeonFloor === 4) { // final floor
          createFinalMap();
        }
        else {
          createDungeonMap();
        }
      }
      // draw background
      backgCtx.fillStyle = "#32535f";
      backgCtx.fillRect(0, 0, 640, 480);
      // draw dungeon map
      for (let x = 0; x < mapWithIcon.length; x++) {
        for (let y = 0; y < mapWithIcon[x].length; y++) {
          if (mapWithIcon[x][y] != WALL) {
            backgCtx.fillStyle = "#2a2349";
          }
          else {
            backgCtx.fillStyle = "#4180a0";
          }
          let rectX, rectY, rectW, rectH;
          // calculate drawing position x
          rectX = mapIndex2RectX(x);
          // calculate drawing position y
          rectY = mapIndex2RectY(y);
          // calculate drawing Size
          rectW = x % 2 == 0 ? wallSize : aisleSize;
          // calculate drawing height
          rectH = y % 2 == 0 ? wallSize : aisleSize;
          backgCtx.fillRect(rectX, rectY, rectW, rectH);
          if (mapWithIcon[x][y] != WALL && mapWithIcon[x][y] != AISLE) {
            backgCtx.drawImage(roomIconData[mapWithIcon[x][y]], rectX, rectY);
          }
        }
      }
      backgCtx.drawImage(iconStairImage, mapIndex2RectX(stairMapX), mapIndex2RectY(stairMapY));
    }
    // update
    displayWindowFlag = false;
    let drawX = mapIndex2RectX(fighterMapPrevX) + ((mapIndex2RectX(fighterMapX) - mapIndex2RectX(fighterMapPrevX)) / 8 * (8 - animeCount));
    let drawY = mapIndex2RectY(fighterMapPrevY) + ((mapIndex2RectY(fighterMapY) - mapIndex2RectY(fighterMapPrevY)) / 8 * (8 - animeCount));
    drawAnimation(iconFighterImage1, iconFighterImage2, drawX, drawY, charaCtx);
    if ((stairMapX === fighterMapX) && (stairMapY === fighterMapY)) {
      drawAnimation(zkeyBaroonImage1, zkeyBaroonImage2, mapIndex2RectX(stairMapX) + 64, mapIndex2RectY(stairMapY) - 32, charaCtx);
    }
    // move player
    if (subScene === "none" && animeCount <= 0) {
      fighterMapPrevX = fighterMapX;
      fighterMapPrevY = fighterMapY;  
      if (isKeyPressedInterval("u") && (mapWithIcon[fighterMapX][fighterMapY - 1] != WALL)) {
        animeCount = 8;
        fighterMapY -= 2;
      }
      else if (isKeyPressedInterval("d") && (mapWithIcon[fighterMapX][fighterMapY + 1] != WALL)) {
        animeCount = 8;
        fighterMapY += 2;
      }
      else if (isKeyPressedInterval("l") && (mapWithIcon[fighterMapX - 1][fighterMapY] != WALL)) {
        animeCount = 8;
        fighterMapX -= 2;
      }
      else if (isKeyPressedInterval("r") && (mapWithIcon[fighterMapX + 1][fighterMapY] != WALL)) {
        animeCount = 8;
        fighterMapX += 2;
      }
      // go to next scene
      if (mapWithIcon[fighterMapX][fighterMapY] != AISLE) {
        setTransition(mapWithIcon[fighterMapX][fighterMapY]);
        mapWithIcon[fighterMapX][fighterMapY] = AISLE;
      }
      // go to next floor
      if (isKeyPressedNow("z") && (stairMapX === fighterMapX) && (stairMapY === fighterMapY)) {
        mapInit = true;
        if (dungeonFloor < 4) {
          setTransition("map");
        }
        else {
          setTransition("clear");
        }
      }
    }
  },
  
  // scene: encount????????????????????????-----------------------------------
  "encount": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // create new enemy
      const enemyDatakeys = Object.keys(enemyData); // make key list from enemy data
      let encountList = enemyDatakeys.filter( e => {
        return (enemyData[e].floor_min <= dungeonFloor && dungeonFloor <= enemyData[e].floor_max)
      });
      if (slainEnemy < 2 && dungeonFloor < 2) { // ?????????????????????2????????????1F???????????????????????????????????????
        encountList = ["slime", "gob"];
      }
      console.log(encountList);
      //const eKey = "slime"; // ???????????????????????????
      let eKey = encountList[randInt(0, encountList.length - 1)]; // choose key randomly
      enemy = new CharacterObject(
        eKey,
        enemyData[eKey].name,
        enemyData[eKey].hp,
        enemyData[eKey].image1,
        enemyData[eKey].image2
      );
      enemyStrategyParam = 0;
      // cursor
      menuCursor = 0;
      // fighting flag
      isFighting = true;
      // text (and merchant special)
      isResurrection = false;
      windowImage = null;
      mainWindowText[0] = enemy.name + "????????????????????????"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      if (eKey === "merchant") {
        isResurrection = true;
        windowImage = merchantFaceImage;
        mainWindowText[0] = "???????????????????????????????????????????????????";
      }
      // start turn flag
      isStartTurn = true;
      // anime count
      animeCount = 32;
      // draw background
      backgCtx.drawImage(backImage, 0, 0);
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

  // scene: stunned???????????????????????????????????????--------------------------------
  "stunned": () => {
    if (sceneInit) {
      sceneInit = false;
      if (isStartTurn) {
        fighter.turnStart();
        isStartTurn = false;
      }
      windowImage = null;
      mainWindowText[0] = fighter.name + "??????????????????????????????";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
    }
    // character animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    // next scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0){
      fighter.turnEnd();
      setScene("enemyturn");
    }
  },

  // scene: combat????????????????????????-----------------------------------
  "combat": () => {
    if (sceneInit) {
      sceneInit = false;
      if (isStartTurn) {
        isStartTurn = false;
        fighter.turnStart();
        damageAmount = 0;
      }
      windowImage = null;
      mainWindowText[0] = fighter.name + "????????????";
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
      if (menuCursor === 0) { // cursor0 ??? ?????????
        setScene("wallop");
      }
      else if (menuCursor === 1) { // cursor1 ??? ?????????
        if (fighterMagic.length <= 0) {
          mainWindowText[0] = "??????????????????????????????";
        }
        else {
          setScene("magicmenu");
        }
      }
      else if (menuCursor === 2) { // cursor2 ??? ?????????
        if (fighterTool.length <= 0) {
          mainWindowText[0] = "??????????????????????????????";
        }
        else {
          setScene("toolmenu");
        }
      }
    }
  },

  // scene: wallop???????????????------------------------------------------------
  "wallop": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // deal damage
      damageAmount = fighter.dealAttackDamage(enemy, 5 + fighterLv);
      // increase mp
      fighterMp += 1;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "????????????"
      mainWindowText[1] = enemy.name + "???" + damageAmount + "??????????????????????????????";
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
    if (enemy.hp <= 0 && isResurrection === false) {
      edx = 12 * (- animeCount + 32);
      edy = -12 * (- animeCount + 32);
    }
    fighter.drawAnime(fighterX + fdx, characterY, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0){
      fighter.turnEnd();
      if (enemy.hp <= 0 && isResurrection === false) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    } 
  },

  // scene: magicmenu????????????????????????--------------------------------------------------
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
    windowImage = null;
    mainWindowText[0] = castMagic.name + "    ??????MP " + castMagic.mp;
    mainWindowText[1] = castMagic.description;
    mainWindowText[2] = "";
    if (fighter.isStatusExist("silence")) {
      mainWindowText[2] = "?????????????????????????????????";
      charaCtx.drawImage(cannotCastImage, 288, 150);
    }
    else if (castMagic.mp != "ALL") {
      if (fighterMp < castMagic.mp) {
        mainWindowText[2] = "MP??????????????????";
        charaCtx.drawImage(cannotCastImage, 288, 150);
      }
    }
    // cast magic
    if (isKeyPressedNow("z")) {
      // change scene
      if (!fighter.isStatusExist("silence")) {
        if (castMagic.mp === "ALL") {
          setScene("magiccast");
        }
        else if (fighterMp >= castMagic.mp) {
          setScene("magiccast");
        }
      }
    }
    // cancel
    if (isKeyPressedNow("x")) {
      // back to combat menu
      setScene("combat");
    }
  },

  // scene: magicmenu????????????????????????--------------------------------------------------
  "magiccast": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // apply magic
      damageAmount = 0;
      castMagic.effect();
      // consume mp
      if (castMagic.mp === "ALL") {
        fighterMp = 0; // consume ALL MP
      }
      else {
        fighterMp -= castMagic.mp;
      }
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "???" + castMagic.name + "???????????????"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      if (damageAmount > 0) {
        mainWindowText[1] = enemy.name + "???" + damageAmount + "??????????????????????????????";
      }
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
    if (enemy.hp <= 0 && isResurrection === false) {
      edx = 12 * (- animeCount + 32);
      edy = -12 * (- animeCount + 32);
    }
    fighter.drawAnime(fighterX, characterY + fdy, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      fighter.turnEnd();
      if (enemy.hp <= 0 && isResurrection === false) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    }
  },


  // scene: toolmenu????????????????????????--------------------------------------------------
  "toolmenu": () => {
    if (sceneInit) {
      sceneInit = false;
      if (toolCursor >= fighterTool.length) {
        toolCursor = fighterTool.length - 1;
      }
    }
    // cursor
    if (isKeyPressedNow("l")) toolCursor--;
    if (isKeyPressedNow("r")) toolCursor++;
    if (toolCursor < 0) toolCursor = fighterTool.length - 1;
    if (toolCursor >= fighterTool.length) toolCursor = 0;
    // image
    if (timeCounter < counterMax / 2) {
      charaCtx.drawImage(itemSelectImage1, 192, 118);
    }
    else {
      charaCtx.drawImage(itemSelectImage2, 192, 118);
    }
    charaCtx.drawImage(toolData[fighterTool[toolCursor].tag].image, 288, 150);
    fighter.drawAnime(fighterX, characterY, charaCtx);
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    // tool information
    useTool = toolData[fighterTool[toolCursor].tag];
    windowImage = null;
    mainWindowText[0] = useTool.name + "    ????????? " + fighterTool[toolCursor].amount;
    mainWindowText[1] = useTool.description;
    mainWindowText[2] = "";
    // use tool
    if (isKeyPressedNow("z")) {
      // consume tool
      addTool(fighterTool[toolCursor].tag, -1);
      // change scene
      setScene("tooluse");
    }
    // cancel
    if (isKeyPressedNow("x")) {
      // back to combat menu
      setScene("combat");
    }
  },

  // scene: tooluse????????????????????????--------------------------------------------------
  "tooluse": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "???" + useTool.name + "???????????????"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // apply tool
      useTool.effect();
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
    if (enemy.hp <= 0 && isResurrection === false) {
      edx = 12 * (- animeCount + 32);
      edy = -12 * (- animeCount + 32);
    }
    fighter.drawAnime(fighterX, characterY + fdy, charaCtx);
    enemy.drawAnime(enemyX + edx, characterY + edy, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      fighter.turnEnd();
      if (enemy.hp <= 0 && isResurrection === false) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    }
  },
  
  // scene: enemyturn?????????????????????------------------------------------------------
  "enemyturn": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // effect at start of turn
      enemy.turnStart();
      // reset amount of damage
      damageAmount = 0;
      // reset main window
      windowImage = null;
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // enemy move
      if (enemy.hp <= 0) {
        enemy.status.length = 0;
      }
      if (enemy.isStatusExist("stun")) {
        mainWindowText[0] = enemy.name + "??????????????????????????????";
        enemyStrategyCategory = "stun";
      } 
      else {
        enemyData[enemy.type].strategy();
        if (damageAmount > 0) {
          mainWindowText[1] = fighter.name + "???" + damageAmount + "??????????????????????????????";
        }
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
      // effect at end of turn
      enemy.turnEnd();
      // change scene
      if (fighter.hp <= 0) {
        setScene("defeated");
      }
      else if (fighter.isStatusExist("stun")){
        setScene("stunned");
      }
      else {
        // start turn flag
        isStartTurn = true;
        setScene("combat");
      }
    }
  },

  // scene: victory???????????????-------------------------------------------------------
  "victory": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // level up
      levelUp();
      if (isSansanFatal) { // ??????????????????????????????????????????????????????
        isSansanFatal = false;
        levelUp();
      }
      // gain money
      let gainMoney = randInt(20, 30);
      money += gainMoney;
      // obtain item
      if (randInt(0, 99) < toolDropChance) {
        toolDropChance -= 20;
        const toolDataKeys = Object.keys(toolData);
        obtainedTool = toolDataKeys[randInt(0, toolDataKeys.length - 1)];
        addTool(obtainedTool, 1);
      }
      else {
        obtainedTool = "none";
        toolDropChance += 20;
      }
      // increment slain counter
      slainEnemy++;
      // clear status
      fighter.status = [];
      // text 
      windowImage = null;
      mainWindowText[0] = enemy.name + "??????????????????"
      mainWindowText[1] = fighter.name + "????????????????????????";
      mainWindowText[2] = gainMoney + "???????????????";
      if (obtainedTool != "none") {
        mainWindowText[2] = gainMoney + "??????" + toolData[obtainedTool].name + "????????????"
      }
    }
    fighter.drawAnime(fighterX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    // show obtained tool on whitebox
    if (obtainedTool != "none") {
      charaCtx.drawImage(whiteBoxImage, 256, 120);
      charaCtx.drawImage(toolData[obtainedTool].image, 288, 152);
    }
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      isFighting = false;
      setTransition("map");
    }
  },

  // scene: defeated????????????--------------------------------------------------------
  "defeated": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // text 
      windowImage = null;
      mainWindowText[0] = fighter.name + "??????????????????????????????";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      menuCursor = 0;
    }
    // update
    drawAnimation(yarareImage1, yarareImage2, fighterX + 32, characterY, charaCtx); // ohaka
    enemy.drawAnime(enemyX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    drawHpBar(enemy, enemyX, hpBarY, useriCtx);
    // menu
    if (isKeyPressedNow("u") && animeCount === 0) menuCursor--;
    if (isKeyPressedNow("d") && animeCount === 0) menuCursor++;
    if (menuCursor < 0) menuCursor = 1;
    if (menuCursor > 1) menuCursor = 0;
    drawTextInWindowWithCursor(tweetMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // press z key
    if (isKeyPressedNow("z") && animeCount === 0) {
      if (menuCursor === 0) {
        isFighting = false;
        setTransition("title");
      }
      else {
        tweet();
      }
    }
  },

  // scene: shop?????????-------------------------------------------------------
  "shop" : () => {
    // init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // draw background
      backgCtx.drawImage(bunkiBackImage, 0, 0);
      // counter (buffer)
      animeCount = 8;
      // text 
      windowImage = merchantFaceImage;
      mainWindowText[0] = "????????????????????????";
      mainWindowText[1] = "";
      mainWindowText[2] = ""; 
      // shop initialize
      if (shopInit) {
        shopInit = false;
        mainWindowText[0] = "????????????????????????";
        // add shop items
        // - make key list
        let magicDataKeys = Object.keys(magicData);
        let toolDataKeys = Object.keys(toolData);
        // - remove magics that the fighter can use
        for (let i = 0; i < fighterMagic.length; i++) {
          magicDataKeys.splice(magicDataKeys.indexOf(fighterMagic[i]), 1);
        }
        // - shuffle magic key list
        for (let i = 0; i < magicDataKeys.length; i++) {
          let j = randInt(i, magicDataKeys.length - 1);
          [magicDataKeys[i], magicDataKeys[j]] = [magicDataKeys[j], magicDataKeys[i]]; 
        }
        // - tinretsu
        let numOfMagic = (magicDataKeys.length > 3) ? 3 : magicDataKeys.length;
        for (let i = 0; i < numOfMagic; i++) {
          let item = magicDataKeys.pop();
          shopItem[i] = {item: item, category: "magic", price: randInt(40, 50)};
        }
        for (let i = numOfMagic; i < numOfItem; i++) {
          let item = toolDataKeys[randInt(0, toolDataKeys.length - 1)];
          shopItem[i] = {item: item, category: "tool", price: randInt(20, 30)};
        }
        // reset cursor
        menuCursor = 0;
      }
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
        setTransition("buy");
      }
      else if (menuCursor === 1) {
        setScene("dialog");
      }
      else if (menuCursor === 2) {
        shopInit = true; // ????????????????????????
        setTransition("map");
      }
    }
  },

  // scene: buy????????????????????????-------------------------------------------------------
  "buy": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // draw background
      backgCtx.drawImage(shopBackImage, 0, 0);
      // cursor
      shopCursor = 0;
      // text 
      windowImage = null;
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
    }
    // update
    // move cursor
    if (subScene === "none") {
      if (isKeyPressedInterval("l") && shopCursor > 0) shopCursor--;
      if (isKeyPressedInterval("r") && shopCursor < numOfItem - 1) shopCursor++;
    }
    // show items
    for (let i = 0; i < numOfItem; i++) {
      let itemX = fixCoordinate(320 / numOfItem + (640 / numOfItem) * i - 32);
      if (shopItem[i].category === "magic") {
        charaCtx.drawImage(magicData[shopItem[i].item].image, itemX, 180);
      }
      else if (shopItem[i].category === "tool") {
        charaCtx.drawImage(toolData[shopItem[i].item].image, itemX, 180);
      }
    }
    // show price
    charaCtx.font = "bold 24px " + fontFamily;
    charaCtx.textAlign = "center";
    charaCtx.textBaseline = "middle";
    charaCtx.fillStyle = "#fff9e4";
    charaCtx.lineWidth = 4;
    charaCtx.lineCap = "round";
    charaCtx.lineJoin = "round";
    charaCtx.strokeStyle = "#2a2349";
    for (let i = 0; i < numOfItem; i++) {
      if (shopItem[i].category != "none") {
        if (shopItem[i].price <= money) {
          charaCtx.fillStyle = "#fff9e4";
        } else {
          charaCtx.fillStyle = "#e89973";
        }
        let itemX = 320 / numOfItem + (640 / numOfItem) * i;
        charaCtx.strokeText(shopItem[i].price + "???", itemX, 260);
        charaCtx.fillText(shopItem[i].price + "???", itemX, 260);
      }
    }
    // show cursor
    let cursorX = fixCoordinate(320 / numOfItem + (640 / numOfItem) * shopCursor - 32);
    let cursorY = (timeCounter < 50) ? 108 : 104;
    charaCtx.drawImage(cursorImage, cursorX, cursorY);
    // show item info
    let itemOnCursor = shopItem[shopCursor];
    let toolAmount;
    windowImage = null;
    if (itemOnCursor.category === "magic") {
      mainWindowText[0] = magicData[itemOnCursor.item].name + "    ??????MP " + magicData[itemOnCursor.item].mp;
      mainWindowText[1] = magicData[itemOnCursor.item].description;
      mainWindowText[2] = "[z]??????";
    }
    else if (itemOnCursor.category === "tool") {
      if (isToolExist(itemOnCursor.item)) {
        toolAmount = fighterTool[fighterTool.findIndex((elem) => elem.tag === itemOnCursor.item)].amount;
      }
      else {
        toolAmount = 0;
      }
      mainWindowText[0] = toolData[itemOnCursor.item].name + "    ????????? " + toolAmount;
      mainWindowText[1] = toolData[itemOnCursor.item].description;
      mainWindowText[2] = "[z]??????";
    }
    else if (itemOnCursor.category === "none") {
      mainWindowText[0] = "???????????????"
      mainWindowText[1] = ""
      mainWindowText[2] = "";
    }
    // buying
    if (isKeyPressedNow("z") && itemOnCursor.category != "none") {
      if (itemOnCursor.price <= money) { // afford
        // pay
        money -= itemOnCursor.price;
        if (itemOnCursor.category === "magic") {// add to magic list
          fighterMagic.push(itemOnCursor.item);
        }
        else if (itemOnCursor.category === "tool") {
          addTool(itemOnCursor.item, 1);
        }
        // remove from shop item list
        shopItem[shopCursor] = {item: null, category: "none", price: null};
        // sub scene
        setSubScene("afford");
      }
      else { // not afford
        // sub scene
        setSubScene("notafford");
      }
    }
    // change scene
    if (isKeyPressedNow("x") && animeCount === 0) {
      setTransition("shop");
    }
  },

  // scene: dialog????????????????????????-------------------------------------------------------
  "dialog": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // counter (buffer)
      animeCount = 8;
      // text 
      windowImage = merchantFaceImage;
      let oyakudachiIndex = randInt(0, oyakudachiInfo.length - 1)
      mainWindowText[0] = "???" + oyakudachiInfo[oyakudachiIndex][0];
      mainWindowText[1] = "???" + oyakudachiInfo[oyakudachiIndex][1];
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

  // scene: gemspotin???????????????????????? - ?????????-----------------------------------------
  "gemspotin": () => {
    if (sceneInit) {
      sceneInit = false;
      animeCount = 8;
      windowImage = null;
      mainWindowText[0] = "??????????????????????????????????????????????????????";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      backgCtx.drawImage(backImage, 0, 0);
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // gem animation
    drawAnimation(gemSpotImage1, gemSpotImage2, 400, 64, charaCtx);
    // next scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setScene("gemspot");
    }
  },

  // scene: gemspot???????????????????????? - ???????????????--------------------------------------------
  "gemspot": () => {
    if (sceneInit) {
      sceneInit = false;
      menuCursor = 0;
      windowImage = null;
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
    }
    // update
    // gem menu
    if (isKeyPressedNow("u")) menuCursor--;
    if (isKeyPressedNow("d")) menuCursor++;
    if (menuCursor < 0) menuCursor = 2;
    if (menuCursor > 2) menuCursor = 0;
    drawTextInWindowWithCursor(gemMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // show description
    if (menuCursor === 0) { // ????????????
      mainWindowText[0] = "???????????????????????????????????????";
      mainWindowText[1] = "??????HP???50%????????????";
    }
    else if (menuCursor === 1) { // ????????????
      mainWindowText[0] = "????????????????????????????????????";
      mainWindowText[1] = "MP +5???";
    }
    else { // ????????????
      mainWindowText[0] = "???????????????????????????";
      mainWindowText[1] = "????????????????????????????????????";
    }
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // gem animation
    drawAnimation(gemSpotImage1, gemSpotImage2, 400, 64, charaCtx);
    // next scene
    if (isKeyPressedNow("z") && animeCount === 0) {
      if (menuCursor === 0) {
        setScene("gemheal");
      }
      else if (menuCursor === 1) {
        setScene("gemmagic");
      }
      else {
        setScene("gemcraft");
      }
    }
  },

  // scene: gemheal???????????????????????? - ???????????????----------------------------------------
  "gemheal": () => {
    if (sceneInit) {
      sceneInit = false;
      // heal hp
      fighter.addHp(Math.floor(fighter.maxhp / 2));
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "???HP???????????????";
      mainWindowText[1] = "???????????????";
      mainWindowText[2] = "";
      // animation
      animeCount = 8;
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // gem animation
    charaCtx.drawImage(gemSpotEmptyImage, 400, 64);
    // next scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setTransition("map");
    }
  },

  // scene: gemmagic???????????????????????? - ???????????????----------------------------------------
  "gemmagic": () => {
    if (sceneInit) {
      sceneInit = false;
      // add MP
      fighterMp += 5;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "???MP???????????????";
      mainWindowText[1] = "???????????????";
      mainWindowText[2] = "";
      // animation
      animeCount = 8;
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // gem animation
    charaCtx.drawImage(gemSpotEmptyImage, 400, 64);
    // next scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setTransition("map");
    }
  },

  // scene: gemheal???????????????????????? - ???????????????----------------------------------------
  "gemcraft": () => {
    if (sceneInit) {
      sceneInit = false;
      // undameshi
      goodLuck = (randInt(0, 4) === 0);
      // get random tool
      const toolDataKeys = Object.keys(toolData);
      obtainedTool = toolDataKeys[randInt(0, toolDataKeys.length - 1)];
      addTool(obtainedTool, (goodLuck) ? 2 : 1);
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "???" + toolData[obtainedTool].name + "???" + ((goodLuck) ? "2???" : "") + "???????????????";
      mainWindowText[1] = "???????????????";
      mainWindowText[2] = "";
      // animation
      animeCount = 8;
    }
    // update
    // fighter animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    // gem animation
    charaCtx.drawImage(gemSpotEmptyImage, 400, 64);
    // show crafted tool on whitebox
    charaCtx.drawImage(whiteBoxImage, 256, 120);
    charaCtx.drawImage(toolData[obtainedTool].image, 288, 152);
    if (goodLuck) {
      charaCtx.drawImage(doubleLuckyImage, 256, 120);
    }
    // next scene
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setTransition("map");
    }
  },

  // scene:clear??????????????????----------------------------------------------------
  "clear": () => {
    if (sceneInit) {
      sceneInit = false;
      // background
      backgCtx.drawImage(backImage, 0, 0);
      // clear flag
      gameClear = true;
      // text
      windowImage = merchantFaceImage;
      mainWindowText[0] = "?????????????????????????????????";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // buffer
      animeCount = 16;
    }
    fighter.drawAnime(fighterX, characterY, charaCtx);
    drawAnimation(merchantBossImage3, merchantBossImage4, enemyX, characterY, charaCtx);
    drawAnimation(goldenAppleImage1, goldenAppleImage2, 256, characterY, charaCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      setScene("cleartweetmenu");
    }
  },

  "cleartweetmenu": () => {
    if (sceneInit) {
      sceneInit = false;
      menuCursor = 0;
    }
    // animation
    fighter.drawAnime(fighterX, characterY, charaCtx);
    drawAnimation(merchantBossImage3, merchantBossImage4, enemyX, characterY, charaCtx);
    drawAnimation(goldenAppleImage1, goldenAppleImage2, 256, characterY, charaCtx);
    // menu
    if (isKeyPressedNow("u")) menuCursor--;
    if (isKeyPressedNow("d")) menuCursor++;
    if (menuCursor < 0) menuCursor = 1;
    if (menuCursor > 1) menuCursor = 0;
    drawTextInWindowWithCursor(tweetMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // press z key
    if (isKeyPressedNow("z")) {
      if (menuCursor === 0) {
        setTransition("title");
      }
      else {
        tweet();
      }
    }
  }
};

// scene list ???????????? ==============================================================

// sub scene =======================================================================

let subSceneList = {

  // sub scene: transin?????????????????????????????????
  "transin": () => {
    // init
    if (subSceneInit){
      subSceneInit = false;
      transAnimeCount = transAnimeCountInit;
    }
    // update
    //transCtx.globalAlpha = 1.0;
    transCtx.fillStyle = "rgba(0, 0, 0, 1.0)"; // black
    transCtx.fillRect(640 * (transAnimeCount / transAnimeCountInit), 0, 640, 480);
    //transCtx.globalAlpha = 1.0 - (transAnimeCount / transAnimeCountInit);
    //transCtx.fillRect(0, 0, 640, 480);
    if (--transAnimeCount <= 0) {
      // set transition animation
      setSubScene("transwait");
    }
  },

  // sub scene: transwait?????????????????????????????????
  "transwait": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = transAnimeCountInit;
    }
    // update
    transCtx.fillStyle = "rgba(0, 0, 0, 1.0)"; // black
    transCtx.fillRect(0, 0, 640, 480);
    if (--transAnimeCount <= 0) {
      // change scene
      setScene(sceneAfterTrans);
      // set transition animation
      setSubScene("transout");
    }
  },

  // sub scene: transout?????????????????????????????????
  "transout": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = transAnimeCountInit;
    }
    // update
    transCtx.fillStyle = "rgba(0, 0, 0, 1.0)"; // black
    //transCtx.globalAlpha = transAnimeCount / transAnimeCountInit;
    //transCtx.fillRect(0, 0, 640, 480);
    transCtx.fillRect(0, 0, 640 * (transAnimeCount / transAnimeCountInit), 480);
    if (--transAnimeCount <= 0) {
      // finish transition
      setSubScene("none");
    }
  },

  // sub scene: magiclist??????????????????????????????
  "magiclist": () => {
    // init
    if (subSceneInit) {
      // init flag
      subSceneInit = false;
      // init list variable
      listTop = 0;
      listCursor = 0;
      // buffer
      transAnimeCount = 1;
    }
    // update
    let listItems = 4;
    let magicList = [];
    let descriptionWindowText = ["", "", "", ""];
    // ---- empty ----
    if (fighterMagic.length === 0) { // empty!
      // fill list
      magicList[0] = "?????????????????????";
      for (let i = 1; i < listItems; i++) {
        magicList[i] = "";
      }
      // list window
      drawTextInWindowWithCursor(magicList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
      // description window
      descriptionWindowText[0] = "??????????????????????????????";
      drawTextInWindow(null, descriptionWindowText, 0, 480 - 6 * gridSize, 640, useriCtx);
      // key input
      if (transAnimeCount-- < 0) {
        // S: move to tool list
        if (isKeyPressedNowSub("s") ){
          setSubScene("toollist");
        }
        // X or S: quit list
        else if (isKeyPressedNowSub("x") || isKeyPressedNowSub("a") ) {
          setSubScene("none");
        }
      }
      return;
    }
    // ---- not empty ----
    // move cursor
    if (isKeyPressedInterval("u") && listCursor > 0) {
      listCursor--;
      if (listCursor < listTop) {
        listTop--;
      }
    }
    if (isKeyPressedInterval("d") && listCursor < fighterMagic.length - 1) {
      listCursor++;
      if (listCursor >= listTop + listItems) {
        listTop++;
      }
    }
    // modify listTop and cursor
    while (listTop + listItems > fighterMagic.length && listTop > 0) {
      listTop--;
    }
    if (listCursor >= fighterMagic.length) {
      listCursor = (fighterMagic.length > 0) ? fighterMagic.length - 1 : 0;
    }
    // make magic list
    for (let i = 0; (i < listItems) && (i < fighterMagic.length); i++) {
      magicList[i] = magicData[fighterMagic[i + listTop]].name;
    }
    // fill list
    for (let i = magicList.length; i < listItems; i++) {
      magicList[i] = "";
    }
    // draw list window
    drawTextInWindowWithCursor(magicList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
    if (listTop > 0) {
      useriCtx.drawImage(arrowUpImage, 304, 3 * gridSize);
    }
    if (listTop + listItems < fighterMagic.length) {
      useriCtx.drawImage(arrowDownImage, 304, (3 + listItems + 1) * gridSize);
    }
    // description window
    descriptionWindowText[0] = "??????MP " + magicData[fighterMagic[listCursor]].mp;
    descriptionWindowText[1] = magicData[fighterMagic[listCursor]].description;
    descriptionWindowText[2] = "";
    descriptionWindowText[3] = "";
    drawTextInWindow(null, descriptionWindowText, 0, 480 - 6 * gridSize, 640, useriCtx);
    useriCtx.drawImage(magicData[fighterMagic[listCursor]].image, 532, 392);
    // key input
    if (transAnimeCount-- < 0) {
      // S: move to tool list
      if (isKeyPressedNowSub("s") ){
        setSubScene("toollist");
      }
      // X or A: quit list
      else if (isKeyPressedNowSub("x") || isKeyPressedNowSub("a") ) {
        setSubScene("none");
      }
    }
  },

  // sub scene: toollist??????????????????????????????
  "toollist": () => {
    // init
    if (subSceneInit) {
      // init flag
      subSceneInit = false;
      // init list variable
      listTop = 0;
      listCursor = 0;
      // buffer
      transAnimeCount = 1;
    }
    // update
    let listItems = 4;
    let toolList = [];
    let descriptionWindowText = ["", "", "", ""];
    // ---- empty ----
    if (fighterTool.length === 0) { // empty!
      // fill list
      toolList[0] = "?????????????????????";
      for (let i = 1; i < listItems; i++) {
        toolList[i] = "";
      }
      // list window
      drawTextInWindowWithCursor(toolList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
      // description window
      descriptionWindowText[0] = "??????????????????????????????";
      drawTextInWindow(null, descriptionWindowText, 0, 480 - 6 * gridSize, 640, useriCtx);
      // key input
      if (transAnimeCount-- < 0) {
        // A: move to magic list
        if (isKeyPressedNowSub("a") ){
          setSubScene("magiclist");
        }
        // X or S: quit list
        else if (isKeyPressedNowSub("x") || isKeyPressedNowSub("s") ) {
          setSubScene("none");
        }
      }
      return;
    }
    // ---- not empty ----
    // move cursor
    if (isKeyPressedInterval("u") && listCursor > 0) {
      listCursor--;
      if (listCursor < listTop) {
        listTop--;
      }
    }
    if (isKeyPressedInterval("d") && listCursor < fighterTool.length - 1) {
      listCursor++;
      if (listCursor >= listTop + listItems) {
        listTop++;
      }
    }
    // modify listTop and cursor
    while (listTop + listItems > fighterTool.length && listTop > 0) {
      listTop--;
    }
    if (listCursor >= fighterTool.length) {
      listCursor = fighterTool.length - 1;
    }
    // make tool list
    for (let i = 0; (i < listItems) && (i < fighterTool.length); i++) {
      toolList[i] = toolData[fighterTool[i + listTop].tag].name + "?????" + fighterTool[i + listTop].amount;
    }
    // fill list
    for (let i = toolList.length; i < listItems; i++) {
      toolList[i] = " ";
    }
    // list window
    drawTextInWindowWithCursor(toolList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
    if (listTop > 0) {
      useriCtx.drawImage(arrowUpImage, 304, 3 * gridSize);
    }
    if (listTop + listItems < fighterTool.length) {
      useriCtx.drawImage(arrowDownImage, 304, (3 + listItems + 1) * gridSize);
    }
    // description window
    descriptionWindowText[0] = "????????? " + fighterTool[listCursor].amount;
    descriptionWindowText[1] = toolData[fighterTool[listCursor].tag].description;
    descriptionWindowText[2] = (!isFighting && toolData[fighterTool[listCursor].tag].isAvailableFromList) ? "[z]??????" : "";
    descriptionWindowText[3] = "";
    drawTextInWindow(null, descriptionWindowText, 0, 480 - 6 * gridSize, 640, useriCtx);
    useriCtx.drawImage(toolData[fighterTool[listCursor].tag].image, 532, 392);
    if (transAnimeCount-- < 0) {
      // Z: use tool?????????????????????????????? isAvailableFromList === true ????????????????????????
      if (isKeyPressedNowSub("z") && !isFighting && toolData[fighterTool[listCursor].tag].isAvailableFromList) {
        toolData[fighterTool[listCursor].tag].effect();
        addTool(fighterTool[listCursor].tag, -1);
      }
      // A: move to magic list
      else if (isKeyPressedNowSub("a") ){
        setSubScene("magiclist");
      }
      // X or S: quit list
      else if (isKeyPressedNowSub("x") || isKeyPressedNowSub("s") ) {
        setSubScene("none");
      }
    }
  },

  // sub scene: afford???????????????????????????
  "afford": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = 8;  
    }
    // text 
    windowImage = merchantFaceImage;
    mainWindowText[0] = "??????????????????";
    mainWindowText[1] = "";
    mainWindowText[2] = "";
    // update
    if (transAnimeCount-- < 0) zkeyAnimeSub();
    if (isKeyPressedNowSub("z") && transAnimeCount < 0) {
      setSubScene("none");
    }
  },

  // sub scene: notafford???????????????????????????
  "notafford": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = 8;
    }
    // update
    // text 
    windowImage = merchantSadImage;
    mainWindowText[0] = "?????????????????????????????????";
    mainWindowText[1] = "";
    mainWindowText[2] = "";
    if (transAnimeCount-- < 0) zkeyAnimeSub();
    if (isKeyPressedNowSub("z") && transAnimeCount < 0) {
      setSubScene("none");
    }
  },

  // sub scene: none?????????????????????
  "none": () => {
    // ???????????????
  }
};

// sub scene ???????????? ===============================================================


window.onload = function() {
  //console.log("a");
  scene = "title";
  sceneInit = true;
  btnCtx.drawImage(buttonImage, 0, 0);
  initParam();
  setInterval(gameLoop, 10);
};