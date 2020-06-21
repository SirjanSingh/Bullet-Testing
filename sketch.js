
var bullet1,bullet2,bullet3,bullet4;
var speed , weight;
var speed1,weight1;
var speed2,weight2;
var speed3,weight3;
var speed4,weight4;
var object1,object2;
var speed,weight;
var thickness1,thickness2,thickness3,thickness4,thickness;
var wall1,wall2,wall3,wall4;
var damage,damage1,damage2,damage3,damage4;

function setup() {
  createCanvas(1400,600);

  thickness1=random(22,83);  
  thickness=random(22,83);
  thickness3=random(22,83);  
  thickness4=random(22,83);

  wall1=createSprite(1200,50,thickness1,80);
  wall1.shapeColor=rgb(80,80,80);

 wall2=createSprite(1200,200,thickness,80);
  wall2.shapeColor=rgb(80,80,80);


 wall3=createSprite(1200,350,thickness3,80);
  wall3.shapeColor=rgb(80,80,80);

  wall4=createSprite(1200,500,thickness4,80);
  wall4.shapeColor=rgb(80,80,80);


  bullet1=createSprite(200, 50,random(22,83),15);
  bullet2=createSprite(200, 200,random(22,83), 15);
  bullet3=createSprite(200,350,random(22,83), 15);
  bullet4=createSprite(200, 500,random(22,83), 15);
  bullet1.shapeColor="blue";
  bullet2.shapeColor="blue";
  bullet3.shapeColor="blue";
  bullet4.shapeColor="blue";

  speed1=random(223,321);
  weight1=random(30,52);
  bullet1.velocityX=speed1;

  speed2=random(223,321);
  weight2=random(30,52);
  bullet2.velocityX=speed2;

  speed3=random(223,321);
  weight3=random(30,52);
  bullet3.velocityX=speed3;

  speed4=random(223,312);
  weight4=random(30,52);
  bullet4.velocityX=speed4;

 
}


function draw() {
  background(150);  



  console.log((0.00000015*weight1*speed1*speed1)/thickness1*thickness1*thickness1);

//collide(bullet1,wall)
collide(wall1,bullet1)
collide(wall2,bullet2)
collide(wall3,bullet3)
collide(wall4,bullet4)
  drawSprites();
}


/*function collide(){
  if(wall.x-bullet1.x<wall.width/2+bullet1.width/2 && bullet1.x-wall.x<wall.width/2+bullet1.width/2){
    bullet1.velocityX=0
  }
}*/
