let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// global variables
let gx = 200;
let gy = 250;
let bx = 550;
let by = 250;
let ox = 375;
let oy = 250;
let md = false;
let yd = false;
let gd = false;
let od = false;
let player1 = {
  x: 550,
  y: 250,
  w: 50,
  H: 50,
  speed: 5,
  color: "blue",
};

let player2 = {
  x: 200,
  y: 250,
  w: 50,
  H: 50,
  speed: 5,
  color: "green",
};

let player3 = {
  x: 375,
  y: 250,
  w: 50,
  H: 50,
  speed: 5,
  color: "orange",
};
requestAnimationFrame(animate);
function animate() {
  // blue right to left
  if (bx === 750) {
    md = false;
  }
  if (bx === 0) {
    md = true;
  }

  if (md === true) {
    bx += player1.speed;
  } else if (md === false) {
    bx -= player1.speed;
  }
  // green up and down
  if (gy === 550) {
    gd = false;
  }
  if (gy === 0) {
    gd = true;
  }

  if (gd === true) {
    gy += player2.speed;
  } else if (gd === false) {
    gy -= player2.speed;
  }
  // yellow diagonal

  if (ox === 750) {
    yd = false;
  }
  if (ox === 0) {
    yd = true;
  }

  if (yd === true) {
    ox += player3.speed;
  } else if (yd === false) {
    ox -= player3.speed;
  }

  if (oy === 550) {
    od = false;
  }
  if (oy === 0) {
    od = true;
  }

  if (od === true) {
    oy += player3.speed;
  } else if (od === false) {
    oy -= player3.speed;
  }

  //draw background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // draw the rectangless
  ctx.fillStyle = "green";
  ctx.fillRect(gx, gy, 50, 50);

  ctx.fillStyle = "blue";
  ctx.fillRect(bx, by, 50, 50);

  ctx.fillStyle = "orange";
  ctx.fillRect(ox, oy, 50, 50);

  requestAnimationFrame(animate);
}
