//Assignment # 06
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
let name1 = "\t \n John Doe \t \n";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log(name1);
// Strip the whitespace and print the name
console.log("\nName after stripping whitespace:");
console.log(name1.trim());
export {};
