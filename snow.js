class Snow
{
    constructor(x, y)
    {
        var opt = {
            density: 1.2,
            restitution: 0.5,
            friction: 0.001,
        }

        this.radius = 18;
        this.body = Bodies.circle(x, y, this.radius, opt);
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }

    repeat()
    {
       //code for repeat function
    }
    
    display()
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }

}