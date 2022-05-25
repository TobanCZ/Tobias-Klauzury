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