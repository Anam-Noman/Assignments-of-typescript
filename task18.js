//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints
// a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person 
//letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
let guestlists = ["Abeer", "Alia", "sofia", "Qirat", "Sameer", "Alishba"];
// Informing about the limited space
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guestlists.length > 2) {
    let removed_guest = guestlists.pop(); // Remove the last guest
    console.log(`Sorry ${removed_guest}, we can't invite you to dinner.`);
}
// Printing invitations to the remaining two guests
guestlists.forEach(person => {
    console.log(`Dear ${person}, you are still invited to dinner. Please join us.`);
});
// Emptying the list
guestlists = [];
console.log("Final guest list:", guestlists);
export {};
