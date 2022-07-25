let startBtn = document.getElementsByClassName('startBtn')
let mainDiv = document.getElementById("mainDiv");
let gameDiv = document.getElementById("gameDiv");
let introDiv = document.getElementById("introDiv");
let timeSpan = document.getElementById("timeSpan");
let questionSpan = document.getElementById("questionSpan");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let gameOver = document.getElementById("gameOver");
let message = document.getElementById("message")
let initials = document.getElementById("initials")
let timeLeft;
let score = 0;







function startGame(){
    introDiv.style.display = "none";
    gameDiv.removeAttribute("style");
    timer();
    displayQues()

}

function timer(){
    clearInterval(timeInterval)
    timeLeft = questions.length * 10;
    var timeInterval = setInterval(function () {
        timeSpan.textContent = ("Time: ") + timeLeft;
        timeLeft--;

        if (timeLeft < 0) {
            timeSpan.textContent = "TIMES UP!";
            clearInterval(timeInterval);
            gameEnd();
        }

},1000)
}

let questionIndex = 0;
function displayQues(){
    if(questionIndex < questions.length){
    questionSpan.textContent = questions[questionIndex].title;
    button1.textContent = questions[questionIndex].choices[0];
    button1.addEventListener('click', answerQuestion)
    button2.textContent = questions[questionIndex].choices[1];
    button2.addEventListener('click', answerQuestion)
    button3.textContent = questions[questionIndex].choices[2];
    button3.addEventListener('click', answerQuestion)
    button4.textContent = questions[questionIndex].choices[3];
    button4.addEventListener('click', answerQuestion)
    answerQuestion()
    }
    else{
        gameEnd();
    }
    
}

function answerQuestion(event){
    let chosenAns = event.target.textContent;


    if(chosenAns.toString() === questions[questionIndex].answer ){
        score +=10;
        questionIndex++;
        console.log(score)
        displayQues();


    }else{
        score -=5; 
        timeLeft -=15;
        questionIndex++;
        console.log(score)
        displayQues()
    }
}

function gameEnd(){
    gameDiv.style.display = 'none';
    gameOver.removeAttribute("style");
    message.innerText = "Your score is: " + score
}

function addToLocSto(){
    localStorage.setItem(initials.value, score)
}

function displayHS(){
    document.createElement
}





 

  