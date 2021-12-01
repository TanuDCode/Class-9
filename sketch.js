var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,100,20,20)
  box.shapeColor = "yellow"
}

function draw() 
{
  background("blue");

  if (keyIsDown(RIGHT_ARROW)){
    box.x += 4
  }
  if (keyIsDown(LEFT_ARROW)){
    box.x -= 4
  }
  if (keyIsDown(UP_ARROW)){
    box.y -= 4
  }
  if (keyIsDown(DOWN_ARROW)){
    box.y += 4
  }
  drawSprites()

}




