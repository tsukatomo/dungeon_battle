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
// image - background(chooseroom)
let bunkiBackImage = new Image();
bunkiBackImage.src = "./img/background_bunki.png";
// image - background(shop)
let shopBackImage = new Image();
shopBackImage.src = "./img/background_shop.png";

// image - gate
let gateImage = new Image();
gateImage.src = "./img/gate.png";
// image - icon:enemy
let iconEnemyImage = new Image();
iconEnemyImage.src = "./img/icon_enemy.png";
// image - icon:shop
let iconShopImage = new Image();
iconShopImage.src = "./img/icon_shop.png";

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
// image - merchant(boss)
let merchantBossImage1 = new Image();
let merchantBossImage2 = new Image();
merchantBossImage1.src = "./img/merchant_boss1.png";
merchantBossImage2.src = "./img/merchant_boss2.png";
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
// image - magic:power
let magicPowerImage = new Image();
magicPowerImage.src = "./img/magic_power.png";
// image - magic:shield
let magicShieldImage = new Image();
magicShieldImage.src = "./img/magic_shield.png";
// image - magic:jinx
let magicJinxImage = new Image();
magicJinxImage.src = "./img/magic_jinx.png";
// image - magic:three
let magicThreeImage = new Image();
magicThreeImage.src = "./img/magic_sansan.png";
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


// image - status:stun
let statusStunImage = new Image();
statusStunImage.src = "./img/status_stun.png";
// image - status:stun
let statusPowerImage = new Image();
statusPowerImage.src = "./img/status_power.png";
// image - status:stun
let statusWeakImage = new Image();
statusWeakImage.src = "./img/status_weak.png";
// image - status:shield
let statusShieldImage = new Image();
statusShieldImage.src = "./img/status_shield.png";
// image - status:m_shield
let statusMShieldImage = new Image();
statusMShieldImage.src = "./img/status_magicshield.png";
// image - status:m_shield
let statusMirrorImage = new Image();
statusMirrorImage.src = "./img/status_mirror.png";


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
// for text in canvas
const textSize = 24;
const textPaddingLeft = 12;
const fontFamily = '"筑紫A丸ゴシック","游ゴシック体",system-ui';
const textColor = "rgba(255, 255, 255, 1.0)";
// for key inputs
let keyInput = [];
let keyPressed = [];
let keyPressedPrevious = [];
let keyInterval = 0;
// for some uses
const counterMax = 100; // timeCounter counts 0 - counterMax-1
let timeCounter = 0; // time counter in game loop
const combatMenu = ["なぐる", "まほう", "どうぐ"];
const shopMenu = ["かう", "はなす", "たちさる"];
let menuCursor = 0;
let animeCount = 0; // animation counter
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
// for combat
let isFighting = false;
let isStartTurn = false; // start of turn
let isSansanFatal = false; // fatal with "sansan"
// for info
let fighterLv = 1;
let dungeonFloor = 0;
let money = 20;
let listTop = 0;
let listCursor = 0;
// for shop
let shopInit = false;
let shopItem = [];
let shopCursor = 0;
// for showing character
let characterY = 128;
let fighterX = 80;
let enemyX = 432;
let hpBarY = 256;
let hpBarWidth = 128;
let HpBarHeight = 16;
let bigCharacterY = characterY - 64;
// for game scene (main/sub)
let scene = "encount";
let subScene = "none";
let sceneInit = false; // Whenever scene changes, Don't forget set this true!!
let subSceneInit = false;
// for transition animation
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
    // reduce buff/debuff which is categorised as a "turn_start"
    for (let i = 0; i < this.status.length; i++) {
      if (statusData[this.status[i].tag].type === "turn_start") {
        this.addStatus(this.status[i].tag, -1);
      }
    }
  };

  turnEnd() {
    // reduce buff/debuff which is categorised as a "turn_end"
    for (let i = 0; i < this.status.length; i++) {
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
    opponent.addHp(-Math.floor(amount));
    return amount;
  };

  dealMagicDamage(opponent, amount) {
    // buff: power
    if (this.isStatusExist("mirror")) {
      amount *= 2;
      this.addStatus("mirror", -1);
    }
    // opponent buff: m_shield
    if (opponent.isStatusExist("m_shield")) {
      amount /= 2;
    }
    opponent.addHp(-Math.floor(amount));
    return amount;
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
      enemy.dealAttackDamage(fighter, 7);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "の攻撃！";
    },
  },
  "gob":{
    name: "ちびゴブ",
    hp: 25,
    image1: gobImage1,
    image2: gobImage2,
    strategy: () => {
      if (enemy.hp * 4 >= enemy.maxhp) {
        enemy.dealAttackDamage(fighter, 5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
      else {
        enemy.dealAttackDamage(fighter, 15);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の怒りの一撃！";
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
      enemy.dealAttackDamage(fighter, enemyStrategyParam);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "の攻撃！";
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
        enemy.dealAttackDamage(fighter, randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "yadotsumu":{
    name: "やどクジ",
    hp: 60,
    image1: yadoTsumuImage1,
    image2: yadoTsumuImage2,
    strategy: () => {
      if (enemyStrategyParam % 3 === 1) {
        enemyStrategyParam += 1;
        fighter.addStatus("weak", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "のネトネト攻撃！";
        mainWindowText[1] = "なぐるの威力が弱くなった！";
      }
      else {
        enemyStrategyParam += 1;
        enemy.dealAttackDamage(fighter, 8);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "renchin":{
    name: "レンチン",
    hp: 90,
    image1: renchinImage1,
    image2: renchinImage2,
    strategy: () => {
      if (enemyStrategyParam % 6 === 5) {
        enemyStrategyParam += 1;
        enemy.dealAttackDamage(fighter, 6);
        fighter.addStatus("stun", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "は放電した！";
      }
      else if (enemyStrategyParam % 2 === 1) {
        enemyStrategyParam += 1;
        enemy.dealAttackDamage(fighter, 8);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "のヒートアタック！";
      }
      else {
        enemyStrategyParam += 1;
        enemy.dealAttackDamage(fighter, 4);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "shieldkusa":{
    name: "タテグサ",
    hp: 60,
    image1: shieldkusaImage1,
    image2: shieldkusaImage2,
    strategy: () => {
      if (enemyStrategyParam++ % 2 === 0) {
        if (randInt(0, 1) === 1) {
          enemy.addStatus("shield", 2);
        }
        else {
          enemy.addStatus("m_shield", 2);
        }
        enemyStrategyCategory = "none";
        mainWindowText[0] = enemy.name + "は守りを固めている";
      }
      else {
        enemy.dealAttackDamage(fighter, 8);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "dragon":{
    name: "ドラゴン",
    hp: 120,
    image1: dragonImage1,
    image2: dragonImage2,
    strategy: () => {
      if (enemy.hp * 2 <= enemy.maxhp && (!enemy.isStatusExist("power"))) {
        enemyStrategyParam = 0;
        enemy.addStatus("power", 999);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "は怒っている……！";
      }
      else {
        enemyStrategyParam++;
        if (enemyStrategyParam >= 2) {
          enemyStrategyParam = 0;
          enemy.dealAttackDamage(fighter, 24);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "のファイアブレス！";
        }
        else {
          enemyStrategyCategory = "none";
          mainWindowText[0] = enemy.name + "はパワーを貯めている……";
        }
      }
    }
  },
  /* 「あー、見ちゃったねー？　みんなには内緒だよー？」
  "merchant":{
    name:"商人",
    hp: 200,
    image1: merchantBossImage1,
    image2: merchantBossImage2,
    strategy: () => {
      enemy.dealAttackDamage(fighter, 20);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "の攻撃！";
    }
  }
  */
};



// magic data
let magicData = {
  "flame": {
    name: "フレイム",
    mp: 3,
    image: magicFlameImage,
    description: "炎で攻撃。自分のLvに応じてダメージ量が上昇。",
    effect: () => {
      fighter.dealMagicDamage(enemy, 8 + (fighterLv * 3));
    }
  },
  "heal": {
    name: "カイフク",
    mp: 5,
    image: magicHealImage,
    description: "自分のHPを最大HPの50%だけ回復する。",
    effect: () => {
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "thunder": {
    name: "ビリビリ",
    mp: 4,
    image: magicThunderImage,
    description: "雷で攻撃。敵を2ターン行動不能にする。",
    effect: () => {
      fighter.dealMagicDamage(enemy, 6);
      enemy.addStatus("stun", 2);
    }
  },
  "power": {
    name: "ムキムキ",
    mp: 3,
    image: magicPowerImage,
    description: "次の2回の「なぐる」の威力を2倍にする。",
    effect: () => {
      fighter.addStatus("power", 2);
    }
  },
  "shield": {
    name: "シールド",
    mp: 3,
    image: magicShieldImage,
    description: "3ターンの間、受けるダメージを半分にする。",
    effect: () => {
      fighter.addStatus("shield", 3);
    }
  },
  "jinx": {
    name: "ジンクス",
    mp: 6,
    image: magicJinxImage,
    description: "敵にデバフがかかっているなら大ダメージ。",
    effect: () => {
      let isDebuffExist = false;
      for (let i = 0; i < enemy.status.length; i++) {
        isDebuffExist |= !statusData[enemy.status[i].tag].isBuff;
      }
      if (isDebuffExist) {
        fighter.dealMagicDamage(enemy, 40 + (fighterLv * 2));
      }
      else {
        fighter.dealMagicDamage(enemy, fighterLv * 2);
      }
    }
  },
  "sansan": {
    name: "サンサン",
    mp: 3,
    image: magicThreeImage,
    description: "固定3ダメージ。コレで敵を倒すとLvが3増える。",
    effect: () => {
      enemy.addHp(-3);
      if (enemy.hp <= 0) {
        isSansanFatal = true;
      }
    }
  },
};



// tool data
let toolData = {
  "mirror": {
    name: "てかがみ",
    image: toolMirrorImage,
    description: "次の「まほう」が与えるダメージを2倍にする。",
    isAvailableFromList: false,
    effect: () => {
      fighter.addStatus("mirror", 1);
    }
  },
  "fruit": {
    name: "くだもの",
    image: toolAppleImage,
    description: "最大HPの50%を回復する。",
    isAvailableFromList: true,
    effect: () => {
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "bomb": {
    name: "ばくだん",
    image: toolBombImage,
    isAvailableFromList: false,
    description: "敵に25の固定ダメージを与える。",
    effect: () => {
      enemy.addHp(-25);
    }
  },
  "potion": {
    name: "あおじる",
    image: toolPotionImage,
    isAvailableFromList: true,
    description: "自分のLvに等しいMPを得る。",
    effect: () => {
      fighterMp += fighterLv;
    }
  },
  "dice": {
    name: "さいころ",
    image: toolDiceImage,
    isAvailableFromList: false,
    description: "覚えているまほうをランダムに発動。MPは消費しない。",
    effect: () => {
      if (fighterMagic.length === 0) {
        mainWindowText[1] = "しかし何も起きなかった……";
        return;
      }
      let randomMagic = fighterMagic[randInt(0, fighterMagic.length - 1)];
      magicData[randomMagic].effect();
      mainWindowText[1] = magicData[randomMagic].name + "が発動した！";
    }
  }
};



// status data
let statusData = {
  "stun": {
    name: "シビレ",
    image: statusStunImage,
    isBuff: false,
    type: "turn_end"
  },
  "power": {
    name: "パワー",
    image: statusPowerImage,
    isBuff: true,
    type: "stack"
  },
  "weak": {
    name: "ヘナヘナ",
    image: statusWeakImage,
    isBuff: false,
    type: "stack"
  },
  "shield": {
    name: "ボウギョ",
    image: statusShieldImage,
    isBuff: true,
    type: "turn_start"
  },
  "m_shield": {
    name: "マホウボウギョ",
    image: statusMShieldImage,
    isBuff: true,
    type: "turn_start"
  },
  "mirror": {
    name: "ミラー",
    image: statusMirrorImage,
    isBuff: true,
    type: "stack"
  }
};



// oyakudachi info
// 記法：適切な位置で改行、終わりに”」”を付ける
// 商人「いらっしゃー。ここはソースコードだよー」
// 商人「私に話しかけるのが面倒なら、ここを見るといいよー」
let oyakudachiInfo = [
  ["ちびゴブはHPがピンチになると", "強い攻撃をしてくるよ。怖いねー」"],
  ["ようせいの回復行動は3回までだよー」", ""],
  ["モクモクはターン数がかかるほど", "攻撃が強くなっていくよー」"],
  ["スライム？かわいいよねー」", ""],
  ["フレイムはキミのLvに応じて", "どんどん強くなるよー」"],
  ["敵に勝つとレベルアップ！", "最大HPとMPが増えるよー」"],
  ["シビレ状態になると動けなくなるよー」", ""],
  ["まほうを使うとMPを消費するよ", "MP切れに気をつけてねー」"],
  ["やどクジは攻撃力を下げてくるよー", "でもまほうの威力は下がらないよー」"],
  ["レンチンの行動に気をつけてねー", "6ターンに1回放電してくるよー」"],
  ["敵をなぐるとMPがちょっと増えるよー」",""],
  ["固定ダメージはバフやデバフの", "影響を受けないよー」"],
  ["一部のどうぐは戦闘中以外でも", "Sキーのメニューから使えるよー」"],
  ["Aキーを押すと覚えているまほうを", "確認できるよー」"]
];


// initialize param
let initParam = function () {
  fighter = new CharacterObject("player", "闘士", 45, fighterImage1, fighterImage2);
  fighterMp = 6;
  fighterMagic = ["flame"];
  fighterTool = [{tag: "fruit", amount: 1}];
  fighterLv = 1;
  dungeonFloor = 0;
  money = 200;
};


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
}



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
  if (e.code === "KeyZ") {
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
  if (e.code === "KeyZ") {
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

// check if the key pressed in this loop
let isKeyPressedNow = function(key) {
  if (subScene != "none") return false; // サブシーン中はキー入力を受け付けない
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
    keyInterval = 15;
    return true;
  };
  return false;
};



// draw animation
let drawAnimation = function (image1, image2, posX, posY, ctx) {
  let image = timeCounter < counterMax / 2 ? image1 : image2;
  ctx.drawImage(image, posX, posY);
}



// z key animation
let zkeyAnime = function () {
  if (subScene != "none") return false; // サブシーン中は表示しない
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



// get random integer (min ≤ n ≤ max)
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
  keyInterval--;
  // text window
  drawTextInWindow(windowImage, mainWindowText, 0, 480 - gridSize * 5, 640, useriCtx);
  // info window
  statusWindowText[0] = fighter.name + " Lv." + fighterLv + "    HP " + fighter.hp + "/" + fighter.maxhp + "    MP " + fighterMp + "    " + dungeonFloor + "階    " + money + "円";
  drawTextInWindow(null, statusWindowText, 0, 0, 640, useriCtx);
  // a key: show magic list
  if (isKeyPressedNow("a") && subScene === "none") {
    setSubScene("magiclist");
  }
  // s key: show magic list
  if (isKeyPressedNow("s") && subScene === "none") {
    setSubScene("toollist");
  }
  // scene
  sceneList[scene]();
  // sub scene
  subSceneList[subScene]();
};



// scene list ======================================================================

let sceneList = {
  // scene: chooseroom（部屋選択）-----------------------------------
  "chooseroom": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // floor
      dungeonFloor++;
      // reset cursor
      menuCursor = 0;
      // text
      windowImage = null;
      mainWindowText[0] = "行き先を選ぼう";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // draw background
      backgCtx.drawImage(bunkiBackImage, 0, 0);
    }
    if (isKeyPressedNow("l")) menuCursor--;
    if (isKeyPressedNow("r")) menuCursor++;
    if (menuCursor < 0) menuCursor = 1
    if (menuCursor > 1) menuCursor = 0;
    // show cursor
    let cursorX = (menuCursor === 0) ? 256 + 64 : 448 + 64;
    let cursorY = (timeCounter < 50) ? 108 : 104;
    // show character
    fighter.drawAnime(fighterX, characterY, charaCtx);
    charaCtx.drawImage(gateImage, 256, bigCharacterY);
    charaCtx.drawImage(gateImage, 448, bigCharacterY);
    charaCtx.drawImage(iconEnemyImage, 256 + 64, bigCharacterY + 128);
    charaCtx.drawImage(iconShopImage, 448 + 64, bigCharacterY + 128);
    charaCtx.drawImage(cursorImage, cursorX, cursorY);
    if (isKeyPressedNow("z")) {
      if (menuCursor === 0) { // enemy
        setTransition("encount");
      }
      else if (menuCursor === 1) { // shop
        setTransition("shop");
      }
      
    }
  },

  // scene: encount（エンカウント）-----------------------------------
  "encount": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // create new enemy
      let enemyDatakeys = Object.keys(enemyData); // make key list from enemy data
      let eKey = "dragon"; // テスト用（敵指定）
      //let eKey = enemyDatakeys[randInt(0, enemyDatakeys.length - 1)]; // choose key randomly
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
      // text
      windowImage = null;
      mainWindowText[0] = enemy.name + "が立ちはだかる！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
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

  // scene: stunned（プレイヤーがシビレ状態）--------------------------------
  "stunned": () => {
    if (sceneInit) {
      sceneInit = false;
      if (isStartTurn) {
        fighter.turnStart();
        isStartTurn = false;
      }
      windowImage = null;
      mainWindowText[0] = fighter.name + "はシビレて動けない！";
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

  // scene: combat（コマンド選択）-----------------------------------
  "combat": () => {
    if (sceneInit) {
      sceneInit = false;
      if (isStartTurn) {
        fighter.turnStart();
        isStartTurn = false;
      }
      windowImage = null;
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
        if (fighterMagic.length <= 0) {
          mainWindowText[0] = "使えるまほうがない！";
        }
        else {
          setScene("magicmenu");
        }
      }
      else if (menuCursor === 2) { // cursor2 → どうぐ
        if (fighterTool.length <= 0) {
          mainWindowText[0] = "使えるどうぐがない！";
        }
        else {
          setScene("toolmenu");
        }
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
      fighter.dealAttackDamage(enemy, 6 + fighterLv);
      // increase mp
      fighterMp += 1;
      // text
      windowImage = null;
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
      fighter.turnEnd();
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
    windowImage = null;
    mainWindowText[0] = castMagic.name + "    消費MP " + castMagic.mp;
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
      windowImage = null;
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
      fighter.turnEnd();
      if (enemy.hp <= 0) {
        setScene("victory");
      }
      else {
        setScene("enemyturn");
      }
    }
  },


  // scene: toolmenu（どうぐー選択）--------------------------------------------------
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
    mainWindowText[0] = useTool.name + "    所持数 " + fighterTool[toolCursor].amount;
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

  // scene: tooluse（どうぐー使用）--------------------------------------------------
  "tooluse": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "は" + useTool.name + "を使った！"
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
      fighter.turnEnd();
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
      // effect at start of turn
      enemy.turnStart();
      // reset main window
      windowImage = null;
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      // enemy move
      if (enemy.isStatusExist("stun")) {
        mainWindowText[0] = enemy.name + "はシビレて動けない！";
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

  // scene: victory（勝利！）-------------------------------------------------------
  "victory": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // level up
      levelUp();
      if (isSansanFatal) { // まほう「サンサン」で致命を取ったとき
        isSansanFatal = false;
        levelUp();
        levelUp();
      }
      // text 
      windowImage = null;
      mainWindowText[0] = enemy.name + "に勝利した！"
      mainWindowText[1] = fighter.name + "はレベルが上がった！";
      mainWindowText[2] = "";
    }
    fighter.drawAnime(fighterX, characterY, charaCtx);
    drawHpBar(fighter, fighterX, hpBarY, useriCtx);
    if (animeCount === 0) zkeyAnime();
    if (isKeyPressedNow("z") && animeCount === 0) {
      isFighting = false;
      setTransition("chooseroom");
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
      windowImage = null;
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
      isFighting = false;
      mainWindowText[0] = "";
      mainWindowText[1] = "";
      // rebirth
      initParam();
      setTransition("shop");
    }
  },

  // scene: shop（店）-------------------------------------------------------
  "shop" : () => {
    // init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // draw background
      backgCtx.drawImage(bunkiBackImage, 0, 0);
      // shop initialize
      if (shopInit) {
        shopInit = false;
        // add shop items
        let magicDataKeys = Object.keys(magicData);
        let toolDataKeys = Object.keys(toolData);
        for (let i = 0; i < 2; i++) {
          let item = magicDataKeys[randInt(0, magicDataKeys.length - 1)];
          shopItem[i] = {item: item, category: "magic", price: randInt(3, 10)};
        }
        for (let i = 2; i < 4; i++) {
          let item = toolDataKeys[randInt(0, toolDataKeys.length - 1)];
          shopItem[i] = {item: item, category: "tool", price: randInt(3, 10)};
        }
        // reset cursor
        menuCursor = 0;
      }
      // counter (buffer)
      animeCount = 8;
      // text 
      windowImage = merchantFaceImage;
      mainWindowText[0] = "「いらっしゃー」";
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
        setTransition("buy");
      }
      else if (menuCursor === 1) {
        setScene("dialog");
      }
      else if (menuCursor === 2) {
        shopInit = true; // 品揃え更新フラグ
        setTransition("chooseroom");
      }
    }
  },

  // scene: buy（ショップ購入）-------------------------------------------------------
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
    if (isKeyPressedNow("l") && shopCursor > 0) shopCursor--;
    if (isKeyPressedNow("r") && shopCursor < 3) shopCursor++;
    // show items
    for (let i = 0; i < 4; i++) {
      if (shopItem[i].category === "magic") {
        charaCtx.drawImage(magicData[shopItem[i].item].image, 48 + 160 * i, 180);
      }
      else if (shopItem[i].category === "tool") {
        charaCtx.drawImage(toolData[shopItem[i].item].image, 48 + 160 * i, 180);
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
    for (let i = 0; i < 4; i++) {
      if (shopItem[i].category != "none") {
        if (shopItem[i].price <= money) {
          charaCtx.fillStyle = "#fff9e4";
        } else {
          charaCtx.fillStyle = "#e89973";
        }
        charaCtx.strokeText(shopItem[i].price + "円", 80 + 160 * i, 260);
        charaCtx.fillText(shopItem[i].price + "円", 80 + 160 * i, 260);
      }
    }
    // show cursor
    let cursorY = (timeCounter < 50) ? 108 : 104;
    charaCtx.drawImage(cursorImage, 48 + 160 * shopCursor, cursorY);
    // show item info
    let itemOnCursor = shopItem[shopCursor];
    let toolAmount;
    windowImage = null;
    if (itemOnCursor.category === "magic") {
      mainWindowText[0] = magicData[itemOnCursor.item].name + "    消費MP " + magicData[itemOnCursor.item].mp;
      mainWindowText[1] = magicData[itemOnCursor.item].description;
      mainWindowText[2] = "[z]購入";
    }
    else if (itemOnCursor.category === "tool") {
      if (isToolExist(itemOnCursor.item)) {
        toolAmount = fighterTool[fighterTool.findIndex((elem) => elem.tag === itemOnCursor.item)].amount;
      }
      else {
        toolAmount = 0;
      }
      mainWindowText[0] = toolData[itemOnCursor.item].name + "    所持数 " + toolAmount;
      mainWindowText[1] = toolData[itemOnCursor.item].description;
      mainWindowText[2] = "[z]購入";
    }
    else if (itemOnCursor.category === "none") {
      mainWindowText[0] = "売り切れ！"
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

  // scene: dialog（ショップ会話）-------------------------------------------------------
  "dialog": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // counter (buffer)
      animeCount = 8;
      // text 
      windowImage = merchantFaceImage;
      let oyakudachiIndex = randInt(0, oyakudachiInfo.length - 1)
      mainWindowText[0] = "「" + oyakudachiInfo[oyakudachiIndex][0];
      mainWindowText[1] = "　" + oyakudachiInfo[oyakudachiIndex][1];
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

// sub scene =======================================================================

let subSceneList = {

  // sub scene: transin（トランジション開始）
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
    transCtx.globalAlpha = 1.0 - (transAnimeCount / transAnimeCountInit);
    //transCtx.fillRect(0, 0, 640, 480);
    if (--transAnimeCount <= 0) {
      // set transition animation
      setSubScene("transwait");
    }
  },

  // sub scene: transwait（トランジション中間）
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

  // sub scene: transout（トランジション終了）
  "transout": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = transAnimeCountInit;
    }
    // update
    transCtx.fillStyle = "rgba(0, 0, 0, 1.0)"; // black
    transCtx.globalAlpha = transAnimeCount / transAnimeCountInit;
    //transCtx.fillRect(0, 0, 640, 480);
    transCtx.fillRect(0, 0, 640 * (transAnimeCount / transAnimeCountInit), 480);
    if (--transAnimeCount <= 0) {
      // finish transition
      setSubScene("none");
    }
  },

  // sub scene: magiclist（所持まほうリスト）
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
      magicList[0] = "（からっぽ！）";
      for (let i = 1; i < listItems; i++) {
        magicList[i] = "";
      }
      // list window
      drawTextInWindowWithCursor(magicList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
      // description window
      descriptionWindowText[0] = "使えるまほうがない！";
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
    descriptionWindowText[0] = "消費MP " + magicData[fighterMagic[listCursor]].mp;
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

  // sub scene: toollist（所持どうぐリスト）
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
      toolList[0] = "（からっぽ！）";
      for (let i = 1; i < listItems; i++) {
        toolList[i] = "";
      }
      // list window
      drawTextInWindowWithCursor(toolList, 0, 3 * gridSize, 640, listCursor - listTop, useriCtx);
      // description window
      descriptionWindowText[0] = "使えるどうぐがない！";
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
      toolList[i] = toolData[fighterTool[i + listTop].tag].name + "　×" + fighterTool[i + listTop].amount;
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
    descriptionWindowText[0] = "所持数 " + fighterTool[listCursor].amount;
    descriptionWindowText[1] = toolData[fighterTool[listCursor].tag].description;
    descriptionWindowText[2] = (!isFighting && toolData[fighterTool[listCursor].tag].isAvailableFromList) ? "[z]使う" : "";
    descriptionWindowText[3] = "";
    drawTextInWindow(null, descriptionWindowText, 0, 480 - 6 * gridSize, 640, useriCtx);
    useriCtx.drawImage(toolData[fighterTool[listCursor].tag].image, 532, 392);
    if (transAnimeCount-- < 0) {
      // Z: use tool（戦闘中でない、かつ isAvailableFromList === true のアイテムのみ）
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

  // sub scene: afford（店で品物を購入）
  "afford": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = 8;  
    }
    // text 
    windowImage = merchantFaceImage;
    mainWindowText[0] = "「まいどー」";
    mainWindowText[1] = "";
    mainWindowText[2] = "";
    // update
    if (transAnimeCount-- < 0) zkeyAnimeSub();
    if (isKeyPressedNowSub("z") && transAnimeCount < 0) {
      setSubScene("none");
    }
  },

  // sub scene: notafford（お金が足りない）
  "notafford": () => {
    // init
    if (subSceneInit) {
      subSceneInit = false;
      transAnimeCount = 8;
    }
    // update
    // text 
    windowImage = merchantSadImage;
    mainWindowText[0] = "「お金が足りないよー」";
    mainWindowText[1] = "";
    mainWindowText[2] = "";
    if (transAnimeCount-- < 0) zkeyAnimeSub();
    if (isKeyPressedNowSub("z") && transAnimeCount < 0) {
      setSubScene("none");
    }
  },

  // sub scene: none（何もしない）
  "none": () => {
    // 何もしない
  }
};

// sub scene ここまで ===============================================================


window.onload = function() {
  backgCtx.drawImage(backImage, 0, 0);

  //console.log("a");
  scene = "shop";
  sceneInit = true;
  shopInit = true;
  initParam();
  setInterval(gameLoop, 10);
};