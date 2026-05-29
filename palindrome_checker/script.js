const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultElem = document.getElementById("result");

const checkForPalindrome = () => {
  const originalInput = textInput.value;

  if (originalInput === "") {
    alert("Please input a value");
    return;
  }

  const lowerCaseStr = originalInput.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedStr = lowerCaseStr.split("").reverse().join("");

  const isPalindrome = lowerCaseStr === reversedStr;

  resultElem.textContent = isPalindrome 
    ? `${originalInput} is a palindrome` 
    : `${originalInput} is not a palindrome`;

    resultElem.classList.remove("hidden");
};

checkButton.addEventListener("click", checkForPalindrome);