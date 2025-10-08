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
 

// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// // Using For.. in Loop to access property values
// for (const property in person) {
//     console.log(person[property]);
// }


// // Object.values()
// const personArr = Object.values(person);
// console.log(personArr);

// function personIntro(name, age, address) {
//     const person = new Object({
//         name: name,
//         age: age,
//         address: address
//     });

//     return person;
// }

// console.log(personIntro('Kirk', 26, 'San Pablo City'));


// // Blueprint/Template for Car Object
// function Car(color, brand, year) {
//     this.color = color,
//     this.brand = brand,
//     this.year = year
// }

// // Creating an instance of Car Object
// const car1 = new Car('Black', 'Toyota', 2020);
// console.log(car1);

// const fruits = {
//     Bananas: 300, // [Bananas, 300]
//     Oranges: 200, // [Oranges, 200]
//     Apples: 500 // [Apples, 500]
// };

// for (let [key, value] of Object.entries(fruits)) {
//   console.log(`${key} => ${value}`);
// }


// let jsonStringify = JSON.stringify(fruits);
// let jsonParse = JSON.parse(jsonStringify);

// console.log(fruits);
// console.log(jsonStringify);
// console.log(jsonParse);

/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/*
1. Create a song object using an object literal and the new keyword with properties title, album, singer, duration.
*/

//    const song = {
//         title: 'the 1',
//         album: 'Folklore',
//         singer: 'Taylor Swift',
//         duration: '3:30',
//     };

/*
2. Define any object and create any object from the existing object.
*/

    // const song = {
    //     title: 'the 1',
    //     album: 'Folklore',
    //     singer: 'Taylor Swift',
    //     duration: '3:30',
    // };

    // const newSong = Object.create(song);
    // newSong.title = "Cardigan";
    // newSong.album = "Eme";
    // newSong.singer = "Anselle";
    // newSong.duration = '3:29';

    // console.log(song);
    // console.log(newSong);
    

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

    // const products = [
    //     ["Laptop", 1299],
    //     ["Mouse", 25],
    //     ["Keyboard", 89],
    //     ["Monitor", 349],
    //     ["Webcam", 75]
    // ];

    // console.log(products);
    
    // const productObj = Object.fromEntries(products);
    // console.log(productObj);

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

    // const car = {
    //     brand: "Toyota",
    //     model: "Camry",
    //     year: 2023,
    //     color: "Silver",
    //     mileage: 15420
    // };

    // const newCar = {
    //     brand: "Mitsubishi",
    //     model: "Lancer",
    //     color: "Red",
    //     transmission: "Automatic"
    // };

    // Object.assign(car, newCar)
    // console.log(car);


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

    // const user = {
    //     id: "usr_8k3n9x2m",
    //     username: "skywalker_42",
    //     email: "maria.torres@example.com",
    //     profile: {
    //         firstName: "Maria",
    //         lastName: "Torres",
    //         age: 28,
    //         avatar: "https://cdn.example.com/avatars/8k3n9x2m.jpg",
    //         bio: "Coffee enthusiast, amateur photographer, and weekend hiker"
    //     },
    //     preferences: {
    //         theme: "dark",
    //         notifications: true,
    //         language: "es-MX",
    //         timezone: "America/Mexico_City"
    //     },
    //     stats: {
    //         postsCount: 147,
    //         followersCount: 892,
    //         followingCount: 341,
    //         joinedDate: "2022-03-15T08:30:00Z"
    //     },
    //     tags: ["photography", "travel", "coffee", "hiking"],
    //     isVerified: false,
    //     isPremium: true,
    //     lastLogin: "2025-10-05T14:22:18Z"
    // };


    // console.log(user.username);
    // console.log(user.profile.firstName);
    // console.log(user.preferences.theme);
    // console.log(user.stats.followersCount);


    // console.log(user["email"]);
    // console.log(user["profile"]["bio"]); 
    // console.log(user["preferences"]["language"]);
    // console.log(user["tags"][2]);

/*
6. Add another property on the user object.
*/

    // user.location = "Mexico City";
    // console.log(user);

/*
7. Create a user method that will display the user's stats.
*/

    // const user = {
    //     username: "skywalker_42",
    //     stats: {
    //         postsCount: 147,
    //         followersCount: 892,
    //         followingCount: 341
    //     },
    // }

    // user.displayStat = function display() {
    //     return `Post Count: ${this.stats.postsCount}\nFollowers: ${this.stats.followersCount}\nFollowing: ${this.stats.followingCount}`;
    // }

    // console.log(user.displayStat());
    
/*
8. Delete any property from the user object.
*/

    // const user = {
    //     name: "Maria",
    //     age: 25,
    //     city: "Manila"
    // };

    // delete user.age;
    // console.log(user);

/*
9. Create a pokemon object, with type, name, level, and hp properties. Create an instance of this object.
*/

    // function Pokemon(type, name, level, hp) {
    //     this.type = type;
    //     this.name = name;
    //     this.level = level;
    //     this.hp = hp;
    // }

    // const pikachu = new Pokemon("Electric", "Pikachu", 15, 120);
    // console.log(pikachu);

/*
10. Create any method (siguro special attack na lang) of the instance of the pokemon object.
*/

    // function Pokemon(type, name, level, hp, skill) {
    //     this.type = type;
    //     this.name = name;
    //     this.level = level;
    //     this.hp = hp;
    //     this.skill = skill;
    // }

    // const pikachu = new Pokemon("Electric", "Pikachu", 15, 120, function specialAttack () { return `${this.name} used Thunderbolt`; });

    // const pikachu = new Pokemon("Electric", "Pikachu", 15, 120, 'Thunderbolt');

    // console.log(pikachu.skill);


    // function Animal (type, color, habitat, sound) {
    //     this.type = type,
    //     this.color = color,
    //     this.habitat = habitat,
    //     this.sound = sound
    // }

    // const bulbasaur = new Pokemon('Grass', 'Bulbasaur', 1, 100);
    // bulbasaur.specialAttack = function special () {
    //     return `${this.name} used Vine Whip`;
    // }

    // console.log(bulbasaur.specialAttack());
    
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

    // const pokemon = {
    //     name: "Charizard",
    //     type: ["Fire", "Flying"],
    //     level: 45,
    //     hp: 180,
    //     moves: ["Flamethrower", "Air Slash", "Dragon Claw", "Fly"],
    //     isShiny: false,
    //     ability: "Blaze",
    //     nature: "Adamant",
    //     evolutionStage: 3,
    //     catchRate: 45
    // };

    // for (let key in pokemon) {
    //     console.log(pokemon[key]);
    // };

/*
12. Using an object property, print each stat name and value of the pokemon object in a readable format.
*/

    // const pokemon = {
    //     name: "Charizard",
    //     type: ["Fire", "Flying"],
    //     level: 45,
    //     hp: 180,
    //     moves: ["Flamethrower", "Air Slash", "Dragon Claw", "Fly"],
    //     isShiny: false,
    //     ability: "Blaze",
    //     nature: "Adamant",
    //     evolutionStage: 3,
    //     catchRate: 45
    // };

    // for (let key in pokemon) {
    //     console.log(key + ": " + pokemon[key]);
    // };

/*
13. What is JSON? Explain JSON.stringify() and JSON.parse(). :P

hahahhahahahahhahaha hindi pa nadidiscuss!!???
*/

/* The JSON o JavaScript Object Notation ay madali siya parang i-read, ni programmer at computer. Moreover, si JSON.stringify() naman is para gawing string 
ang isang object, parang sinasabi mo, “Okay, ready na ’to ma-translate into mareread na niya” then JSON.parse() ay the opposite, kasi ginagawa niyang object ulit 
yung JSON string para magamit back to normal, na more understandable sa code mismo. HHEHEHEHHE */ // <3



// const song = [
//     {title: 'the 1'},
//     {album: 'Folklore'},
//     {singer: 'Taylor Swift'},
//     {duration: '3:30'},
// ];

// const song = {
//     title: 'the 1',
//     album: 'Folklore',
//     singer: 'Taylor Swift',
//     duration: '3:30',
// }

/*
    Object Destructuring
    Example:
    const { title, album, singer, duration } = song;
    const [ title, album, singer, duration ] = song;

    console.log(Object.values(title));
    console.log(album);
    console.log(singer);
    console.log(duration);

    Object Default Values
    Example: const { title, album, singer, duration, composer = 'Taylor Swift' } = song;


    Object Property Alias
    Example:
    const { title, album, singer : composer, duration } = song;
    console.log(singer);
    console.log(composer);


    String Destructuring
    Example:
    let word = "W3Schools";
    let [a1, a2, a3, a4, a5] = word;
    console.log(a1);


    Skipping Array Values
    Example:
    const fruits = ["Bananas", "Oranges", "Apples", "Mangoes"];
    let [fruit1,,,fruit2] = fruits;
    console.log(fruit1);
    console.log(fruit2);

    
    Spread Operator
    Eample:
    const fruits = ["Bananas", "Oranges", "Apples", "Mangoes"];
    const subfruits = [...fruits, 'Pineapple'];
    console.log(subfruits);


    The Rest Property
    Example:
    const numbers = [10, 20, 30, 40, 50, 60, 70];
    const [a,b, ...rest] = numbers
    console.log(rest);


    Swapping JavaScript Variables
    let firstName = "John";
    let lastName = "Doe";
    [firstName, lastName] = [lastName, firstName];


    Array Position Values
    const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

    let {[0]:fruit1 ,[1]:fruit2} = fruits;

    console.log(fruit1);

    const data = [
        {
            fname: 'Juan',
            lname: 'Tamad',
            address: {
                street: 'Lopez St.',
                city: 'Batangas',
            }
        },
        'Some Random Stirng',
        100,
        true,
        [ 'Kahit ano', 2]
    ];

    let { [0]:elem1, [1]: elem2, [2]: elem3, [3]: elem4, [4]: elem5 } = data;

    console.log(data[0]);
    console.log(data[4][0]);
    console.log(elem1);
    console.log(elem5[0]);

*/

// The JavaScript prototype property also allows you to add new methods to objects constructors:

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
//   this.greet = function () {
//     return `Hi, I am ${this.firstName} ${this.lastName}`
//   }
// }

// Person.prototype.greet = function () {
//     return `Hi, I am ${this.firstName} ${this.lastName}`
// }

// const person = new Person('Juan', 'Tamad', 15, 'Black');

// // person.greet = function greet() {
// //     return `Hi, I am ${this.firstName} ${this.lastName}`
// // }

// console.log(person.greet());

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN"
//   };

//   person.year = '2008';

//   console.log(person);
  
/*

    Getters
    const person = {
        firstName: "John",
        lastName: "Doe",
        language: "en",
        get lang() {
            return `The language is ${this.language}`;
        },
        get name() {
            return this.firstName;
        }
    };

    console.log(person.lang);
    console.log(person.name);
    

    Setter
    const car = {
        brand: 'Toyota',
        year: '2024',
        color: '',
        set col(color) {
            this.color = color
        },
        set newProp(property) {
            this.type = property
        },
        set setYear(year) {
            this.year = year
        }
    };

    car.col = 'Black';
    car.newProp = 'Sedan'
    car.setYear = '2020'

    console.log(car);

*/

// const car = {type:"Fiat", model:"500", color:"white"};


// // Prevents adding object properties
// Object.preventExtensions(car);

// // Returns true if properties can be added to an object
// console.log(Object.isExtensible(car));

// // Prevents adding and deleting object properties
// Object.seal(car)

// // Returns true if object is sealed
// console.log(Object.isSealed(car));

// // Prevents any changes to an object
// Object.freeze(car);

// // Returns true if object is frozen
// console.log(Object.isFrozen(car));

/* --------------------------------------------------------------------------------------------------------------- */

/*
Refer from the object below:

const restaurantOrder = {
    "orderId": "ORD-2024-789456",
    "orderDate": "2024-10-07T14:32:18Z",
    "status": "preparing",
    "customer": {
      "customerId": "CUST-00123",
      "name": "Maria Santos",
      "email": "maria.santos@email.com",
      "phone": "+63 917 123 4567",
      "loyaltyPoints": 245,
      "address": {
        "street": "123 Mabini Street",
        "barangay": "San Roque",
        "city": "Antipolo",
        "province": "Rizal",
        "postalCode": "1870",
        "coordinates": {
          "latitude": 14.5836,
          "longitude": 121.1756
        }
      }
    },
    "items": [
      {
        "itemId": "ITEM-001",
        "name": "Chicken Adobo",
        "quantity": 2,
        "price": 180.00,
        "customizations": {
          "spiceLevel": "medium",
          "addOns": ["extra rice", "atchara"],
          "specialInstructions": "Less soy sauce please"
        },
        "nutritionInfo": {
          "calories": 450,
          "protein": "32g",
          "carbs": "28g",
          "fat": "22g"
        }
      },
      {
        "itemId": "ITEM-002",
        "name": "Halo-Halo",
        "quantity": 1,
        "price": 120.00,
        "customizations": {
          "toppings": ["leche flan", "ube ice cream", "pinipig"],
          "extraMilk": true
        }
      }
    ],
    "payment": {
      "method": "credit_card",
      "cardDetails": {
        "last4Digits": "4532",
        "cardType": "Visa",
        "expiryMonth": 12,
        "expiryYear": 2026
      },
      "subtotal": 480.00,
      "tax": 57.60,
      "deliveryFee": 50.00,
      "discount": {
        "code": "WELCOME10",
        "amount": 48.00,
        "type": "percentage"
      },
      "total": 539.60,
      "currency": "PHP"
    },
    "delivery": {
      "estimatedTime": "2024-10-07T15:15:00Z",
      "driver": {
        "driverId": "DRV-456",
        "name": "Juan Dela Cruz",
        "phone": "+63 918 987 6543",
        "vehicle": {
          "type": "motorcycle",
          "plateNumber": "ABC-1234",
          "color": "red"
        },
        "rating": 4.8,
        "totalDeliveries": 1247
      },
      "trackingUrl": "https://track.delivery.com/ORD-2024-789456",
      "deliveryStatus": "assigned"
    },
    "restaurant": {
      "restaurantId": "REST-089",
      "name": "Lola's Kitchen",
      "branch": "Antipolo Main",
      "contact": "+63 2 8123 4567",
      "operatingHours": {
        "monday": {"open": "10:00", "close": "22:00"},
        "tuesday": {"open": "10:00", "close": "22:00"},
        "sunday": {"open": "11:00", "close": "21:00"}
      },
      "ratings": {
        "average": 4.6,
        "totalReviews": 2341,
        "breakdown": {
          "5star": 1456,
          "4star": 623,
          "3star": 187,
          "2star": 52,
          "1star": 23
        }
      }
    },
    "metadata": {
      "createdBy": "mobile-app",
      "appVersion": "3.2.1",
      "platform": "iOS",
      "sessionId": "sess_xyz789abc123",
      "tags": ["first-time-customer", "promo-applied", "peak-hours"]
    }
  };


14. Perform Object Destructuring on restaurantOrder Object.
    Then print the orderId, customerId, addOns, itemId, cardType, driverId, plateNumber, trackingUrl, restaurantId, totalReviews, and platform.
    Clue: 'First Degree' properties lang po kasama sa pag-destructure.


    const { orderId, customer, items, payment, delivery, restaurant, metadata } = restaurantOrder;

    const customerId = customer.customerId;
    const itemId = items[0].itemId;
    const addOns = items[0].customizations.addOns;
    const cardType = payment.cardDetails.cardType;
    const driverId = delivery.driver.driverId;
    const plateNumber = delivery.driver.vehicle.plateNumber;
    const trackingUrl = delivery.trackingUrl;
    const restaurantId = restaurant.restaurantId;
    const totalReviews = restaurant.ratings.totalReviews;
    const platform = metadata.platform;

    console.log("Order ID:", orderId);
    console.log("Customer ID:", customerId);
    console.log("Item ID:", itemId);
    console.log("Add-ons:", addOns);
    console.log("Card Type:", cardType);
    console.log("Driver ID:", driverId);
    console.log("Plate Number:", plateNumber);
    console.log("Tracking URL:", trackingUrl);
    console.log("Restaurant ID:", restaurantId);
    console.log("Total Reviews:", totalReviews);
    console.log("Platform:", platform);

    ------------------------------------------------------ 14 -------------------------------------------------------- */

/*
15. Perform string destructuring on the customer's name.


// Refer from the array below:

const techCompanyEmployees = [
    {
      "employeeId": "EMP-001",
      "name": "Sarah Johnson",
      "department": "Engineering",
      "position": "Senior Software Engineer",
      "salary": 95000,
      "hireDate": "2019-03-15",
      "skills": ["Flutter", "Dart", "Firebase", "GraphQL", "MongoDB"],
      "projects": [
        {
          "projectId": "PROJ-101",
          "name": "Mobile Banking App",
          "role": "Lead Developer",
          "status": "completed",
          "duration": {"start": "2023-01-10", "end": "2023-08-20"}
        },
        {
          "projectId": "PROJ-205",
          "name": "E-commerce Platform",
          "role": "Backend Developer",
          "status": "ongoing",
          "duration": {"start": "2023-09-01", "end": null}
        }
      ],
      "performance": {
        "rating": 4.8,
        "lastReview": "2024-06-15",
        "goals": ["Lead team of 5", "Complete certification", "Mentor juniors"]
      }
    },
    {
      "employeeId": "EMP-002",
      "name": "Michael Chen",
      "department": "Design",
      "position": "UI/UX Designer",
      "salary": 72000,
      "hireDate": "2020-07-22",
      "skills": ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
      "projects": [
        {
          "projectId": "PROJ-150",
          "name": "Dashboard Redesign",
          "role": "Lead Designer",
          "status": "completed",
          "duration": {"start": "2023-05-01", "end": "2023-07-30"}
        }
      ],
      "performance": {
        "rating": 4.5,
        "lastReview": "2024-05-20",
        "goals": ["Design system overhaul", "A/B testing implementation"]
      }
    },
    {
      "employeeId": "EMP-003",
      "name": "Priya Sharma",
      "department": "Product",
      "position": "Product Manager",
      "salary": 105000,
      "hireDate": "2018-11-05",
      "skills": ["Agile", "Scrum", "Product Strategy", "Data Analysis", "Roadmapping"],
      "projects": [
        {
          "projectId": "PROJ-205",
          "name": "E-commerce Platform",
          "role": "Product Owner",
          "status": "ongoing",
          "duration": {"start": "2023-09-01", "end": null}
        },
        {
          "projectId": "PROJ-189",
          "name": "Customer Portal",
          "role": "Product Manager",
          "status": "planning",
          "duration": {"start": "2024-11-01", "end": null}
        }
      ],
      "performance": {
        "rating": 4.9,
        "lastReview": "2024-07-10",
        "goals": ["Launch 3 major features", "Improve user retention by 15%"]
      }
    },
    {
      "employeeId": "EMP-004",
      "name": "Carlos Rodriguez",
      "department": "Engineering",
      "position": "DevOps Engineer",
      "salary": 88000,
      "hireDate": "2021-02-18",
      "skills": ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Jenkins"],
      "projects": [
        {
          "projectId": "PROJ-220",
          "name": "Infrastructure Migration",
          "role": "DevOps Lead",
          "status": "ongoing",
          "duration": {"start": "2024-01-15", "end": null}
        }
      ],
      "performance": {
        "rating": 4.6,
        "lastReview": "2024-04-25",
        "goals": ["Reduce deployment time by 50%", "Automate testing pipeline"]
      }
    },
    {
      "employeeId": "EMP-005",
      "name": "Emma Williams",
      "department": "Marketing",
      "position": "Digital Marketing Manager",
      "salary": 68000,
      "hireDate": "2022-09-10",
      "skills": ["SEO", "Content Marketing", "Google Analytics", "Social Media", "Email Marketing"],
      "projects": [
        {
          "projectId": "PROJ-234",
          "name": "Q4 Campaign Launch",
          "role": "Campaign Manager",
          "status": "ongoing",
          "duration": {"start": "2024-09-01", "end": "2024-12-31"}
        }
      ],
      "performance": {
        "rating": 4.3,
        "lastReview": "2024-08-15",
        "goals": ["Increase web traffic by 30%", "Launch influencer program"]
      }
    },
    {
      "employeeId": "EMP-006",
      "name": "David Kim",
      "department": "Engineering",
      "position": "Junior Developer",
      "salary": 55000,
      "hireDate": "2023-06-01",
      "skills": ["JavaScript", "React", "Node.js", "Git"],
      "projects": [
        {
          "projectId": "PROJ-205",
          "name": "E-commerce Platform",
          "role": "Frontend Developer",
          "status": "ongoing",
          "duration": {"start": "2024-03-15", "end": null}
        }
      ],
      "performance": {
        "rating": 4.0,
        "lastReview": "2024-09-05",
        "goals": ["Complete React certification", "Contribute to 5 major features"]
      }
    }
  ];

    const { name } = techCompanyEmployees[0];
    const [firstLetter, secondLetter, thirdLetter, ...remainingLetters] = name;

    console.log("Employee's Name:", name);
    console.log("First Letter:", firstLetter);
    console.log("Second Letter:", secondLetter);
    console.log("Third Letter:", thirdLetter);
    console.log("Remaining Letters:", remainingLetters.join(""));

    ---------------------------------------------------- 15 ---------------------------------------------------------------*/

/*
16. Perform destructuring on EMP-005 by printing her skills set. (Print only the first, fourth, and fifth skills on the list.)

    let skills;

    for (const emp of techCompanyEmployees) {
      if (emp.employeeId == "EMP-005") {
        skills = emp.skills;
        break;
      }
    }

    const [firstSkill, , , fourthSkill, fifthSkill] = skills;
    console.log(`EMP-005 Skills: ${firstSkill}, ${fourthSkill}, ${fifthSkill}`);

    ---------------------------------------------------- 16 ---------------------------------------------------------------*/
/*
17. Using the rest property, print EMP-001's first, second, and third skills set.

    const emp1 = techCompanyEmployees.find(emp => emp.employeeId == "EMP-001");

    const [firstSkill, secondSkill, thirdSkill, ...otherSkills] = emp1.skills;

    console.log("First Skill:", firstSkill);
    console.log("Second Skill:", secondSkill);
    console.log("Third Skill:", thirdSkill);

    ---------------------------------------------------- 17 ---------------------------------------------------------------*/

/*
18. Swap the variables' values.
let x = 1, y = 2, z= 3;

    let x = 1, y = 2, z = 3;
    [x, y, z] = [z, x, y];

    console.log("x:", x);
    console.log("y:", y);
    console.log("z:", z);
    
    ---------------------------------------------------- 18 ---------------------------------------------------------------*/

/*
19. From restaurantOrder object, perform Object Property Alias on its properties and print any values using the alias.


    const restaurantOrder = {
      orderId: "ORD-2025-001",
      customerName: "John Doe",
      items: ["Burger", "Fries", "Coke"],
      totalAmount: 299,
      status: "Preparing"
    };

    const {
      orderId: id,
      customerName: name,
      totalAmount: amount
    } = restaurantOrder;

    console.log("Order ID:", id);
    console.log("Customer Name:", name);
    console.log("Total Amount:", amount);

    ---------------------------------------------------- 19 ---------------------------------------------------------------*/

/*
20. Using the techCompanyEmployees array, pick up values from all its index location and assign position values.

    const positions = [];

    for (const employee of techCompanyEmployees) {
      positions.push(employee.position);
    }

    console.log("All Employee Positions:", positions);
    
    ---------------------------------------------------- 20 ---------------------------------------------------------------*/

/* Refer to the object constructor below
function Vehicle(model, year, color, mileage, price) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.price = price;
}

21. Using JavaScript prototype property, add a new method to the Vehicle object constructor.


    Vehicle.prototype.displayInfo = function() {
        console.log(`Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage} km, Price: ₱${this.price}`);
    };

    const car1 = new Vehicle("Toyota Vios", 2022, "Silver", 15000, 750000);
    car1.displayInfo();

    ---------------------------------------------------- 21 ---------------------------------------------------------------*/
/*
22. Create a getter for all the Vehicle object's properties.


    Object.defineProperty(Vehicle.prototype, "details", {
        get: function() {
            return `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Mileage: ${this.mileage} km, Price: ₱${this.price}`;
        }
    });

    const car1 = new Vehicle("Honda Civic", 2021, "Black", 25000, 900000);
    console.log(car1.details);

    ---------------------------------------------------- 22 ---------------------------------------------------------------*/

/*
23. Create a setter for all the Vehicle object's properties.

    Object.defineProperty(Vehicle.prototype, "details", {
        set: function(newDetails) {
            this.model = newDetails.model;
            this.year = newDetails.year;
            this.color = newDetails.color;
            this.mileage = newDetails.mileage;
            this.price = newDetails.price;
        }
    });

    const car1 = new Vehicle("Toyota Vios", 2020, "White", 30000, 650000);

    car1.details = {
        model: "Mitsubishi Mirage",
        year: 2023,
        color: "Red",
        mileage: 5000,
        price: 800000
    };

    console.log(car1);

    ---------------------------------------------------- 23 ---------------------------------------------------------------*/

/*
24. Create an instance of Vehicle object and perform JavaScript Object Protection by disabling any modifications on the object. Verify if any any modifications are disabled.

    const car1 = new Vehicle("Toyota Fortuner", 2022, "Black", 15000, 1800000);
    Object.freeze(car1);

    car1.color = "Red";
    car1.price = 999999;

    console.log(car1);
    console.log("Is object frozen?", Object.isFrozen(car1));

    ---------------------------------------------------- 24 ---------------------------------------------------------------*/
