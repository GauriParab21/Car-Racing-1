var player,playerImg;
var road, bgImg;
var obstacles,obstacle1,obstacle2,obstacle3,obstacle4;

function preload(){
  playerImg = loadImage("player.png");
  bgImg = loadImage("background.png");
  obstacle1 = loadImage("obstacle1.jpg");
  obstacle2 = loadImage("obstacle2.jpg");
  obstacle3 = loadImage("obstacle3.jpg");
  obstacle4 = loadImage("obstacle4.jpg");

}

function setup(){
    createCanvas(displayWidth-5,displayHeight-120);

    road=createSprite(displayWidth/2,200);
    road.addImage(bgImg);
    road.velocityY = 8;

    player = createSprite(width/2,height-110,50,50);
    player.addAnimation("running",playerImg);
    player.scale=0.2;
   
}

function draw(){
   background(0);
   player.x = World.mouseX;

   if(road.y > height ){
    road.y = height/10;
  }
    drawSprites();
}