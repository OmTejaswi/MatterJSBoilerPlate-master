class Mango {
    constructor(x,y,r) {
        var physics = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = loadImage("assest/mango.png");
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
        image(this.image,pos.x,pos.y,this.r+20,this.r+20);
    }
}