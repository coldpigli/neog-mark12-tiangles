var base = document.querySelector("#base-input");
var height = document.querySelector("#height-input");
var areaBtn = document.querySelector("#btn-area");
var outputEle = document.querySelector("#output");

function calculateAreaOfTriangle(a, b)
{
    var triangleArea = 0.5 * a * b;
    return triangleArea.toFixed(2);
}


function calculateArea()
{


    if((base.value) === "" || (height.value) === "")
    {
        outputEle.innerText = "Please enter both base and height of the triangle! ";
    }
    else
    {
        var triangleArea = calculateAreaOfTriangle(Number(base.value), Number(height.value));
        var area = triangleArea;
        outputEle.innerText = "The Area of the triangle is: " + area + " cm²";
    }

}
    

areaBtn.addEventListener("click", calculateArea);