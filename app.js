//----------------------------
// Fields and Variables
//----------------------------
let currentNumber = 1;
let answers = [];
let currentAnswer = [];
let questions = [];

//----------------------------
// Save Answers
//----------------------------
function AddToAnswersRadio()
{
    let submissionValue = document.querySelector(
        'input[name="template1"]:checked'
    );

    if (submissionValue)
    {
        currentAnswer[currentNumber - 1] = submissionValue.value;
    }
}

function AddToAnswersText()
{
    let submissionValue = document.getElementById("template2Input").value;

    currentAnswer[currentNumber - 1] = submissionValue.trim().toLowerCase();
}

function AddToAnswersCheckbox()
{
    let submissionValues = document.querySelectorAll(
        'input[name="template3"]:checked'
    );

    let selectedValues = [];

    for (let i = 0; i < submissionValues.length; i++)
    {
        selectedValues.push(submissionValues[i].value);
    }

    currentAnswer[currentNumber - 1] = selectedValues;
}

//----------------------------
// Navigation
//----------------------------
function NextQuestion()
{
    if (currentNumber < questions.length)
    {
        SaveCurrentAnswer();
        currentNumber++;
        reRenderQuestion();
    }
}

function PreviousQuestion()
{
    if (currentNumber > 1)
    {
        SaveCurrentAnswer();
        currentNumber--;
        reRenderQuestion();
    }
}

function GoToNumber(num)
{
    if (num >= 1 && num <= questions.length)
    {
        SaveCurrentAnswer();
        currentNumber = num;
        reRenderQuestion();
    }
}

function SaveCurrentAnswer()
{
    if (currentNumber >= 1 && currentNumber <= 3)
    {
        AddToAnswersRadio();
    }
    else if (currentNumber >= 4 && currentNumber <= 6)
    {
        AddToAnswersText();
    }
    else if (currentNumber >= 7 && currentNumber <= 10)
    {
        AddToAnswersCheckbox();
    }
}

//----------------------------
// Shuffle Array
//----------------------------
function ShuffleArray(array)
{
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));

        let temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }

    return shuffledArray;
}

//----------------------------
// Choose Questions
//----------------------------
function ChooseQuestion()
{
    let firstThreeQuestions = ShuffleArray(template1Questions);
    questions = firstThreeQuestions.slice(0, 3);

    let nextThreeQuestions = ShuffleArray(template2Questions);
    questions = questions.concat(nextThreeQuestions.slice(0, 3));

    let lastFourQuestions = ShuffleArray(template3Questions);
    questions = questions.concat(lastFourQuestions.slice(0, 4));

    answers = [];

    for (let i = 0; i < questions.length; i++)
    {
        answers.push(questions[i].answer);
    }

    currentAnswer = new Array(questions.length);
}

//----------------------------
// Display Current Question
//----------------------------
function reRenderQuestion()
{
    document.getElementById("template1").style.display = "none";
    document.getElementById("template2").style.display = "none";
    document.getElementById("template3").style.display = "none";

    let currentQuestion = questions[currentNumber - 1];

    if (currentNumber >= 1 && currentNumber <= 3)
    {
        document.getElementById("template1").style.display = "block";
        document.getElementById("template1Question").textContent =
            currentQuestion.question;
        document.getElementById("template1OptionA").textContent =
            currentQuestion.options[0];
        document.getElementById("template1OptionB").textContent =
            currentQuestion.options[1];
        document.getElementById("template1OptionC").textContent =
            currentQuestion.options[2];

        RestoreRadioAnswer();
    }
    else if (currentNumber >= 4 && currentNumber <= 6)
    {
        document.getElementById("template2").style.display = "block";
        document.getElementById("template2Question").textContent =
            currentQuestion.question;

        document.getElementById("template2Input").value =
            currentAnswer[currentNumber - 1] || "";
    }
    else if (currentNumber >= 7 && currentNumber <= 10)
    {
        document.getElementById("template3").style.display = "block";
        document.getElementById("template3Question").textContent =
            currentQuestion.question;
        document.getElementById("template3OptionA").textContent =
            currentQuestion.options[0];
        document.getElementById("template3OptionB").textContent =
            currentQuestion.options[1];
        document.getElementById("template3OptionC").textContent =
            currentQuestion.options[2];
        document.getElementById("template3OptionD").textContent =
            currentQuestion.options[3];

        RestoreCheckboxAnswers();
    }
}

//----------------------------
// Restore Selected Answers
//----------------------------
function RestoreRadioAnswer()
{
    let savedAnswer = currentAnswer[currentNumber - 1];
    let radioButtons = document.querySelectorAll(
        'input[name="template1"]'
    );

    for (let i = 0; i < radioButtons.length; i++)
    {
        radioButtons[i].checked =
            radioButtons[i].value === savedAnswer;
    }
}

function RestoreCheckboxAnswers()
{
    let savedAnswers = currentAnswer[currentNumber - 1] || [];
    let checkboxes = document.querySelectorAll(
        'input[name="template3"]'
    );

    for (let i = 0; i < checkboxes.length; i++)
    {
        checkboxes[i].checked =
            savedAnswers.includes(checkboxes[i].value);
    }
}

//----------------------------
// Check Answers
//----------------------------


function CheckAnswer(index)
{
    let given = currentAnswer[index];
    let correct = answers[index];

    // Template 1: radio, single letter
    if (index >= 0 && index <= 2)
    {
        return given === correct[0];
    }

    // Template 2: text, any accepted answer
    if (index >= 3 && index <= 5)
    {
        if (!given)
        {
            return false;
        }
        return correct.includes(given);
    }

    // Template 3: checkboxes, same set of letters
    if (!given || given.length !== correct.length)
    {
        return false;
    }

    for (let i = 0; i < given.length; i++)
    {
        if (!correct.includes(given[i]))
        {
            return false;
        }
    }

    return true;
}

//----------------------------
// Calculate Score
//----------------------------
function CalculateScore()
{
    let score = 0;

    for (let i = 0; i < questions.length; i++)
    {
        if (CheckAnswer(i))
        {
            score++;
        }
    }

    return score;
}

//----------------------------
// Results and Restart
//----------------------------
function SubmitQuiz()
{
    SaveCurrentAnswer();

    let score = CalculateScore();

    document.getElementById("scoreText").textContent =
        score + " / " + questions.length;

    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("results-screen").style.display = "block";
}

function RestartQuiz()
{
    document.getElementById("results-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";

    InitializeApp();
}

//----------------------------
// Application Initialization
//----------------------------
function InitializeApp()
{
    currentNumber = 1;
    ChooseQuestion();
    reRenderQuestion();
}

InitializeApp();

//----------------------------
// Event Listeners
//----------------------------
for (let i = 1; i <= 10; i++)
{
    document.getElementById("button" + i).addEventListener(
        "click",
        function()
        {
            GoToNumber(i);
        }
    );
}

document.getElementById("next-btn").addEventListener(
    "click",
    function()
    {
        NextQuestion();
    }
);

document.getElementById("previous-btn").addEventListener(
    "click",
    function()
    {
        PreviousQuestion();
    }
);

document.getElementById("submit-btn").addEventListener(
    "click",
    function()
    {
        SubmitQuiz();
    }
);

document.getElementById("restart-btn").addEventListener(
    "click",
    function()
    {
        RestartQuiz();
    }
);

document.getElementById("quiz-form").addEventListener("submit", function(event)
{
    event.preventDefault();
});