$(document).ready(function(){
var width;
var height;
var grid = [];
var ctx;
var alive;
var intervalId;
var cycle;

function checkNeighbors(i, j, xMax, yMax, isLive){

  var neighborCount = 0;

  // Check left
  if (i - 1 >= 0){
    neighborCount += grid[(i-1) + j*xMax];
  }

  // Check right
  if (i + 1 <= xMax){
    neighborCount += grid[(i+1) + j*xMax];
  }

  // Check up
  if (j - 1 >= 0){
    neighborCount += grid[i + (j-1)*xMax];
  }

  // Check down
  if (j + 1 <= yMax){
    neighborCount += grid[i + (j+1)*xMax];
  }

  // Check upper left
  if ( (i - 1 >= 0) && (j - 1 >= 0) ){
    neighborCount += grid[(i-1) + (j-1)*xMax];
  }

  // Check upper right
  if ( (i + 1 <= xMax) && (j - 1 >= 0) ){
    neighborCount += grid[(i+1) + (j-1)*xMax];
  }

  // Check lower left
  if ( (i - 1 >= 0) && (j + 1 <= yMax) ){
    neighborCount += grid[(i - 1) + (j+1)*xMax];
  }

  // Check lower right
  if ( (i + 1 <= xMax) && (j + 1 <= yMax) ){
    neighborCount += grid[(i + 1) + (j+1)*xMax];
  }

  // Any live cell w/ < 2 neighbors dies
  if ( neighborCount < 2 && isLive == 1){
    return 0;
  }

  // Any live cell w/ 2 or 3 neighbors lives
  else if ( neighborCount == 2 && isLive == 1){
    return 1;
  }

  else if ( neighborCount == 3 && isLive == 1){
    return 1;
  }

  // Any live cell w/ > 3 neighbors dies
  else if ( neighborCount > 3 && isLive == 1){
    return 0;
  }

  // Any dead cell w/ exactly 3 live neighbors lives
  if ((neighborCount == 3) && (isLive == 0)){
    return 1;
  }

  else {
    return 0;
  }

}

function Cell(i, j, r, alive){
  ctx.strokeStyle = "#161616";
  ctx.strokeRect(i, j, r, r);
  if (alive){
    ctx.strokeStyle = "white";
    ctx.strokeRect(i, j, r, r);
    ctx.fillStyle = "white";
    ctx.fillRect(i, j, r, r);
  }
}

function setupGame(xMax, yMax, r, n){
  ctx.clearRect(0, 0, width, height);
  for (var y = 0; y < yMax; y++){
    for (var x = 0; x < xMax; x++){
      alive = Math.floor(Math.random()*3);
      alive = Math.floor(alive/2);
      Cell(x*n+n/2, y*n+n/2, r, alive);
      grid.push(alive);
    }
  }
  cycle++;
}

function printGrid(grid, xMax, yMax){
  var printed = "";
  for (var i = 0; i < grid.length; i++){
    printed += grid[i];
    if (i%yMax == 0 && i != 0){
      printed += "<br>";
    }
  }
  $("#printed").html(printed);
}


function playGame(xMax, yMax, r, n){
  ctx.clearRect(0, 0, width, height);
  var gridCopy = [];
  for (var y = 0; y < yMax; y++){
    for (var x = 0; x < xMax; x++){
      gridCopy[x+y*xMax] = checkNeighbors(x, y, xMax, yMax, grid[x+y*xMax]);
    }
  }
  grid = gridCopy.slice(0);
  for (var y = 0; y < yMax; y++){
    for (var x = 0; x < xMax; x++){
      Cell(x*n+n/2, y*n+n/2, r, grid[x+y*xMax]);
    }
  }
  cycle++;
  $("#cycle").text(cycle);
}

function init(){
  ctx = $("#canvas")[0].getContext('2d');
  height = $("#canvas").width();
  width = $("#canvas").height();

  // These values are the most aesthetically pleasing
  var xMax = 100;
  var yMax = 100;
  var n = 5;
  var r = 4; // Field radius

  cycle = 0;
  setupGame(xMax, yMax, r, n);
  intervalId = setInterval(function() {playGame(xMax, yMax, r, n)}, 100); // Seconds per cycle
}

init();
});
