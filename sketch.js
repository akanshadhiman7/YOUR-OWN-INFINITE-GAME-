var cloud,cloudImage; 
var cloud1,cloud1Image;
var coin,coinImage;
var coinGroup,cloudGroup;
var score = 0;
var gameover,gameoverImage;
var restart,restartImage;


function preload(){
cloudImage = loadImage("cloud.png");
  cloud1Image = loadImage("cloud1.png");
  coinImage = loadImage("coin08.png");
  gameoverImage = loadImage("gameover.png");
  restartImage = loadImage("restart.png");
}

function setup() {
  createCanvas(600,500);
 
  cloud = createSprite(200,390);
  cloud.addImage(cloudImage);
  cloud.scale = 0.3;
  
  score = 0;
  coinGroup = new Group();
  cloud1Group = new Group();
  
  gameover = createSprite(250,200,10,10);
  gameover.addImage(gameoverImage);
  gameover.scale = 0.4;
  gameover.visible = false;
  
  restart = createSprite(250,300,10,10);
 restart.addImage(restartImage);
  restart.scale = 0.8;
  restart.visible = false;
  
}

function draw() {
  background("lightblue")
  coin();
  cloud1();
  
  if (coinGroup.isTouching(cloud)) {
    coinGroup.destroyEach();
    score = score+2;
   
  }
    if (cloud1Group.isTouching(cloud)) {
    cloud1Group.destroyEach();
      coinGroup.destroyEach();
      gameover.visible = true;
      restart.visible = true;
      cloud.visible = false;
    }
  
  if(keyDown("r")) {
    reset();
  }
  
  
  
  
  
  cloud.y=World.mouseY;
cloud.x=World.mouseX;
  
  cloud.y = World.mouseY;
   cloud.X = World.mouseX;
  
  
 drawSprites();
  textSize(20);
  fill("red");
  text("score:"+score,400,30);
}
function coin() {
  if (frameCount % 30 === 0) {
 var coin = createSprite(200,30);
  coin.addImage(coinImage);
  coin.scale = 0.3; 
  coin.x = Math.round(random(20,700));
    coin.velocityY = 11;
    coinGroup.add(coin);
}}

function cloud1() {
  if (frameCount % 50 === 0) {
 var cloud1 = createSprite(200,30);
  cloud1.addImage(cloud1Image);
  cloud1.scale = 0.3;
  cloud1.x = Math.round(random(20,700));
    cloud1.velocityY = 11;
    cloud1Group.add(cloud1);
}}
function reset() {
  score = 0;
  gameover.visible = false;
  restart.visible = false;
  cloud.visible = true;
}

