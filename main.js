const API_URL = "https://api.nal.usda.gov/fdc/v1/";
const API_KEY = "Txklas2AMSIAg3caka7Ypy4RxS6sMmVGBfHXvSKj";
const searchInput1 = document.querySelector("#search1");
const searchButton1 = document.querySelector("#searchButton1");
const resultsElem1 = document.querySelector("#food-results-1");

const searchInput2 = document.querySelector("#search2");
const searchButton2 = document.querySelector("#searchButton2");
const resultsElem2 = document.querySelector("#food-results-2");

const compareButton = document.querySelector("#compareButton");
const comparisonResultElem = document.querySelector("#comparison-result");

let foodData1, foodData2;

searchButton1.addEventListener('click', () => {
  searchHandler(searchInput1, resultsElem1, 1);
});

searchButton2.addEventListener('click', () => {
  searchHandler(searchInput2, resultsElem2, 2);
});

searchInput1.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    searchButton1.click();
  }
});

searchInput2.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    searchButton2.click();
  }
});

compareButton.addEventListener('click', () => {
  if (foodData1 && foodData2) {
    compareFoods(foodData1, foodData2);
  }
});

function searchHandler(searchInput, resultsElem, foodNumber) {
  const userInput = searchInput.value;

  if (userInput == "") {
    resultsElem.innerHTML = "";
    return;
  }

  fetch(API_URL + `foods/search?api_key=${API_KEY}&query=${userInput}&pageSize=1`)
    .then((response) => response.json())
    .then((data) => {
      const food = data.foods[0];
      if (food) {
        const elem = document.createElement('div');
        const nutrientsElem = document.createElement('ul');

        elem.innerHTML += `<p>Name: ${food.description}</p>`;
        elem.innerHTML += `<p>Nutritional Content:</p>`;

        food.foodNutrients.forEach((nutrient) => {
          nutrientsElem.innerHTML += `<li>${nutrient.nutrientName}: ${nutrient.value} ${nutrient.unitName}</li>`;
        });

        elem.append(nutrientsElem);
        resultsElem.innerHTML = "";
        resultsElem.append(elem);

        if (foodNumber === 1) {
          foodData1 = food;
        } else {
          foodData2 = food;
        }
      }
    });
}

function compareFoods(food1, food2) {
  const comparisonResult = document.createElement('div');
  comparisonResult.innerHTML = "<h2>Vergelijking van voedingswaarden:</h2>";

  const nutrientsElem = document.createElement('ul');

  food1.foodNutrients.forEach((nutrient1) => {
    const nutrient2 = food2.foodNutrients.find((n) => n.nutrientName === nutrient1.nutrientName);

    if (nutrient2) {
      const difference = nutrient1.value - nutrient2.value;
      nutrientsElem.innerHTML += `<li>${nutrient1.nutrientName}: ${difference.toFixed(2)} ${nutrient1.unitName}</li>`;
    }
  });

  comparisonResult.append(nutrientsElem);
  comparisonResultElem.innerHTML = "";
  comparisonResultElem.append(comparisonResult);
}
