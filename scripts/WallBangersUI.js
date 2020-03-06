var WallBangersUI=function()
{
    var self=this;
    this.game=undefined;
    this.running=false;
    this.initialize=function()
    {
        //Initialize wallbangers.js
        //Back end
        self.game=new wallBangers()
     
           $('#GameStopped').show();
            $('#GameRunning').hide();
     
        // Key Event Listener
      $('body').keypress(function(event){
            if (event.which==32) //Keycode for space is 32
            {
                self.game.ninja.jump();   
            }
            $('#player').css("right",self.game.ninja.xPos+'px');
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
    // this.refreshView=function(){
    //     $('#player').css("right",self.game.ball.xPos + 'px');
        
    // };
    
    
    this.updateUI=function(){
        
            var result=self.game.update();
            // self.refreshView();
            $('#player').css("right",self.game.ninja.xPos +'px');
            // this.game.update();
    }
    this.initialize();
    setInterval(this.updateUI, 33);
    // var event = document.addEventListener("onkeydown", this.updateUI());
    // var x = event.keycode;
    // console.log(x);
}