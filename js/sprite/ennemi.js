class ennemi {

	constructor()
	{
			this.columnCount = 4;
			this.rowCount = 4;
			this.refreshDelay = 150; 			
			this.loopColumns = true; 			
			this.scale = 1.0;
			this.sprite = new TiledImage("Spaceball - images/PidgeyAttack.png", this.columnCount, this.rowCount, this.refreshDelay, this.loopColumns, this.scale, null);
			this.sprite.changeRow(1);				// One row per animation
			this.sprite.changeMinMaxInterval(1, 4);

			this.speedX = 1;
			this.speedY = -2;
			this.x = 500;
			this.y = Math.random()*450;
			this.air = false;
	}
	deplacement()
	{
		this.x = this.x - this.speedX ;
	}

	mort(){
		let mort = false
		if(this.x<0)
		{
			mort = true

		}
		return mort
	}
			
	tick() 
	{
		this.deplacement();

		this.sprite.tick(this.x, this.y, ctx);
 
	}
}
			