document.getElementById("submit").addEventListener("click", validateForm);

const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const gender = document.getElementById("gender");

const output = document.getElementById("output");
const result = document.getElementById("result");
const bmi = document.getElementById("bmi");

function validateForm(event) {
  clear();
  event.preventDefault();
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    gender.value == ""
  ) {
    output.className = "flash flash-error";
    result.innerText = "All fields are required!";
  } else {
    calcBmi();
  }
}

function clear() {
  result.innerHTML = "";
  bmi.innerHTML = "";
  output.className = "";
}

function calcBmi() {
  const p = [age.value, height.value, weight.value, gender.value];
  const bmiVal = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  if (bmiVal < 18.5) {
    output.className = "flash";
    result.innerText = "Underweight";
  } else if (bmiVal <= 24.9) {
    output.className = "flash flash-success";
    result.innerText = "Healthy";
  } else if (bmiVal <= 29.9) {
    output.className = "flash flash-warn";
    result.innerText = "Overweight";
  } else if (bmiVal <= 34.9) {
    output.className = "flash flash-error";
    result.innerText = "Obese";
  } else {
    output.className = "flash flash-error";
    result.innerText = "Extremely obese";
  }

  bmi.innerText = "BMI: " + parseFloat(bmiVal).toFixed(2);
}
