var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question("What's your name?\n");
console.log("\nWelcome " + userName + " to the Death Note Trivia");

var questions = [{
  question: "What is the name of this Shinigami, who is the owner of the Death Note that Light uses?",
  answer: "Ryuk"
}, {
  question: "What language did Ryuk write the instructions of the Death Note?",
  answer: "English"
}, {
  question: "Besides someone's name, what else did Light Yagami need to successfully kill someone with the Death Note?",
  answer: "Face"
}, {
  question: "What is the name of Light's Father?",
  answer: "Soichiro Yagami"
}, {
  question: "Who ends up being the 2nd Kira?",
  answer: "Misa Amane"
}, {
  question: "Who is the successor to L?",
  answer: ""
}];

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log('\nYAY! You scored:', score);

function play(question, answer) {
  var userAnswer = readlineSync.question('\n\n' + question + "\n");
  if (userAnswer === answer) {
    console.log('Bingo!');
    score = score + 1
  } else {
    console.log('Oops! The answer was not right!');
  }
  console.log('Current Score:', score);
  console.log('------------');
}

