// Assignment # 26
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

//Running the if block:
let aliencolor1 :string= 'green'

if (aliencolor1 == 'green') {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.");
}

//Running the else block:
let alienColor:string = 'red';

if (alienColor == 'green') {
    console.log("The player just earned 5 points.");
} else {
    console.log("The player just earned 10 points.");
}