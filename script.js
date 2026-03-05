const QUESTION_LIMIT = 5;

const allQuestions = [
{
question:"The classification of cells into prokaryotic and eukaryotic is based on:",
answers:[
{ text:"Cellular organization and biochemistry", correct:true },
{ text:"Shape", correct:false },
{ text:"Size", correct:false },
{ text:"Staining Reaction", correct:false },
{ text:"Motility", correct:false }
]},
{
question:"Red planet?",
answers:[
{ text:"Mars", correct:true },
{ text:"Venus", correct:false },
{ text:"Jupiter", correct:false },
{ text:"Saturn", correct:false }
]},
{
question:"Who wrote Hamlet?",
answers:[
{ text:"William Shakespeare", correct:true },
{ text:"Charles Dickens", correct:false },
{ text:"Tolstoy", correct:false },
{ text:"Mark Twain", correct:false }
]},
{
question:"2 + 2 ?",
answers:[
{ text:"4", correct:true },
{ text:"5", correct:false },
{ text:"3", correct:false },
{ text:"6", correct:false }
]},
{
question:"Largest ocean?",
answers:[
{ text:"Pacific", correct:true },
{ text:"Atlantic", correct:false },
{ text:"Indian", correct:false },
{ text:"Arctic", correct:false }
]},
{
question:"Plants absorb?",
answers:[
{ text:"Carbon Dioxide", correct:true },
{ text:"Oxygen", correct:false },
{ text:"Nitrogen", correct:false },
{ text:"Hydrogen", correct:false }
]}
];

// ELEMENTS
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");
const progressBar = document.getElementById("progressBar");
const questionNumberEl = document.getElementById("questionNumber");
const reviewContainer = document.getElementById("reviewContainer");

// STATE
let questions=[];
let currentIndex=0;
let userAnswers=[];
let score=0;

// UTIL
function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}

// START
function startQuiz(){
questions = shuffle([...allQuestions])
.slice(0,QUESTION_LIMIT)
.map(q=>({
...q,
answers: shuffle([...q.answers])
}));

currentIndex=0;
userAnswers=[];
score=0;

reviewContainer.classList.add("hidden");
restartBtn.classList.add("hidden");

showQuestion();
}

// SHOW QUESTION
function showQuestion(){
answersEl.innerHTML="";
nextBtn.classList.add("hidden");

let q = questions[currentIndex];

questionNumberEl.textContent =
`Question ${currentIndex+1} of ${questions.length}`;

questionEl.textContent=q.question;

updateProgress();

q.answers.forEach((ans,index)=>{
const btn=document.createElement("button");
btn.textContent=ans.text;

if(userAnswers[currentIndex]===index){
btn.classList.add("selected");
nextBtn.classList.remove("hidden");
}

btn.onclick=()=>{
userAnswers[currentIndex]=index;
showQuestion();
nextBtn.classList.remove("hidden");
};

answersEl.appendChild(btn);
});
}

// NAVIGATION
nextBtn.onclick=()=>{
if(currentIndex<questions.length-1){
currentIndex++;
showQuestion();
}else{
finishQuiz();
}
};

backBtn.onclick=()=>{
if(currentIndex>0){
currentIndex--;
showQuestion();
}
};

// FINISH QUIZ
function finishQuiz(){
calculateScore();

reviewContainer.classList.remove("hidden");
reviewContainer.innerHTML = `<h2>Final Score: ${score}/${questions.length}</h2>`;

questionEl.textContent = "Exam Finished";
questionNumberEl.textContent = "";
answersEl.innerHTML = "";

nextBtn.classList.add("hidden");
backBtn.classList.add("hidden");
restartBtn.classList.remove("hidden");
}
// SCORE
function calculateScore(){
score=0;
questions.forEach((q,i)=>{
let userIndex=userAnswers[i];
if(userIndex!==undefined && q.answers[userIndex].correct){
score++;
}
});
}

// REVIEW MODE
function showReview(){
reviewContainer.innerHTML="";
reviewContainer.classList.remove("hidden");

questionEl.textContent=`Final Score: ${score}/${questions.length}`;
questionNumberEl.textContent="Review Answers";

answersEl.innerHTML="";
nextBtn.classList.add("hidden");
backBtn.classList.add("hidden");

questions.forEach((q,i)=>{
let userIndex=userAnswers[i];

let correctAns=q.answers.find(a=>a.correct).text;
let userAns = userIndex!==undefined ? q.answers[userIndex].text : "No answer";

let div=document.createElement("div");
div.className="review-item";

div.innerHTML=`
<b>Q${i+1}: ${q.question}</b><br>
<span class="user-text">Your answer: ${userAns}</span><br>
<span class="correct-text">Correct answer: ${correctAns}</span>
`;

reviewContainer.appendChild(div);
});
}

// PROGRESS
function updateProgress(){
let progress=(currentIndex/questions.length)*100;
progressBar.style.width=progress+"%";
}

// RESTART
restartBtn.onclick=()=>{
backBtn.classList.remove("hidden");
startQuiz();
};

startQuiz();
