function Quiz(questions){
  this.score = 0;
  this.questions = questions;
  this.indexOfCurrentQuestion = 0;
}

Quiz.prototype.getCurrentQuestion = function(){
  return this.questions[this.indexOfCurrentQuestion];
}
Quiz.prototype.isEnded = function(){
  return this.questions.length === this.indexOfCurrentQuestion;
}
Quiz.prototype.guess = function(answer){
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  }
  this.indexOfCurrentQuestion++;
}
