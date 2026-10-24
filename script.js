// Ganti password rahasianya di sini sesuai keinginanmu!
const SECRET_PASSWORD = "ijo ngejreng"; 

const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");
const passwordScreen = document.getElementById("password-screen");
const letterContent = document.getElementById("letter-content");

passwordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const userEnteredPassword = passwordInput.value.trim();

  if (userEnteredPassword === SECRET_PASSWORD) {
    errorMessage.textContent = "";
    passwordScreen.classList.add("fade-out");

    setTimeout(() => {
      passwordScreen.style.display = "none";
      letterContent.classList.remove("hidden");
    }, 500);

  } else {
    errorMessage.textContent = "Password salah, coba lagi ya!";
    passwordInput.value = "";
    passwordInput.focus();
  }
});