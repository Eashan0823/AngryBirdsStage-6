class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Declaring pointB
        this.pointB=pointB;
        this.slingshot1=loadImage("sprites/sling1.png");
        this.slingshot2=loadImage("sprites/sling2.png");
        this.slingshot3=loadImage("sprites/sling3.png");
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly(){
    //Releasing body from constraint
    this.slingshot.bodyA=null;
    }
    //Attaching the bird body
    attach(body){
        //Defining the body 
        this.slingshot.bodyA=body;
    }
    display(){
        //Displaying Image using image function
        image(this.slingshot1,200,20);
        image(this.slingshot2,170,20);
       if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        push();
        //Mixing different colors to get dark brown
        stroke(48,22,8);
        if(pointA.x<220){
            strokeWeight(7);
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            image(this.slingshot3,pointA.x-30,pointA.y-10,15,30);
        }
        else{
            strokeWeight(3);
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
            image(this.slingshot3,pointA.x+25,pointA.y-10,15,30);  
        }
       }
    }
    
}