// Assignment # 17
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end
// of your program informing people that you found a bigger dinner table.
//Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. 
// Use append() to add one new guest to the end of your list. 
// Print a new set of invitation messages, one for each person in your list.
let guestslist = ["Abeer", "Alia", "sofia", "Qirat", "Sameer", "Alishba"];
let new_guests = ["Nitasha", "Abraiz", "waqar"];
// Informing about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests
guestslist.unshift(new_guests[0]);
guestslist.splice(Math.floor(guestslist.length / 2), 0, new_guests[1]);
guestslist.push(new_guests[2]);
// Printing invitations to each person on the updated guest list
guestslist.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner. Please join us.`);
});
export {};
