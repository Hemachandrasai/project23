const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   combase = new computerbase(width-300,random(450,height-300),180,150);
   computerplayer = new Player(width-300,combase.body2.position.y-150,50,180)


   playerbase = new playerbase(width-1000,random(450,height-300),180,150);
player = new Player(width-1000,playerbase.body.position.y-150,50,180);

back = loadImage("sky.jpg");


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  imageMode(CENTER);
  image(back,600,300,windowWidth,windowHeight);

   //Display Playerbase and computer base 
combase.display();
computerplayer.display();

   //display Player and computerplayer
   playerbase.display();
   player.display();


}
