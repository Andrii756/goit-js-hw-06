const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
/* 
const ulEl = document.querySelector("#ingredients");

const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, "");

ulEl.innerHTML = list; */

let ulList = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  ulList.append(items);
});
