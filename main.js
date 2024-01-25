const API_URL = "https://api.nal.usda.gov/fdc/v1/";
const API_KEY = "Txklas2AMSIAg3caka7Ypy4RxS6sMmVGBfHXvSKj";
const searchInput1 = document.querySelector("#search1");
const searchButton1 = document.querySelector("#searchButton1");
const resultsElem1 = document.querySelector("#food-results-1");

const searchInput2 = document.querySelector("#search2");
const searchButton2 = document.querySelector("#searchButton2");
const resultsElem2 = document.querySelector("#food-results-2");

searchButton1.addEventListener('click', (e) => {
  searchHandler(searchInput1, resultsElem1);
});

searchButton2.addEventListener('click', (e) => {
  searchHandler(searchInput2, resultsElem2);
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

function searchHandler(searchInput, resultsElem) {
  const userInput = searchInput.value;

  if (userInput == "") {
    resultsElem.innerHTML = "";
    return;
  }

  fetch(API_URL + `foods/search?api_key=${API_KEY}&query=${userInput}&pageSize=10`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      resultsElem.innerHTML = "";

      const foods = data.foods;
      foods.forEach((food) => {
        const elem = document.createElement('div');
        const nutrientsElem = document.createElement('ul');

        elem.innerHTML += `<p>Name: ${food.description}</p>`;
        elem.innerHTML += `<p>Nutritional Content:</p>`;

        food.foodNutrients.forEach((nutrient) => {
          nutrientsElem.innerHTML += `<li>${nutrient.nutrientName}: ${nutrient.value} ${nutrient.unitName}</li>`;
        });

        elem.append(nutrientsElem);
        resultsElem.append(elem);
      });
    });
}
