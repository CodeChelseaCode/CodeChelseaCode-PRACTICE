window.onload = function(){

    // get canvas and store vars
    var canvas = document.getElementById("sky");
    var ctx = canvas.getcontext("2d");
  
    //set canvas dimesions
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
  
    //generate rain
  
    var maxRain = 100;
    var rain = [];
  
    //loop through empty rain and apply attributes
  
    for (var i = 0; i<maxRain;i++){
      rain.push({
        x:Math.random()*W,
        y:Math.random()*H,
        b:Math.random()*5+2, // min of 2px and max of 7px
        d:Math.random() + 1 //density of rain 
      })
  
    //draw Rain
     function drawRain(){
      ctx.clearRect(0,0,W,H);
      ctx.fillStyle = "blue";
      ctx.beginPath();
      for(var i = 0;i < maxRain; i++){
        var r = rain[i];
        ctx.moveTo(r.x,r.y);
        ctx.arc(r.x,r.y,r.b,0,Math.PI*2,true);
      }
  
      ctx.fill();
      moveRain();
     }  
     //animate rain
     var angle= 0;
  
  
    }
  }