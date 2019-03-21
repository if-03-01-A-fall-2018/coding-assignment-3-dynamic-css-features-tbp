function Question(text, choices, answers){
  this.text = text;
  this.choice = choice;
  this.answers = answers;
}

Question.prototype.correctAnswer = function(choice){
  return choice === this.answer;
}
