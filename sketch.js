let zebes;
let start;
let alien;

function preload() {
  
}

function setup() {
  createCanvas(1200, 800);

  zebes = createSprite(200,200);
  start = createSprite(200, 200);
  alien = createSprite(190,283);

}

function draw() {
  background(220);

  fill("black");
  textSize(50);
  text("EGGBREAKER",19,126);

  alien.visible = false;

  if(mousePressedOver(start)) {
    inicio(); 
  }

  drawSprites();
}

function inicio() {
  start.visible = false;
  alien.visible = true;
}