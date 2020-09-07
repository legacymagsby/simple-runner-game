//create variable holding the character and the block
var character = document.getElementById("character");
var block = document.getElementById("block");

//create a jump function allowing the character to jump
//add the animate class to the character if it doesnt exist
//remove it after youve jumped so you can jump again
function jump(){
	if(character.classList != "animate"){
		character.classList.add("animate");
	}
	setTimeout(function(){
		character.classList.remove("animate");
	},500);
}

//check if you've died
//basically check if the character and the block have collied, ie at the same position
var checkDead = setInterval(function(){

	//get the top postion of the character parseint to remove the px
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	if(blockLeft<20 && blockLeft>0 && characterTop>=130){
		block.style.animation = "none";
		alert("You Lose!!!!!");
		  block.style.animation = "block 2s infinite";
	}

},10);