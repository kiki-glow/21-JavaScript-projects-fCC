const inputEl = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");

const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

convertBtn.addEventListener("click", () => {
  outputEl.classList.remove("hidden");
  
  if (inputEl.value === "") {
    outputEl.textContent = "Please enter a valid number";
  } else if (inputEl.value <= 0) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputEl.value >= 4000) { 
    outputEl.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputEl.textContent = convertToRoman(Number(inputEl.value));
  }
})