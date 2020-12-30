var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}



function setup() {
  createCanvas(400, 400)
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.x)



}


function draw() {
  background(255);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if (keyDown("space") && monkey.y >= 314) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);

  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time:" + survivalTime, 100, 50)
  drawSprites();
}

function spawnBanana() {
  if (frameCount % 80 == 0) {
    banana = createSprite(400, 200, 40, 29)
    banana.velocityX = -3;
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.y = Math.round(random(200, 300));

    bananaGroup.add(banana);
  }

}

function spawnObstacle() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 320, 10, 40);
    obstacle.velocityX = -6;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 300;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;

  }

}