let w;
let h;
class Snake {

	constructor(){
    this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir = 0;
    this.ydir = 0;
  
    
  }
  update(){
    
    this.body[0].x += this.xdir;
    this.body[0].y += this.ydir;
    if (this.body[0].x==w)
    {
      this.body[0].x-=w
    }
    if (this.body[0].y==h)
    {
      this.body[0].y-=h
    }
     if (this.body[0].x==-2)
    {
      this.body[0].x+=w
    }
    if (this.body[0].y==-2)
    {
      this.body[0].y+=h
    }
   
    
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