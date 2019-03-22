function Question(text, choices, answers){
  this.text = text;
  this.choices = choices;
  this.answers = answers;
}

Question.prototype.correctAnswer = function(choice){
  return choice === this.answer;
}
