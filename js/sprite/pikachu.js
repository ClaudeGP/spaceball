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
		}

	tick() 
	{

		this.sprite.tick(220, 120, ctx);

		//window.requestAnimationFrame(tick);
	}
}
			
			
