// Assignment # 16
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest 
//who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestList = ["Abeer", "Alia", "sofia", "Qirat", "Sameer", "Alishba"];
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
console.log(`${unabletoattend} can't make it to the dinner.`);
export {};
