class Pikachu {

	constructor(x,nom)
	{
			this.columnCount = 4;
			this.rowCount = 4;
			this.refreshDelay = 150; 			
			this.loopColumns = true; 			
			this.scale = 1.0;
			this.sprite = new TiledImage("Spaceball - images/"+nom+".png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
			this.sprite.changeRow(2);				// One row per animation
			this.sprite.changeMinMaxInterval(1, 4);

			this.speedX = -1;
			this.speedY = -2;
			this.x = 50+x;
			this.y = 230;
			this.air = false;
	}
			
	tick() 
	{

		if (leftPushed)
		{
			this.sprite.changeRow(1);
			this.sprite.changeMinMaxInterval(1, 4);
			if (this.speedX >= 0)
			{
				this.speedX  = -1
			}
		}
		if (rightPushed)
		{
			this.sprite.changeRow(2);
			this.sprite.changeMinMaxInterval(1, 4);
			if (this.speedX <= 0)
			{
				this.speedX  = 1
			}
		}
		if (spacePushed || this.air)
		{
			this.sprite.changeMinMaxInterval(1, 1);
			
	//		if (this.y <= 200)
	//		{
	//			this.speedY  = 1
	//		}
	//		this.y = this.y + this.speedY;
			//this.speedY-=1
			let newTop =this.y + this.speedY;
			if(newTop<230)
			{
				this.air=true;
			}
			if(newTop<150)
			{
				this.speedY=-this.speedY*2;
				//this.air=true
			}

			if(newTop>230 && this.air)
			{
				spacePushed=false;
				newTop=230;
				this.speedY=-2;
				this.air=false

			}
			this.y= newTop;



		}
		if (!leftPushed && !rightPushed && !spacePushed)
		{
			this.sprite.changeMinMaxInterval(1, 1);
			this.speedX = 0
		}

		this.x = this.x + this.speedX
		//console.log(this.x)
		//if(this.x>=450)
//		/{
//			
//			bout=true;
//		}
//		else if(this.x<450){
//			bout=false;
//		}

		//this.sprite.tick(50, 230, ctx);

		this.sprite.tick(this.x, this.y, ctx);
 
	}
}
			
			
