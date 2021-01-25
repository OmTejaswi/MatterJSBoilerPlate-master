class tree {
    constructor(x,y,width,height) {
        var physics = {
            isStatic: true
        }

        this.image = loadImage("assest/tree.png");
        World.add(world,this.image)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display() {
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);

    }
}