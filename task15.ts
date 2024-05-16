// Assignments # 15

//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program
// stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.


let guest_list = ["Abeer", "Alia", "sofia", "Qirat", "Sameer","Alishba"];
let unable_to_attend = "Alia";

// Removing the guest who can't attend
let updated_guest_list = guest_list.filter(person => person !== unable_to_attend);

// Adding a new guest
let new_guest = "Abraiz";
updated_guest_list.push(new_guest);

// Printing invitations to each person on the updated guest list
updated_guest_list.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner. Please join us.`);
});
