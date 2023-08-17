const celciusEl = document.getElementById("Celcius");
const fahrenhiteEl = document.getElementById("Fahrenhite");
const kelvinEl = document.getElementById("Kelvin");

function computeTemp() {
  const currentValue = event.target.value;

  switch (event.target.name) {
    case "Celcius":
      kelvinEl.value = currentValue + 273.15;
      fahrenhiteEl.value = currentValue * 1.8 + 32;
      break;
    case "Kelvin":
      celciusEl.value = (currentValue - 32) / 1.8;
      fahrenhiteEl.value = (currentValue - 273.15) * 1.8 + 32;
      break;

    default:
      break;
  }
}
