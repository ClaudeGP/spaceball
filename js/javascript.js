let positionSouris=null;
let spriteList=[];
let blockSize=40;

window.onload=()=>{

	let canvas =document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //graphics de java!


	spriteList.push(new Background());
	spriteList.push(new Pikachu());

	for (var i = 0 ; i < 150; i++) {
		if (Math.random() > 0.05) {
			spriteList.push(new Block( i * blockSize));
		}
	}
	mainTick();
}


function mainTick(){
	ctx.clearRect(0,0,650,650);


	for (let i = 0; i < spriteList.length; i++) {
		const element = spriteList[i];
		element.tick();
	}


	// Rappel (60fps)
	window.requestAnimationFrame(mainTick);

}
