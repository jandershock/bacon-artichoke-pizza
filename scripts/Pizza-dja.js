export const generatePizza = (pizzaObject) => {
    // Function to capitalize first letter of a string
    const capitalize = (str) => {
        return str[0].toUpperCase() + str.substring(1);
    }
    
    // HTML string to return
    let htmlString = `
    <section class="pizza__section">
        <p>Pizza: ${pizzaObject.name}</p>
        <p>Price: ${pizzaObject.cost}</p>
        <p>Crust: ${capitalize(pizzaObject.crust)}</p>
        <p>${pizzaObject.toppings.length} toppings including: `;

    // Loop over toppings, format them, and add them to the html string
    for (let topping of pizzaObject.toppings){
        htmlString += (capitalize(topping));
        if (topping !== pizzaObject.toppings[pizzaObject.toppings.length -1]) { //Check if current topping is not the last topping in array
            htmlString += ', ';
            continue;
        }
        //This should only run once we hit the last item in the array
        htmlString += `</p></section>`;
    }

    return htmlString;
}