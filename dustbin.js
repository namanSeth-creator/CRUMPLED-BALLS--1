class dustbin{
    constructor(x, y,width,height,angle) {
      var options = {
            'isStatic' : true,
            'density': 0.1,
            'friction': 1,
            'restitution':0
          }
           
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      world.add(world, this.body);
    }
    display(){
      rectMode(CENTER);

      fill(255);

      rect(this.body.position.x, this.body.position.y, this.width, this. height);
    }
	    
    
    display(){
      rectMode(CENTER);

      fill(255);

      rect(this.body.position.x, this.body.position.y, this.width, this. height);
    }
		 
}
