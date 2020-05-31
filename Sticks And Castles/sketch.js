var  rect,tri,circle;
function setup() {
  createCanvas(400,400);
  rect=createSprite(200,380,50,300);
}

function draw() {
  background(255,255,255); 
  circle=ellipse(200,210,0,50);
  rect.display();
  drawSprites();
}