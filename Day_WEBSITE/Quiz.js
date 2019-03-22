function populate() {
  if (quiz.isEnded()) {
    //showScores;
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
    }
  }
}
var questions = [
  new Question("Easy Question A?", ["Answer A", "Answer B", "Answer C", "Answer D"], "A"),
  new Question("Easy Question B?", ["Answer A", "Answer B", "Answer C", "Answer D"], "B"),
  new Question("Easy Question C?", ["Answer A", "Answer B", "Answer C", "Answer D"], "C"),
  new Question("Easy Question D?", ["Answer A", "Answer B", "Answer C", "Answer D"], "D"),
];
var quiz = new Quiz(questions);

populate();
