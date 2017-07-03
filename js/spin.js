var pluto = document.getElementById("profile");

function spinPluto(){
	if(pluto.style.transform == "" || pluto.style.transform == "rotateZ(-360deg)"){
		for(let i=0; i<361; i++){
			setTimeout(function timer(){
				pluto.style.transform = "rotateZ(" + i + "deg)";
			}, i*4);
		}
	}
	else if(pluto.style.transform == "rotateZ(360deg)"){
		pluto.style.transform = "rotateZ(" + 0 + "deg)";
		for(let i=0; i>-361; i--){
			setTimeout(function timer(){
				pluto.style.transform = "rotateZ(" + i + "deg)";
			}, (i*-1)*4);
		}
	}
}

pluto.addEventListener("click", spinPluto);
document.addEventListener('DOMContentLoaded', spinPluto);
