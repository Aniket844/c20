var PLAY = 1;
var END = 0;
var gameState = PLAY;
var planet1img,planet2img,planet3img,planet4img,planet5img,planet6img;
var planet1,planet2,planet3,planet3,planet4,planet5,planet6;
var runner1mg,runner2mg,runner3mg,runner4mg,runner5mg,runner6mg;
var planetbg1,planetbg2,planetbg3,planetbg4,planetbg5,planetbg6;
var spacebgimg,spacebg;
var spaceship,spaceshipimg;


var score=0;


function preload(){
   
    spacebgimg  = loadImage("space bg 2.png")
    planet1img = loadImage("planet img 1.png")
    planet3img = loadImage("planet img 3.png")
    planet2img = loadImage("planet img 2.png")
    planet5img = loadImage("planet img 5.png")
    planet4img = loadImage("planet img 4.png")
    planet6img = loadImage("planet img 6.png")
    spaceshipimgrt= loadImage("Spaceship_rt.png")
    spaceshipimgup= loadImage("Spaceshipup.png")
    runnerimg1= loadImage("runner img 1.png")
    runnerimg2= loadImage("runner img 2.png")
    runnerimg3= loadImage("runner img 3.png")
    runnerimg4= loadImage("runner img 4.png")
    runnerimg5= loadImage("runner img 5.png")
    runnerimg6= loadImage("runner img 6.png")
    coinImg=loadImage("coin.png");
    alienshipimg1=loadImage("alien-spaceship.png");
    alienshipimg2=loadImage("alien-spaceship2.png");
    gameOverImg = loadImage("game over.png");
  }

function setup() {
    createCanvas(windowWidth,windowHeight);

    spacebg = createSprite(600,100);
    spacebg.addImage(spacebgimg);
    spacebg.x = spacebg.width /2;
    ground.velocityX = -6

    planet1 = createSprite(700,540,40,30);
    planet1.addImage(planet1img)
    planet1.scale=0.5

    planet2 = createSprite(1100,400,40,30);
    planet2.addImage(planet2img)
    planet2.scale=0.33

    planet3 = createSprite(700,120,40,30);
    planet3.addImage(planet3img)
    planet3.scale=0.23

    planet4 = createSprite(950,540,40,30);
    planet4.addImage(planet4img)
    planet4.scale=0.28

    planet5 = createSprite(1100,220,40,30);
    planet5.addImage(planet5img)
    planet5.scale=0.45

    planet6 = createSprite(925,110,40,30);
    planet6.addImage(planet6img)
    planet6.scale=0.5

    spaceship = createSprite(200,300,40,30);
    spaceship.addImage(spaceshipimgrt)

    gameOver = createSprite(300,100);
    gameOver.addImage(gameOverImg);

   coingp = new Group();
   aliengp =new Group();
   score = 0;
}

function draw() {
  text("Score: "+ score, 500,50); 

    if (gameState===PLAY){ 
        
        
  if(keyDown("up_arrow")){ 
  spaceship.y = spaceship.y-8;
  spaceship.addImage(spaceshipimgup);
   }
        
  if(keyDown("down_arrow")){ 
   spaceship.y = spaceship.y+8;
    }
    
   if(keyDown("right_arrow")){ 
   spaceship.x = spaceship.x+8;
  }
        
   if(keyDown("left_arrow")){ 
    spaceship.x = spaceship.x-8;
    }
         
   if(spaceship.isTouching(planet1))
   { spacebg.addImage(runnerimg1)
     planet1.visible=false;
     planet2.visible=false;
     planet3.visible=false;
     planet4.visible=false;
     planet5.visible=false;
     planet6.visible=false;
        
    }

   if(spaceship.isTouching(planet2))
   { spacebg.addImage(runnerimg2)
     planet1.visible=false;
     planet2.visible=false;
     planet3.visible=false;
     planet4.visible=false;
     planet5.visible=false;
     planet6.visible=false;
    }

    if(spaceship.isTouching(planet3))
   { spacebg.addImage(runnerimg3)
     planet1.visible=false;
     planet2.visible=false;
     planet3.visible=false;
     planet4.visible=false;
     planet5.visible=false;
     planet6.visible=false;

    }

    if(spaceship.isTouching(planet4))
   { spacebg.addImage(runnerimg4)
     planet1.visible=false;
     planet2.visible=false;
     planet3.visible=false;
     planet4.visible=false;
     planet5.visible=false;
     planet6.visible=false;

    }

    if(spaceship.isTouching(planet5))
   { spacebg.addImage(runnerimg5)
     planet1.visible=false;
     planet2.visible=false;
     planet3.visible=false;
     planet4.visible=false;
     planet5.visible=false;
     planet6.visible=false;

    }
    if(spaceship.isTouching(coingp)){
      coingp.destroyEach();
      score = score+50
    }

      spawncoin(); 
     spawnalien();
     if(aliengp.isTouching(spaceship)){
       aliengp.destroyEach();
      gameState = END;
     }
    }
    else if (gameState === END) {
    spaceship.addImage(gameOver);
    spaceship.x=500;
    spaceship.y=700;
    coingp.destroyEach();
    coingp.setVelocityYEach(0);
    aliengp.destroyEach();
    aliengp.setVelocityYEach(0);

    }
drawSprites();
}

function spawncoin(){
  if (frameCount % 40 === 0) {
    var coin = createSprite(600,120,40,10);
    coin.y = Math.round(random(80,120));
    coin.addImage(coinImg);
    coin.scale = 0.5;
    coin.velocityX = -3;
    coin.lifetime = 300;
    coin.depth=spaceship.depth;
    spaceship.depth = spaceship.depth+1
    coingp.add(coin);
  }
}
function spawnalien(){
  if(frameCount % 50 === 0) {
  var alien = createSprite(600,165,10,40);
  alien.velocityX= -6;
  var rand = Math.round(random(1,2));
  switch(rand) {
    case 1: alien.addImage(alienshipimg1);
              break;
    case 2: alien.addImage(alienshipimg2);
              break;
    default: break;
  }
  alien.scale = 0.5;
  alien.lifetime = 300;
    
   aliengp.add(alien);

}

}

























