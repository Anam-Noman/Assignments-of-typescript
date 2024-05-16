// Assignment # 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
. The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/

function makeSandwich1(items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich complete!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich(["Turkey", "Cheese", "Lettuce", "Tomato"]);
makeSandwich(["Ham", "Swiss cheese", "Mustard"]);
makeSandwich(["Peanut butter", "Jelly"]);
function makeSandwich(items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich complete!\n");
}

// Call the function three times with different numbers of arguments
makeSandwich(["Turkey", "Cheese", "Lettuce", "Tomato"]);
makeSandwich(["Ham", "Swiss cheese", "Mustard"]);
makeSandwich(["Peanut butter", "Jelly"]);
