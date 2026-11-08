let cloudX = -50;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  angleMode(DEGREES)
}

function draw() {
  noStroke();
  //Makes the sky blue
  background(148,196,255);
  //Makes the bird that follows the mouse
  fill(0);
  ellipse(mouseX,mouseY,30,10);
  ellipse(mouseX+20,mouseY,20,5);
  circle(mouseX-15,mouseY,8);
  ellipse(mouseX-2,mouseY-10,5,20);
  ellipse(mouseX+5,mouseY-15,15,5);
  ellipse(mouseX+5,mouseY-8,15,5);
  ellipse(mouseX-20,mouseY,5,3);

  //Makes the Sun and makes it yellow
  fill(255,247,3);
  circle(0,0,150);
  //Makes the cloud and makes them white
  fill(255);
  ellipse(cloudX,50,75,25);
  ellipse(cloudX-10,65,75,25);
  ellipse(cloudX-20,55,75,25);
  ellipse(cloudX+20,55,75,25);
  //Makes the cloud move
  cloudX = cloudX +3;

  if (cloudX == 850) {
    cloudX = -50
  }
 
  //Makes the ground and makes it green
  fill(34,122,10);
  ellipse(200,200,480,120);
  ellipse(600,250,530,180);
  rect(400,350,800,250);
  //Makes the tree trunks
  fill(77,51,5);
  rect(100,300,20,100);
  rect(600,275,20,100);
  rect(225,250,20,100);
  rect(550,350,20,100);
  rect(375,275,20,100);
  rect(740,300,20,100);
  rect(310,370,20,100);
  //Makes the Orange 1 trees
  fill(227,157,27);
  circle(100,250,100);
  circle(600,225,100);
  //Makes the Yellow 2 trees
  fill(242,219,12);
  circle(225,200,100);
  circle(550,300,100);
  //Makes the Red trees
  fill(222,85,75);
  circle(375,225,100);
  circle(740,250,100);
  //Makes the Orange 2 tree
  fill(255,166,0);
  circle(310,320,100)
}