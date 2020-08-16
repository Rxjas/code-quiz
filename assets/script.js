var body = document.body
var masterHolder = document.getElementById("masterHolder");
var scoreBoard = document.getElementById("scoreBoard");
var retryQuiz = document.getElementById("retryQuiz");
var score = document.getElementById("score");
var quizTimer = document.getElementById("quizTimer");
var asker = document.getElementById("asker")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var startButton = document.getElementById("startButton");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn1Text = document.getElementById("btn1Text");
var btn2Text = document.getElementById("btn2Text");
var btn3Text = document.getElementById("btn3Text");
var btn4Text = document.getElementById("btn4Text");
var submit = document.getElementById("nextButton");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var questionNumber = document.getElementById("codeQuiz");
var userChoice = undefined;
let i = 0;
let quizStatus = undefined;
var userScore = 0;
var seconds = 120;
var timer = setInterval(quizTime, 1000);
var clearReward = setInterval(hidecorrect, 2000);
var clearPenalty = setInterval(hideincorrect, 2000);
var endScore = [];
var userIntials ="";
var user = document.getElementById("user")
var userCompletion = document.getElementById("userCompletion")

//arrays with the questions and answers
let questions = [
    "What is the best tool for checking if your JS code is working?",
    "Which is NOT a type of Pop up box available in JS?",
    "How do you add a comment or comment out code when using javascript?",
    "Which is a JavaScript data type?"
];

let answersToQuestion1 =["/help", "get someone else to check it", "console.log()", "(document) (.getelement) (byId)"]; //  3 is correct
let answersToQuestion2 =["alert","confirm", "prompt", "alarm"]; //  4 is correct
let answersToQuestion3 =["<!-- -->", "// ", ".comment", "'this is a comment'"]; //  2 is correct
let answersToQuestion4 =["undefined", "function", "for loop", "null"]; //  1 is correct
let questionLocation = ["Question 1:", "Question 2:", "Question 3:", "Question 4:"];

//listen to buttons and give a value
btn1.addEventListener('click',function(){
    userChoice = 1;
})
btn2.addEventListener('click',function(){
    userChoice = 2;
})
btn3.addEventListener('click',function(){
    userChoice = 3;
})
btn4.addEventListener('click', function(){
    userChoice = 4;
})

submit.addEventListener('click', submitAnswer);

retryQuiz.addEventListener('click', function(){location.reload();});

// quiz status
if (quizStatus == true){
    quizTime();
    showQuizTimer();
} else if (quizStatus == false){
    stopQuizTime();
    seconds = 0;
};

//This is the timer for the Quiz
function quizTime(){
    quizTimer.innerText = ("Timer: " + seconds);
    seconds--;
    if (seconds === 0 || seconds < 0){
        clearInterval(timer)
        seconds = 0;
        quizStatus = false;
        gameEnd();
        console.log(quizStatus);
    };
    
};

//stop the quiz time
function stopQuizTime(){
    clearInterval(quizTime)
    seconds = 0;
};

//loop for subtracting time from time and also display user incorrect
function penalty(){
    for(b = 0; b < 30; b++){
        seconds--;
    }
    showincorrect();
};

// adding to the score for the user and reward
function addToScore(){
    for (a = 0; a < 25; a++){
        userScore++
    };
    console.log(userScore)
    score.innerText = "Score: " + userScore;
};

startButton.addEventListener('click', startQuiz)
// when the start button is pushed
function startQuiz(){
      seconds = 120;
      quizStatus = true;
      questionNumber.innerText = questionLocation[0]
      asker.innerText = questions[i]
      btn1Text.innerText = answersToQuestion1[0]
      btn2Text.innerText = answersToQuestion1[1]
      btn3Text.innerText = answersToQuestion1[2]
      btn4Text.innerText = answersToQuestion1[3]
      showQuizTimer();
      showbtn1();
      showbtn2();
      showbtn3();
      showbtn4();
      hidestartButton();
      shownextButton();
  };



function submitAnswer(){

    //logic for question 1//
    
    if(i === 0 && userChoice === 3){
        showcorrect();
        i++
        questionNumber.innerText = questionLocation[1]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion2[0]
        btn2Text.innerText = answersToQuestion2[1]
        btn3Text.innerText = answersToQuestion2[2]
        btn4Text.innerText = answersToQuestion2[3]
        userChoice = undefined;

        addToScore();
    } else if(i === 0 && userChoice < 3){
        penalty();
        i++
        questionNumber.innerText = questionLocation[1]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion2[0]
        btn2Text.innerText = answersToQuestion2[1]
        btn3Text.innerText = answersToQuestion2[2]
        btn4Text.innerText = answersToQuestion2[3]
        userChoice = undefined;
    }
    else if(i === 0 && userChoice > 3){       
        penalty();
        i++
        questionNumber.innerText = questionLocation[1]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion2[0]
        btn2Text.innerText = answersToQuestion2[1]
        btn3Text.innerText = answersToQuestion2[2]
        btn4Text.innerText = answersToQuestion2[3]
        userChoice = undefined;
    };


  //logic for question 2//

    if(i === 1 && userChoice === 4){
        showcorrect();
        i++
        questionNumber.innerText = questionLocation[2]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion3[0]
        btn2Text.innerText = answersToQuestion3[1]
        btn3Text.innerText = answersToQuestion3[2]
        btn4Text.innerText = answersToQuestion3[3]
        userChoice = undefined;
        addToScore();
    } else if(i === 1 && userChoice < 4){
        penalty();
        i++
        questionNumber.innerText = questionLocation[2]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion3[0]
        btn2Text.innerText = answersToQuestion3[1]
        btn3Text.innerText = answersToQuestion3[2]
        btn4Text.innerText = answersToQuestion3[3]
        userChoice = undefined;
    };

    //logic for question 3//

    if(i === 2 && userChoice === 2){
        showcorrect();
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
        addToScore();
    } else if(i === 2 && userChoice < 2){
        penalty();
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
    }
    else if(i === 2 && userChoice > 2){
        penalty();
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
    };

   //logic for question 4//

   if(i === 3 && userChoice === 1){
    showcorrect();
    i++
    userChoice = undefined;
    addToScore();
   gameEnd();
    } 
    else if(i === 3 && userChoice > 1){
     i++   
    penalty();
    userChoice = undefined;
    gameEnd();
    };
};
if(i === 4){
    quizStatus = false;
};

function gameEnd(){
//clear the screen of everything
masterHolder.innerHTML = "";
//prompt user for initals
var userInput = prompt("You did great! add your initials to the scoreboard!")
userIntials += userInput
user.innerText = userIntials;
userCompletion.innerHTML = userScore
//show leaderboard and try again button
showScoreboard();
showRetryQuiz();
}

// functions to hide buttons
function hidebtn1(){btn1.style.visibility = "hidden";}
function hidebtn2(){btn2.style.visibility = "hidden";}
 function hidebtn3(){btn3.style.visibility = "hidden";}
 function hidebtn4(){btn4.style.visibility = "hidden";}
 function hidenextButton(){nextButton.style.visibility = "hidden";}
 function hidestartButton(){startButton.style.visibility = "hidden";}
 function hidecorrect(){correct.style.visibility = "hidden";};
 function hideincorrect(){incorrect.style.visibility = "hidden";};

//  functions to show buttons
function showbtn1(){ btn1.style.visibility = "visible";};
 function showbtn2(){ btn2.style.visibility = "visible";};
  function showbtn3(){btn3.style.visibility = "visible";};
  function showbtn4(){btn4.style.visibility = "visible";};
  function showstartButton(){startButton.style.visibility = "visible";};
  function shownextButton(){nextButton.style.visibility = "visible";};
  function showQuizTimer(){quizTimer.style.visibility = "visible";};
  function showcorrect(){correct.style.visibility = "visible";};
  function showincorrect(){incorrect.style.visibility = "visible";};
  function showScoreboard(){scoreBoard.style.visibility = "visible";};
  function showRetryQuiz(){retryQuiz.style.visibility = "visible";};
