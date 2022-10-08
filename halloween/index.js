const submissions =
[
    "YungPepega",
    "Violet",
    "uberduber",
    "Tonn",
    "thefastestnoodle",
    "soaps",
    "Skylack",
    "Skyhops",
    "RizzY",
    "nonumbersleftbehind",
    "Nixie",
    "Niko",
    "Muv",
    "Megakill3",
    "Maestro-Pera",
    "lilwuan",
    "Krieeeg",
    "KingKhungus",
    "Khoaiiiiiiiii",
    "Hydra",
    "Happy Frog",
    "FishyMi",
    "drinky drink",
    "Dean Hollyday",
    "DanTodd",
    "codcw",
    "Carlaxo",
    "Cap'n Hentral",
    "Books",
    "Bliv",
    "Bbyzie",
    "b1lack_knight",
    "ayayera",
    "alessfd",
    "akliyen"
]

for (var i = 0; i < submissions.length; i++)
{
    var submissionElement = document.querySelector('.submission');
    var submissionElementClone = submissionElement.cloneNode(true);
    submissionElementClone.querySelector('.submissionImage').src = "submissions/" + submissions[i] + ".png";
    submissionElementClone.querySelector('.submissionCaption').innerText = submissions[i] + "'s Submission";
    submissionElement.before(submissionElementClone);

    if(i == 0)
    {
        submissionElement.style.display = "none";
    }
}