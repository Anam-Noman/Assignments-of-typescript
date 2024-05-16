//Assignment # 19
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.*/
let guestLists = ["Abeer", "Alia", "sofia", "Qirat", "Sameer","Alishba"];
// Printing the number of people invited to dinner
//console.log(`You are inviting ${guestLists.length} people to dinner.`);

// Removing guests until only two names remain
while (guestLists.length > 2) {
    let removed_guest = guestLists.pop(); // Remove the last guest
    console.log(`Sorry ${removed_guest}, we can't invite you to dinner.`);
}

