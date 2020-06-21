function collide(wall,bullet){
    if(wall.x-bullet.x<bullet.width/2+wall.width/2 &&
    bullet.x-wall.x<bullet.width/2+wall.width/2){
  bullet.velocityX=0;
  damageRed(damage1,weight1,speed1,thickness1,wall1)
  damageRed(damage2,weight2,speed2,thickness2,wall2)
  damageRed(damage3,weight3,speed3,thickness3,wall3)
  damageRed(damage4,weight4,speed4,thickness3,wall4)
  
}
else {
  damageRed(damage1,weight1,speed1,thickness1,wall1)
  damageRed(damage2,weight2,speed2,thickness2,wall2)
  damageRed(damage3,weight3,speed3,thickness3,wall3)
  damageRed(damage4,weight4,speed4,thickness3,wall4)
  }
}