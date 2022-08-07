answers = "";

curSection = 0;
sections = [
    "menu",
    "intelligence",
    "intelligencea",
    "intelligenceb",
    "intelligencec",
    "intelligenced",
    "intelligencee",
    "decisionmaking",
    "decisionmakinga",
    "decisionmakingb",
    "decisionmakingc",
    "decisionmakingd",
    "decisionmakinge",
    "decisionmakingf",
    "decisionmakingg",
    "decisionmakingh",
    "decisionmakingi",
    "decisionmakingj",
    "decisionmakingk",
    "decisionmakingl",
    "opinions",
    "opinionsa",
    "opinionsb",
    "opinionsc",
    "opinionsd",
    "opinionse",
    "opinionsf",
    "opinionsg",
    "opinionsh",
    "situations",
    "situationsa",
    "situationsb",
    "situationsc",
    "situationsd",
    "situationse",
    "end"
]

showSection("menu");

function showSection(sectionName)
{
    document.getElementById(sectionName).style.display = "block";
}
function hideSection(sectionName)
{
    document.getElementById(sectionName).style.display = "none";
}

function start()
{
    goToNextSection();
    var backgroundMusic = new Audio('everytime.mp3');
    backgroundMusic.play();
}

var clickSound = new Audio('click.wav');
function goToNextSection()
{
    hideSection(sections[curSection]);
    curSection++;
    showSection(sections[curSection]);
    if(sections[curSection] == "end")
    {
        showResults();
    }
    clickSound.play();
}

function showResults()
{
    document.getElementById("results").value = answers.slice(0, -1);
}

function answer(answerLetter)
{
    answers += answerLetter + ",";
    goToNextSection();
}