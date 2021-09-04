var quizForm = document.querySelector(".form-quiz");
var submitBtn = document.querySelector("#btn-submit-form");
var outputDiv = document.querySelector("#div-output-quiz");

var correctAnswers = ["90°", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "85°", "10°", "a + b + c", "no", "45°"];



function CalculateScore(){
    let score = 0;
    let index = 0;
    var formReslts = new FormData(quizForm);
    for(let value of formReslts.values())
    {
        if(value === correctAnswers[index])
        {
            score = score + 1;
        }
        index = index + 1;
        console.log(index);
    }
    outputDiv.innerText = "Your Score is :" + score;
}





submitBtn.addEventListener("click", CalculateScore);