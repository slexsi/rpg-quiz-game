let playerPower = 0;
let enemyHP = 10;

const questions = [
  { q: "2 + 2 = ?", a: "4" },
  { q: "Capital of France?", a: "Paris" },
  { q: "5 * 3 = ?", a: "15" },
  { q: "JS stands for?", a: "JavaScript" }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const playerPowerEl = document.getElementById("player-power");
const enemyHPEl = document.getElementById("enemy-hp");
const resultEl = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const answerInput = document.getElementById("answer");

function showQuestion() {
  if (currentQuestion < questions.length) {
    questionEl.innerText = questions[currentQuestion].q;
    answerInput.value = "";
    resultEl.innerText = "";
  } else {
    questionEl.innerText = "All questions done!";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
  }
}

function submitAnswer() {
  const answer = answerInput.value.trim();
  if (answer.toLowerCase() === questions[currentQuestion].a.toLowerCase()) {
    playerPower++;
    enemyHP--;
    resultEl.innerText = "✅ Correct! You gained power!";
  } else {
    resultEl.innerText = "❌ Wrong answer!";
  }

  playerPowerEl.innerText = playerPower;
  enemyHPEl.innerText = enemyHP;

  currentQuestion++;
  showQuestion();

  if (enemyHP <= 0) {
    questionEl.innerText = "🎉 You defeated the enemy!";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
  }
}

submitBtn.addEventListener("click", submitAnswer);
showQuestion();
