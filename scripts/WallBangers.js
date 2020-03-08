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
        // self.ninja.xPos += self.ninja.veloX;
        // self.ninja.yPos += self.ninja.veloY;
        this.ninja.updatePlayer();
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
    this.gravity = function(){
        this.veloY -= 10;
    };
    this.jetpack = function(){
        this.veloY += 40;
    }
    this.jump = function(){
        
        // var currentlyJumping = this.jumping;
        if(this.jumping == false && (this.xPos ==0 || this.xPos == 450)){
            if(this.LtoR == true){
                    this.veloX -= 20;
                    this.jumping = true;
                }else{
                    this.veloX += 20;  
                    this.jumping = true;
                }    
            this.veloY = 50;
        }
        // this.jetpack();
       
    };

    
    this.isCollide=function(/*add possible parameters*/){
       
        this.jumping = (this.xPos >= 450 || this.xPos <= 0) ? false : this.jumping; 

        this.xPos = (this.xPos > 450 ) ? 450 : this.xPos;
        this.xPos =  (this.xPos < 0 ) ? 0 : this.xPos;

        this.yPos = (this.yPos < 0  ) ? 0 : this.yPos;
        this.yPos =  (this.yPos > 470 ) ? 470 : this.yPos;
    
        this.veloX = (this.xPos >= 450 || this.xPos <= 0) ? 0: this.veloX;

        this.LtoR = (this.xPos == 450) ? true: this.LtoR;
        this.LtoR = (this.xPos == 0) ? false: this.LtoR;
        
    };
    
    this.updatePlayer = function(){
        self.xPos += self.veloX;
        self.yPos += self.veloY;
        if(this.jump){ 
            this.gravity();
        }else{
            // this.jetpack();
        }

    };
    
};

