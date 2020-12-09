var dogImg , happyDogImg , dog , milkimg;

var foodS , foods , updatedFoodStock;

var  database , FOODS;

function preload(){
  
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(800, 400);

  database = firebase.database();
  
  dog = createSprite(600 , 250 , 50 , 50);
  dog.addImage("dogImage" , dogImg);
  dog.scale = 0.2;

  foods = new Food();
  
}

function draw() {  
  background(46 , 139 , 87);

  foods.getFoodStock();
  //foods.updateFoodStock();
  foods.deductFoodStock();

  drawSprites();

  fill("white");
  text("Food :" + foodS , 300 , 20);

}