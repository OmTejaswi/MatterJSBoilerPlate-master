class Mango {
    constructor(x,y,width,height) {
        var physics = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = loadImage("assest/mango.png");
        World.add(world,this.image);

        this.body = Bodies.rectangle(x,y,width,height,physics);
        World.add(world,this.body);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}