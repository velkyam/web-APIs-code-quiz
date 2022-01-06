//header
var header = document.createElement("header")
header.setAttribute("style", "display: flex; justify-content: space-between; width: 100%")
document.body.appendChild(header)

//highscore
var highScore = document.createElement("a")
highScore.textContent= "View Highscores"
header.appendChild(highScore)

highScore.addEventListener('click',function(event){
    highScoreScreen()
})

function highScoreScreen(){
    heading.textContent="Highscores"

    intro.remove()
    startBut.remove()
    
    var line = document.createElement("p")
    line.setAttribute("style","font-size: 12px; background-color: violet")
    line.textContent = localStorage.getItem("initials") + " - " + localStorage.getItem("finalResult")
    heading.appendChild(line)

    var back = document.createElement("button")
    back.textContent = "Back"
    heading.appendChild(back);
    back.addEventListener('click', function(event){
        location.reload()
    })

    var clear = document.createElement("button")
    clear.textContent = "Clear Highscores"
    heading.appendChild(clear);
    clear.addEventListener('click',function(event){
        line.textContent = ""
    })
}



//timer
var secondsLeft = 60;
var timer = document.createElement("div")
timer.textContent="60 s"
header.appendChild(timer)

//quizbox container
var quizContainer = document.createElement("main")
quizContainer.setAttribute("style", "max-width: 600px; max-height: 500px; display: flex; flex-direction: column; margin: 0 auto; align-items: center")
document.body.appendChild(quizContainer);

//heading
var heading = document.createElement("h1")
heading.textContent = "Code QUIZ Challenge"
heading.setAttribute("style", "text-align: center");
quizContainer.appendChild(heading);

//intro text
var intro = document.createElement("p")
intro.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit tenetur assumenda itaque sapiente a aperiam molestias cupiditate repellendus, dicta saepe, deserunt atque laboriosam omnis accusamus aliquid perspiciatis ab asperiores ipsum?"
intro.setAttribute("style", "text-align: center");
quizContainer.appendChild(intro);

//start quiz button
var startBut = document.createElement("button")
startBut.textContent ="Start Quiz"
quizContainer.appendChild(startBut);

//answers in column
var answers = document.createElement("ul")
answers.setAttribute("style","display: flex; flex-direction: column;")
  var Mes = document.createElement("div")
  Mes.setAttribute("style","color:gray; border-top: solid 2px gray; text-align: center; width: 100%")
  

startBut.addEventListener('click', function (event){
        
        //timer fucntion
        var timeInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent=secondsLeft + " s";
      }, 1000);

      //removes intro text and start button
      intro.remove();
      startBut.remove();


function correct(){
    secondsLeft=secondsLeft+10;
    timer.textContent=secondsLeft + " s";
    Mes.textContent ="Correct! +10s!"
    
}
function wrong(){
    secondsLeft=secondsLeft-10;
    timer.textContent=secondsLeft + " s";
    Mes.textContent ="Wrong -10s!"

    
}


question1();
  //question 1
function question1(){
//answer button elements
    var li1 = document.createElement("button");
    var li2 = document.createElement("button");
    var li3 = document.createElement("button");
    var li4 = document.createElement("button");

    heading.textContent="Commonly used data types Do NOT include:";
    li1.textContent = "1. strings";
    li2.textContent = "2. booleans";
    li3.textContent = "3. alerts";
    li4.textContent = "4. numbers";
    
    li1.addEventListener('click', function(event){
        wrong();
    })

    li2.addEventListener('click', function(event){
        wrong();
    })
 
    li3.addEventListener('click', function(event){
        correct();
    })
 
    li4.addEventListener('click', function(event){
        wrong();
    })
    heading.appendChild(answers);
    answers.appendChild(li1);
    answers.appendChild(li2);
    answers.appendChild(li3);
    answers.appendChild(li4);
    answers.addEventListener('click',function(event){
    question2();
    quizContainer.appendChild(Mes)
    li1.remove();
    li2.remove();
    li3.remove();
    li4.remove();
},{once:true})
  }

//question 2
function question2(){
    var li1 = document.createElement("button");
    var li2 = document.createElement("button");
    var li3 = document.createElement("button");
    var li4 = document.createElement("button");
    heading.textContent="The condition in an if / else statement is enclosed within _____.";
    li1.textContent = "1. quotes";
    li2.textContent = "2. curly brackets";
    li3.textContent = "3. parantheses";
    li4.textContent = "4. square brackets";
    
    li1.addEventListener('click', function(event){
        wrong();
      })
    li2.addEventListener('click', function(event){
        wrong();
      })
    li3.addEventListener('click', function(event){
        correct();
      })
    li4.addEventListener('click', function(event){
        wrong();
      })

      heading.appendChild(answers);
      answers.appendChild(li1);
      answers.appendChild(li2);
      answers.appendChild(li3);
      answers.appendChild(li4);
      answers.addEventListener('click',function(event){
        question3();
        li1.remove();
        li2.remove();
        li3.remove();
        li4.remove();
        quizContainer.appendChild(Mes)
    },{once:true})
  }

  //question 3
function question3(){
    var li1 = document.createElement("button");
    var li2 = document.createElement("button");
    var li3 = document.createElement("button");
    var li4 = document.createElement("button");
    heading.textContent="Arrays in JavaScript can be used to store _____.";
    li1.textContent = "1. numbers";
    li2.textContent = "2. other arrays";
    li3.textContent = "3. booleans";
    li4.textContent = "4. all of the above";
    
    li1.addEventListener('click', function(event){
        wrong();
      })
    li2.addEventListener('click', function(event){
        wrong();
      })
    li3.addEventListener('click', function(event){
        wrong();
      })
    li4.addEventListener('click', function(event){
        correct();
      })

      heading.appendChild(answers);
      answers.appendChild(li1);
      answers.appendChild(li2);
      answers.appendChild(li3);
      answers.appendChild(li4);
      answers.addEventListener('click',function(event){
        quizContainer.appendChild(Mes)
        question4();
        li1.remove();
        li2.remove();
        li3.remove();
        li4.remove();
    },{once:true})
  }

  //question 4
function question4(){
    var li1 = document.createElement("button");
    var li2 = document.createElement("button");
    var li3 = document.createElement("button");
    var li4 = document.createElement("button");
    heading.textContent="String values must be enclosed within ___ when being assigned to variables";
    li1.textContent = "1. commas";
    li2.textContent = "2. curly brackets";
    li3.textContent = "3. quotes";
    li4.textContent = "4. parantheses";
    
    li1.addEventListener('click', function(event){
        wrong();
      })
    li2.addEventListener('click', function(event){
        wrong();
      })
    li3.addEventListener('click', function(event){
        correct();
      })
    li4.addEventListener('click', function(event){
        wrong();
      })

      heading.appendChild(answers);
      answers.appendChild(li1);
      answers.appendChild(li2);
      answers.appendChild(li3);
      answers.appendChild(li4);
      answers.addEventListener('click',function(event){
        quizContainer.appendChild(Mes)
        question5();
        li1.remove();
        li2.remove();
        li3.remove();
        li4.remove();
    },{once:true})
  }

  //question 5
function question5(){
    var li1 = document.createElement("button");
    var li2 = document.createElement("button");
    var li3 = document.createElement("button");
    var li4 = document.createElement("button");
    heading.textContent="A very useful tool used during development and debugging for printing content to the debuger is:";
    li1.textContent = "1. JavaScript";
    li2.textContent = "2. terminal/bash";
    li3.textContent = "3. for loops";
    li4.textContent = "4. console.log";
    
    li1.addEventListener('click', function(event){
        wrong();
      })
    li2.addEventListener('click', function(event){
        wrong();
      })
    li3.addEventListener('click', function(event){
        wrong();
      })
    li4.addEventListener('click', function(event){
        correct();
      })

      heading.appendChild(answers);
      answers.appendChild(li1);
      answers.appendChild(li2);
      answers.appendChild(li3);
      answers.appendChild(li4);
      answers.addEventListener('click',function(event){
        quizContainer.appendChild(Mes)
        li1.remove();
        li2.remove();
        li3.remove();
        li4.remove();
        clearInterval(timeInterval);
        resultScreen();

    },{once:true})
  }
  

  function resultScreen(){
    heading.textContent = "All Done!"
  
    var result = document.createElement("p");
    result.textContent = "Your final score is " + secondsLeft + " seconds.";
    heading.appendChild(result);
  
  
    var enterInitials = document.createElement("label");
    enterInitials.setAttribute("for","initials")
    enterInitials.textContent = "Enter your initials: "
    heading.appendChild(enterInitials)
  
    var initials = document.createElement("input")
    initials.setAttribute("type", "text")
    initials.setAttribute("name", "initials")
    initials.setAttribute("id", "initials")
    initials.setAttribute("placeholder", "initials")
    enterInitials.appendChild(initials);
  
    var submit = document.createElement("button")
    submit.textContent = "Submit"
    heading.appendChild(submit);
  
    submit.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.setItem("initials", initials.value)
    localStorage.setItem("finalResult", secondsLeft)

    Mes.remove()  
    highScoreScreen()
  
    })
    
  }

  
})

