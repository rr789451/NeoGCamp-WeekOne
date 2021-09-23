var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
var flag = 0;

var highScores = [{
  name: "Rehan",
  points: 4
},{
  name: "Prateek",
  points: 3
}];

var questions = [{
  question: "What is my age?\n",
  answer: "20"
},{
  question: "Where do I live?\n",
  answer: "Hyderabad"
},{
  question: "Where am I currently studying?\n",
  answer: "Matrusri College"
},{
  question: "What is my favorite food?\n",
  answer: "Fries"
},{
  question: "What is my favorite color?\n",
  answer: "Orange"
}];

function welcome(){
  var username = readlineSync.question("What is your name?\n");
  console.log("Welcome "+username+" to DO YOU KNOW ROHIT?\n");
}

function checkAnswers(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right!\n"));
    score+=1;
  }
  else{
    console.log(chalk.red("Wrong!\n"));
  }
}

function quiz(){
  for(var i = 0; i < questions.length; i++){
    var current = questions[i];
    checkAnswers(current.question, current.answer);
  }
}

function finalScore(){
  console.log("Your final score is: "+score+"\n");
  console.log("Current High Scores\n");
  highScores.map(scores =>
    {
      console.log(scores.name+" : "+scores.points)
      if(score > scores.points)
      {
        flag++;
      }
    }
  );
  if(flag===2){
    console.log("You've scored the highest points in this game!!");
  }
}

welcome();
quiz();
finalScore();