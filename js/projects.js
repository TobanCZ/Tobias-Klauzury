//* ------------------ show nav when scroll ------------------
function body_scroll()
{
    const el = document.getElementById("nav");
    if(document.documentElement.scrollTop > 170 && el.classList.contains("nav-active") == false)
    {
        el.classList.add("nav-active");
    }
    else if(document.documentElement.scrollTop < 170 && el.classList.contains("nav-active"))
    {
        el.classList.remove("nav-active");
    }

    
}

//* ------------------ mobile nav menu button ------------------

var isPressd = false;
var timer ;

function mobile_nav_click()
{

	if(isPressd == false)
	{
		document.getElementById("menu").classList.toggle("toggle") 			//přepínání tříd u hamurgr menu
		document.getElementById("navigation").classList.toggle("navigation-active")

		isPressd = true;
		timer = setInterval(Timer, 500);
	}
} 


function Timer()
{
	clearInterval(timer);
	isPressd = false;
}

//* ------------------ favourite show and hide info ------------------

function show_info(info)
{
    
    let el = document.getElementById(info);

    if(el.classList.contains("info-active") == false)
    {
        el.classList.remove("info-hide");
        el.classList.add("info-active");
    }
}

function hide_info(info)
{
    
    let el = document.getElementById(info);
    
    if(el.classList.contains("info-hide") == false)
    {
        el.classList.remove("info-active");
        el.classList.add("info-hide");
    }
}


//* ------------------ favourite element swiper ------------------

let fv_count = 1;

function dot_click_fv(num,type)
{
    if(document.body.clientWidth < 800 && type != "swipe")
    {
        return;
    }

    fv_count = num;

    let el  = document.getElementsByClassName("box");
    let dots = document.getElementsByClassName("dot_fv");

    for(let i = 0; i < dots.length; i++)
    {
        if(num == i)
        {
            dots[i].classList.add("dot-active");
        }
        else if(dots[i].classList.contains("dot-active"))
        {
            dots[i].classList.remove("dot-active");
        }
    }

    for(let i = 0; i < el.length; i++)
    {
        if(num == i)
        {
            el[i].classList.add("box-active");
        }
        else if(el[i].classList.contains("box-active"))
        {
            el[i].classList.remove("box-active");
        }

        if(num == i)
        {
            el[i].style.transform = "translateX(0%)";
        }
        else
        {
            var count = i - num;
            if(count > 0)
            {
                count = count*110+20
            }
            else
            {
                count = count*110-20
            }

            el[i].style.transform = "translateX("+count+"%)";
        }
    }
}

//* ------------------ touch swipe for mobile(favourite) ------------------
let fv_startX = 0;
let fv_pressed = false;
const fv = document.querySelector('#favourite'); //get el
const cont = fv.querySelector('#container'); //get child of el

cont.addEventListener("touchstart",function(e)  //event for touch start
{ 
    fv_startX = e.changedTouches[0].clientX
    fv_pressed = true;
})

window.addEventListener("touchend", function(e) //event for touch end (pro okno kdyby nahdou vyjel z elementu)
{
    if(fv_pressed)
    {
        if(fv_startX > e.changedTouches[0].clientX && fv_startX - 100 > e.changedTouches[0].clientX && fv_count < cont.childElementCount-1)  //swipe right
        {
            fv_count += 1;
            dot_click_fv(fv_count,"swipe");
        }
        else if(fv_startX < e.changedTouches[0].clientX && fv_startX + 100 < e.changedTouches[0].clientX && fv_count > 0)   //swipe left
        {
            fv_count -= 1;
            dot_click_fv(fv_count,"swipe");
        }
        fv_pressed = false;
    }
})

//* ------------------ project element swiper ------------------
let pj_count = 1;
function dot_click_pj(num , type)
{

    if(document.body.clientWidth < 800 && type != "swipe")
    {
        return;
    }

    pj_count = num

    let el  = document.getElementsByClassName("project");
    let dots = document.getElementsByClassName("dot_pj");

    for(let i = 0; i < dots.length; i++)
    {
        if(num == i)
        {
            dots[i].classList.add("dot-active");
        }
        else if(dots[i].classList.contains("dot-active"))
        {
            dots[i].classList.remove("dot-active");
        }
    }

    for(let i = 0; i < el.length; i++)
    {
        if(num == i)
        {
            el[i].classList.add("project-active");
        }
        else if(el[i].classList.contains("project-active"))
        {
            el[i].classList.remove("project-active");
        }

        if(num == i)
        {
            el[i].style.transform = "translateX(0%)";
        }
        else
        {
            var count = i - num;
            if(count > 0)
            {
                count = count*110
            }
            else
            {
                count = count*110
            }

            el[i].style.transform = "translateX("+count+"%)";
        }
    }
}

function left()
{
    if(pj_count > 0)
    {
        pj_count -= 1;
            dot_click_pj(pj_count,"click");
    }
}

function right()
{
    const projects = document.querySelector('#projects'); //get el
    const pj = projects.querySelector('#container'); //get child of el

    if(pj_count < pj.childElementCount-1)
    {
        pj_count += 1;
        dot_click_pj(pj_count,"click");
    }
}

//* ------------------ touch swipe for mobile(project) ------------------
let pj_startX = 0;
let pj_pressed = false;
const projects = document.querySelector('#projects'); //get el
const pj = projects.querySelector('#container'); //get child of el

pj.addEventListener("touchstart",function(e)  //event for touch start
{ 
    pj_startX = e.changedTouches[0].clientX
    pj_pressed = true;
})

window.addEventListener("touchend", function(e) //event for touch end (pro okno kdyby nahdou vyjel z elementu)
{
    if(pj_pressed)
    {
        if(pj_startX > e.changedTouches[0].clientX && pj_startX - 100 > e.changedTouches[0].clientX && pj_count < pj.childElementCount-1)  //swipe right
        {
            pj_count += 1;
            dot_click_pj(pj_count,"swipe");
        }
        else if(pj_startX < e.changedTouches[0].clientX && pj_startX + 100 < e.changedTouches[0].clientX && pj_count > 0)   //swipe left
        {
            pj_count -= 1;
            dot_click_pj(pj_count,"swipe");
        }
        pj_pressed = false;
    }
})

