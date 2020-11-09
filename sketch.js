//Create variables here
var dog, happyDog, database, foodS, foodStock,bg;

function preload()
{
	//load images here

  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
  bg=loadImage("images/room.jpg");

}

function setup() {

  database=firebase.database();
	createCanvas(500, 500);
  


  dog=createSprite(800,200,150,150);
  dog.addImage(dog);
  dog.scale=0.15;

  foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  
background(bg);

if(keyPressed(UP_ARROW) || touches.length>0){

  writeStock(foodStock);
  dog.addImage(happyDog);
}


  drawSprites();
  //add styles here
  text("FOOD LEFT : "+ writeStock() , 230,175);
  text("Press UP_ARROW OR JUST TOUCH SCREEN TO FEED DOG",120,50)

}

function readStock(data){
  foodStock=data.val();
  
}

function writeStock(x){

 if(x<=0){
   x=0
 }else{
   x=-1;
 }


  database.ref('/').update({
    Food:x
  })

  
}
