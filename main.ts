// main.ts

const toggleSkillsBtn = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsList = document.getElementById("skills-list") as HTMLElement;

// Toggle visibility of skills section
toggleSkillsBtn.addEventListener("click", () => {
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skillsList.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills";
  }
});
