function left()
{
    let element  = document.getElementsByClassName("project");
    let onEnd = true;

    for(let i = 0; i < element .length; i++)
    {
        if(element[i].style.transform == "translateX(-110%)")
        {
            onEnd = false;
        }
    }

    if(onEnd == false)
    {
        for(let i = 0; i < element .length; i++)
        {
            if(element[i].style.transform == "translateX(-110%)")
            {
                element[i].style.transform = "translateX(0%)";
                element[i].classList.add("project-active");
            }
            else if(element[i].style.transform == "translateX(0%)")
            {
                element[i].style.transform = "translateX(110%)";
                element[i].classList.remove("project-active");
            }
            else
            {
                let num = element[i].style.transform;
                num = num.replace("translateX(","");
                num = num.replace("%)","");
                num = parseInt(num);
                num = num + 100;
                element[i].style.transform = "translateX("+ num +"%)";
            }
        }
    }
}

function right()
{
    let element  = document.getElementsByClassName("project");
    let onEnd = true;

    for(let i = 0; i < element .length; i++)
    {
        if(element[i].style.transform == "translateX(110%)")
        {
            onEnd = false;
        }
    }

    if(onEnd == false)
    {
        for(let i = 0; i < element .length; i++)
        {
            if(element[i].style.transform == "translateX(110%)")
            {
                element[i].style.transform = "translateX(0%)";
                element[i].classList.add("project-active");
            }
            else if(element[i].style.transform == "translateX(0%)")
            {
                element[i].style.transform = "translateX(-110%)";
                element[i].classList.remove("project-active");
            }
            else
            {
                let num = element[i].style.transform;
                num = num.replace("translateX(","");
                num = num.replace("%)","");
                num = parseInt(num);
                num = num - 100;
                element[i].style.transform = "translateX("+ num +"%)";
            }
        }
    }
}

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

function dot_click(num)
{
    let el  = document.getElementsByClassName("box");
    let dots = document.getElementsByClassName("dot");

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