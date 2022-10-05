const submissions =
[
    "akliyen",
    "alessfd",
    "ayayera",
    "b1lack_knight",
    "Bbyzie",
    "Bliv",
    "Books",
    "Cap'n Hentral",
    "Carlaxo",
    "chance",
    "codcw",
    "DanTodd",
    "Dean Hollyday",
    "drinky drink",
    "FishyMi",
    "Happy Frog",
    "Hydra",
    "Khoaiiiiiiiii",
    "KingKhungus",
    "Krieeeg",
    "lilwuan",
    "Maestro-Pera",
    "Megakill3",
    "Muv",
    "Niko",
    "Nixie",
    "nonumbersleftbehind",
    "RizzY",
    "Skyhops",
    "Skylack",
    "soaps",
    "thefastestnoodle",
    "Tonn",
    "uberduber",
    "Violet",
    "YungPepega"
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