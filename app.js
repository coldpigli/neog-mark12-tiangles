var inputAngles = document.querySelectorAll(".lbl-angle");
var checkButton = document.querySelector("#btn-check");
var outputDiv = document.querySelector("#div-output");

checkButton.addEventListener("click", function onClick(){

    IsTriangle();
   
})

function IsTriangle()
{
    var totalSum = SumOfAngles(Number(inputAngles[0].value), Number(inputAngles[1].value), Number(inputAngles[2].value));

    if(totalSum == 180)
    {
        outputDiv.innerText = "It is a triangle!";
    }
    else if(totalSum == 0)
    {
        outputDiv.innerText = "Please enter valid angles!";
    }
    else
    {
        outputDiv.innerText = "It is not a triangle!";
    }
}

function SumOfAngles(angle1, angle2, angle3)
{   
    if(angle1===0||angle2===0||angle3===0){
        outputDiv.innerText = "Any angle cannot be zero";
        return;
    }
    var angleSum = angle1 + angle2 + angle3;
    return angleSum;
}