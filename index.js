// bmi formula = weight / (height)² * 10.000

// function for bmi
function calculateBmi() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = (weight / (height * height)) * 10000;

  document.getElementById("heading").innerHTML = "Your BMI is: ";
  document.getElementById("bmi-output").innerHTML = bmi.toFixed(2);

  if (bmi <= 20) {
    document.getElementById("message").innerHTML = "You are underweight!";
  } else if (bmi > 20 && bmi <= 26) {
    document.getElementById("message").innerHTML = "You have normal weight.";
  } else if (bmi > 26 && bmi <= 31) {
    document.getElementById("message").innerHTML = "You are overweight!";
  } else if (bmi > 31) {
    document.getElementById("message").innerHTML =
      "You are severely overweight!";
  }
}

// function for reloading
function reload() {
  window.location.reload();
}
