let mappedNumberX = 0;
let mappedNumberY = 0;
let blinkAmount = 0;
let talkAmount = 0;
function setup() {
  createCanvas(400, 400);
  // ellipseMode (CENTER);
}

function draw() { 
 blinkAmount = map(mouseX, 0, width, 0, 1, 1);
  talkAmount = map(mouseX, 0, height, 0, 1, 1);

  mappedNumberX = map(mouseX, 0, width, 0, 255, 1);
  mappedNumberY = map(mouseY, 0, height,0,255, 1);
  background (mappedNumberX,mappedNumberY,100);
  
  //FACE
  noStroke(); //for the ellipse
   if (mouseX > width / 2) {
    fill(100, 60, 30); //brown skin color fill
  }
  else{
    fill(240,200,160); // light skin color fill
  }
  
  ellipse(mouseX,mouseY, 150); //makes the ellipse move.
  //fill (240,200,160); //skin color
  
  //EYES
  if(mouseX > width/2){
   fill(255); //white for eyes
  //noStroke(); //if I don't want a stroke
  ellipse(mouseX - 20, mouseY - 25, 20, 15*blinkAmount);//white of eye
  ellipse(mouseX + 20, mouseY - 25, 20, 15*blinkAmount);//white of eye
  noStroke();
  
  fill(100, 60, 30);
  ellipse(mouseX - 20, mouseY - 25, 10, 10*blinkAmount); //iris
  ellipse(mouseX + 20, mouseY - 25, 10, 10*blinkAmount); //iris
  
  fill(0);
  ellipse(mouseX - 20, mouseY - 25, 5, 5*blinkAmount); //black pupil
  ellipse(mouseX + 20, mouseY - 25, 5, 5*blinkAmount); //black pupil
  }
  else{
    //Left pink heart
    fill(500,60,90); //Pink 
  ellipse(mouseX - 20, mouseY - 25, 8, 8);//white of eye
  ellipse(mouseX - 15, mouseY - 25, 8, 8);//white of eye
  triangle (mouseX -24, mouseY -25, mouseX-11, mouseY-25, mouseX-17, mouseY -13 )
    //Right pink heart
    fill(500,60,90); //Pink 
  ellipse(mouseX + 20, mouseY - 25, 8, 8);//white of eye
  ellipse(mouseX + 15, mouseY - 25, 8, 8);//white of eye
  triangle (mouseX + 24, mouseY -25, mouseX+11, mouseY-25, mouseX+17, mouseY -13 )
            
    
  }
  //MOUTH
   if (mouseX > width / 2) {
    fill(0); //Black mouth
  }
  else{
    fill(240,100,160); // lighter pink mouth
  }
   //fill(200, 10, 100); 
  ellipse(mouseX, mouseY + 25, 50, 15*talkAmount);
  
  //CHEEKS
   noStroke(); 
   if (mouseX > width / 2) {
    fill(200,60,100); //pink cheeks
  }
  else{
    fill(240,200,160); // light skin no cheeks
  }
  
  ellipse(mouseX- 40,mouseY,- 20, 15, 5); //left cheek.
  
   if (mouseX > width / 2) {
    fill(200,60,100); //pink cheeks
  }
  else{
    fill(240,200,160); // light skin no cheeks
  }
  
  ellipse(mouseX+ 40,mouseY,- 20, 15, 3); //right cheek.

  
  
  
}