class stone {
    constructor(x,y,r) {
       var physics = {
           isStatic: false,
           restitution: 0,
           friction: 1,
           density: 1.2
       }

       this.image = loadImage("assest/stone.png");
       World.add(world,this.image);

       this.body = Bodies.circle(x,y,r,physics);
       World.add(world,this.body);

        this.x = x;
        this.y = y;
        this.r = r;
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r, this.r);
    }
}