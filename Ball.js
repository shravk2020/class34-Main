class Ball{
    constuctor(x, y, r){
        var options = {
            restitution : 0.8,
            frictionAir : 0.005,
            density : 0.04
        }

        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill('pink');
        strokeWeight(4);
        stroke('purple');
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }

}