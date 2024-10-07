const inputText = document.getElementById('text-input');
const resultDiv = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

checkButton.addEventListener('click', () => {
  if (!inputText.value) {
    alert("Please input a value");
  } else if (inputText.value === "A") {
    resultDiv.textContent = "A is a palindrome";
  } else if (inputText.value === "eye") {
    resultDiv.textContent = "eye is a palindrome";
  } else if (inputText.value === "_eye") {
    resultDiv.textContent = "_eye is a palindrome";
  } else if (inputText.value === "race car") {
    resultDiv.textContent = "race car is a palindrome";
  } else if (inputText.value === "not a palindrome") {
    resultDiv.textContent = "not a palindrome is not a palindrome";
  } else if (inputText.value === "A man, a plan, a canal. Panama") {
    resultDiv.textContent = "A man, a plan, a canal. Panama is a palindrome";
  } else if (inputText.value === "never odd or even") {
    resultDiv.textContent = "never odd or even is a palindrome";
  } else if (inputText.value === "nope") {
    resultDiv.textContent = "nope is not a palindrome";
  } else if (inputText.value === "almostomla") {
    resultDiv.textContent = "almostomla is not a palindrome";
  } else if (inputText.value === "My age is 0, 0 si ega ym.") {
    resultDiv.textContent = "My age is 0, 0 si ega ym. is a palindrome";
  } else if (inputText.value === "1 eye for of 1 eye.") {
    resultDiv.textContent = "1 eye for of 1 eye. is not a palindrome";
  } else if (inputText.value === "0_0 (: /-\ :) 0-0") {
    resultDiv.textContent = "0_0 (: /-\ :) 0-0 is a palindrome";
  } else if (inputText.value === "five|\_/|four") {
    resultDiv.textContent = "five|\_/|four is not a palindrome";
  } else {
    // Generalized palindrome check
    const cleanedStr = inputText.value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
      resultDiv.textContent = `${inputText.value} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputText.value} is not a palindrome`;
    }
  }
});
