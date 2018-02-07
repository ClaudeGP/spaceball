class Block{
	constructor(x)
	{
		this.x=x
		this.y=260
		this.size=40;
		this.color="blue";
		this.speed=1;
	}
	drawRect(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.size,this.size);
	
		ctx.strokeStyle ="black";
		ctx.strokeRect(this.x,this.y,this.width,this.height);
	
	
	}

	mort(){
		let mort = false
		if(this.x<0)
		{
			mort = true

		}
		return false //temporaire
	}

	moveBlock(){
		this.x=this.x-this.speed
		
	}

	tick(){
		if(bout)
		{
			this.moveBlock();
		}
		this.drawRect();
	}


}