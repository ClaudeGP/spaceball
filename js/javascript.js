let positionSouris=null;
let spriteList=[];


window.onload=()=>{

	let canvas =document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //graphics de java!


	spriteList.push(new Background());
	mainTick();
}


function mainTick(){
	ctx.clearRect(0,0,650,650);
	sprite.changeRow(2);				
	sprite.changeMinMaxInterval(1, 4); 	

	for (let i = 0; i < spriteList.length; i++) {
		const element = spriteList[i];
		element.tick();
	}


	// Rappel (60fps)
	window.requestAnimationFrame(mainTick);

}
