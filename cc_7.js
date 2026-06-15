

// ─── Step 1:
const headlineInput = document.getElementById("headline-input");
const updateBtn     = document.getElementById("update-btn");
const ctaHeadline   = document.getElementById("cta-headline");

// ─── Step 2:
updateBtn.addEventListener("click", () => {
  const newText = headlineInput.value.trim();

  if (newText !== "") {
    // Update the h2 text with the input value
    ctaHeadline.textContent = newText;

    // Briefly highlight the headline in accent color
    ctaHeadline.classList.add("updated");
    setTimeout(() => ctaHeadline.classList.remove("updated"), 1000);

    
    headlineInput.value = "";
    headlineInput.placeholder = "Type another headline...";
  } else {
    
    headlineInput.placeholder = "Please type something first!";
    headlineInput.focus();
  }
});

// ─── Step 3:
headlineInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateBtn.click();
  }
});