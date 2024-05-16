// Assignment # 39
/*City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
"Lahore, Pakistan"

*/
function city_country1(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Example usage
var formatted_address = city_country1("Lahore", "Pakistan");
console.log(formatted_address);
/*Call your function with at least three city-country pairs, and print the value that’s returned.
*/
function city_country(city, country) {
    return ("".concat(city, ", ").concat(country));
}
// Call the function with three city-country pairs
var address1 = city_country1("Lahore", "Pakistan");
var address2 = city_country1("New York", "USA");
var address3 = city_country1("Paris", "France");
// Print the returned values
console.log(address1);
console.log(address2);
console.log(address3);
