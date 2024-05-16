// Assignment # 16
//More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

let guestList =["Abeer", "Alia", "sofia", "Qirat", "Sameer","Alishba"];
let unabletoattend = "Alia";
let newguest = "Abraiz";

// Removing the guest who can't attend
let updatedguestList = guestList.filter(person => person !== unabletoattend);

// Adding a new guest
updatedguestList.push(newguest);

// Printing invitations to each person on the updated guest list
updatedguestList.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner. Please join us.`);
});

// Printing the name of the guest who can't make it
console.log(`${unabletoattend} can't make it to the dinner.`)