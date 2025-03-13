import { languageData } from "../main";

export function initializeLanguageSelector() {
  const languageSelector = document.getElementById("language-selector");
  const content = document.getElementById("content");

  languageSelector.addEventListener("change", function () {
    const lang = this.value;
    const data = languageData[lang];

    // Add fade-out effect
    content.style.opacity = "0";

    setTimeout(() => {
      document.getElementById("contentTitle").textContent = data.title;
      document.getElementById("contentDescription").textContent =
        data.description;

      // Add fade-in effect
      content.style.opacity = "1";
      content.classList.add("fade-in");

      // Update HTML lang attribute
      document.documentElement.lang = lang;
    }, 300);
  });
}
