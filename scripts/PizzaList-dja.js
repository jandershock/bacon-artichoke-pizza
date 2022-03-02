import { generatePizza } from "./Pizza-dja.js";

export const generatePizzaList = (pizzaArray) => {
    // String for creating html list
    let pizzaListString = `<ul>`;
    // Loop over pizza array
    for (let pizza of pizzaArray){
        //Generate individual pizza html and add to html string
        pizzaListString += `<li>${generatePizza(pizza)}</li>`;
    }
    pizzaListString += `</ul>`;

    return pizzaListString;
}