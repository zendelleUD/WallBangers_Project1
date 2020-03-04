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
            $('#player').css("right",self.game.ninja.Position+'px');
        });


        $('#StartBtn').on('click',function(){
            $('#GameStopped').hide();
            $('#GameRunning').show();
            $('#Status').text('Get Ready...');
            self.running=true;
            self.takeShot();
        });
        $('#StopBtn').on('click',function(){
            $('#GameStopped').show();
            $('#GameRunning').hide();
            self.running=false;
            self.game.reset();
            self.refreshView();
        });
    };
    this.refreshView=function(){
        $('#player').css("left",self.game.ninja.xPos-7);
        $('#player').css("top",self.game.ninja.yPos-7);
    };
    
    this.updateUI=function()
    {
        if (self.running==false)
        {
            return;
        }
            var result=self.game.update(.1);
            self.refreshView();


    }
    this.initialize();
}