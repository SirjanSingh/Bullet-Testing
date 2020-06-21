function damageRed(damage,weight,speed,thickness,wall)
{
    damage=(0.00000015*weight*speed*speed)/thickness*thickness*thickness;
if(damage<=20){
    wall.shapeColor=rgb(0,255,0);
    
}

else {
     wall.shapeColor=rgb(255,0,0);

}
}