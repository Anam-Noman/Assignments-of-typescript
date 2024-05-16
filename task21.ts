// Assignment # 21
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

// Define an object containing items with their corresponding details
let items: { [key: string]: { name: string, category: string, price: number } } = {
    "apple": {
        name: "Apple",
        category: "Fruit",
        price: 0.5
    },
    "book": {
        name: "Book",
        category: "Stationery",
        price: 10.99
    },
    "sunglasses": {
        name: "Sunglasses",
        category: "Accessories",
        price: 25.99
    },
    "headphones": {
        name: "Headphones",
        category: "Electronics",
        price: 49.99
    }
};

// Print details of each item
console.log("Items and their details:");
for (let key in items) {
    console.log(`Item: ${items[key].name}, Category: ${items[key].category}, Price: $${items[key].price}`);
}
