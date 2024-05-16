//Assignment # 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
// Define an array of items
var items = [
    "Apple",
    "Book",
    "Sunglasses",
    "Headphones"
];
// Intentionally accessing an index that doesn't exist to create an error
console.log(items[4]); // Error: Index out of bounds
// Corrected program:
// Print the array in its original order
console.log("Original Order:");
console.log(items);
