class Pikachu {

	constructor()
	{
			this.columnCount = 4;
			this.rowCount = 4;
			this.refreshDelay = 150; 			
			this.loopColumns = true; 			
			this.scale = 1.0;
			this.sprite = new TiledImage("Spaceball - images/pikachu.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
			this.sprite.changeRow(2);				// One row per animation
			this.sprite.changeMinMaxInterval(1, 4);

			this.speedX = 1;
			this.speedY = -1;
			this.x = 50;
			this.y = 230;
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
			if (this.speed <= 0)
			{
				this.speedX  = 1
			}
		}
		if (spacePushed)
		{
			this.sprite.changeMinMaxInterval(1, 1);
			if (this.y <= 200)
			{
				this.speedY  = 1
			}
			this.y = this.y + this.speedY
		}
		if (!leftPushed && !rightPushed && !spacePushed)
		{
			this.sprite.changeMinMaxInterval(1, 1);
			this.speedX = 0
		}

		this.x = this.x + this.speedX


		//this.sprite.tick(50, 230, ctx);

		this.sprite.tick(this.x, this.y, ctx);
 
	}
}
			
			
