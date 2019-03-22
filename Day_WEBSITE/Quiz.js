function populate() {
  if (quiz.isEnded()) {
    showScores();
  }
  else{
    // showQuestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show choices
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
};
function  guess(id, guess){
  var button= document.getElementById(id);
  button.onclick = function(){
    quiz.guess();
    populate();
  }
};
function showProgress(){
  var currentQuestionNumber = quiz.questionIndex+1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
function showScores(){
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your score: " +quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML= gameOverHtml;
};

var questions = [
  new Question("Easy Question A?", ["Answer A", "Answer B", "Answer C", "Answer D"], "A"),
  new Question("Easy Question B?", ["Answer A", "Answer B", "Answer C", "Answer D"], "B"),
  new Question("Easy Question C?", ["Answer A", "Answer B", "Answer C", "Answer D"], "C"),
  new Question("Easy Question D?", ["Answer A", "Answer B", "Answer C", "Answer D"], "D"),
];
var quiz = new Quiz(questions);

populate();
