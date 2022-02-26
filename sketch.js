var bg,bgImg;
var spiderMan, spiderManImg;
var man1,man2,man3,man1Img,man2Img,man3Img;
var spidermanShooterImg,spidermanShooter;

function preload(){
  
  spiderManImg = loadImage("assets/spider.png");
  spidermanShooterImg = loadImage("assets/spidermanShooter2.png");

  bgImg = loadImage("assets/building.jpg");
  man1Img = loadImage("assets/man1.png");
  man2Img = loadImage("assets/man2.png");
  man3Img = loadImage("assets/man3.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1
  

//creating the player sprite
  spiderMan = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  spiderMan.addImage(spiderManImg)
  spiderMan.scale = 0.3
  spiderMan.debug = true
  spiderMan.setCollider("rectangle",0,0,300,300)

  man1 = createSprite(displayWidth-900, displayHeight-300, 50, 50);
  man1.addImage(man1Img)
  man1.scale = 0.6
  man1.debug = true
  man1.setCollider("rectangle",0,0,300,300)

 man2 = createSprite(displayWidth-600, displayHeight-300, 50, 50);
 man2.addImage(man2Img)
 man2.scale = 0.6
 man2.debug = true
 man2.setCollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  spiderMan.y = spiderMan.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  spiderMan.y = spiderMan.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  spiderMan.addImage(spidermanShooterImg)
  
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  spiderMan.addImage(spiderManImg)
}

drawSprites();

}
