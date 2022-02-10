var bg, bgImg;
var bunny, bunnyImg;
var obsImg_1, obsImg_2;
var topGround;
var bottomGround;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

function preload(){
  bgImg = loadImage("bgImg.png");
  
  bunnyImg = loadImage("bunnyImg.png");
  
  obsImg_1 = loadImage("obsImg_1.png");
  obsImg_2 = loadImage("obsImg_2.png");
  
}

function setup(){
  createCanvas(400,400);
  //backgroung image
  bg = createSprite(165,385,1,1);
  bg.addImage(bgImg);
  bg.scale = 1.3;
  
  //creating top and bottom grounds
  bottomGround = createSprite(200,390,300,20);
  bottomGround.visible = false;

  topGround = createSprite(200,10,300,20);
  topGround.visible = false;
  //creating bunny
  bunny = createSprite(100,200,20,50);
  bunny.addAmimation("bunny", bunnyImg);
  bunny.scale = 0.2;
}

function draw(){
  drawSprites();
  backgroung(180);
  text("score:" + score, 500,500);
  if(gameState === PLAY){
    if(kyDown("left_arrow")){
      bunny.x = bunny.x-3;
    }
    if(keyDown("right_arrow")){
      bunny.x = bunny.x+3;
    }
    if(keyDown("space")){
      bunny.velocityY=-10;
    }
    bunny.velocityY = bunny.velocity + 0.8;
  }
}

// function END
function END(){
  if(invisibleBlockGroup.isTouching(bunny)||bunny.y>600){
    bunny.destroy();
    gamestate = "END";
  }
  }

