const button = document.getElementById("button");
const meals = document.getElementById("meals");
const mealIngredient = document.getElementById("meal-ingredient");
button.addEventListener("click", function () {
    const searchMeal = document.getElementById("search-meal").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
    .then(res => res.json())
    .then(data => updateDom(data));
})

function updateDom(data){
    const allMeal = data.meals;
    meals.innerHTML = "";
    mealIngredient.innerHTML = "";
    allMeal.forEach( meal => {
        const name = meal.strMeal;
        const image = meal.strMealThumb;
        const elements = `
            <div class="bg-light p-2 m-3" onclick="ingredient('${name}')">
                <img src="${image}" class="img-fluid">
                <h5>${name}</h5>
            </div>
        `
        const div = document.createElement("div");
        div.className = "col-3";
        div.innerHTML = elements;
        meals.appendChild(div);
    });
}


function ingredient(name){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => showIngredient(data));
}

function showIngredient(data){
    const name = data.meals;
    
    name.forEach(element => {
        const mealName = element.strMeal;
        const image = element.strMealThumb;
        const strIngredient1 = element.strIngredient1;
        const strIngredient2 = element.strIngredient2;
        const strIngredient3 = element.strIngredient3;
        const strIngredient4 = element.strIngredient4;
        const div = `
            <div class="col-4 p-3 bg-light m-auto">
                <img src="${image}" class="img-fluid">
                <h5>${mealName}</h5>
                <li>${strIngredient1}</li>
                <li>${strIngredient2}</li>
                <li>${strIngredient3}</li>
                <li>${strIngredient4}</li>
            </div>
        `
        mealIngredient.innerHTML = div;
    });
}
