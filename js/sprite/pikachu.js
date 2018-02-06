class Pikachu {
	constructor()
	{
			let columnCount = 4;
			let rowCount = 4;
			let refreshDelay = 150; 			
			let loopColumns = true; 			
			let scale = 1.0;
			let sprite = new TiledImage("Spaceball - images/pikachu.png", columnCount, rowCount, refreshDelay, loopColumns, scale, null);
	}
			
	
			sprite.changeRow(2);				
			sprite.changeMinMaxInterval(1, 4); 	

			let ctx = document.getElementById("canvas").getContext("2d");

			tick();

			function tick() {
				ctx.clearRect(0, 0, 500, 300);

				sprite.tick(220, 120, ctx);

				window.requestAnimationFrame(tick);
}
			
			
