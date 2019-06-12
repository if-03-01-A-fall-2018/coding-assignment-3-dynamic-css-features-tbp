function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
   new Question("How can you also describe A.I?", ["Motor Intelligence", "Machine Intelligence", "Animal Intelligence", "Human Machine Intelligence"], "Machine Intelligence"),
   new Question("In computer Science, AI research is defined as what? ", ["The Study of computer", "The study of machines", "The study of animal kingdom", "The study of intelligent Agent"], "The study of intelligent Agent"),
   new Question("Artificial intelligence was founded as an academic discipline in what year? ", ["1956", "1959","1945", "1969"], "1956"),
   new Question("Which of the following is NOT included in the traditional goals of A.I research? ", ["Reasoning", "knowledge","Planning", "Information"], "Information"),
   new Question("Is general intelligence among the field's long-term goals?", ["No", "Yes","Changes all the time", "Undecided"], "Yes"),
   new Question("Which of the following tools is NOT used in A.I? ", ["Machine Power", "Neural Networks","Mathematical Optimization", "Versions of search"], "Machine Power"),
   new Question("The following draws upon AI field in computer science except? ", ["Mathematics", "Psychology","Linguistics", "All of the above"], "Mathematics"),
   new Question("A.I techniques have become an essential part of the technology industry", ["I agree", "I disagree","No idea", "Undecided"], "I agree"),
   new Question("Which of the following is the founder and leader of AI research?", ["Allen Newell (CMU)", "Herbert Simon (CMU)","John McCarthy", "All of the above"], "All of the above"),
];


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
