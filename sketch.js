var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="yellow";
  fixedRect.velocityY=1;
  movingRect=createSprite(400, 300, 50, 40);
  movingRect.shapeColor="yellow";
  movingRect.velocityY=-1;




}

function draw() {
  background("black");  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }
if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 && 
   fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
   movingRect.velocityY=movingRect.velocityY*(-1);
   fixedRect.velocityY=fixedRect.velocityY*(-1);}






  //movingRect.x=World.mouseX;
  //movingRect.y=World.mouseY;
  drawSprites();
}