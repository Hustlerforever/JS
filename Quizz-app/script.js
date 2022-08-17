const quizData = [
    {
        question: "What is capital of India?",
        a: "Mumbai",
        b: "Haidrabad",
        c: "Pune",
        d: "Delhi",
        correct: "d",
    },
    {
        question: "Which is the most used programming language by Developers?",
        a: "C++",
        b: "Javascript",
        c: "Python",
        d: "Java",
        correct: "b",
    },
    {
        question: "Among the following who was not the President of USA",
        a: "Barack Obama",
        b: "Abraham Lincoln",
        c: "Brian Lara",
        d: "J.F.Kennedy",
        correct: "c",
    },
    {
        question: "What is molecular formula of water?",
        a: "H2O",
        b: "H2SO4",
        c: "HCL",
        d: "AlCl3",
        correct: "a",
    },
    {
        question: "Which of the following places is recongnized as Hill Station?",
        a: "Chicago",
        b: "Beijing",
        c: "Cape Town",
        d: "Mahabaleshwar",
        correct: "d",
    },
];
const takeQuizBtn = document.getElementById("takeQuiz");
const question = document.getElementById("question");
const landingSlide = document.getElementById("landingSlide");
const quiz_container = document.getElementById("quiz-container2");
const a_option = document.getElementById('a_option');
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const submitBtn = document.getElementById("submit");
const showScoreBtn = document.getElementById("showScoreBtn");




// Loading Quiz Data //
let currentQuestion = 0;
loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    question.innerText = currentQuizData.question;

    a_option.innerText = currentQuizData.a;
    b_option.innerText = currentQuizData.b;
    c_option.innerText = currentQuizData.c;
    d_option.innerText = currentQuizData.d;


}

// Loading Quiz Data end //

// Function which checks if  option is selected or not

let score = 0;

const answerEls = document.querySelectorAll(".answer");
function checkOptions() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            // console.log(answerEl.value);
            answer = answerEl.id;
            // console.log(answerEl.checked);
        }
    });
    return answer;
}
//function to deselect the previous option when next question is loaded
function deselectOption() {
    answerEls.forEach((answerEl) => {
        answerEl.checked= false;
    });
}

// Function to remove the elements on the show score page
function removeEle(id) {
    var el = document.getElementById('quiz-header');  // One way to change elements   
    el.style.display = "none";

    document.getElementById('hidden-text').style.display = "block"; // Another way to change elements  
    document.getElementById('showScoreBtn').style.display = "block";
    document.getElementById('submit').style.display = "none";
}

//When Take Quiz is clicked the landingslide is hidden and the quiz container is displayed
takeQuizBtn.addEventListener('click', () => {
    
    landingSlide.style.display="none";
    quiz_container.style.display="block";
})


//When submit button is clicked then either next question is loaded or show score page is opened
submitBtn.addEventListener('click', () => {
    const answer = checkOptions();
    //  console.log(typeof(answer));
    //  console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }
        deselectOption() ;
        currentQuestion++;


        if (currentQuestion < quizData.length) {

            loadQuiz();
        }
        else {
            removeEle();

        }
    }
   
})

//ShowScore button
showScoreBtn.addEventListener('click',()=>{
    if(score>quizData.length/2){

        quiz_container.innerHTML = `<h2 id ="txtcenter" >Nice work buddy! <br> You are amazing! &#128512</h2>
        <p id ="txtcenter">You answered ${score} out of ${quizData.length} questions correctly &#129321 </p>`;
    }
    else{
        //location.reload() for reloading the webpage
        quiz_container.innerHTML = `<h2 id ="txtcenter" >Need better work buddy! <br> Give a nice try again!</h2>
        <p id ="txtcenter">You answered just ${score} out of ${quizData.length} questions correctly &#128529 </p>
        <button id="submit" onclick="location.reload()">Take quiz again</button>
        `;
    }
})

