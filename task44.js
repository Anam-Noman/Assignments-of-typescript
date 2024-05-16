// Assignment # 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich
. The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
function makeSandwich1(items) {
    console.log("Making a sandwich with the following items:");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("- " + item);
    }
    console.log("Sandwich complete!\n");
}
// Call the function three times with different numbers of arguments
makeSandwich(["Turkey", "Cheese", "Lettuce", "Tomato"]);
makeSandwich(["Ham", "Swiss cheese", "Mustard"]);
makeSandwich(["Peanut butter", "Jelly"]);
function makeSandwich(items) {
    console.log("Making a sandwich with the following items:");
    for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
        var item = items_2[_i];
        console.log("- " + item);
    }
    console.log("Sandwich complete!\n");
}
// Call the function three times with different numbers of arguments
makeSandwich(["Turkey", "Cheese", "Lettuce", "Tomato"]);
makeSandwich(["Ham", "Swiss cheese", "Mustard"]);
makeSandwich(["Peanut butter", "Jelly"]);
