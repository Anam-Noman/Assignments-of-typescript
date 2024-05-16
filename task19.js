//Assignment # 19
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places_to_visit = ["Iran", "India", "Turkey", "Saudia Arab", "Canada", "France"];
// Printing the array in its original order
console.log("Original order:", places_to_visit);
// Printing the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...places_to_visit].sort());
// Showing that the array is still in its original order
console.log("Still in original order:", places_to_visit);
// Printing the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...places_to_visit].sort().reverse());
// Showing that the array is still in its original order
console.log("Still in original order:", places_to_visit);
// Reversing the order of the list
places_to_visit.reverse();
console.log("Reversed order:", places_to_visit);
// Reversing the order of the list again to get back to the original order
places_to_visit.reverse();
console.log("Back to original order:", places_to_visit);
// Sorting the array in alphabetical order
places_to_visit.sort();
console.log("Sorted in alphabetical order:", places_to_visit);
// Sorting the array in reverse alphabetical order
places_to_visit.sort().reverse();
console.log("Sorted in reverse alphabetical order:", places_to_visit);
export {};
