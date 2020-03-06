var wallBangers=function(){
    var self=this;
    this.options={
        height:500,
        width:680,
        wallHeight:500,
        wallWidth:50, // idea here is to have the wall width be half the width of the environment
        obstacleSpeed:50,
        minX:50,
        minY:100
    }

    
    this.score=0; // This is the total number of points the player has accumulated so far
                    //player(xPos, yPos, minX, maxX, minY, maxY, veloX, veloY)
    this.ninja = new player(); // Add the coordinates for the ninja. The goal is to have him on the bottom of the right wall essentially
    this.initialize=function(){
        self.reset();
    };
    this.reset=function(){
        this.score = 0;
    }


    

    this.update=function(){
        
        self.ninja.xPos += 1; 
        // document.write("updating\n");
        
    };

}

function player(){
    var self = this;
    this.jump = false;
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
        
        if(!this.jump){ //Check if already jumping
            switch (this.LtoR) {
                case true:
                    this.posX += 400; //Left to Right
                    this.jump = false;                   
                    break;
                case false:
                    this.posX += (this.posX + 100); //Right to Left
                    this.jump = false;
                    break;
            }
            this.jump = true;
        }
        this.veloY += 15; //Gravity
        

    };
}
