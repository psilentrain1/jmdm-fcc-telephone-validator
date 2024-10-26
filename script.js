const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function checkInput() {
  const valid = "Valid US number: " + input.value;
  const invalid = "Invalid US number: " + input.value;
  const provide = "Please provide a phone number";
  const pattern = /^(1?)(\s?)((\(\d\d\d\))|(\d\d\d))(\s|\-)?(\d\d\d)(\s|\-)?(\d\d\d\d)$/;
  const num = input.value;

  if (input.value === "") {
    results.innerText = provide;
    alert(provide);
    console.log("no inner value");
  } else if (num.match(/\d/g).join("").length >= 10 && num.match(/\d/g).join("").length <= 11 && pattern.test(num)) {
    results.innerText = valid;
  } else {
    results.innerText = invalid;
  }
}

function clearInput() {
  input.value = "";
  results.innerText = "";
}

check.addEventListener("click", checkInput);
clear.addEventListener("click", clearInput);
