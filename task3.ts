// Assignment # 03

//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.

let personName:string = "Anam Noman"

//Print the person's name in lowercase
console.log(personName.toLowerCase());

//Print the person's name in Uppercase
console.log(personName.toUpperCase());

//Print the person's name in titlecase
console.log("Titlecase:",personName.charAt(0).toUpperCase() +  personName
.slice(1).toLowerCase());

