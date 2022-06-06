var isPressd = false;
var timer ;

document.getElementById("menu").addEventListener("click", function(){ 
	if(isPressd == false)
	{
		this.classList.toggle("toggle") 			//přepínání tříd u hamurgr menu

		if(document.getElementById("navigation").className == "")		//přepínání navigace
		{
			document.getElementById("navigation").classList.toggle("show")
		}		
		else
		{
			document.getElementById("navigation").classList.toggle("show")
			document.getElementById("navigation").classList.toggle("hide")
		}	

		isPressd = true;
		timer = setInterval(Timer, 500);
	}
}) 

function Timer()
{
	clearInterval(timer);
	isPressd = false;
}

