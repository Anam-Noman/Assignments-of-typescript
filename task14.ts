// Assignment # 14
//Guest List: If you could invite anyone, living or deceased, 
//to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let guestlist = ["Abeer", "Alia", "sofia", "Qirat", "Sameer","Alishba"];

// Printing invitations to each person on the guest list
guestlist.forEach(person => {
    console.log(`Dear ${person}, you are invited to dinner. Please join us.`);
});
