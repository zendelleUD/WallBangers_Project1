var WallBangersUI=function()
{
    var self=this;
    this.game=undefined;
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


        $('#ResumeBtn').on('click',function(){
            $('#GameStopped').hide();
            $('#GameRunning').show();
            $('#Status').text('Get Ready...');
            self.running=true;
            self.takeShot();
        });
        $('#PauseBtn').on('click',function(){
            $('#GameStopped').show();
            $('#GameRunning').hide();
            self.running=false;
            self.game.reset();
            self.refreshView();
        });
    };

    this.refreshView=function(){
        $('#player').css("right",self.game.ninja.xPos + 'px');
        $('#player').css("bottom",self.game.ninja.yPos + 'px');
        document.getElementById("score").innerText = self.game.score;
    };
        
    this.updateUI=function(){
        
            var result=self.game.update();
            // self.refreshView();
            self.refreshView();
            // this.game.update();
    }
    this.initialize();
    setInterval(this.updateUI, 60);
    
    
}