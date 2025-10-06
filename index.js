/*
    DEFINING JAVASCRIPT OBJECTS

    - Object Literals
    const person = {
        firstName: 'John',
        lastName: 'Doe'
    };

    - Using the new keyword
    const person = new Object({
        firstName: 'John',
        lastName: 'Doe'
    });

    Object.create()
    - creates an object from an existing object.
    Example:
    const person = {
        firstName: "John",
        lastName: "Doe"
    };

    const man = Object.create(person);
    man.firstName = 'Peter';
    man.lastName = 'Parker';

    console.log(man);


    fromEntries()
    - creates an object from iterable key / value pairs.

    const fruits = [
        ["apples", 300],
        ["pears", 900],
        ["bananas", 500]
    ];

    const myObj = Object.fromEntries(fruits);


    Object.assign()
    - properties from one or more source objects to a target object.

    // Target Source
    const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
    };

    // Create Source Object
    const person2 = {firstName: "Anne",lastName: "Smith"};

    // Assign Source to Target
    Object.assign(person1, person2);

    console.log(person1);


    Accessing Object property
    let fname = person.firstName;
    let lname = person.lastName;
    let age = person.age;
    let eye = person.eyeColor;

    let fname = person['firstName'];
    let lname = person['lastName'];
    let age = person['age'];
    let eye = person['eyeColor'];

    let y = person['firstName'];
    let fname = y;


    Adding property:
    const person = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        eyeColor:"blue"
    }
  
    person.nationality = 'Filipino';
    console.log(person);


    Property Default Values
    // Person Object
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
        this.nationality = 'English';
    }

    const kirk = new Person('Kirk', 'Villapando', 26, 'Brown');
    console.log(kirk);

    Deleting Object Property
    const person = {
        firstName:"John",
        lastName:"Doe",
        age:50,
        eyeColor:"blue"
    }

    delete person.age;
    console.log(person);

*/

// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue",
//     address: {
//         street: 'Lopez St.',
//         city: 'Batangas City',
//         province: 'Batangas'
//     },
//     introduction : function greet() {
//         return `Hello, I am ${this.firstName} ${this.lastName}`
//     },
//     sleep: function sleep() {
//         return 'ZzZzZz';
//     },
//     favoriteFoods: [
//         'Sinigang',
//         'Sinangag',
//         'Chicken'
//     ]
// }

// console.log(person.address.street);
// console.log(person['address']['city']);

// delete person.address.street;

// // Invoking method propery of an object
// console.log(person.introduction());
// console.log(person.sleep());

// // Adding method property to an Object
// person.shout = function shout() {
//     return 'Aahhhh!';
// }

// console.log(person.shout());

// console.log(person.favoriteFoods);

// for (const food of person.favoriteFoods) {
//     console.log(food);
// }


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//     this.nationality = 'English';
// }

// const kirk = new Person('Kirk', 'Villapando', 26, 'Brown');
// console.log(kirk);
 
//  const anselle = new Person('Anselle', 'Calaluan', 22, 'Brown');
//  console.log(anselle);
 

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Using For.. in Loop to access property values
for (const property in person) {
    console.log(person[property]);
}


// Object.values()
const personArr = Object.values(person);
console.log(personArr);

function personIntro(name, age, address) {
    const person = new Object({
        name: name,
        age: age,
        address: address
    });

    return person;
}

console.log(personIntro('Kirk', 26, 'San Pablo City'));


// Blueprint/Template for Car Object
function Car(color, brand, year) {
    this.color = color,
    this.brand = brand,
    this.year = year
}

// Creating an instance of Car Object
const car1 = new Car('Black', 'Toyota', 2020);
console.log(car1);

const fruits = {
    Bananas: 300, // [Bananas, 300]
    Oranges: 200, // [Oranges, 200]
    Apples: 500 // [Apples, 500]
};

for (let [key, value] of Object.entries(fruits)) {
  console.log(`${key} => ${value}`);
}


let jsonStringify = JSON.stringify(fruits);
let jsonParse = JSON.parse(jsonStringify);

console.log(fruits);
console.log(jsonStringify);
console.log(jsonParse);



/*
1. Create a song object using an object literal and the new keyword with properties title, album, singer, duration.
*/

/*
2. Define any object and create any object from the existing object.
*/

/*
3. Refer from the array below:

const products = [
    ["Laptop", 1299],
    ["Mouse", 25],
    ["Keyboard", 89],
    ["Monitor", 349],
    ["Webcam", 75]
];

Create an object using the products array.
*/

/*
4. Refer from the object below:

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    color: "Silver",
    mileage: 15420
};

Create a new object with brand, model, and color properties. And replace the car's brand, model, and color properties.
*/

/*
5. Refer from the object below:

const user = {
    id: "usr_8k3n9x2m",
    username: "skywalker_42",
    email: "maria.torres@example.com",
    profile: {
      firstName: "Maria",
      lastName: "Torres",
      age: 28,
      avatar: "https://cdn.example.com/avatars/8k3n9x2m.jpg",
      bio: "Coffee enthusiast, amateur photographer, and weekend hiker"
    },
    preferences: {
      theme: "dark",
      notifications: true,
      language: "es-MX",
      timezone: "America/Mexico_City"
    },
    stats: {
      postsCount: 147,
      followersCount: 892,
      followingCount: 341,
      joinedDate: "2022-03-15T08:30:00Z"
    },
    tags: ["photography", "travel", "coffee", "hiking"],
    isVerified: false,
    isPremium: true,
    lastLogin: "2025-10-05T14:22:18Z"
}

Access any property using dot notation, bracket notation.
*/

/*
6. Add another property on the user object.
*/

/*
7. Create a user method that will that will display the user's stats.
*/

/*
8. Delete any property from the user object.
*/

/*
9. Create an pokemon object, with type, name, level, and hp properties. Create an instance of this object.
*/

/*
10. Create any method (siguro special attack na lang) of the instance of the pokemon object.
*/

/*
11. Using a for loop, display all the values of the object below:

const pokemon = {
    name: "Charizard",
    type: ["Fire", "Flying"],
    level: 45,
    hp: 180,
    moves: ["Flamethrower", "Air Slash", "Dragon Claw", "Fly"],
    isShiny: false,
    ability: "Blaze",
    nature: "Adamant",
    evolutionStage: 3,
    catchRate: 45
};
*/

/*
12. Using an object property, print each stat name and value of the pokemon object in a readable format.
*/

/*
13. What is JSON? Explain JSON.stringify() and JSON.parse(). :P
*/