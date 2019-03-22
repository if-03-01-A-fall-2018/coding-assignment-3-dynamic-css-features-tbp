function populate() {
  if (quiz.isEnded()) {
    //showScores;
  }
  else{
    // showQuestion
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
  }
}

var questions = [
  new Questions("Easy Question A?", ["Answer A", "Answer B", "Answer C", "Answer D"], "A"),
  new Questions("Easy Question B?", ["Answer A", "Answer B", "Answer C", "Answer D"], "B"),
  new Questions("Easy Question C?", ["Answer A", "Answer B", "Answer C", "Answer D"], "C"),
  new Questions("Easy Question D?", ["Answer A", "Answer B", "Answer C", "Answer D"], "D"),
];
var quiz = new Quiz(questions);

populate();
