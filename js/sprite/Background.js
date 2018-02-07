class Background{
	constructor()
	{
		this.x = 0;
		this.y = 0;
		this.src ="Spaceball - images/background2.png"
	}


	drawBackground(){
		let bg= new Image();
		bg.src = this.src;

		if(bg.complete){
			ctx.drawImage(bg,this.x,this.y)
		}
	}
	mort()
	{
		return false
	}
	tick(){
		this.drawBackground()

	}
	outSide()
	{
		return false;
	}



}