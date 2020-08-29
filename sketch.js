//Create variables here
var dog, dogImage
var happyDog, happyDogImage
var database
var foodS
var foodStock


function preload()
{
  //load images here
  dogImage = loadImage("images/dogImage.png")
  happyDogImage = loadImage("images/dogImage1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImage)

  database = firebase.database()

  foodStock = database.ref('Food')
  foodStock.on("value", readStock)

}


function draw() {  
  background(46,139,87)

  if (keyDown(UP_ARROW)) {

    foodStock = foodStock - 1
  }

  if (keyWentDown(UP_ARROW)) {

    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();

  textSize(20)
  fill("white")
  text("Food : " + foodStock, 300, 250)
}

function readStock(data) {

  foodS-data.val();
}

function writeStock(x) {

  database.ref('/').update({

    Food:x
  })
}

