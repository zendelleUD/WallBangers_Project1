var WallBangersUI=function()
{
    var self=this;
    // var clock = 0;
    this.game=undefined;
     var isPause = true;
    this.running=false;
    this.initialize=function()
    {
        //Initialize wallbangers.js
        //Back end
        self.game=new wallBangers();
     
           $('#GameStopped').show();
            $('#GameRunning').hide();
     
        
        // new KeyboardEvent("onKeyPress",self.game.ninja.jump());
        // Key Event Listener
      $('body').keypress(function(event){
            if (event.which==32) //Keycode for space is 32
            {
                self.game.ninja.jump();
                console.log("jumping");   
            }
            // $('#player').css("right",self.game.ninja.xPos+'px');
        });


        $('#resumebtn').on('click',function(){
            $('#resumebtn').text("Resume");
            console.log("resume pressed");
            isPause = false;
            console.log(this.isPause);
            //clock = setInterval(this.updateUI,60);
        });

        $('#pausebtn').on('click',function(){
            console.log("paused pressed");
            isPause = true;
            console.log(this.isPause);
            // clock = 0;
        });
    };

    this.refreshView=function(){
        $('#player').css("right",self.game.ninja.xPos + 'px');
        $('#player').css("bottom",self.game.ninja.yPos + 'px');
        $(".Text").text(self.game.score);
    };
        
    this.updateUI=function(){
            if (!isPause) {
            var result= self.game.update();
                self.refreshView(); 
            } 
    }

    this.checkPause = function(){
        if(this.isPause == false){
            this.updateUI();
        }
    }
    this.initialize();
    setInterval(this.updateUI,60);
    
}