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
	        World.add(world, this.body);
      
      World.add(world, this.body);
      