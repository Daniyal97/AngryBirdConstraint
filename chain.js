class Chain{
    constructor(myBodyA,myBodyB){
        var option = {
            bodyA:myBodyA,
            bodyB:myBodyB,
            stiffness:0.4,
            length:10

        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);

    }
    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;


        push();
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}