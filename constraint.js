class chain {
    constructor(body1, point2) {
        var physics={
            bodyA: body1,
            pointB: point2,
            length: 20,
            stiffness: 0.06
         }
         this.body = Matter.Constraint.create(physics);
         World.add(world,this.body);

         this.point2 = point2;
    }
    display() {
        if(this.body.bodyA) {
            strokeWeight(3);
            var position = this.body.bodyA.position;
            line(position.x,position.y,this.point2.x,this.point2.y);
        }
    }
    fly() {
        this.body.bodyA = null;
     }
}