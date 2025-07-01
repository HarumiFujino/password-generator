const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValueEl = document.getElementById("lengthValue");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+<>?";

lengthEl.addEventListener("input", () => {
  lengthValueEl.textContent = lengthEl.value;
});

function generatePassword() {
  let characters = lowercaseChars;

  if (uppercaseEl.checked) characters += uppercaseChars;
  if (numbersEl.checked) characters += numberChars;
  if (symbolsEl.checked) characters += symbolChars;

  let password = "";
  for (let i = 0; i < lengthEl.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  passwordEl.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordEl.value !== "") {
    navigator.clipboard.writeText(passwordEl.value);
    copyBtn.textContent = "✅";
    setTimeout(() => {
      copyBtn.textContent = "📋";
    }, 1500);
  }
});
