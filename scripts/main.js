import { getPizza } from "./pizza.js";
import { generatePizza } from "./Pizza-dja.js";
import { generatePizzaList } from "./PizzaList-dja.js";

let  pizzaArray = getPizza();
let baconArtichokePizzaObject = pizzaArray.find((element) => { return element.name === 'Bacon Artichoke'});
document.getElementById("dja").insertAdjacentHTML("afterbegin", generatePizza(baconArtichokePizzaObject));
document.querySelector("#dja-pizza-list").insertAdjacentHTML("afterbegin", generatePizzaList(pizzaArray));