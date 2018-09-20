
class Opponent {

	constructor(){
    this.body = [];
    this.body[0] = createVector(200,200);
    this.xdir = 0;
    this.ydir = 0;
  
    
  }
  update(){
    this.xdiff = snake.body[0].x - this.body[0].x;
    this.ydiff =snake.body[0].y- this.body[0].y;
    this.xdiff = this.xdiff*1;
    this.ydiff = this.ydiff*1;
    this.body[0].x += this.xdiff;
    this.body[0].y += this.ydiff;
    
    
	}
  show() {
 		fill(0);
    rect(this.body[0].x,this.body[0].y,10,10);
  }
  setdir(x,y){
  	this.xdir = x;
    this.ydir = y;
  }
}