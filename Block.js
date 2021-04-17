class Block{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image1 = loadImage("block.png")
      this.image2 = loadImage("block.png")
      this.image3= loadImage("block.png")
       this.image4 = loadImage("block.png")
       this.image5 = loadImage("block.png")
       this.image6 = loadImage("block.png")
       this.image7 = loadImage("block.png")
       this.image8 = loadImage("block.png")
       this.image9 = loadImage("block.png")
       this.image10 = loadImage("block.png")
       this.image11 = loadImage("block.png")
       this.image12 = loadImage("block.png")
       this.image13 = loadImage("block.png")
       this.image14 = loadImage("block.png")
       this.image15 = loadImage("block.png")
       this.image16 = loadImage("block.png")
       this.image17 = loadImage("block.png")
       this.visibility=255
    }
    display(){
       image(this.image1,270,250);
       image(this.image2,305,250)
       image(this.image3,340,250)
       image(this.image4,375,250)
       image(this.image5,410,250)
       image(this.image6,445,250)
       image(this.image7,480,250)
    
       image(this.image8,305,210)
       image(this.image9,340,210);
       image(this.image10,375,210);
       image(this.image11,410,210);
       image(this.image12,445,210);

       image(this.image13,340,170);
       image(this.image14,375,170);
       image(this.image15,410,170);

       image(this.image16,375,130)

      var angle = this.body.angle;
      var pos= this.body.position;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //rect(0,0,this.width, this.height);
      pop();
   
      console.log(this.body.speed)
  if(this.body.speed<3){
  
    }
  else {
   World.remove(world,this.body)
   push();
   this.visibility=this.visibility-5
   tint(255,this.visibility)
   image(this.image1,this.body.position.x,this.body.position.y,50,50)
   image(this.image2,this.body.position.x,this.body.position.y,50,50)
   image(this.image3,this.body.position.x,this.body.position.y,50,50)
   image(this.image4,this.body.position.x,this.body.position.y,50,50)
   image(this.image5,this.body.position.x,this.body.position.y,50,50)
   image(this.image6,this.body.position.x,this.body.position.y,50,50)
   image(this.image7,this.body.position.x,this.body.position.y,50,50)
   image(this.image8,this.body.position.x,this.body.position.y,50,50)
   image(this.image9,this.body.position.x,this.body.position.y,50,50)
   image(this.image10,this.body.position.x,this.body.position.y,50,50)
   image(this.image11,this.body.position.x,this.body.position.y,50,50)
   image(this.image12,this.body.position.x,this.body.position.y,50,50)
   image(this.image13,this.body.position.x,this.body.position.y,50,50)
   image(this.image14,this.body.position.x,this.body.position.y,50,50)
   image(this.image15,this.body.position.x,this.body.position.y,50,50)
   image(this.image16,this.body.position.x,this.body.position.y,50,50)

   pop();
    }  
}
}
  