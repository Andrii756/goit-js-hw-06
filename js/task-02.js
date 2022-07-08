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

const itemsList = document.querySelector("#ingredients");

const getItems = (items) =>
  items.map((item) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = item;
    return itemEl;
  });

const ingredientsItems = getItems(ingredients);
itemsList.append(...ingredientsItems);

console.log(itemsList);
