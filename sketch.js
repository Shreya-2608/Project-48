var mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, comets, asteroids, sun, obstacleSound;
var mercImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg, cometImg1, asteroidImg, cometImg2, sunImg, obSound;
var ObstacleGroup, PlanetGroup;
var score;

function preload(){
mercImg = loadImage("images/mercury.jpg");
venusImg = loadImage("images/venus.jpg");
earthImg = loadImage("images/earth.jpg")
marsImg = loadImage("images/mars.jpg");
jupiterImg = loadImage("images/jupiter.jpg");
saturnImg = loadImage("images/saturn.jpg");
uranusImg = loadImage("images/uranus.jpg");
neptuneImg = loadImage("images/neptune.jpg");
asteroidImg = loadImage("images/asteroid.png");
cometImg1 = loadImage("images/comet1.jpg");
cometImg2 = loadImage("images/comet2.png");
sunImg = loadImage("images/sun2.jpg");
obSound = loadSound("sounds/obstacle.mp3");
}

function setup() {
	createCanvas(1200, 800);
  ObstacleGroup = new Group();
  PlanetGroup = new Group();
	sun = createSprite(600,300,20,20);
	sun.addImage("sun",sunImg);
  sun.scale = 0.3;
  
  neptune = createSprite(1150,680,20,20);
  neptune.addImage("neptune",neptuneImg);
  neptune.scale = 0.47;
 
  uranus = createSprite(1000,680,20,20);
  uranus.addImage("uranus",uranusImg);
  uranus.scale = 0.7;
  
  saturn = createSprite(830,680,20,20);
  saturn.addImage("saturn",saturnImg);
  saturn.scale = 1.2;
  
  jupiter = createSprite(630,680,20,20);
  jupiter.addImage("jupiter",jupiterImg);
  jupiter.scale = 1.1;
  
  mars = createSprite(500,680,20,20);
  mars.addImage("mars",marsImg);
  mars.scale = 0.25;
  
  earth = createSprite(400,680,20,20);
  earth.addImage("earth",earthImg);
  earth.scale = 0.4;
  
  venus = createSprite(300,680,20,20);
  venus.addImage("venus",venusImg);
  venus.scale = 0.45;
	
  mercury = createSprite(200,680,20,20);
  mercury.addImage("mercury",mercImg);
  mercury.scale = 0.25;

  score = 0;
}


function draw() {
  background("black");

  textSize(25);
  fill("white");
  text("Score: " + score,30,50);
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,550,280);
  
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,450,210);
  
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,370,180);
 
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,300,150);
 
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,220,130);
 
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,160,105);
 
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,120,70);
 
  ellipseMode(RADIUS);
  fill("black");
  strokeWeight(3);
  stroke("white");
  ellipse(600,300,70,50);

  Obstacles();

  if(mousePressedOver(neptune)){
    neptune.x = 1150;
    neptune.y = 300;
    neptune.scale = 0.35;
    score += 5;
  }
  if(mousePressedOver(uranus)){
    uranus.x = 1050;
    uranus.y = 350;
    uranus.scale = 0.5;
    score += 5;
  }
  if(mousePressedOver(saturn)){
    saturn.x = 250;
    saturn.y = 300;
    saturn.scale = 0.6;
    score += 5;
  }
  if(mousePressedOver(jupiter)){
    jupiter.x = 855;
    jupiter.y = 240;
    jupiter.scale = 0.5;
    score += 5;
  }
  if(mousePressedOver(mars)){
    mars.x = 650;
    mars.y = 390;
    mars.scale = 0.2;
    score += 5;
  }
  if(mousePressedOver(earth)){
    earth.x = 500;
    earth.y = 222;
    earth.scale = 0.28;
    score += 5;
  }
  if(mousePressedOver(venus)){
    venus.x = 550;
    venus.y = 365;
    venus.scale = 0.25;
    score += 5;
  }
  if(mousePressedOver(mercury)){
    mercury.x = 600;
    mercury.y = 250;
    mercury.scale = 0.2;
    score += 5;
  }

  if(mercury.isTouching(ObstacleGroup)){
    if(mercury.x===600 && mercury.y===250){
    obSound.play();
    score = score-2;
    mercury.x = 200;
    mercury.y = 680;
    }
  }
  if(venus.isTouching(ObstacleGroup)){
    if(venus.x===550 && venus.y===365){
    obSound.play();
    score = score-2;
    venus.x = 300;
    venus.y = 680;
    }
  }
  if(earth.isTouching(ObstacleGroup)){
    if(earth.x===500 && earth.y===222){
    obSound.play();
    score = score-2;
    earth.x = 400;
    earth.y = 680;
    }
  }
  if(mars.isTouching(ObstacleGroup)){
    if(mars.x===650 && mars.y===390){
    obSound.play();
    score = score-2;
    mars.x = 500;
    mars.y = 680;
    }
  }
  if(jupiter.isTouching(ObstacleGroup)){
     if(jupiter.x===855 && jupiter.y===240){
    obSound.play();
    score = score-2;
    jupiter.x = 630;
    jupiter.y = 680;
     }
  }
  if(saturn.isTouching(ObstacleGroup)){
    if(saturn.x===250 && saturn.y===300){
    obSound.play();
    score = score-2;
    saturn.x = 830;
    saturn.y = 680;
    }
  }
  if(uranus.isTouching(ObstacleGroup)){
    if(uranus.x===1050 && uranus.y===350){
    obSound.play();
    score = score-2;
    uranus.x = 1000;
    uranus.y = 680;
    }
  }
  if(neptune.isTouching(ObstacleGroup)){
    if(earth.x===1150 && earth.y===300){
    obSound.play();
    score = score-2;
    neptune.x = 1150;
    neptune.y = 680;
    }
  }
  drawSprites();
 
}

function Obstacles(){
  if(frameCount % 120 == 0){
  var obstacle = createSprite(random(1000,1200),random(0,500),10,10);
  var rand = Math.round(random(1,3));

  
switch(rand){
  case 1: obstacle.addImage(cometImg1);
  break;
  case 2: obstacle.addImage(cometImg2);
  break;
  case 3: obstacle.addImage(asteroidImg);
  break;
  default: break;
}

obstacle.scale = 0.8;
obstacle.velocityX = -(13 +score/4);
obstacle.velocityY = (2 +score/4);
obstacle.lifetime = 200;
ObstacleGroup.add(obstacle);
}
}