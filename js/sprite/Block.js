class Block{
	constructor(x)
	{
		this.x=x
		this.y=260
		this.size=40;
		this.color="green";
	}
	drawRect(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.size,this.size);
	
		ctx.strokeStyle ="black";
		ctx.strokeRect(this.x,this.y,this.width,this.height);
	
	
	}

	tick(){
		this.drawRect();
	}


}