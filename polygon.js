class Polygon{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        polygon = Bodies.circle(50, 200, 20);
        World.add(world, polygon);
        
        slingshot = new Slingshot(this.polygon,{x:100, y:200});
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_image, polygon.position.x, polygon.position.y, 40, 40);
        pop();
      }
}
