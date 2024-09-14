// main.ts
var toggleSkillsBtn = document.getElementById("toggle-skills");
var skillsList = document.getElementById("skills-list");
// Toggle visibility of skills section
toggleSkillsBtn.addEventListener("click", function () {
    if (skillsList.style.display === "none") {
        skillsList.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    }
    else {
        skillsList.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
});
