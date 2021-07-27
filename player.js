class Player{
    constructor(x,y,width,height){
    
        var options={
            isStatic : true
        };
    
        this.players = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/player.png");
    
        World.add(world,this.players)
    }
      display(){
    var pos = this.players.position;
    var angle = this.players.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    
    
    
    
      }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }