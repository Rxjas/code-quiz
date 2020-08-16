var body = document.body
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
var questionNumber = document.getElementById("codeQuiz");
var userChoice = undefined;
let i = 0;
let gameStatus = undefined;
var userScore = 0;
var seconds = 180;
var timer = setInterval(quizTime, 1000);

// quiz status
if (gameStatus == true){
    quizTime();
    showQuizTimer();
} else if (gameStatus == false){
    stopQuizTime();
};

//This is the timer for the Quiz
function quizTime(){
    quizTimer.innerText = ("Timer: " + seconds);
    seconds--;
    if (!seconds){
        clearInterval(timer)
        seconds = 0;
        // gameStatus = false;
    };
    console.log(quizTimer)
    // console.log(seconds);
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
};

//array with the questions
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
function addToScore(){
    userScore++
    console.log(userScore)
    score.innerText = "Score: " + userScore
}

startButton.addEventListener('click', startQuiz)
// when the start button is pushed
function startQuiz(){
      seconds = 180;
      gameStatus = true;
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

btn1.addEventListener('click',function(){
    userChoice = 1;
    console.log(userChoice)
})
btn2.addEventListener('click',function(){
    userChoice = 2;
    console.log(userChoice)
})
btn3.addEventListener('click',function(){
    userChoice = 3;
    console.log(userChoice)
})
btn4.addEventListener('click', function(){
    userChoice = 4;
    console.log(userChoice)
})

submit.addEventListener('click', submitAnswer);

function submitAnswer(){

    //logic for question 1//
    
    if(i === 0 && userChoice === 3){
        alert("You are correct")
        showcorrect();
        i++
        questionNumber.innerText = questionLocation[1]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion2[0]
        btn2Text.innerText = answersToQuestion2[1]
        btn3Text.innerText = answersToQuestion2[2]
        btn4Text.innerText = answersToQuestion2[3]
        userChoice = undefined;
        console.log(userChoice)
        addToScore();
    } else if(i === 0 && userChoice < 3){
        // alert("you are incorrect")
        //subtract from timer
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
        // alert("you are incorrect")
        //subtract from timer
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
        // alert("You are correct")
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
        // alert("you are incorrect")
        //subtract from timer
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
        alert("You are correct")
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
        console.log(userChoice)
        addToScore();
    } else if(i === 2 && userChoice < 2){
        // alert("you are incorrect")
        //subtract from timer
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
        gameStatus = false;
    }
    else if(i === 2 && userChoice > 2){
        // alert("you are incorrect")
        //subtract from timer
        i++
        questionNumber.innerText = questionLocation[3]
        asker.innerText = questions[i]
        btn1Text.innerText = answersToQuestion4[0]
        btn2Text.innerText = answersToQuestion4[1]
        btn3Text.innerText = answersToQuestion4[2]
        btn4Text.innerText = answersToQuestion4[3]
        userChoice = undefined;
        gameStatus = false;
    };

   //logic for question 4//

   if(i === 3 && userChoice === 1){
    // alert("You are correct")
    i++
    //hide everything display leaderboard
    userChoice = undefined;
    console.log(userChoice)
    addToScore();
    gameStatus = false;
    } 
    else if(i === 3 && userChoice > 1){
    // alert("you are incorrect")
    //hide everything display leaderboard
    //subtract from timer
    gameStatus = false;
    i++
    userChoice = undefined;
    };
};
// LOCATION.RELOAD to reload the page
// functions to hide buttons



function hidebtn1(){btn1.style.visibility = "hidden";}
function hidebtn2(){btn2.style.visibility = "hidden";}
 function hidebtn3(){btn3.style.visibility = "hidden";}
 function hidebtn4(){btn4.style.visibility = "hidden";}
 function hidenextButton(){nextButton.style.visibility = "hidden";}

 function hidestartButton(){startButton.style.visibility = "hidden";}

//  functions to show buttons

function showbtn1(){ btn1.style.visibility = "visible";}
 function showbtn2(){ btn2.style.visibility = "visible";}
  function showbtn3(){btn3.style.visibility = "visible";}
  function showbtn4(){btn4.style.visibility = "visible";}
  function showstartButton(){startButton.style.visibility = "visible";}
  function shownextButton(){nextButton.style.visibility = "visible";}
  function showQuizTimer(){quizTimer.style.visibility = "visible";}
  function showcorrect(){
      setInterval(function(){correct.style.visibility = "visible"; }, 1000)};
