let positionSouris=null;
let spriteList=[];
var rightPushed = false;            
var leftPushed = false;            
var spacePushed = false; 

window.onload=()=>{

	let canvas =document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //graphics de java!


	spriteList.push(new Background());
	spriteList.push(new Pikachu());

	document.onkeydown = function (e) {
		if (e.which == 65) leftPushed = true; 
		else if (e.which == 68) rightPushed = true;
		else if (e.which == 32) spacePushed = true; 
	}
	
	document.onkeyup = function (e) {
		if (e.which == 65) leftPushed = false;                
		else if (e.which == 68) rightPushed = false;   
		else if (e.which == 32) spacePushed = false;                
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
