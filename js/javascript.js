let positionSouris=null;
let spriteList=[];
let blockSize=40;

let rightPushed = false;            
let leftPushed = false;            
let spacePushed = false; 
let bout = true;
let timer = 0;

window.onload=()=>{

	let canvas =document.getElementById("canvas");
	ctx = canvas.getContext("2d"); //graphics de java!


	spriteList.push(new Background());
	spriteList.push(new Pikachu(130,"pikachu"));
	spriteList.push(new Pikachu(80,"charmander"));
	spriteList.push(new Pikachu(40,"squirtle"));
	spriteList.push(new Pikachu(-5,"bulbasaur"));
	spriteList.push(new ennemi());


	for (var i = 0 ; i < 150; i++) {
		if (Math.random() > 0.05) {
			spriteList.push(new Block( i * blockSize));
		}
	}

	document.onkeydown = function (e) {
		if (e.which == 65) leftPushed = true; 
		else if (e.which == 68) rightPushed = true;
		else if (e.which == 32) spacePushed = true; 
	}
	
	document.onkeyup = function (e) {
		if (e.which == 65) leftPushed = false;                
		else if (e.which == 68) rightPushed = false;   
		//else if (e.which == 32) spacePushed = false;                
	}


	mainTick();
}


function mainTick(){
	ctx.clearRect(0,0,650,650);
	timer = timer+1
	if(timer%100==0){
		spriteList.push(new ennemi());
	}

	for (let i = 0; i < spriteList.length; i++) {
		const element = spriteList[i];
		
		element.tick();
		if(element.mort())
		{
			spriteList.splice(i,1)
		}
	}


	// Rappel (60fps)
	window.requestAnimationFrame(mainTick);

}
