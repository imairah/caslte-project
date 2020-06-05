class Building {
        constructor(x, y, width, height) {
          var options = {
              //'restitution':0.8,
              'friction':0.9,
              //'density':1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
         // var angle = this.body.angle;
          //push();
         // translate(pos.x, pos.y);
          rectMode(CENTER);
          strokeWeight(2);
          stroke("black");
          fill("yellow");
          rect(pos.x,pos.y, this.width, this.height);
          //pop();
        }
      };
      
