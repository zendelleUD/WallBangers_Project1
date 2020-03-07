var wallBangers=function(){
    var self=this;
    this.options={
        height:500,
        width:680,
        wallHeight:500,
        wallWidth:50,// idea here is to have the wall width be half the width of the environment
        obstacleSpeed:50,
        minX:50,
        minY:100
    }

    this.score = 0;   // This is the total number of points the player has accumulated so far
                    //player(xPos, yPos, minX, maxX, minY, maxY, veloX, veloY)
    this.ninja = new player(); // Add the coordinates for the ninja. The goal is to have him on the bottom of the right wall essentially
    this.initialize=function(){
        self.reset();
    };
    this.reset=function(){
        this.score = 0;
    }
    this.updateScore = function(){
        this.score +=1 ;
    }

    this.update=function(){
        self.ninja.xPos += self.ninja.veloX;
        this.updateScore(); 
        // document.write("updating\n");
        self.ninja.isCollide();
    };

}

function player(){
    var self = this;
    this.jumping = false;
    this.LtoR = false;
    this.xPos = 0;
    this.yPos = 0;
    this.minX = 0;
    this.maxX = 0;
    this.minY = 0;
    this.maxY = 0;
    this.veloX = 0;
    this.veloY = 0;
    this.initialize = function(){};
    this.jump = function(){
        
        // var currentlyJumping = this.jumping;
        if(this.jumping == false && (this.xPos ==0 || this.xPos == 450)){
            if(this.LtoR == true){
                    this.veloX -= 4;
                    this.jumping = true;
                    console.log("Jumping right")
                }else{
                    this.veloX += 4;  
                    this.jumping = true;
                    console.log("Jumping left");
                }
        }
       
        console.log(this.veloX);
    }
    // this.xPos += this.veloX; //Gravity
    console.log("This is xPos: " + this.xPos + "\nThis is veloX: " + this.veloX );
    
    this.isCollide=function(/*add possible parameters*/){
       
        this.veloX = (this.xPos > 450 || this.xPos < 0) ? 0: this.veloX;
        
        this.jumping = (this.xPos > 450 || this.xPos < 0) ? false : this.jumping; 

        this.xPos = (this.xPos > 450 ) ? 450 : this.xPos;
        this.xPos =  (this.xPos < 0 ) ? 0 : this.xPos;

        this.LtoR = (this.xPos == 450) ? true: this.LtoR;
        this.LtoR = (this.xPos == 0) ? false: this.LtoR;
        
    };
    
    
};

