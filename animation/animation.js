const canvas = document.getElementById("canvas3");
const ctx = canvas.getContext("2d");
const canvas_WIDTH = (canvas.width = 600);
const canvas_HEIGHT = (canvas.height = 600);

const backgroundImage = new Image();
backgroundImage.src = "pics/6Forest.png"; // replace with your background image URL

const playerImage = new Image();
playerImage.src = "Run.png";
let frameX = 0;
let frameY = 0;
const spriteWidth = playerImage.width / 5; // width of each sprite frame
const spriteHeight = playerImage.height; // height of each sprite frame
const maxFrameY = 4; // the last row in the sprite sheet
const frameRate = 100; // animation speed in milliseconds

function animate() {
  // clear canvas
  ctx.clearRect(0, 0, canvas_WIDTH, canvas_HEIGHT);

  // draw background image
  ctx.drawImage(backgroundImage, 0, 0, canvas_WIDTH, canvas_HEIGHT);

  // draw sprite sheet
  ctx.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    canvas_WIDTH,
    canvas_HEIGHT
  );

  // update frame index
  if (frameX < 4) {
    frameX++;
  } else {
    frameX = 0;
    if (frameY < maxFrameY) {
      frameY++;
    } else {
      frameY = 0; // start over from the first row
    }
  }
}

// wait for both images to load before starting the animation
let numImagesLoaded = 0;
function imageLoaded() {
  numImagesLoaded++;
  if (numImagesLoaded === 2) {
    setInterval(animate, frameRate);
  }
}
backgroundImage.onload = imageLoaded;
playerImage.onload = imageLoaded;
