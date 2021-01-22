class stone {
    constructor(x,y,width,height) {
       var physics = {
           isStatic: false,
           restitution: 0,
           friction: 1,
           density: 1.2
       }

       this.image = loadImage("assest/stone.png");
       World.add(world,this.image);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display() {
        image(this.image,this.x,this.y,this.width,this.height);
    }
}