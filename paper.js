class paper
{
	constructor(x,y)	
	{
		var o = {
		isStatic : false, 
		restitution : 0.3,
		friction : 0,
		density : 1.2
		}
		this.x=x;
		this.y=y;
		this.paperWidth=120;
		this.paperHeight=121;
		
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, 100, o )

		
		World.add(world, this.body)

	}
	display()
	{
			var pos=this.body.position;
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			imageMode(CENTER);
			image(this.image, 0,0,100,100)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}