var ship,shipImg;
var sea,seaImg;

function preload(){

shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200);
  sea.addImage("nose",seaImg);
  sea.scale=0.3;

ship = createSprite(150,250,100,100);
ship.addAnimation("nose",shipImg);
ship.scale=0.3; 

//sea = createSprite(200,200,400,400);
//sea.addImage("nose",seaImg);
}

function draw() {
  background("blue");
 


  drawSprites();
}