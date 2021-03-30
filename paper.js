class Paper {
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
         this.body = Bodies.circle(x, y, radius, options);
	     this.radius = radius;
	     World.add(world, this.body);
         //display(){
         ellipseMode(RADIUS);

         fill("yellow");

         var pos = this.body.position;
         circle(pos.x, pos.y, this.radius);
         //}
    }
};
