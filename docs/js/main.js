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
// image - idol
let idolImage1 = new Image();
let idolImage2 = new Image();
idolImage1.src = "./img/idol1.png";
idolImage2.src = "./img/idol2.png";
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

// image - player_merchant(EX)
let playerMerchantImage1 = new Image();
let playerMerchantImage2 = new Image();
let playerMerchantImage3 = new Image();
let playerMerchantImage4 = new Image();
playerMerchantImage1.src = "./img/player_merchant1.png";
playerMerchantImage2.src = "./img/player_merchant2.png";
playerMerchantImage3.src = "./img/player_merchant3.png";
playerMerchantImage4.src = "./img/player_merchant4.png";
// image - doubleslime(EX)
let doubleslimeImage1 = new Image();
let doubleslimeImage2 = new Image();
doubleslimeImage1.src = "./img/doubleslime1.png";
doubleslimeImage2.src = "./img/doubleslime2.png";
// image - hebi(EX)
let hebiImage1 = new Image();
let hebiImage2 = new Image();
hebiImage1.src = "./img/hebi1.png";
hebiImage2.src = "./img/hebi2.png";
// image - hokogusa(EX)
let hokogusaImage1 = new Image();
let hokogusaImage2 = new Image();
hokogusaImage1.src = "./img/hokogusa1.png";
hokogusaImage2.src = "./img/hokogusa2.png";
// image - dekagobu(EX)
let dekagobuImage1 = new Image();
let dekagobuImage2 = new Image();
dekagobuImage1.src = "./img/dekagobu1.png";
dekagobuImage2.src = "./img/dekagobu2.png";
// image - yajirushiman(EX)
let yajirushimanImage1 = new Image();
let yajirushimanImage2 = new Image();
yajirushimanImage1.src = "./img/yajirushiman1.png";
yajirushimanImage2.src = "./img/yajirushiman2.png";


// image - itemselect
let itemSelectImage1 = new Image();
itemSelectImage1.src = "./img/itemselect1.png";
let itemSelectImage2 = new Image();
itemSelectImage2.src = "./img/itemselect2.png";
// image - cannot cast magic
let cannotCastImage = new Image();
cannotCastImage.src = "./img/cannotcast.png";


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

// image - magic:bougyo(EX)
let magicBougyoImage = new Image();
magicBougyoImage.src = "./img/magic_bougyo.png";
// image - magic:drain(EX)
let magicDrainImage = new Image();
magicDrainImage.src = "./img/magic_drain.png";
// image - magic:haisui(EX)
let magicHaisuiImage = new Image();
magicHaisuiImage.src = "./img/magic_haisui.png";
// image - magic:oshimai(EX)
let magicOshimaiImage = new Image();
magicOshimaiImage.src = "./img/magic_oshimai.png";


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

// image - tool:drink(EX)
let toolDrinkImage = new Image();
toolDrinkImage.src = "./img/tool_drink.png";
// image - tool:gear(EX)
let toolGearImage = new Image();
toolGearImage.src = "./img/tool_gear.png";
// image - tool:yadorigi(EX)
let toolYadorigiImage = new Image();
toolYadorigiImage.src = "./img/tool_yadorigi.png";
// image - tool:yakuhai(EX)
let toolYakuhaiImage = new Image();
toolYakuhaiImage.src = "./img/tool_yakuhai.png";


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
// image - status:choke
let statusChokeImage = new Image();
statusChokeImage.src = "./img/status_choke.png";
// image - status:chun
let statusChunImage = new Image();
statusChunImage.src = "./img/status_chun.png";
// image - status:drain
let statusDrainImage = new Image();
statusDrainImage.src = "./img/status_drain.png";
// image - status:drink
let statusDrinkImage = new Image();
statusDrinkImage.src = "./img/status_drink.png";
// image - status:gear
let statusGearImage = new Image();
statusGearImage.src = "./img/status_gear.png";
// image - status:supershield
let statusSuperShieldImage = new Image();
statusSuperShieldImage.src = "./img/status_supershield.png";


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

// image - achievement
let jissekiImage1 = new Image();
let jissekiImage2 = new Image();
let jissekiImage3 = new Image();
let jissekiImage4 = new Image();
let jissekiImage5 = new Image();
let jissekiImage6 = new Image();
let jissekiImage7 = new Image();
let jissekiImage8 = new Image();
let jissekiImage9 = new Image();
let jissekiImage10 = new Image();
let jissekiImage11 = new Image();
let jissekiImage12 = new Image();
jissekiImage1.src = "./img/jisseki1.png";
jissekiImage2.src = "./img/jisseki2.png";
jissekiImage3.src = "./img/jisseki3.png";
jissekiImage4.src = "./img/jisseki4.png";
jissekiImage5.src = "./img/jisseki5.png";
jissekiImage6.src = "./img/jisseki6.png";
jissekiImage7.src = "./img/jisseki7.png";
jissekiImage8.src = "./img/jisseki8.png";
jissekiImage9.src = "./img/jisseki9.png";
jissekiImage10.src = "./img/jisseki10.png";
jissekiImage11.src = "./img/jisseki11.png";
jissekiImage12.src = "./img/jisseki12.png";
let jissekiLockedImage = new Image();
jissekiLockedImage.src = "./img/jisseki_locked.png";
let jissekiCursorImage1 = new Image();
let jissekiCursorImage2 = new Image();
jissekiCursorImage1.src = "./img/jisseki_cursor1.png";
jissekiCursorImage2.src = "./img/jisseki_cursor2.png";
let jissekiNewImage = new Image();
jissekiNewImage.src = "./img/new_jisseki.png";
let jissekiNewTsutiImage1 = new Image();
let jissekiNewTsutiImage2 = new Image();
jissekiNewTsutiImage1.src = "./img/new_tsuti1.png";
jissekiNewTsutiImage2.src = "./img/new_tsuti2.png";


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
const fontFamily = '"筑紫A丸ゴシック","游ゴシック体",system-ui';
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
const combatMenu = ["なぐる", "まほう", "どうぐ"];
const shopMenu = ["かう", "はなす", "たちさる"];
const gemMenu = ["かいふく", "ほきゅう", "くらふと"];
const tweetMenu = ["タイトルへ", "ツイート", ""];
const deleteMenu = ["消さない", "消す！", ""];
let menuCursor = 0;
let goodLuck = false;
let slainEnemy = 0;
let gameClear = false;
let isGamingNow = false; // ゲーム中かどうか
let gameMode = "EX"; // 闘士が主役の"Normal" or 商人が主役の"EX"
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
let largestMp = 99;
let castMagic;
// for tool
let fighterTool = [];
let toolCursor = 0;
let useTool;
let obtainedTool;
let toolDropChance = 40;
let toolCounter = 0;
// for combat
let isFighting = false;
let isStartTurn = false; // start of turn
let damageAmount = 0;
let isSansanFatal = false; // fatal with "sansan"
let isResurrection = false; // resurrection (merchant)
let commandCounter = [0, 0, 0];
// for info
let fighterLv = 1;
let dungeonFloor = 0;
let money = 20;
let listTop = 0;
let listCursor = 0;
// for shop
let shopInit = false;
const numOfItem = 5;
let buys = 0;
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
const transAnimeCountInit = 30;
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
// for jisseki scene
const jissekiCol = 6;
const jissekiRow = 2;
let jissekiCursorX = 0;
let jissekiCursorY = 0;
let isNewAchievementExist = false; // J(¬_¬)「なんで『jisseki』と『achievement』が混在してるんですか？」



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

  statusNum(tag) {
    let indexOfStatus = this.status.findIndex((elem) => elem.tag === tag);
    if (indexOfStatus === -1) return 0;
    return this.status[indexOfStatus].amount;
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
    // opponent buff: supershield
    if (opponent.isStatusExist("supershield")) {
      amount /= 4;
    }
    // deal damage
    amount = Math.floor(amount)
    opponent.addHp(-amount);
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
    // deal damage
    amount = Math.floor(amount)
    opponent.addHp(-amount);
    return amount;
  };

}



let fighter = new CharacterObject("player", "闘士", 45, fighterImage1, fighterImage2);
let enemy = new CharacterObject("enemy", "スライム", 15, slimeImage1, slimeImage2);

// enemy data
let enemyData = {
  "bugime":{ // バグ敵（ガワはスライムと同じ）
    name: "バグイム",
    hp: 99,
    image1: slimeImage1,
    image2: slimeImage2,
    mode: "BUG",
    floor: 0,
    strategy: () => {
      enemyStrategyCategory = "magic";
      mainWindowText[0] = "「どうやらバグってるみたいだね。作者に教えてネ」";
    },
  },
  "slime":{
    name: "スライム",
    hp: 16,
    image1: slimeImage1,
    image2: slimeImage2,
    mode: "Normal",
    floor: 0,
    strategy: () => {
      if (enemyStrategyParam === 0 && randInt(0, 2) === 0) {
        enemyStrategyParam = 1;
        fighter.addStatus("weak", 1);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "はベトベト液を撒き散らした！";
        mainWindowText[1] = "「なぐる」の威力が弱くなった！";
      }
      else {
        enemyStrategyParam = 0;
        damageAmount = enemy.dealAttackDamage(fighter, 7);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    },
  },
  "gob":{
    name: "ちびゴブ",
    hp: 28,
    image1: gobImage1,
    image2: gobImage2,
    mode: "Normal",
    floor: 1,
    strategy: () => {
      if (enemy.hp * 4 >= enemy.maxhp) {
        damageAmount = enemy.dealAttackDamage(fighter, 5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 15);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の怒りの一撃！";
      }
    }
  },
  "coffee":{
    name: "コーヒー",
    hp: 32,
    image1: coffeeImage1,
    image2: coffeeImage2,
    mode: "Normal",
    floor: 1,
    strategy: () => {
      if (!enemy.isStatusExist("shield")) {
        enemy.image1 = coffeeImage1;
        enemy.image2 = coffeeImage2;
      }
      if (enemyStrategyParam === 0 && enemy.hp < enemy.maxhp) {
        enemy.addStatus("shield", 3);
        enemy.addStatus("m_shield", 3);
        enemyStrategyParam = 1;
        enemy.image1 = coffeeImage3;
        enemy.image2 = coffeeImage4;
        enemyStrategyCategory = "none";
        mainWindowText[0] = enemy.name + "はカップの中に隠れた"
        mainWindowText[1] = "（しばらくの間、ダメージを半減する！）"
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, enemy.isStatusExist("shield") ? randInt(6, 10) : randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "tree":{
    name: "モクモク",
    hp: 50,
    image1: treeImage1,
    image2: treeImage2,
    mode: "Normal",
    floor: 1,
    strategy: () => {
      enemyStrategyParam += 1;
      damageAmount = enemy.dealAttackDamage(fighter, enemyStrategyParam);
      enemyStrategyCategory = "attack";
      mainWindowText[0] = enemy.name + "の攻撃！";
    }
  },
  "fairy":{
    name: "ようせい",
    hp: 40,
    image1: fairyImage1,
    image2: fairyImage2,
    mode: "Normal",
    floor: 2,
    strategy: () => {
      if (enemy.hp * 2 < enemy.maxhp && enemyStrategyParam < 3) {
        enemyStrategyParam += 1;
        enemy.addHp(15);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "は回復した！";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, randInt(4, 8));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "yadotsumu":{
    name: "やどクジ",
    hp: 80,
    floor: 2,
    image1: yadoTsumuImage1,
    image2: yadoTsumuImage2,
    mode: "Normal",
    strategy: () => {
      if (enemyStrategyParam % 3 === 1) {
        enemyStrategyParam += 1;
        fighter.addStatus("weak", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "のネトネト攻撃！";
        mainWindowText[1] = "「なぐる」の威力が弱くなった！";
      }
      else {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 13);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "renchin":{
    name: "レンチン",
    hp: 120,
    image1: renchinImage1,
    image2: renchinImage2,
    mode: "Normal",
    floor: 3,
    strategy: () => {
      if (enemyStrategyParam % 6 === 5) {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 7);
        fighter.addStatus("stun", 2);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "は放電した！";
      }
      else if (enemyStrategyParam % 2 === 1) {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 12);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "のヒートアタック！";
      }
      else {
        enemyStrategyParam += 1;
        damageAmount = enemy.dealAttackDamage(fighter, 5);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "shieldkusa":{
    name: "タテグサ",
    hp: 90,
    image1: shieldkusaImage1,
    image2: shieldkusaImage2,
    mode: "Normal",
    floor: 2,
    strategy: () => {
      if (enemyStrategyParam++ % 2 === 0) {
        if (randInt(0, 1) === 1) {
          enemy.addStatus("shield", 2);
          mainWindowText[0] = enemy.name + "は「ぶつりシールド」を展開した！";
        }
        else {
          enemy.addStatus("m_shield", 2);
          mainWindowText[0] = enemy.name + "は「まほうシールド」を展開した！";
        }
        enemyStrategyCategory = "none";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 12);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の攻撃！";
      }
    }
  },
  "dragon":{
    name: "ドラゴン",
    hp: 156,
    image1: dragonImage1,
    image2: dragonImage2,
    mode: "Normal",
    floor: 3,
    strategy: () => {
      if (enemy.hp * 2 < enemy.maxhp && (!enemy.isStatusExist("power"))) {
        enemyStrategyParam = 1;
        enemy.addStatus("power", 99);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "は怒っている……！";
      }
      else {
        if (enemyStrategyParam % 3 === 0) {
          damageAmount = enemy.dealAttackDamage(fighter, 7);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "のひっかき攻撃！";
        }
        else if (enemyStrategyParam % 3 === 1) {
          enemyStrategyCategory = "none";
          mainWindowText[0] = enemy.name + "は大きく息を吸い込んだ！";
          
        }
        else {
          damageAmount = enemy.dealAttackDamage(fighter, 20);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "のファイアブレス！！";
        }
        enemyStrategyParam++;
      }
    }
  },
  "death": {
    name: "シニガミ",
    hp: 160,
    image1: deathImage1,
    image2: deathImage2,
    mode: "Normal",
    floor: 3,
    strategy: () => {
      enemyStrategyParam++;
      if (enemyStrategyParam >= 7) {
        enemy.dealAttackDamage(fighter, 999999);
        enemyStrategyCategory = "attack";
        windowImage = deathFaceImage;
        mainWindowText[0] = "「終わりだ」";
      }
      else {
        enemyStrategyCategory = "none";
        windowImage = deathFaceImage;
        mainWindowText[0] = "「" + (7 - enemyStrategyParam) + "……」";
      }
    }
  },
  "idol": {
    name: "アイドル",
    hp: 140,
    image1: idolImage1,
    image2: idolImage2,
    mode: "Normal",
    floor: 3,
    strategy: () => {
      // 最初のターン：HPが少ないなら回復、そうでないならバフ付与
      if (enemyStrategyParam === 0) {
        if (fighter.hp * 4 < fighter.maxhp) {
          fighterMp += 3;
          fighter.addHp(Math.floor(fighter.maxhp / 2));
          enemyStrategyCategory = "magic";
          mainWindowText[0] = enemy.name + "の歌声が" + fighter.name + "を癒す！";
          mainWindowText[1] = fighter.name + "のHPとMPが回復した！";
        }
        else {
          fighter.addStatus("power", 1);
          enemyStrategyCategory = "magic";
          mainWindowText[0] = enemy.name + "は歌で" + fighter.name + "を鼓舞した！";
          mainWindowText[1] = fighter.name + "はやる気に満ち溢れている！";
        }
      }
      // 4ターン目以降、5ターンごとに再生3を得る（2回まで）
      else if ((enemyStrategyParam % 5 === 3) && (enemyStrategyParam <= 5 * 2)){
        enemy.addStatus("regen", 3);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "はキラキラ輝いている…………";
        mainWindowText[1] = "(" + enemy.name + "はしばらくの間、体力を少しずつ回復する！)";
      }
      // 1/4の確率で沈黙1を付与
      else if (randInt(0, 3) === 0){
        fighter.addStatus("silence", 1);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "は切ないバラードを歌っている……";
        mainWindowText[1] = fighter.name + "は沈黙した！";
      }
      // 上のいずれにも当てはまらないなら攻撃
      else {
        damageAmount = enemy.dealAttackDamage(fighter, randInt(8, 14));
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "の激しいダンスパフォーマンス！";
      }
      enemyStrategyParam++;
    }
  },
  "mahoslime": {
    name: "まほスラ",
    hp: 90,
    image1: mahoSlimeImage1,
    image2: mahoSlimeImage2,
    mode: "Normal",
    floor: 2,
    strategy: () => {
      if (enemyStrategyParam === 0) {
        enemyStrategyParam++;
        fighter.addStatus("silence", 3);
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "はチンモクを唱えた！";
        mainWindowText[1] = fighter.name + "はまほうを封じられた！";
      }
      else if (enemyStrategyParam === 1 && enemy.hp * 2 < enemy.maxhp) {
        enemyStrategyParam++;
        enemy.addHp(Math.floor(enemy.maxhp / 2));
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "はカイフクを唱えた！";
      }
      else if (enemyStrategyParam === 2 && enemy.hp * 2 < enemy.maxhp) {
        enemyStrategyParam++;
        enemyStrategyCategory = "magic";
        mainWindowText[0] = enemy.name + "はカイフクを唱えた！";
        mainWindowText[1] = "……が、どうやらMP切れのようだ";
      }
      else {
        damageAmount = enemy.dealAttackDamage(fighter, 8);
        enemyStrategyCategory = "attack";
        mainWindowText[0] = enemy.name + "は" + fighter.name + "を杖で殴った！";
      }
    }
  },
  // 「あー、見ちゃったねー？　みんなには内緒だよー？」
  "merchant":{
    name:"商人",
    hp: 200,
    image1: merchantBossImage3,
    image2: merchantBossImage4,
    mode: "Normal",
    floor: 4,
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
          mainWindowText[0] = "「キミつよいねー。本気出しちゃおっかなー」";
        }
        else if (enemy.hp * 2 < enemy.maxhp && enemyStrategyParam === 0) {
          enemyStrategyParam = 1;
          if (fighterMp > 10) {
            enemy.addStatus("m_shield", 4);
          }
          else {
            enemy.addStatus("shield", 4);
          }
          windowImage = merchantSadImage;
          enemyStrategyCategory = "none";
          mainWindowText[0] = "「うーん、ちょっとピンチかもー？」"  
        }
        else {
          damageAmount = enemy.dealAttackDamage(fighter, randInt(12, 16));
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "の攻撃！";
        }
      }
      // after resurrection
      else {
        if (enemyStrategyParam % 3 === 0) {
          damageAmount = enemy.dealAttackDamage(fighter, 26);
          enemyStrategyCategory = "attack";
          mainWindowText[0] = enemy.name + "の攻撃！";
        }
        else if (enemyStrategyParam % 3 === 1) {
          enemy.addStatus("m_shield", 2);
          fighter.addStatus("weak", 1);
          enemyStrategyCategory = "magic";
          mainWindowText[0] = enemy.name + "は防御まほうと脱力まほうを唱えた！";
        }
        else {
          enemy.addStatus("power", 1);
          enemyStrategyCategory = "none";
          windowImage = merchantFuryImage;
          mainWindowText[0] = "「さーて、耐えられるかなー？」";
        }
        enemyStrategyParam++;
      }
    }
  }
};



// magic data
let magicData = {
  "bugbug": { // バグ魔法
    name: "バグバグ",
    mp: 99,
    image: magicFlameImage,
    mode: "BUG",
    description: "これが見えたらバグです。作者に伝えてネ",
    effect: () => {}
  },
  "flame": {
    name: "フレイム",
    mp: 3,
    image: magicFlameImage,
    mode: "Normal",
    description: "炎で攻撃。自分のLvに応じてダメージ量が上昇。",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 8 + (fighterLv * 2));
    }
  },
  "heal": {
    name: "カイフク",
    mp: 5,
    image: magicHealImage,
    mode: "Normal",
    description: "最大HPの50%を回復する。",
    effect: () => {
      fighter.addHp(Math.floor(fighter.maxhp / 2));
    }
  },
  "thunder": {
    name: "ビリビリ",
    mp: 5,
    image: magicThunderImage,
    mode: "Normal",
    description: "雷で攻撃。70%の確率で敵を3ターン行動不能にする。",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 6 + fighterLv);
      if (randInt(0, 99) < 30) return;
      enemy.addStatus("stun", 3);
    }
  },
  "power": {
    name: "ムキムキ",
    mp: 3,
    image: magicPowerImage,
    mode: "Normal",
    description: "次の2回の「なぐる」の威力を2倍にする。",
    effect: () => {
      fighter.addStatus("power", 2);
    }
  },
  "hena": {
    name: "ヘナヘナ",
    mp: 2,
    image: magicHenaImage,
    mode: "Normal",
    description: "敵の攻撃力を半減させる。攻撃3回まで有効。",
    effect: () => {
      enemy.addStatus("weak", 3);
    }
  },
  "shield": {
    name: "シールド",
    mp: 3,
    image: magicShieldImage,
    mode: "Normal",
    description: "5ターンの間、受けるダメージを半分にする。",
    effect: () => {
      fighter.addStatus("shield", 5);
    }
  },
  "jinx": {
    name: "ジンクス",
    mp: 5,
    image: magicJinxImage,
    mode: "Normal",
    description: "敵にデバフがかかっているなら大ダメージ。",
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
    name: "サンサン",
    mp: 3,
    image: magicThreeImage,
    mode: "Normal",
    description: "固定3ダメージ。コレで敵を倒すとLvが追加で1増える。",
    effect: () => {
      damageAmount = 3;
      enemy.addHp(-damageAmount);
      if (enemy.hp <= 0 && isResurrection === false) {
        isSansanFatal = true;
      }
    }
  },
  "burst": {
    name: "バースト",
    mp: "ALL",
    image: magicBurstImage,
    mode: "Normal",
    description: "最終兵器。MPに応じてダメージ量が上昇。",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, fighterMp * 6);
    }
  },
  "money": {
    name: "マネマネ",
    mp: 3,
    image: magicMoneyImage,
    mode: "Normal",
    description: "所持金の50%に等しいダメージを与え、所持金を20%失う。",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, Math.floor(money * 0.50));
      money = Math.floor(money * 0.80);
    }
  },
  "regen": {
    name: "リジェネ",
    mp: 7,
    image: magicRegenImage,
    mode: "Normal",
    description: "ターン開始時に最大HPの20%を回復する。4ターン持続。",
    effect: () => {
      fighter.addStatus("regen", 4);
    }
  },
  "pachi": {
    name: "パチパチ",
    mp: 1,
    image: magicPachiImage,
    mode: "Normal",
    description: "静電気攻撃。90%の確率で敵を行動不能にする。",
    effect: () => {
      damageAmount = fighter.dealMagicDamage(enemy, 4);
      if (randInt(0, 99) < 10) return;
      enemy.addStatus("stun", 1);
    }
  },
  "plant": {
    name: "プラント",
    mp: 3,
    image: magicDrainImage,
    mode: "EX",
    description: "敵に寄生2を付与。寄生した敵をなぐるとHPを吸収できる。",
    effect: () => {
      enemy.addStatus("drain", 2);
    }
  },
  "bougyo": {
    name: "ボウギョ",
    mp: 1,
    image: magicBougyoImage,
    mode: "EX",
    description: "1ターンの間、敵から受けるダメージを4分の1にする。",
    effect: () => {
      fighter.addStatus("supershield", 1);
    }
  },
  "oshimai": {
    name: "オシマイ",
    mp: 7,
    image: magicOshimaiImage,
    mode: "EX",
    description: "残りMPが7のときに使うと大ダメージを与える。",
    effect: () => {
      if (fighterMp === 7) {
        damageAmount = fighter.dealMagicDamage(enemy, 50 + (fighterLv * 2));
      }
      else {
        damageAmount = fighter.dealMagicDamage(enemy, 1);
      }
    }
  },
};
// magic key list [flame, heal, …]
const allMagicList = Object.keys(magicData);


// tool data
let toolData = {
  "bugtool": { // バグ道具
    name: "かなぶん",
    image: toolDiceImage,
    mode: "BUG",
    description: "これが見えたらバグです。作者に伝えてネ",
    isAvailableFromList: true,
    effect: () => {}
  },
  "mirror": {
    name: "てかがみ",
    image: toolMirrorImage,
    mode: "Normal",
    description: "次の「まほう」が与えるダメージを2倍にする。",
    isAvailableFromList: false,
    effect: () => {
      fighter.addStatus("mirror", 1);
    }
  },
  "fruit": {
    name: "くだもの",
    image: toolAppleImage,
    mode: "Normal",
    description: "最大HPの50%を回復する。",
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
    name: "ばくだん",
    image: toolBombImage,
    mode: "Normal",
    isAvailableFromList: false,
    description: "敵に25の固定ダメージを与える。",
    effect: () => {
      damageAmount = 25
      enemy.addHp(-damageAmount);
      mainWindowText[1] = enemy.name + "に" + damageAmount + "のダメージを与えた！";
    }
  },
  "potion": {
    name: "あおじる",
    image: toolPotionImage,
    mode: "Normal",
    isAvailableFromList: true,
    description: "MP +5。",
    effect: () => {
      fighterMp += 5;
    }
  },
  "dice": {
    name: "さいころ",
    image: toolDiceImage,
    mode: "Normal",
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
      if (damageAmount > 0) {
        mainWindowText[2] = enemy.name + "に" + damageAmount + "のダメージを与えた！";
        // achievement: overkill（渾身の一撃！）
        if (damageAmount >= 100) {
          unlockAchievement("overkill");
        }
      }
    }
  },
  "battery": {
    name: "でんげん",
    image: toolBatteryImage,
    mode: "Normal",
    isAvailableFromList: false,
    description: "敵を3ターン行動不能にする。",
    effect: () => {
      enemy.addStatus("stun", 3);
    }
  },
  "yadorigi": {
    name: "やどりぎ",
    image: toolYadorigiImage,
    mode: "EX",
    isAvailableFromList: false,
    description: "敵に寄生4を付与。寄生した敵をなぐるとHPを吸収できる。",
    effect: () => {
      enemy.addStatus("drain", 4);
    }
  },
  "chun": {
    name: "つーぱい",
    image: toolYakuhaiImage,
    mode: "EX",
    isAvailableFromList: false,
    description: "戦闘中に3個使うと敵に100の固定ダメージ。",
    effect: () => {
      fighter.addStatus("chun", 1);
      if (fighter.statusNum("chun") >= 3) {
        fighter.addStatus("chun", -3);
        damageAmount = 100;
        enemy.addHp(-damageAmount);
        mainWindowText[1] = "「ツモ！」"
        mainWindowText[2] = enemy.name + "に" + damageAmount + "のダメージを与えた！" 
      }
    }
  }
};
// all tool key list
const allToolList = Object.keys(toolData);


// status data
// [typeについて]
//  turn_end  : ターン終了時に1減少
//  turn_start: ターン開始時に1減少
//  stack     : 特定のタイミングで減少（減少処理はプログラムに適宜組み込む）
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
  },
  "silence": {
    name: "チンモク",
    image: statusSilenceImage,
    isBuff: false,
    type: "turn_end"
  },
  "regen": {
    name: "リジェネ",
    image: statusRegenImage,
    isBuff: true,
    type: "turn_start"
  },
  "supershield": {
    name: "スーパーボウギョ",
    image: statusSuperShieldImage,
    isBuff: true,
    type: "turn_start"
  },
  "drain": {
    name: "寄生",
    image: statusDrainImage,
    isBuff: false,
    type: "stack"
  },
  "chun": {
    name: "中",
    image: statusChunImage,
    isBuff: true,
    type: "stack"
  }
};



// oyakudachi info
// 記法：2行分、適切な位置で改行、終わりに”」”を付ける
// 商人「いらっしゃー。ここはソースコードだよー」
// 商人「私に話しかけるのが面倒なら、ここを見るといいよー」
let oyakudachiInfo = [
  ["『なぐる』の威力はキミのLv+5だよー」", ""],
  ["敵に勝つとレベルアップ！", "最大HPとMPが増えるよー」"],
  ["まほうを使うとMPを消費するよ", "MP切れに気をつけてねー」"],
  ["敵をなぐるとMPが1増えるよー」", ""],
  ["固定ダメージはバフやデバフの", "影響を受けないよー」"],
  ["一部のどうぐは戦闘中以外でも", "Sキーのメニューから使えるよー」"],
  ["Aキーを押すと覚えているまほうを", "確認できるよー」"],
  ["HPが満タンの時にくだものを使うと", "最大HPが増えるよー」"],
  ["ジェムを『くらふと』するとたまに", "2個のどうぐが手に入るよー」"],
  ["マップ上のアイコンは一度踏むと", "なくなっちゃうよー」"],
  ["一部の攻撃まほうはLvに応じて", "威力が上がるよー」"]
];

let oyakudachiAdditional = [
  [ // 1F
    ["ちびゴブはHPがピンチになると", "強い攻撃をしてくるよ。怖いねー」"],
    ["スライム？かわいいよねー」", ""],
    ["モクモクはターン経過で", "攻撃力がぐんぐん上がるよー」"],
    ["コーヒーちゃんはダメージを受けると", "カップの中に隠れちゃうよー」"],
    ["どうしてこんな所で商売してるのかって？", "ふふふ、ナイショー」"]
  ],
  [ // 2F
    ["ようせいの回復行動は3回までだよー」", ""],
    ["タテグサのシールドには『ぶつり』", "『まほう』の2種類があるよー」"],
    ["やどクジはネトネト攻撃で", "キミの攻撃力を下げてくるよー」"],
    ["まほスラはキミのまほうを封じる", "『チンモク』を使ってくるよー」"],
    ["零細企業をサポートしてね！", "なんつってー」"]
  ],
  [ // 3F
    ["ドラゴンはHPが半分以下になると", "本気を出すみたいだよー」"],
    ["キミはアイドルのライブを", "見たことある？」"],
    ["シニガミは7ターン以内に倒さないと", "痛い目見るよー……」"],
    ["レンチンは6ターンに1回放電して", "キミを行動不能にするよー」"],
    ["最上階では何が待ち受けてるんだろうね？", "うふふふ……」"]
  ],
];



// room icon data
let roomIconData = {
  "encount": iconEnemyImage,
  "shop": iconShopImage,
  "gemspotin" : iconGemImage
};



// achievement data
let jissekiData = {
  "dungeonclear": {
    name: "だんじょんクリア！",
    description: "だんじょんを制覇する。",
    image: jissekiImage1
  },
  "perfect": {
    name: "だんじょんの覇者",
    description: "全ての敵を倒してだんじょんを制覇する。",
    image: jissekiImage2
  },
  "infighter": {
    name: "格闘家",
    description: "「なぐる」コマンドだけで敵を倒す。",
    image: jissekiImage3
  },
  "magician": {
    name: "マジシャン",
    description: "「まほう」コマンドだけで敵を倒す。",
    image: jissekiImage4
  },
  "fullMP": {
    name: "エナジー満タン",
    description: "MPを30以上蓄積する。",
    image: jissekiImage5
  },
  "overkill": {
    name: "渾身の一撃！",
    description: "1回の攻撃で100ダメージ以上与える。",
    image: jissekiImage6
  },
  "pieceofcake": {
    name: "取るに足りぬ",
    description: "HPを50%以上残してラスボスを撃破する。",
    image: jissekiImage7
  },
  "toolmaster": {
    name: "どうぐマスター",
    description: "1回の攻略でどうぐを10個以上使用する。",
    image: jissekiImage8
  },
  "ascension20": {
    name: "ちりも積もれば",
    description: "Lv20に到達する。",
    image: jissekiImage9
  },
  "SOULdOUT": {
    name: "完売御礼！",
    description: "ショップの品物を買い占める。", // ありがとー
    image: jissekiImage10
  },
  "lucky": {
    name: "ラッキー！",
    description: "「くらふと」1回でどうぐを2個手に入れる。",
    image: jissekiImage11
  },
  "thankyou": {
    name: "遊んでくれてありがとう！",
    description: "他の実績を全て集める。",
    image: jissekiImage12
  },
};

let jissekiList = Object.keys(jissekiData);



// initialize param (part of initialize in "title" scene)
let initParam = function () {
  if (gameMode === "Normal") {
    fighter = new CharacterObject("player", "闘士", 45, fighterImage1, fighterImage2);
    fighterMp = 6;
    fighterMagic = ["flame"];
    fighterTool = [{tag: "fruit", amount: 1}];
  }
  else {
    fighter = new CharacterObject("player", "商人", 45, playerMerchantImage1, playerMerchantImage2);
    fighterMp = 6;
    fighterMagic = ["flame"];
    fighterTool = [{tag: "fruit", amount: 1}];
  }
  fighterLv = 1;
  dungeonFloor = 0;
  money = 50;
  toolDropChance = 40;
  slainEnemy = 0;
  toolCounter = 0;
  largestMp = 0;
  shopInit = true;
  mapInit = true;
  gameClear = false;
  isGamingNow = false;
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

// マップのインデックスを描画座標に変換
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
  // タッチ位置リストの取得
  const touches = evt.changedTouches;
  // btnLayの位置情報を取得
  const btnLayRect = evt.target.getBoundingClientRect();
  for (let i = 0; i < touches.length; i++) {
    //console.log("client:", touches[i].clientX, touches[i].clientY);
    //console.log("page:", touches[i].pageX, touches[i].pageY);
    //console.log("screen:", touches[i].screenX, touches[i].screenY);
    // ブラウザ上のbtnLayにおけるタッチ座標を求める
    const viewX = touches[i].clientX - btnLayRect.left;
    const viewY = touches[i].clientY - btnLayRect.top;
    // 実物とブラウザ上のbtnLayのサイズ比率を求める
    const ratioX = btnLay.width / btnLay.clientWidth;
    const ratioY = btnLay.height / btnLay.clientHeight;
    // ブラウザ上のタッチ座標を実物のbtnLay上の座標に変換
    const canvX = Math.floor(viewX * ratioX);
    const canvY = Math.floor(viewY * ratioY);
    //console.log("canvas:", canvX, canvY);
    // タッチ位置にあるボタンを取得
    buttonPressed = "";
    const buttonKeys = Object.keys(buttonList);
    for (let i = 0; i < buttonKeys.length; i++) {
      if (canvX < buttonList[buttonKeys[i]].x || buttonList[buttonKeys[i]].x + 24 < canvX) continue;
      if (canvY < buttonList[buttonKeys[i]].y || buttonList[buttonKeys[i]].y + 24 < canvY) continue;
      buttonPressed = buttonKeys[i];
      break;
    }
    //console.log("pressed:", buttonPressed);
    if (buttonPressed === "") return;
    // 入力リストにボタンを追加
    if (keyInput.indexOf(buttonPressed) == -1) keyInput.push(buttonPressed);
  }
};

let releaseButton = function(evt) {
  // 入力リストからボタンを削除
  idx = keyInput.indexOf(buttonPressed);
  if (idx != -1) keyInput.splice(idx, 1);
};

let cancelButton = function(evt) {
  // 入力リストからボタンを削除
  idx = keyInput.indexOf(buttonPressed);
  if (idx != -1) keyInput.splice(idx, 1);
};

btnLay.addEventListener("touchstart", pushButton, false);
btnLay.addEventListener("touchend", releaseButton, false);
btnLay.addEventListener("touchcancel", cancelButton, false);

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
  ctx.fillStyle = "#7bb24e"; // 緑
  if (characterObj.hp * 4 < characterObj.maxhp) {
    ctx.fillStyle = "#c16c5b"; // 赤
  }
  else if (characterObj.hp * 2 < characterObj.maxhp) {
    ctx.fillStyle = "#f0bd77"; // 黄
  }
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
// get random integer (min ≤ n ≤ max)
let randInt = function(min, max) {
  let minInt = Math.ceil(min);
  let maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};
*/



// unlock achievement
let unlockAchievement = function (achievementKey) {
  // 獲得済みやんけ！→おわり
  if (isAchievementUnlocked(achievementKey)) return;
  // 新規獲得
  localStorage.setItem(achievementKey, "new");
};

// update achievement
let updateAchievement = function (achievementKey) {
  // 新しい実績じゃないやんけ！→おわり
  if (!isAchievementNew(achievementKey)) return;
  // new → old
  localStorage.setItem(achievementKey, "old");
};

// check achievement
let isAchievementUnlocked = function (achievementKey) {
  let savedata = localStorage.getItem(achievementKey);
  return (savedata === "old" || savedata === "new");
};

let isAchievementNew = function (achievementKey) {
  let savedata = localStorage.getItem(achievementKey);
  return (savedata === "new");
};



// share to twitter
let tweet = function () {
  // reset key inputs
  keyInput.length = 0;
  // create tweet message
  let tweetmes;
  if (gameClear) {
    tweetmes = "だんじょんを踏破した！\n"
  }
  else {
    tweetmes = dungeonFloor + "階で" + enemy.name + "に倒された……\n"
  }
  tweetmes += "&url=https://tsukatomo.github.io/dungeon_battle";
  tweetmes += "&hashtags=だんじょん・ばとる";
  const url = "https://twitter.com/intent/tweet?text=" + tweetmes;
  window.open(url, '_blank');
  //window.location.href = url; // ポップアップしない場合
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
    if (scene === "jisseki" || scene === "erasedata") {
      statusWindowText[0] = "実績一覧    X:タイトルに戻る  S:データ消去";
    }
    else {
      statusWindowText[0] = fighter.name + " Lv." + fighterLv + "    HP " + fighter.hp + "/" + fighter.maxhp + "    MP " + fighterMp + "    " + dungeonFloor + "階    " + money + "円";
    }
    drawTextInWindow(null, statusWindowText, 0, 0, 640, useriCtx);
  }
  // in game
  if (isGamingNow) {
    // update largest MP
    largestMp = (largestMp < fighterMp) ? fighterMp : largestMp;
    // a key: show magic list
    if (isKeyPressedNow("a") && subScene === "none") {
      setSubScene("magiclist");
    }
    // s key: show tool list
    if (isKeyPressedNow("s") && subScene === "none") {
      setSubScene("toollist");
    }
  }
  // scene
  sceneList[scene]();
  // sub scene
  subSceneList[subScene]();
};



// scene list ======================================================================

let sceneList = {
  // scene: title（タイトル）----------------------------------------
  "title": () => {
    if (sceneInit) {
      sceneInit = false;
      // initialize parameters of fighter
      initParam();
      // check num of unlocked achievement and new achievement
      let numOfUnlock = 0;
      isNewAchievementExist = false;
      jissekiList.forEach((e) => {
        if (isAchievementUnlocked(e)) numOfUnlock++;
        if (isAchievementNew(e)) isNewAchievementExist = true;
      });
      // unlock achievement: thankyou
      if (numOfUnlock >= jissekiList.length - 1) {
        unlockAchievement("thankyou");
        //isNewAchievementExist = true;
      }
      // draw background
      backgCtx.drawImage(titleBackImage, 0, 0);
      animeCount = 64;
    }
    fighter.drawAnime(fighterX, 224, charaCtx);
    charaCtx.drawImage(titleImage, 192, fixCoordinate(18 - (animeCount * animeCount / 100) * 4)); 
    if (isNewAchievementExist) {
      drawAnimation(jissekiNewTsutiImage1, jissekiNewTsutiImage2, 380, 420, charaCtx);
    }
    if (isKeyPressedNow("z")) {
      isGamingNow = true;
      setTransition("map");
    }
    else if (isKeyPressedNow("x")) {
      setTransition("jisseki");
    }
  },

  // scene: jisseki（実績） ----------------------------------------
  "jisseki" : () => {
    //init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // reset cursor
      jissekiCursorX = 0;
      jissekiCursorY = 0;
      // reset window
      windowImage = null;
      // draw background
      backgCtx.fillStyle = "#32535f";
      backgCtx.fillRect(0, 0, 640, 480);
      // drawing - jisseki list
      let imageOfJisseki, left, top;
      for (let i = 0; i < jissekiList.length; i++) {
        imageOfJisseki = isAchievementUnlocked(jissekiList[i]) ? jissekiData[jissekiList[i]].image : jissekiLockedImage;
        left = (i % 6) * 96 + 48;
        top = Math.floor(i / 6) * 96 + 128;
        backgCtx.drawImage(imageOfJisseki, left, top);
        if (isAchievementNew(jissekiList[i])) {
          backgCtx.drawImage(jissekiNewImage, left - 16, top);
        }
      }
      // update achievement (new → old)
      jissekiList.forEach((e) => {
        updateAchievement(e);
      });
    }
    // update
    // show achievement info
    let id = jissekiCursorY * jissekiCol + jissekiCursorX;
    if (0 <= id && id < jissekiList.length) {
      if (isAchievementUnlocked([jissekiList[id]])) {
        mainWindowText[0] = "【" + jissekiData[jissekiList[id]].name + "】";
      }
      else {
        mainWindowText[0] = "【？？？】";
      }
      if (isAchievementUnlocked([jissekiList[id]]) || isAchievementUnlocked("dungeonclear")) {
        mainWindowText[1] = jissekiData[jissekiList[id]].description;
      }
      else {
        mainWindowText[1] = "？？？？？？？？？？";
      }
      mainWindowText[2] = "";
    }
    // drawing - cursor
    drawAnimation(jissekiCursorImage1, jissekiCursorImage2, jissekiCursorX * 96 + 48 - 32, jissekiCursorY * 96 + 128 - 32, useriCtx);
    // get key input
    if (isKeyPressedInterval("u")) {
      jissekiCursorY--;
      if (jissekiCursorY < 0) jissekiCursorY = jissekiRow - 1;
    }
    else if (isKeyPressedInterval("d")) {
      jissekiCursorY++;
      if (jissekiCursorY > jissekiRow - 1) jissekiCursorY = 0;
    }
    else if (isKeyPressedInterval("l")) {
      jissekiCursorX--;
      if (jissekiCursorX < 0) jissekiCursorX = jissekiCol - 1;
    }
    else if (isKeyPressedInterval("r")) {
      jissekiCursorX++;
      if (jissekiCursorX > jissekiCol - 1) jissekiCursorX = 0;
    }
    if (isKeyPressedNow("x")) { // x: back to title
      setTransition("title");
    }
    else if (isKeyPressedNow("s")){ // s: erase save data
      setScene("erasedata");
    }
  },

  // scene: erasedata（実績画面：データを消す）
  "erasedata": () => {
    // init
    if (sceneInit) {
      // init flag
      sceneInit = false;
      menuCursor = 0;
    }
    // update
    mainWindowText[0] = "データを消します。本当にいいの？";
    mainWindowText[1] = "";
    mainWindowText[2] = "";
    // menu
    if (isKeyPressedNow("u")) menuCursor--;
    if (isKeyPressedNow("d")) menuCursor++;
    if (menuCursor < 0) menuCursor = 1;
    if (menuCursor > 1) menuCursor = 0;
    drawTextInWindowWithCursor(deleteMenu, 480, 480 - gridSize * 5, 160, menuCursor, useriCtx);
    // press z key
    if (isKeyPressedNow("z")) {
      if (menuCursor === 0) {
        setScene("jisseki");
      }
      else {
        localStorage.clear(); // ドカーン！
        setTransition("title");
      }
    }
    // cancel
    if (isKeyPressedNow("x") || isKeyPressedNow("s")) {
      setScene("jisseki");
    }
  },

  // scene: map（マップ画面）----------------------------------------
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
  
  // scene: encount（エンカウント）-----------------------------------
  "encount": () => {
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // create new enemy
      const enemyDatakeys = Object.keys(enemyData); // make key list from enemy data
      let encountList = enemyDatakeys.filter( e => {
        return (enemyData[e].mode === gameMode && enemyData[e].floor === dungeonFloor && e != enemy.type) // 現在フロアで出現、かつ直前にエンカしてない敵
      });
      if (slainEnemy < 2 && dungeonFloor < 2) { // 倒した敵の数が2体未満で1Fにいるときは敵の種類を絞る
        encountList = ["slime", "gob"];
      }
      if (encountList.length === 0) { // 該当する敵がいないときはバグイムを召喚
        encountList = ["bugime"];
      }
      //const eKey = "idol"; // テスト用（敵指定）
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
      // reset command counter
      commandCounter[0] = 0; // なぐる
      commandCounter[1] = 0; // まほう
      commandCounter[2] = 0; // どうぐ
      // text (and merchant special)
      isResurrection = false;
      windowImage = null;
      mainWindowText[0] = enemy.name + "が立ちはだかる！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      if (eKey === "merchant") {
        isResurrection = true;
        windowImage = merchantFaceImage;
        mainWindowText[0] = "「いらっしゃー。じゃ、始めよっか」";
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
        isStartTurn = false;
        fighter.turnStart();
        damageAmount = 0;
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
      damageAmount = fighter.dealAttackDamage(enemy, 5 + fighterLv);
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "の攻撃！"
      mainWindowText[1] = enemy.name + "に" + damageAmount + "のダメージを与えた！";
      mainWindowText[2] = "";
      // enemy debuff: drain
      if (enemy.isStatusExist("drain")) {
        fighter.addHp(damageAmount);
        enemy.addStatus("drain", -1);
        mainWindowText[2] = fighter.name + "はHPを" + damageAmount + "回復した！";
      }
      // achievement: overkill（渾身の一撃！）
      if (damageAmount >= 100) {
        unlockAchievement("overkill");
      }
      // increase mp
      fighterMp += 1;
      // command counter
      commandCounter[0]++;
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
    if (fighter.isStatusExist("silence")) {
      mainWindowText[2] = "今はまほうを使えない！";
      charaCtx.drawImage(cannotCastImage, 288, 150);
    }
    else if (castMagic.mp != "ALL") {
      if (fighterMp < castMagic.mp) {
        mainWindowText[2] = "MPが足りない！";
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

  // scene: magicmenu（まほうー使用）--------------------------------------------------
  "magiccast": () => {
    // initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // apply magic
      damageAmount = 0;
      castMagic.effect();
      // achievement: overkill（渾身の一撃！）
      if (damageAmount >= 100) {
        unlockAchievement("overkill");
      }
      // consume mp
      if (castMagic.mp === "ALL") {
        fighterMp = 0; // consume ALL MP
      }
      else {
        fighterMp -= castMagic.mp;
      }
      // command counter
      commandCounter[1]++;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "は" + castMagic.name + "を使った！"
      mainWindowText[1] = "";
      mainWindowText[2] = "";
      if (damageAmount > 0) {
        mainWindowText[1] = enemy.name + "に" + damageAmount + "のダメージを与えた！";
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
      toolCounter++;
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
      // command counter
      commandCounter[2]++;
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
  
  // scene: enemyturn（敵のターン）------------------------------------------------
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
        mainWindowText[0] = enemy.name + "はシビレて動けない！";
        enemyStrategyCategory = "stun";
      } 
      else {
        enemyData[enemy.type].strategy();
        if (damageAmount > 0) {
          mainWindowText[1] = fighter.name + "は" + damageAmount + "のダメージを受けた！";
          // fighter debuff: drain
          if (fighter.isStatusExist("drain")) {
            enemy.addHp(damageAmount);
            fighter.addStatus("drain", -1);
            if (mainWindowText[2] === "") {
              mainWindowText[2] = enemy.name + "はHPを" + damageAmount + "回復した！";
            }
          }
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
        // start turn flag
        isStartTurn = true;
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
      }
      // gain money
      let gainMoney = randInt(20, 30);
      money += gainMoney;
      // obtain item
      if (randInt(0, 99) < toolDropChance) {
        toolDropChance -= 20;
        // get random tool
        let toolDataKeys = allToolList.filter( e => {
          return (toolData[e].mode === gameMode);
        });
        if (toolDataKeys.length === 0) {
          toolDataKeys = ["bugtool"];
        }
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
      // achievement unlock: infighter/magician/ascension20/pieceofcake
      if (commandCounter[1] === 0 && commandCounter[2] === 0) unlockAchievement("infighter");
      if (commandCounter[0] === 0 && commandCounter[2] === 0) unlockAchievement("magician");
      if (fighterLv >= 20) unlockAchievement("ascension20");
      if (enemy.type === "merchant" && fighter.hp * 2 >= fighter.maxhp) unlockAchievement("pieceofcake");
      // text 
      windowImage = null;
      mainWindowText[0] = enemy.name + "に勝利した！"
      mainWindowText[1] = fighter.name + "はレベルアップ！";
      mainWindowText[2] = gainMoney + "円を獲得！";
      if (obtainedTool != "none") {
        mainWindowText[2] = gainMoney + "円と" + toolData[obtainedTool].name + "を獲得！"
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

  // scene: defeated（負け）--------------------------------------------------------
  "defeated": () => {
    //initial
    if (sceneInit) {
      // init flag
      sceneInit = false;
      // achievement unlock: toolmaster/fullMP
      if (toolCounter >= 10) unlockAchievement("toolmaster");
      if (largestMp >= 30) unlockAchievement("fullMP");
      // text 
      windowImage = null;
      mainWindowText[0] = fighter.name + "は死んでしまった……";
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

  // scene: shop（店）-------------------------------------------------------
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
      mainWindowText[0] = "「ごゆっくりー」";
      mainWindowText[1] = "";
      mainWindowText[2] = ""; 
      // shop initialize
      if (shopInit) {
        shopInit = false;
        mainWindowText[0] = "「いらっしゃー」";
        // add shop items
        // - make key list
        let magicDataKeys = allMagicList.filter( e => {
          return (magicData[e].mode === gameMode);
        });
        let toolDataKeys = allToolList.filter( e => {
          return (toolData[e].mode === gameMode);
        });
        if (toolDataKeys.length === 0) {
          toolDataKeys = ["bugtool"];
        }
        // - remove magics that the fighter can use
        magicDataKeys = magicDataKeys.filter( e => {
          return (fighterMagic.indexOf(e) === -1)
        });
        /*
        for (let i = 0; i < fighterMagic.length; i++) {
          magicDataKeys.splice(magicDataKeys.indexOf(fighterMagic[i]), 1);
        }
        */
        // - shuffle magic key list
        for (let i = 0; i < magicDataKeys.length; i++) {
          let j = randInt(i, magicDataKeys.length - 1);
          [magicDataKeys[i], magicDataKeys[j]] = [magicDataKeys[j], magicDataKeys[i]]; 
        }
        console.log(magicDataKeys);
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
        // reset num of buys
        buys = 0;
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
        shopInit = true; // 品揃え更新フラグ
        setTransition("map");
        // achievement unlock: SOULdOUT
        if (buys >= numOfItem) unlockAchievement("SOULdOUT");
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
        charaCtx.strokeText(shopItem[i].price + "円", itemX, 260);
        charaCtx.fillText(shopItem[i].price + "円", itemX, 260);
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
        // increase buys
        buys++;
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
      // make dialog list
      let oyakudachiList;
      if (1 <= dungeonFloor && dungeonFloor <= 3) {
        oyakudachiList = oyakudachiInfo.concat(oyakudachiAdditional[dungeonFloor - 1]);
      }
      else {
        oyakudachiList = oyakudachiInfo;
      }
      // text 
      windowImage = merchantFaceImage;
      let oyakudachiIndex = randInt(0, oyakudachiList.length - 1)
      mainWindowText[0] = "「" + oyakudachiList[oyakudachiIndex][0];
      mainWindowText[1] = "　" + oyakudachiList[oyakudachiIndex][1];
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

  // scene: gemspotin（ジェムスポット - 侵入）-----------------------------------------
  "gemspotin": () => {
    if (sceneInit) {
      sceneInit = false;
      animeCount = 8;
      windowImage = null;
      mainWindowText[0] = "ジェムを見つけた！　何をしようかな？";
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

  // scene: gemspot（ジェムスポット - 行動選択）--------------------------------------------
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
    if (menuCursor === 0) { // かいふく
      mainWindowText[0] = "ジェムを生命力に変換する。";
      mainWindowText[1] = "最大HPの50%を回復。";
    }
    else if (menuCursor === 1) { // ほきゅう
      mainWindowText[0] = "ジェムを魔力に変換する。";
      mainWindowText[1] = "MP +5。";
    }
    else { // くらふと
      mainWindowText[0] = "ジェムを加工する。";
      mainWindowText[1] = "ランダムなどうぐを獲得。";
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

  // scene: gemheal（ジェムスポット - かいふく）----------------------------------------
  "gemheal": () => {
    if (sceneInit) {
      sceneInit = false;
      // heal hp
      fighter.addHp(Math.floor(fighter.maxhp / 2));
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "はHPを回復した";
      mainWindowText[1] = "先に進もう";
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

  // scene: gemmagic（ジェムスポット - ほきゅう）----------------------------------------
  "gemmagic": () => {
    if (sceneInit) {
      sceneInit = false;
      // add MP
      fighterMp += 5;
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "のMPが増加した";
      mainWindowText[1] = "先に進もう";
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

  // scene: gemheal（ジェムスポット - くらふと）----------------------------------------
  "gemcraft": () => {
    if (sceneInit) {
      sceneInit = false;
      // undameshi
      goodLuck = (randInt(0, 4) === 0);
      // get random tool
      let toolDataKeys = allToolList.filter( e => {
        return (toolData[e].mode === gameMode);
      });
      if (toolDataKeys.length === 0) {
        toolDataKeys = ["bugtool"];
      }
      obtainedTool = toolDataKeys[randInt(0, toolDataKeys.length - 1)];
      addTool(obtainedTool, (goodLuck) ? 2 : 1);
      // achievement unlock: lucky
      if (goodLuck) unlockAchievement("lucky");
      // text
      windowImage = null;
      mainWindowText[0] = fighter.name + "は" + toolData[obtainedTool].name + "を" + ((goodLuck) ? "2個" : "") + "手に入れた";
      mainWindowText[1] = "先に進もう";
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

  // scene:clear（クリア！）----------------------------------------------------
  "clear": () => {
    if (sceneInit) {
      sceneInit = false;
      // background
      backgCtx.drawImage(backImage, 0, 0);
      // clear flag
      gameClear = true;
      // unlock achievement: dungeonclear/perfect/toolmaster/fullMP
      unlockAchievement("dungeonclear");
      if (slainEnemy >= 13) unlockAchievement("perfect");
      if (toolCounter >= 10) unlockAchievement("toolmaster");
      if (largestMp >= 30) unlockAchievement("fullMP");
      // text
      windowImage = merchantFaceImage;
      mainWindowText[0] = "「クリアおめでとー！」";
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
    //transCtx.globalAlpha = 1.0 - (transAnimeCount / transAnimeCountInit);
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
    //transCtx.globalAlpha = transAnimeCount / transAnimeCountInit;
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
        toolCounter++;
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
  //console.log("a");
  scene = "title";
  sceneInit = true;
  btnCtx.drawImage(buttonImage, 0, 0);
  initParam();
  setInterval(gameLoop, 10);
};