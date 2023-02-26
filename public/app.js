var questions = [

    {
        question: "CSS Stands For ________________",
        options: ["Cascading StyleSheet", "CSS", "Language", "Text Language"],
        correctAns: "Cascading StyleSheet",
    },

    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "HTML", "Language", "Text Language"],
        correctAns: "Hyper Text Markup Language",
    },

    {
        question: "What is the correct format for aligning written content to the center of the page in CSS?",
        options: ["Text-align:center;", "Font-align:center;", "Text:align-center;", "Font:align-center;"],
        correctAns: "Text-align:center;",
    },

    {
        question: "Which tag is used to display text in title bar of a web document?",
        options: ["Body tag", "Meta tag", "Title tag", "Comment tag"],
        correctAns: "Title tag",
    },

    {
        question: "HTML allows us to use ___ levels of headings.",
        options: ["Two", "Three", "Five", "Six"],
        correctAns: "Six",
    },

    {
        question: "What tag is used to display a picture in a HTML page?",
        options: ["picture", "image", "img", "src"],
        correctAns: "img",
    },

    {
        question: "HTML web pages can be read and rendered by _________.",
        options: ["Compiler", "Server", "Web Browser", "Interpreter"],
        correctAns: "Web Browser",
    },

    {
        question: "HTML tags are surrounded by which type of brackets.",
        options: ["Curly", "Round", "Squart", "Angle"],
        correctAns: "Angle",
    },

    {
        question: "The primary colors are ____",
        options: ["Red, green, yellow", "Red, white, yellow", "Red, green, blue", "Red, yellow, blue"],
        correctAns: "Red, green, blue",
    },

    {
        question: "How many different colours can GIF contain?",
        options: ["64", "156", "256", "264"],
        correctAns: "256",
    },

];

var qsBody = document.getElementById("qsBody");
var AllOptions = document.getElementById("AllOptions");
var currentNum = document.getElementById("currentNum");
var totalNum = document.getElementById("totalNum");
var mainDiv = document.getElementById("mainDiv")
var resultDiv = document.getElementById("resultDiv")
var percentageCal = document.getElementById("percentageCal")
var marks = 0;


var indexVal = 0;

// SHUFFLING


// var chk = Math.floor(Math.random() * questions.length)




// RENDERING QUESTIONS
function renderQs() {

    qsBody.innerHTML = questions[indexVal].question;

    for (var i = 0; i < questions[indexVal].options.length; i++) {

        AllOptions.innerHTML +=
            `<div class="col-md-6">
        <div onclick="chkingAns('${questions[indexVal].options[i]}','${questions[indexVal].correctAns}')" class="btn Opt-body w-100 p-2 shadow my-1 fw-bold">${questions[indexVal].options[i]}
        </div>
        </div>`

    }

    // CURRENT NUMBER
    currentNum.innerHTML = indexVal + 1;
    totalNum.innerHTML = questions.length

}

renderQs();

// NEXT BUTTON AND PERCENTAGE

function nextQs() {
    
    AllOptions.innerHTML = "";
  

    if (indexVal + 1 == questions.length) {
        resultDiv.style.display = "block";
        mainDiv.style.display = "none";

        percentageCal.innerHTML = marks / questions.length * 100 + "%"

    }else{
        indexVal++;
        renderQs();

    }

}

// NUMBERS



// CHECKING ANSWERS

function chkingAns(optionVal, correctVal) {

    if (optionVal == correctVal) {
        marks++;

    }

    nextQs();
}
