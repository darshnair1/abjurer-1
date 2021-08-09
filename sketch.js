var gameState = "startUp";
var backImg, abjurerTitleImg, beginButtonImg, howToPlayImg, beginButton;

function preload() {
  backImg = loadImage("Images/Background.png");
  abjurerTitleImg = loadImage("Images/abjurerTitleImg.png");
  beginButtonImg = loadImage("Images/beginButtonImg.png");
  howToPlayImg = loadImage("Images/howToPlayImg.png");
}

function setup() {
  createCanvas(1600,800);
  abjurerTitleImg.scale = 12;
}

function draw() {
  background(backImg);  
  drawSprites();

  if(gameState === "startUp"){
    imageMode(CENTER);
    image(howToPlayImg, 800, 150);
    image(abjurerTitleImg, 800, 400, 422, 129);
    beginButton = createSprite(800, 600, 153, 69);
    beginButton.addImage(beginButtonImg);
    if(mousePressedOver(beginButton)){
      console.log("is working?????????????");
      gameState = "gamePlaying";
      console.log(gameState);
    }
  }

  if(gameState === "gamePlaying") {
    howToPlayImg.visible = false;
    abjurerTitleImg.visible = false;
    beginButton.visible = 0;
    beginButtonImg.visible = 0;
  }
}

function mousePressed() {
  
}