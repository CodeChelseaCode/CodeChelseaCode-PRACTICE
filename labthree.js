const canvas = document.getElementById("canvas3");
const ctx = canvas.getContext("2d");
const canvas_WIDTH = (canvas.width = 600);
const canvas_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "Run_4x.png";
let frameX = 0;
let frameY = 1;

function animate() {
  ctx.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);
  ctx.drawImage(playerImage, 0, 0);
  ctx.drawImage(
    playerImage,
    frameX * canvas_WIDTH,
    frameY * canvas_HEIGHT,
    canvas_WIDTH,
    canvas_HEIGHT,
    0,
    0,
    canvas_WIDTH,
    canvas_HEIGHT
  );
  if (frameX < 5) {
    frameX++;
  } else {
    frameX = 0;
  }
  requestAnimationFrame(animate);
}

playerImage.onload = function () {
  animate();
};
