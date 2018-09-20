let snake;
let opponent;
h =400 ;
w = 400 ;
function setup() {
  h =400 ;
  w = 400 ;
  createCanvas(h, w);
  
  snake = new Snake();
  opponent = new Opponent();
}
function keypressed(){
  if (keyCode === LEFT_ARROW){
    snake.setdir(-2,0)

  }
	if (keyCode === RIGHT_ARROW){
  	snake.setdir(2,0)
    
  }
  if (keyCode === UP_ARROW){
    snake.setdir(0,-2)
  }
  if (keyCode === DOWN_ARROW){
  	snake.setdir(0,2)
  }

}


function draw() {
  background(220);
  keypressed();
  snake.update();
  snake.show();
  opponent.show()
  
}