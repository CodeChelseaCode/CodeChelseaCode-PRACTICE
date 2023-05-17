window.addEventListener("load", function() {
  
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");		
		
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.border = "2 px solid black";

		// Draw the sun
		ctx.beginPath();
		ctx.arc(100, 100, 50, 0, Math.PI*2);
		ctx.fillStyle = "yellow";
		ctx.fill();
		
		// Draw the tree trunk
		ctx.beginPath();
		ctx.moveTo(200, canvas.height - 100);
		ctx.lineTo(200, canvas.height - 300);
		ctx.lineTo(150, canvas.height - 300);
		ctx.lineTo(150, canvas.height - 100);
		ctx.fillStyle = "brown";
		ctx.fill();

        ctx.beginPath();
		ctx.moveTo(1000, canvas.height - 100);
		ctx.lineTo(1000, canvas.height - 300);
		ctx.lineTo(950, canvas.height - 300);
		ctx.lineTo(950, canvas.height - 100);
		ctx.fillStyle = "brown";
		ctx.fill();

		//draw leaves
		ctx.beginPath();
		ctx.arc(175,canvas.height-345,100,0,Math.PI*2);
		ctx.fillStyle= "green";
		ctx.fill();

		ctx.beginPath();
		ctx.arc(975,canvas.height-345,100,0,Math.PI*2);
		ctx.fillStyle= "green";
		ctx.fill();
		
		// Draw the house
		ctx.beginPath();
		ctx.rect(500, canvas.height - 300, 200, 200);
		ctx.fillStyle = "yellow";
		ctx.fill();
		
		// Draw the roof
		ctx.beginPath();
		ctx.moveTo(500, canvas.height - 300);
		ctx.lineTo(600, canvas.height - 400);
		ctx.lineTo(700, canvas.height - 300);
		ctx.fillStyle = "brown";
		ctx.fill();
		
		// Draw the door
		ctx.beginPath();
		ctx.rect(600, canvas.height - 200, 50, 100);
		ctx.fillStyle = "brown";
		ctx.fill();
		
		// Draw the windows
		ctx.beginPath();
		ctx.rect(525, canvas.height - 250, 50, 50);
		ctx.fillStyle = "lightblue";
		ctx.fill();
		
		ctx.beginPath();
		ctx.rect(625, canvas.height - 250, 50, 50);
		ctx.fillStyle = "lightblue";
		ctx.fill();
		
		// Draw the grass
		ctx.fillStyle = "green";
		for (var i = 0; i < canvas.width; i += 5) {
			var y = canvas.height - 100;
			ctx.beginPath();
			ctx.moveTo(i, y);
			ctx.lineTo(i + 5, y - 10);
			ctx.lineTo(i + 15, y);
			ctx.fill();
		
		}
		// Set the caption text properties
		ctx.font = "20px Arial";
		ctx.fillStyle = "white";
		ctx.textAlign = "center";

// Set the caption text
		var captionText = "Home Sweet Home!";

// Calculate the position of the caption text
		var x = canvas.width / 2; // Centered horizontally
		var y = canvas.height - 700; // Positioned near the bottom

// Add the caption text to the canvas
		ctx.fillText(captionText, x, y);

		//Draw grass under part

		ctx.beginPath();
		ctx.rect(0, canvas.height - 100, 3000, 200);
		ctx.fillStyle = "green";
		ctx.fill();
		
		//Draw cloud
		ctx.beginPath();
		ctx.arc(100, 100, 30, 0, Math.PI * 2);
		ctx.arc(130, 70, 30, 0, Math.PI * 2);
		ctx.arc(160, 100, 30, 0, Math.PI * 2);
		ctx.arc(130, 130, 30, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fillStyle = 'white';
		ctx.fill();

		ctx.beginPath();
		ctx.arc(200, 150, 40, 0, Math.PI * 2);
		ctx.arc(240, 110, 40, 0, Math.PI * 2);
		ctx.arc(280, 150, 40, 0, Math.PI * 2);
		ctx.arc(240, 190, 40, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();

		ctx.beginPath();
		ctx.arc(300, 100, 30, 0, Math.PI * 2);
		ctx.arc(330, 70, 30, 0, Math.PI * 2);
		ctx.arc(360, 100, 30, 0, Math.PI * 2);
		ctx.arc(330, 130, 30, 0, Math.PI * 2);
		ctx.closePath();
		ctx.fill();

	});