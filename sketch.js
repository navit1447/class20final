var reck1,reck2
function setup() {
  createCanvas(800,400);
reck1=createSprite(200,200,100,200)
reck1.shapeColor="red"
reck2=createSprite(400,200,100,200)
reck2.shapeColor="red"
}

function draw() {
  background(255,255,255);  
  drawSprites()
  reck1.y=mouseY
  reck1.x=mouseX
  if(reck1.x-reck2.x<reck1.width/2+reck2.width/2 && reck2.x-reck1.x<reck1.width/2+reck2.width/2 && reck1.y-reck2.y<reck1.height/2+reck2.height/2 && reck2.y-reck1.y<reck1.height/2+reck2.height/2){
reck1.shapeColor="green"
reck2.shapeColor="green"
  }
else{
  reck1.shapeColor="red"
  reck2.shapeColor="red"
}
  
}
