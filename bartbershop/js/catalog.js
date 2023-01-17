let rangeMin = 100;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePriceMin = document.getElementById("range-price-min");
const rangePriceMax = document.getElementById("range-price-max");

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minRange = parseInt(rangePriceMin.innerText);
    let maxRange = parseInt(rangePriceMax.innerText);
    if (maxRange - minRange < rangeMin) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - rangeMin;
      } else {
        rangeInput[1].value = minRange + rangeMin;
      }
    } else {
      rangePriceMin.innerText = rangeInput[0].value.toString();
      rangePriceMax.innerText = rangeInput[1].value.toString();
      range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
    }
  });
});
