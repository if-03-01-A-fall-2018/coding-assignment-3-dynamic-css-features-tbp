function check(){

	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
  let question4 = document.quiz.question4.value;
	let correct = 0;

  //check if the checked answer is correct.
	if (question1 == "Genetic Algorithms") {
		correct++;
  }
	if (question2 == "True") {
		correct++;
  }
	if (question3 == "True") {
		correct++;
	}
  if (question4 == "True") {
    correct++;
  }

	let pictures = ["IMG/win.jpg", "IMG/meh.jpg", "IMG/lose.jpg"];
	let messages = ["Great job!", "That's just okay", "You really need to do better"];
	let score;

  // to determine what photo to show on post screen.
	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct >= 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
  //prints out a message from 'messages' array.
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
}
