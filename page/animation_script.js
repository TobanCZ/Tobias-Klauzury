document.getElementById("menu").addEventListener("click", function(){ 
	this.classList.toggle("toggle") 										//přepínání tříd u hamurgr menu
}) 

document.getElementById("dark").addEventListener("click", function(){
	document.getElementById("icon_dark").classList.toggle("toggle")
	document.getElementById("icon_light").classList.toggle("toggle")
});