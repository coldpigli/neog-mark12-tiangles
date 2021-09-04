var sides = document.querySelectorAll(".side-input");
var hypotenuseBtn = document.querySelector("#btn-hypotenuse");
var outputEle = document.querySelector("#output");

function calculateSumOfSquares(a, b)
{
    var sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse()
{
    var sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    if(sumOfSquares === 0)
    {
        outputEle.innerText = "Please enter valid sides!";
    }
    else
    {
        var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputEle.innerText = "The length of Hypotenuse is: " + lengthOfHypotenuse;
    }
    
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);