var iss,spacecraft,hasDocked

function preload(){
  bgImg = loadImage("images/spacebg.jpg")
  craft1Img = loadImage("images/spacecraft1.png")
  craft2Img = loadImage("images/spacecraft2.png")
  craft3Img = loadImage("images/spacecraft3.png")
  craft4Img = loadImage("images/spacecraft4.png")
  issImg = loadImage("images/iss.png")
}

function setup() {
  createCanvas(800,500);

  spacecraft = createSprite(350,400,50,50)
  spacecraft.addImage(craft1Img)
  spacecraft.scale=0.3

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg) 
  iss.scale=0.7
 
}

function draw() {
  background(bgImg);  

  console.log(spacecraft.x,spacecraft.y)

  

  if(!hasDocked){
    hasDocked=false
    if(keyWentDown("RIGHT_ARROW")){
      spacecraft.velocityX = 5
      spacecraft.addImage(craft4Img)
    } 

    if(keyWentDown("LEFT_ARROW")){
      spacecraft.velocityX =- 5
      spacecraft.addImage(craft3Img)
    }

    if(keyWentDown("UP_ARROW")){
      spacecraft.velocityY = -5
      spacecraft.addImage(craft2Img)
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(craft2Img)
    }
  
    if(keyWentUp("RIGHT_ARROW")){
      spacecraft.velocityX = 0
      spacecraft.addImage(craft1Img)
    }

    if(keyWentUp("LEFT_ARROW")){
      spacecraft.velocityX = 0
      spacecraft.addImage(craft1Img)
    }

    if(keyWentUp("UP_ARROW")){
      spacecraft.velocityY = 0
      spacecraft.addImage(craft1Img)
    }

    if(keyWentUp("DOWN_ARROW")){
      //spacecraft.velocityY = 0
      spacecraft.addImage(craft1Img)
    }
  }

 

  drawSprites();
}