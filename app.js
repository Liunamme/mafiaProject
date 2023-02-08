// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//   var myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Mozilla is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }

// let ex1 = [
//   {x:5, y:8},
//   {x:2, y:10},
//   {x:15, y:77}
// ]

// let ex2 = [
//   {x:70, y:33},
//   {x:73, y:18},
//   {x:59, y:94}
// ]

// let ex3 = []

// ex3 = ex2[0].x * ex1[1].y

// console.log(ex3)


// let data = {
//   par1: [[1,2,3,4,5,6,7,44,22,56,77], [9,678,222,1535,1235,2515,12,233,6787,32,636]],
//   par2: [[32,3352,233,75,3478,235,67976], [4,5,21365,222,124,2141,6526]]
// }

// let ex3 = []

// ex3[0] = data.par1[1][2] * data.par2[1][0]
// ex3[1] = data.par2[0][3] * data.par1[0][3]

// console.log(ex3)

// ex4 = ex3[0] * ex3[1]

// console.log(ex4)

// ex5 = ex4 / ex3[1]

// console.log(ex5)





// Setup



// function nextInLine(arr, item) {
//   // Only change code below this line
//   arr.push(item)
//   let shift = arr.shift()
//   return shift;
//   // Only change code above this line
// }

// // Setup
// let testArr = [1, 2, 3, 4, 5];

// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


// function equalityTest(myVal) {
//   if (myVal > 0 ) {
//     if (myVal > 100) {
//       return "НЕ ОБМАНЫВАЙТЕ, ВАМ НЕ МОЖЕТ БЫТЬ БОЛЬШЕ 100 ЛЕТ!!!";
//     }
//     else if (myVal >= 18) {
//       return "ВЫ СОВЕРШЕННО ЛЕТНИЙ";
//     }
//     else {
//     return "ВЫ НЕ СОВЕРШЕННО ЛЕТНИЙ";
//     }
//   }
//   else {
//     return "ВЫ ЕЩЕ НЕ РОДИЛИСЬ?";
//   }
// }

// let myVal = 101

// let c = equalityTest(myVal)

// console.log('Сколько вам лет: ' + myVal + '. Ваш статус: ' + c );


// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val <10 || val > 20) {
//     return "Outside";
//   }
//   // Only change code above this line
//   return "Inside";
// }

// c = testLogicalOr(10);

// console.log(c);

// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return "Tiny"
//   }

//   else if (num < 10) {
//     return "Small"
//   }

//   else if (num < 15) {
//     return "Medium"
//   }

//   else if (num < 20) {
//     return "Large"
//   }

//   else if (num >= 20) {
//     return "Huge"
//   }
//   // Only change code above this line
// }

// c = testSize(5);

// console.log(c);

// const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
// if (strokes === 1) {
//   return names[0];
// }

// else if (strokes <= par - 2) {
//   return names[1];
// }

// else if (strokes === par - 1) {
//   return names[2];
// }

// else if (strokes === par) {
//   return names[3];
// }

// else if (strokes === par + 1) {
//   return names[4];
// }

// else if (strokes === par + 2) {
//   return names[5];
// }

// else if (strokes >= par + 3) {
//   return names[6];
// }
//   // Only change code above this line
// }

// c = golfScore(5, 4);

// console.log(c);

// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line

//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;

//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;

//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//       break;

//   }


//   // Only change code above this line
//   return answer;
// }

// let c = sequentialSizes(1);

// console.log(c);

// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line
//  if (val >= 1 && val <= 100) {
//   switch (val) {
//     case 56:
//     case 23:
//     case 45:
//     case 66:
//     case 22:
//       answer = "Поздравляем, вы выйграли 100к";
//       break;

//     default: 
//     answer = "Вы выйграли 10к";
//     break;
//     }
//   }

//   else {
//     answer = "Вы ничего не выйграли, т.к вы не купили билет"
//   }

//   // Only change code above this line
//   return answer;
// }

// let c = sequentialSizes(1);

// console.log(c);

// // есть 100 участников, проигравших нет! победители 100к руб это 56 23 45 66 22, остальные от 0 до 100, кроме счастливчиков, которые выйграли по 100к - выйграют по 10к

// function chainToSwitch(val) {
//   let answer = "";
//   // Only change code below this line

//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;

//     case 42:
//       answer = "The Answer";
//       break;

//     case 1:
//       answer = "There is no #1";
//        break;

//     case 99:
//       answer = "Missed me by this much!";
//       break;

//     case 7:
//       answer = "Ate Nine";
//       break;
//   }

//   // bob 42 1 99 7
//   // Only change code above this line
//   return answer;
// }

// let c = chainToSwitch(7);

// console.log(c);



// // Счетчик для блек джека, показывает при разданных картах, каковы шансы получить хорошую карту и нужно ли ставить большую ставку
// let count = 0;

// function cc(card) {
//   // Only change code below this line
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++
//       break;
  
//     case 7:
//     case 8:
//     case 9:
//       count
//       break;

//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--
//       break;
//   }
//  if (count <= 0 ) {
//     return count + " Hold";
//  }
//   else {
//     return count + " Bet";
//   }
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// // Setup
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
// const lookup = {
//   "alpha": "Adams",
//   "bravo": "Boston",
//   "charlie": "Chicago",
//   "delta": "Denver",
//   "echo": "Easy",
//   "foxtrot": "Frank",
// }
// result = lookup[val]

//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");


// function checkObj(obj, checkProp) {
//   // Only change code below this line
//   if (obj.hasOwnProperty(checkProp)) {
//     return obj[checkProp]
//   }
//   else {
//     return 'Not Found'
//   }
//   // Only change code above this line
// }

// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   },
//   {
//     "artist": "Slava Bebroy",
//     "title": "Tuzik",
//     "release_year": 2022,
//     "formats": [
//       "MP3",
//       "WAV",
//       "MP4"
//     ],
//   }
// ];


// const myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// const gloveBoxContents = myStorage.car.inside['glove box'];

// const myPlants = [
//   {
//     type: "flowers",
//     list: [
//       "rose",
//       "tulip",
//       "dandelion"
//     ]
//   },
//   {
//     type: "trees",
//     list: [
//       "fir",
//       "pine",
//       "birch"
//     ]
//   }
// ];

// const secondTree = myPlants[1].list[1];


// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop !== 'tracks' && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
//     records[id][prop] = [value];
//   } else if (prop === "tracks" && value !== "") {
//     records[id][prop].push(value);
//   } else if (value === "") {
//     delete records[id][prop];
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// console.log(recordCollection);


// // Setup
// const ourArray = [];
// let i = 5;

// while (i > -1) {
//   ourArray.push(i);
//   i--;
// }

// console.log(ourArray);

// // Setup
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette', 'NEZUKO', 'DUSHA']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };




// // Only change code below this line
// function newRecords(records, id, prop, value) {
//   records[id] = {}
//   records[id][prop] = value;
//   return records;
// }
// function updateRecords(records, id, prop, value) {
//   records[id][prop][value];
//   return records;
// }

// function newArray (records, id, prop, value){
//   records[id][prop].push(value)
// }

// newRecords(recordCollection, 9999, 'album', ['NEZUKO', 'DUSHA', 'OGG']);
// newArray(recordCollection, 9999, 'album', 'LIUANMEM');
// updateRecords(recordCollection, 5439, 'albumTitle', 'NEZUKO');



// const myMusic = [
//   {
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//       "CD",
//       "8T",
//       "LP"
//     ],
//     "gold": true
//   }
// ];

// myMusic[1] = {
//   "artist": "Platina",
//   "title": "Opiati.Krug",
//   "release_year": 2018,
//   "formats": [
//     "MP3",
//     "WAW",
//     "MP4"
//   ],
//   "gold": true
// }

// function newAlbum(obj, artist, title, release_year, formats, gold) {
//   obj.push(
//     {
//     "artist": artist,
//     "title": title,
//     "release_year": release_year,
//     "formats": formats,
//     "gold": gold
//     }
//   )
// }

// newAlbum(myMusic, 'Slava Bebroy', 'Tusik', 2022, ['MP3', 'WAV', 'MP4'], true)

// cc = myMusic

// console.log(cc);

// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// recordCollection[1111] = {
//   artist: 'Bon Jovi',
// }


// function album(obj, id, prop, value) {
//   if (prop !== 'tracks') {
//     obj[id][prop].push(value)
//   }
//   else if (obj[id] !== undefined) {
//     obj[id][prop] = value
//   }
//   else if ([obj[id] === undefined]) {
//     obj[id] = {
//       [prop]: value
//     }
//   }
// }

// album(recordCollection, 9999, 'klip', 'mp4')
// album(recordCollection, 1245, 'albumTitle', 'mp4')
// album(recordCollection, 1245, 'albumTitle', 'mp5')
// album(recordCollection, 7777, 'artist', 'ak-47')
// album(recordCollection, 7777, 'album', 'ratatata')
// album(recordCollection, 2468, 'tracks', 'ko mne')




// console.log(recordCollection);

// function album(obj, id, prop, value) {
//   if (prop === Array) {
//     obj[id][prop].push(value)
//   }
//   else if (obj[id] !== undefined) {
//     obj[id][prop] = value
//   }
//   else if ([obj[id] === undefined]) {
//     obj[id] = {
//       [prop]: value
//     }
//   }
// }

// album(recordCollection, 9999, 'klip', 'mp4')
// album(recordCollection, 1245, 'albumTitle', 'mp4')
// album(recordCollection, 1245, 'albumTitle', 'mp5')
// album(recordCollection, 7777, 'artist', 'ak-47')
// album(recordCollection, 7777, 'album', 'ratatata')
// album(recordCollection, 2468, 'tracks', 'ko mne')




// console.log(recordCollection);


// const myArray = [];
// for (let i = 1; i <= 9; i += 2) {
//   myArray.push(i)
// }

// console.log(myArray);

// const ourArray = [];

// for (let i = 60; i >= 0; i -= 1) {
//   ourArray.push(i);
// }

// console.log(ourArray);

// const myArray = [];
// for (let i = 9; i >= 1; i-= 2) {
//   myArray.push(i)
// }

// console.log(myArray);

// const arr = [10, 9, 8, 7, 6,];

// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// Setup
// const myArr = [2, 3, 4, 5, 6];

// // Only change code below this line

// let total = 0
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i]; 
// }

// console.log(total);

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j]
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// let cc = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// console.log(cc);



// const arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// console.log(arr.length);

// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     product *= arr[i][j]
//   }
// }
//   // Only change code above this line
//   return product;
// }

// let cc = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// console.log(cc);


// // Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// }
// while (i < 5)

// console.log(myArray);
// console.log(i);

// // Setup
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) 
// {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } 
//       else {
//         return 'No such property'
//       }
//     }
//   }
//       return 'No such contact'
// }

// let cc = lookUpProfile("Sherlock", "likes");


// console.log(cc);

// // GENERATOR RANDOM NUMBER
// function randomWholeNum(min, max) {
//   // Only change code below this line
//  return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(randomWholeNum(200, 1000));



// function checkSign(num) {
//   return (num > 0) ? 'positive' 
//   : (num < 0) ? 'negative' 
//   : 'zero'
// }

// let cc = checkSign(1);

// console.log(cc);

// // Only change code below this line
// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countdown(n - 1);
//     countArray.unshift(n);
//     return countArray;
//   }
// }
// // Only change code above this line

// // Only change code below this line
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// // Only change code above this line
// let cc = rangeOfNumbers(5, 10)
// console.log(cc);


// ES6 START LEARN


// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line

//   // Using s = [2, 5, 7] would be invalid
//   gg = s[0] = 2, s[1] = 5, s[2] = 7
//   return gg

//   // Only change code above this line
// }
// editInPlace();

// console.log(s);

// const hello = (name = 'Незнакомец') => console.log('Привет ' + name);

// hello()
// hello('Emmanuel')

// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b,) => a + b);
// }

// let gg = sum(10,30,50)
// console.log(gg);

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // Change this line

// console.log(arr2);

// const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;

// console.log(name);
// console.log(age);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line
  
// const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

// // Only change code above this line

// console.log(highToday);

// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };

// const { johnDoe: { age: johnAge, email: johnEmail }} = user;


// console.log('Джону ' + user.johnDoe.age + ' года, его email: ' + user.johnDoe.email); // ES5 УСТАРЕВШЕЕ
// console.log('Джону ' + johnAge + ' года, его email: ' + johnEmail); // ES6 СОВРЕМЕННО

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Only change code below this line
  
// const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
// // Only change code above this line

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// let a = 8, b = 6;
// // Only change code below this line
// [a,b] = [b,a]

// console.log(a);

// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...shorterList] = list // Change this line
//   // Only change code above this line
//   return shorterList;
// }

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sourceWithoutFirstTwo = removeFirstTwo(source);

// console.log(sourceWithoutFirstTwo);

// const people = {
//   name: 'Emmanuel',
//   age: 21,
//   nationality: 'Russian',
//   location: 'The Russian Federation'
// }

// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }

// profileUpdate(people)

// console.log(people);


// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({max, min}) => (max + min) / 2.0; 
// // Only change code above this line

// console.log(half(stats));

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   for (let i = 0; i < arr.length; i++) {
//     failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
//   };
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);

// console.log(failuresList);

// // Explicit constructor
// class SpaceShuttle {
//   constructor(targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   }
//   takeOff() {
//     console.log("To " + this.targetPlanet + "!");
//   }
// }

// // Implicit constructor 
// class Rocket {
//   launch() {
//     console.log("To the moon!");
//   }
// }

// const zeus = new SpaceShuttle('Jupiter');
// // prints To Jupiter! in console
// zeus.takeOff();

// const atlas = new Rocket();
// // prints To the moon! in console
// atlas.launch();

// НЕ ПОНЯЛ ОСОБО, СЛОЖНО.
// // Only change code below this line
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'

// // Only change code below this line
// class Thermostat {
//   constructor(fahrenheit) {
//   this._fahrenheit = fahrenheit
// }
//   get temperature() {
//     return 5/9 * (this._fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this._fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// const text = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain';

// function Search(obj, word) {
//   let testStr = obj;
//   let ourRegex = word;
//   let result = testStr.match(ourRegex)
//   console.log(result);
// }

// Search(text, /.ut/ig)

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[a|e|i|o|u]/ig; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// console.log(result);

// let difficultSpelling = "Miszsissippi";
// let myRegex = /s+/ig; // Change this line
// let result = difficultSpelling.match(myRegex);

// console.log(result);

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);
// console.log(result);

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\w/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex);
// console.log(result);

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g; // Change this line
// let result = movieName.match(numRegex).length;
// console.log(result);

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g; // Change this line
// let result = movieName.match(noNumRegex).length;
// console.log(result);

// let username = "JackOfAllTrades";
// let userCheck = /^[A-Z][A-Z]+\d*$|^[A-Z]\d+\d$/ig; // Change this line
// let result = userCheck.test(username);




// FIRST VARIANT(MY)

// function zeroArray(m, n) {
//   let newArray = [];
//   let row = [];
//   for (let i = 0; i < m; i++) {
//     newArray.push(row);
//   }
//   for (let j = 0; j < n; j++) {
//     // Pushes n zeroes into the current row to create the columns
//     row.push(0);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// SECOND VARIANT

// function zeroArray(m, n) {
//   // Creates a 2-D array with m rows and n columns of zeroes
//   let newArray = [];
//   for (let i = 0; i < m; i++) {
//     let row = [];
//     // Adds the m-th row into newArray

//     for (let j = 0; j < n; j++) {
//       // Pushes n zeroes into the current row to create the columns
//       row.push(0);
//     }
//     // Pushes the current row, which now has n zeroes in it, to the array
//     newArray.push(row);
//   }
//   return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// let yourArray = [
//   'v',
//   5,
//   true,
//   ['f',4,false],
//   {
//     't': 't',
//     '3': 3,
//     'true': true,
//   }
// ];

// console.log(yourArray);
// console.log(yourArray[0]);
// console.log(yourArray[1]);
// console.log(yourArray[2]);
// console.log(yourArray[3]);
// console.log(yourArray[3][0]);
// console.log(yourArray[3][1]);
// console.log(yourArray[3][2]);
// console.log(yourArray[4]);
// console.log(yourArray[4]['t']);
// console.log(yourArray[4]['3']);
// console.log(yourArray[4]['true']);

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1,4,'вместо удаленных можно что то вставить')
// // Only change code above this line
// console.log(arr);

// let gg = arr.slice(2,5)
// console.log(gg);

// FIST VARIANT (MY)

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // Only change code below this line
//   let kaka = [...arr]
//   newArr.splice(0,0,[...kaka])
//     // Only change code above this line
//     num--;
//   }
//   return newArr;
// }

// console.log(copyMachine([true, false, true], 2));


// // SECOND VARIANT

// function copyMachine(arr, num) {
//   let newArr = [];
//   while (num >= 1) {
//     // change code below this line
//     newArr.push([...arr]);
//     // change code above this line
//     num--;
//   }
//   return newArr;
// }

// change code here to test different cases:
// console.log(copyMachine([true, false, true], 2));

// let arr2 = [4,5,6]
// let arr1 = [1,2,3,...arr2,7,8,9, 'primer']
// console.log(arr1);

// console.log(arr1.indexOf('primer'));

// let arr11 = [1,2,3]
// let arr22 = [4,5,6]
// let arr33 = [7,8,9]
// let gg2 = []
// gg2.push([[...arr11],[...arr22],[...arr33]])
// console.log(gg2);

// function quickCheck(arr, elem) {
//   // Only change code below this line
//   return arr.indexOf(elem) >= 0 ? true : false;
//   // Only change code above this line
// }

// console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) === -1) {
//       newArr.push(arr[i])
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 1));

// // let gg = [[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]][3].indexOf(1)
// // console.log(gg);

// // 5 уровневый массив
// let myNestedArray = [
//   // Only change code below this line
//   [
//     ['deep',
//       [
//         'deeper', ['deepest']
//       ]
//     ]
//   ]
//   // Only change code above this line
// ];

// // Добавление значения _ ключа в обьект
// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28
// };

// // Only change code below this line
// foods.bananas = 13
// foods.grapes = 35
// foods.strawberries = 27
// // Only change code above this line

// console.log(foods);

// let foods = {
//   apples: 25,
//   oranges: 32,
//   plums: 28,
//   bananas: 13,
//   grapes: 35,
//   strawberries: 27
// };

// function checkInventory(scannedItem) {
//   // Only change code below this line
//   return foods[scannedItem]
//   // Only change code above this line
// }

// console.log(checkInventory("apples"));

// let users = {
//   Alan: {
//     age: 27,
//     online: true
//   },
//   Jeff: {
//     age: 32,
//     online: true
//   },
//   Sarah: {
//     age: 48,
//     online: true
//   },
//   Ryan: {
//     age: 19,
//     online: true
//   }
// };

// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   if ('Alan' in userObj &&
//       'Jeff' in userObj &&
//       'Sarah' in userObj &&
//       'Ryan' in userObj) {
//         return true
//       }
//       return false
//   // Only change code above this line
// }

// console.log(isEveryoneHere(users));

// // СЧЕТЧИК ОНЛАЙН 
// const users = {
//   Alan: {
//     online: false
//   },
//   Jeff: {
//     online: true
//   },
//   Sarah: {
//     online: false
//   }
// }

// function countOnline(usersObj) {
//   // Only change code below this line
//   let onValue = 0
//   for (let user in usersObj) {
//     if (usersObj[user].online === true) {
//       onValue++
//     }
//   }
//   return onValue
//   // Only change code above this line
// }

// console.log(countOnline(users));


// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   userObj.data.friends.push(friend)
//   return userObj.data.friends
//   // Only change code above this line
// }

// console.log(addFriend(user, 'Pete'));


// // РЕВЕРС СТРОКИ:
// function reverseString(str) {
//   let splitString = str.split('');
//   let reverseArray = splitString.reverse()
//   let joinArray = reverseArray.join('')
//   return joinArray;
// }

// let gg = reverseString("hello");
// console.log(gg);

// // Найти факториал числа
// function factorialize(num) {
//   let result = 1
//   for (let i = 1; i <= num; i++) {
//     result*=i
//   }
//   return result;
// }

// let gg = factorialize(5);
// console.log(gg);

// function findLongestWordLength(str) {
//   let words = str.split(' ');
//   let maxLength = 0;

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//     }
//   }

//   return maxLength;
// }

// let gg = findLongestWordLength("The quick brown fox jumped over the lazy dog");
// console.log(gg);

// // Функция, которая перебирает кажое число и пушит большее в массиве (только для 2х уровневых)
// function largestOfFour(arr) {
//   let resultArray = []
//   for (let i = 0; i < arr.length; i++) {
//     let maxNumber = arr[i][0];
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] > maxNumber) {
//         maxNumber = arr[i][j]
//       }
//     }
//     resultArray.push(maxNumber)
//   }
//   return resultArray;
// }

// let gg = largestOfFour([[4, 5, 1, 3], [13, 1000, 18, 26], [320, 35, 37, 39], [-10, -92, -32, -94]]);
// console.log(gg);

// function confirmEnding(str, target) {
//   let check = new RegExp(target + "$", "i");
//   return check.test(str);
// }
// let gg = confirmEnding("Bastian", "n");
// console.log(gg);

// function repeatStringNumTimes(str, num) {
//   if (num > 0) {
//     let result = ""
//     for (let i = 0; i < num; i++) {
//       result += str
//     }
//     return result;
//   }
// }

// let gg = repeatStringNumTimes("abc", 3);
// console.log(gg);

// function truncateString(str, num) {
//   let text = str.slice('')
//   return text;
// }


// let str = 'A-tisket a-tasket A green and yellow basket'

// let text = str.slice('')
// console.log(text);;


// // Мой какой то замудренный вариант (не знал что slice копирует и строки)
// function truncateString(str, num) {
//   let splitString = str.split('');
//   let spliceArray = splitString.splice(0,num)
//   let joinArray = spliceArray.join('')
//   if (num === str.length) {
//     return str
//   }
//   else if (spliceArray.length >= num) {
//     return joinArray + '...';
//   }
//   return joinArray
// }


// // вариант freecodecamp
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// let gg = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// let cc = truncateString("A-tisket a-tasket A green and yellow basket", 8)
// console.log(gg);
// console.log(cc);

// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//   return undefined;
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);

// function booWho(bool) {
//   if(typeof(bool) === 'boolean') {
//     return true;
//   }
//     return false
// }

// booWho(null);

// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }

// let gg = titleCase("I'm a little tea pot");
// console.log(gg);



// function frankenSplice(arr1, arr2, n) {
//   let result = arr2.slice()
//   result.splice(n,0,...arr1)
//   return result;
// }

// let gg = frankenSplice([1, 2, 3], [4, 5], 1);
// console.log(gg);

// // Мой вариант, не знал что они все определятся как False и сделал по своему

// function bouncer(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== false &&
//         arr[i] !== null &&
//         arr[i] !== 0 &&
//         arr[i] !== "" &&
//         arr[i] !== undefined &&
//         String(arr[i]) !== 'NaN') 
//         {
//           result.push(arr[i])
//         }
//   }
//   return result;
// }

// let gg = bouncer([7, "ate", "", false, 9]);
// console.log(gg);


// // Вариант FreeCodeCamp, более короткий и хороший код, но мой тоже работает

// function bouncer(arr) {
//   const filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) filteredArr.push(arr[i]);
//   }
//   return filteredArr;
// }

// let gg = bouncer([7, "ate", "", false, 9]);
// console.log(gg);

//   let indexi
//   function getIndexToIns(arr, num) {
//     arr.sort((a, b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= num) return indexi = i;
//     }
//   }

// function pushing(arr, num) {
//   arr.sort((a, b) => a - b);
//   arr.splice(indexi,0,num)
//   return arr
// }

// let gg = getIndexToIns([10, 20, 30, 40, 50], 35);
// console.log(gg);

// let cc = pushing([10, 20, 30, 40, 50], 30);
// console.log(cc);

// // ФУНКИЦЯ ПРОВЕРЯЕТ ЕСТЬ ЛИ БУКВЫ ВТОРОГО СЛОВА В ПЕРВОМ (ЕСЛИ ВО ВТОРОМ ЕСТЬ БУКВА КОТОРОЙ НЕТ В ПЕРВОМ - БУДЕТ FALSE)
// function mutation([ target, test ], i = 0) {
//   target = target.toLowerCase();
//   test = test.toLowerCase();
//   return i >= test.length
//     ? true
//     : !target.includes(test[i])
//       ? false
//       : mutation([ target, test ], i + 1);
// }

// let gg = mutation(["hello", "hey"]);
// console.log(gg);

// // Делит указанный массив на, указанное кол-во раз
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }
//   return newArr;
// }

// let gg = chunkArrayInGroups([0, 1, 2, 3, 4, 5,6,6,7,8,9], 3);
// console.log(gg);



// OOP


// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {return `This dog has ${dog.numLegs} legs.`}
// };

// dog.sayLegs();

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }

// let sharik = new Dog('Sharik', 'White')
// let hanz = new Dog('Hanz', 'Black')
// hanz.sherzt = 'Gladkaya'
// sharik.sherzt = 'Pushistaya'
// console.log(sharik.num);
// console.log(hanz);

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }

// // Only change code below this line

// let myHouse = new House(4)
// let gg = myHouse instanceof House

// console.log(myHouse);
// console.log(gg);

// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// // Only change code below this line

// for (let property in canary) {
//   if(canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }

// console.log(ownProps);

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// // Only change code above this line
// let beagle = new Dog("Snoopy");
// console.log(beagle);
// console.log(beagle.numLegs);



// // ПРОВЕРКА И РАЗДЕЛ НА ОТКРЫТЫЕ ЗАДАННЫЕ СВОЙСТВА И СКРЫТЫЕ ПРОТОТИП СВОЙСТВА
// function Dog(name, color) {
//   this.name = name;
//   this.color = color
// }

// Dog.prototype.numLegs = 4;
// Dog.prototype.secretInfo = 'Разработано LiunammeCorp';

// // Only change code above this line
// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//   if(beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps);

// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
// }

// function Bird(name, color) {
//   this.name = name;
//   this.color = color;
// }


// let duck = new Bird();
// let beagle = new Dog();

// console.log(duck.constructor === Bird); 
// console.log(beagle.constructor === Dog);

// // С помощью обьект.constructor === (Классу), можно найти к какому классу пренадлежит обьект, в данном случае проверяет Снежок это кошка или собака
// function Dog(name, color) {
//   this.name = name;
//   this.color = color;
// }

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// let snezhok = new Cat('Snezhnok', 'White')
// let darkDog = new Dog('DarkDog', 'Black')


// function joinCatFraternity(candidate) {
//   if (candidate.constructor === Cat) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let sobaka = joinDogFraternity(snezhok)
// let koshka = joinCatFraternity(snezhok)

// console.log(sobaka);
// console.log(koshka);


// function Dog(name, color) {
//   this.name = name;
//   this.color = color
// }

// // Dog.prototype.numLegs = 4;
// // Dog.prototype.secretInfo = 'Разработано LiunammeCorp';

// Dog.prototype = {
//   constructor: Dog,
//   numLegs: 4,
//   secretInfo: 'Разработано LiunammeCorp',
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   },
// }

// // Only change code above this line
// let beagle = new Dog("Snoopy", 'black');
// beagle.eat()
// console.log(beagle);
// console.log(Dog.prototype);

// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // если прототип создавать вручную, то consctructor стирается и при проверке - будет false
// // ПОЭТОМУ НУЖНО ПРИ СОЗДАНИИ ПРОТОТИПА - В ПЕРВУЮ ОЧЕРЕДЬ ДОБАВЛЯТЬ constructor: и название класса (Dog)
// let sobaka = joinDogFraternity(beagle)

// console.log(sobaka);

// ВАЖНО!!!
// Все уникальные свойства будь то Имя, возраст итд должны быть созданы в классе, и быть видны,
// А остальные будь то есть человек - и у человека всегда 2 ноги (если он нормальный), создается прототипом, и вызывая обьект это не будет видно, однако такое свойство будет, и его можно вызывать!!!


// // Данным кодом мы может создавать общий супер-класс-обьект - например животные, и добавлять скрытые прототипы для всех животных, и создавая допустим собак, подключать их к этому прототипу, и вызывать его вообще через обьект, котнретную собаку.
// // Так же можно создать личный прототип уже конкретно собакам, допустим если у них есть что их различает. а то что обьединяет всех животных которые у нас есть, будь то кошки собаки птицы итж - в животные можно отправить.
// function Animal() { }

// function Bird(name) { 
//   this.name = name
// }
// function Dog(name) { 
//   this.name = name
// }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   location: 'Forest'
// };

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.type = 'beast'
// Dog.prototype.constructor = Dog
// Dog.prototype.location = 'House'

// Animal.prototype.secret = 'Все животные не настоящие'


// let popug = new Bird('Popka')
// let beagle = new Dog('Timoshka')

// popug.eat()
// console.log(popug.location);
// console.log(beagle.location);
// console.log(beagle.type);
// console.log(beagle);
// console.log(Dog.prototype);
// console.log(Bird.prototype);
// console.log(Animal.prototype);

// function joinDogFraternity(candidate) {
//   if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function joinAnimalFraternity(candidate) {
//   if (candidate.constructor === Animal) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let cc = joinAnimalFraternity(beagle)
// let gg = joinDogFraternity(beagle)

// console.log(cc);
// console.log(gg);

// // СВОЙСТВО В ПРОТОТИПЕ МОЖНО ЗАДАТЬ САМОМУ МЛАДШЕМУ ОБЬЕКТУ И ОН БУДЕТ САМЫЙ ГЛАВНЫЙ, ЕСЛИ ТАКОЕ С-ВО ЕСТЬ УЖЕ У ЕГО РОДИТЕЛЕЙ
// // ПРИМЕР: ЕСТЬ У НАС СУПЕР КЛАСС САМЫЙ ОБОЩЕННЫЙ - ЖИВОТНЫЕ, В ЖИВОТНЫХ ЕСТЬ СОБАКИ,ПТИЦЫ. В СОБАКАХ ЕСТЬ БИГЛИ, А В ПТИЦАХ ЛЕБЕДИ.
// // ЖИВОТНЫЕ У НАС ЖИВУТ В ЛЕСУ ОБЫЧНО, НО ЕСТЬ И ДОМАШНИЕ ТИПА СОБАК, А ВОТ ЛЕБЕДЬ БУДЕТ ЖИТЬ ДОПУСТИМ В ЛЕСУ.
// // ПО ДЕФОЛТУ НА ВСЕХ ЖИВОТНЫХ СТОИТ ЛЕС, НО СОБАКАМ МОЖНО ПЕРЕДАТЬ 'ДОМА', А ВОТ ЕСЛИ ИМЕЕТСЯ ВВИДУ ЕЩЕ И КОНКРЕТНАЯ СОБАКА, ТО ЕЙ МОЖНО ЗАДАТЬ, А В КАКОМ ТОЧНО ДОМЕ ОНА ЖИВЕТ.
// // И ТУТ БУДЕТ ПРИМЕНЕНО ТО ЗНАЧЕНИЕ КОТОРОЕ БЕРЕТСЯ С САМОГО НИЗКОГО УРОЧНЯ - ПРОВЕРЯЕТСЯ ИНФЫ - НАПИСАНО ЛИ ГДЕ ЖИВУТ БИГЛИ - НЕТ, ЗНАЧИТ ОНИ БУДУТ ЖИТЬ ТАМ ГДЕ УКАЗАНО ГДЕ ЖИВУТ СОБАКИ, НО ЕСЛИ И ТАМ НЕ УКАЗАННО, ОНИ УНАСЛЕДУЮТ ОТ ЖИВОТНЫХ - ЛЕС.



// // Тут мы можем скрыть какие либо данные из общей видимости пользователя, и доступ к ним можно получить, вызвав функцию в этом обьекте
// function Bird(name) { 
//   this.name = name;
//   this.kaka = 20;
//   let hatchedEgg = 10;
//   this.getHatchedEggCount = function() { 
//     return hatchedEgg;
//   };
//   this.lolo = 'LooolLLLoool'
// }

// let ducky = new Bird('Donald');
// let сс = ducky;
// let gg = ducky.getHatchedEggCount();
// console.log(сс);
// console.log(gg);

// // МГНОВЕННО ВЫЗЫВАЕМАЯ ФУНКЦИЯ
// (function () {
//   console.log("Chirp, chirp!");
// })();


// // IIFE МОДУЛЬ, В КОТОРЫЙ МОЖНО ЗАПАКОВАТЬ ЛЮБОЕ КОЛ-ВО ФУНКЦИЙ ИМПОРТИРОВАТЬ И ВЫЗЫВАТЬ ЧЕРЕЗ НЕГО
// let funModule = (function () {
//   return {
// isCuteMixin: function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// },
// singMixin: function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// },
//   }
// })();

// funModule.isCuteMixin(object)

// // Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//   const teaCups = [];

//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line

// console.log(tea4TeamFCC);


// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(arr, bookName) {
// let localArr = [...arr]
//   localArr.push(bookName);
//   return console.log(localArr);
  
//   // Change code above this line
// }
// // Change code below this line
// function remove(arr, bookName) {
//   let newArr = [...arr]
//   const book_index = newArr.indexOf(bookName);
//   if (book_index >= 0) {

//     newArr.splice(book_index, 1);
//     return console.log(newArr);

//     // Change code above this line
//     }
// }


// remove(bookList,'The Hound of the Baskervilles')


// // МОЯ РАБОЧАЯ ФУНКЦИЯ, НО FFC ЕЁ НЕ ПРИНИМАЕТ, А ОНА ПОЛНОСТЬЮ РАБОЧАЯ И ИНДЕНТИЧНА ТОЙ ЧТО ВЫШЕ!!!
// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(arr,bookName) {
//   localArr = arr.slice(0)
//   localArr.push(bookName);
//   return localArr;
  
//   // Change code above this line
// }

// // Change code below this line
// function remove(arr,bookName) {
//   localArr = arr.slice(0)
//   const book_index = localArr.indexOf(bookName);
//   if (book_index >= 0) {

//     localArr.splice(book_index, 1);
//     return localArr;

//     // Change code above this line
//     }
// }

// console.log(bookList);
// let gg1 = add(bookList, "A Brief History of Time")
// let gg2 = remove(bookList, "On The Electrodynamics of Moving Bodies")
// let gg3 = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
// console.log(gg1);
// console.log(gg2);
// console.log(gg3);



// const squareList = arr => {
//   // Only change code below this line
//   let localArr = arr.filter(num => num > 0 && Number.isInteger(num))
//   let result = localArr.map(num => num * num)
//   return result;
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);











// window.onload = () => {
//   StartStop();
// }

// //объявляем переменные
// var base = 60;
// var clocktimer, dateObj, dh, dm, ds, ms;
// var readout = '';
// var h = 1,
//   m = 1,
//   tm = 1,
//   s = 0,
//   ts = 0,
//   ms = 0,
//   init = 0;

// //функция для очистки поля
// function ClearСlock() {
//   clearTimeout(clocktimer);
//   h = 1;
//   m = 1;
//   tm = 1;
//   s = 0;
//   ts = 0;
//   ms = 0;
//   init = 0;
//   readout = '00:00:00';
//   document.MyForm.stopwatch.value = readout;
// }

// //функция для старта секундомера
// function StartTIME() {
//   var cdateObj = new Date();
//   var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
//   if (t > 999) {
//     s++;
//   }
//   if (s >= (m * base)) {
//     ts = 0;
//     m++;
//   } else {
//     ts = parseInt((ms / 100) + s);
//     if (ts >= base) {
//       ts = ts - ((m - 1) * base);
//     }
//   }
//   if (m > (h * base)) {
//     tm = 1;
//     h++;
//   } else {
//     tm = parseInt((ms / 100) + m);
//     if (tm >= base) {
//       tm = tm - ((h - 1) * base);
//     }
//   }
//   ms = Math.round(t / 10);
//   if (ms > 99) {
//     ms = 0;
//   }
//   if (ms == 0) {
//     ms = '00';
//   }
//   if (ms > 0 && ms <= 9) {
//     ms = '0' + ms;
//   }
//   if (ts > 0) {
//     ds = ts;
//     if (ts < 10) {
//       ds = '0' + ts;
//     }
//   } else {
//     ds = '00';
//   }
//   dm = tm - 1;
//   if (dm > 0) {
//     if (dm < 10) {
//       dm = '0' + dm;
//     }
//   } else {
//     dm = '00';
//   }
//   dh = h - 1;
//   if (dh > 0) {
//     if (dh < 10) {
//       dh = '0' + dh;
//     }
//   } else {
//     dh = '00';
//   }
//   readout = dh + ':' + dm + ':' + ds;
//   document.MyForm.stopwatch.value = readout;
//   clocktimer = setTimeout("StartTIME()", 1);
// }

// //Функция запуска и остановки
// function StartStop() {
//   if (init == 0) {
//     ClearСlock();
//     dateObj = new Date();
//     StartTIME();
//     init = 1;
//   } else {
//     clearTimeout(clocktimer);
//     init = 0;
//   }
// }










// function sumAll(arr) {
//   let sortArr = arr.sort((a,b) => a - b)
//   let result = 0
//   for (let i = sortArr[0]; i <= sortArr[1]; i++) {
//     result += i 
//   }
//   return result;
// }

// sumAll([1, 4]);


// function spinalCase(str) {
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }

// spinalCase("AllThe-small Things")




// // ОБУЧЕНИЕ АЛЕКСАНДР ЛУЩЕНКО 

// document.getElementById('out').innerHTML = '<b>Какой сейчас год</b>';
// // в querySelector надо указывать у нас class(.) или id(#)
// document.querySelector('.header').innerHTML = 2023; 
// document.querySelector('#world').innerHTML = 'world';
// let div4 = document.querySelector('.calculator')
// div4.innerHTML += '<h4>RANDOM</h4>'
// div4.innerHTML += '<p>2 RANDOM</p>'
// div4.innerHTML += '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">' + '<br>'
// let z1 = 10
// let z2 = 100
// let y1 = 500
// let y2 = 50
// div4.innerHTML += z1 * z2 + '<br>'
// div4.innerHTML += y1 / y2
// console.log(div4.innerHTML);
// const header = document.querySelector('.header')
// console.log(header.innerHTML);
// header.innerHTML = `${2023} год`
// // document.querySelector('body').innerHTML = ""


// // ПРОСТОЙ КАЛЬКУЛЯТОР
// const calculatorFirstNumber = document.querySelector('#firstNumber')
// const calculatorSecondNumber = document.querySelector('#SecondNumber')

// plus.onclick = () => {
//   calculatorFirstNumber.value = +calculatorFirstNumber.value + +calculatorSecondNumber.value
//   calculatorSecondNumber.value = ""
// }
// minus.onclick = () => {
//   calculatorFirstNumber.value = +calculatorFirstNumber.value - +calculatorSecondNumber.value
//   calculatorSecondNumber.value = ""
// }
// umn.onclick = () => {
//   calculatorFirstNumber.value = +calculatorFirstNumber.value * +calculatorSecondNumber.value
//   calculatorSecondNumber.value = ""
// }
// del.onclick = () => {
//   calculatorFirstNumber.value = +calculatorFirstNumber.value / +calculatorSecondNumber.value
//   calculatorSecondNumber.value = ""
// }

// clear.onclick = () => {
//   calculatorFirstNumber.value = ""
//   calculatorSecondNumber.value = ""
// }


// calculatorFirstNumber.style.border = '2px solid red'
// calculatorFirstNumber.style.margin = "0px 0px 10px 0px"
// calculatorSecondNumber.style.border = '2px solid black'
// calculatorSecondNumber.style.margin = "0px 0px 10px 0px"
// plus.style.border = '2px solid black'
// minus.style.border = '2px solid black'
// umn.style.border = '2px solid black'
// del.style.border = '2px solid black'
// clear.style.border = '2px solid black'


// // ПРАКТИКА ДАЛЬШЕ

// const checkAge = document.querySelector('#checkAge')
// const checkAgeButton = document.querySelector('#checkAgeButton')
// const checkAgeText = document.querySelector('#checkAgeText')

// checkAgeButton.onclick = () => {
//   let a = +checkAge.value
//   if (a < 18) {
//     checkAgeText.innerHTML = 'Вы еще маленький, доступ запрещен!!!'
//     checkAge.style.border = '2px solid red'
//   }
//   else if (a > 100){
//     checkAgeText.innerHTML = 'Вам не может быть больше 100 лет!!!'
//     checkAge.style.border = '2px solid red'
//   }
//   else {
//     checkAgeText.innerHTML = 'Вы совершеннолетний, доступ разрешен!'
//     checkAge.style.border = '2px solid green'
//   }
// }
// ////////////////////////////////////////////////


// const b3 = document.querySelector('#b-3')

// b3.onclick = () => {
//   let out = document.querySelector('#out-3')
//   let a = +document.querySelector('#i-31').value
//   let b = +document.querySelector('#i-32').value;
//   a > b ? out.innerHTML = a : out.innerHTML = b
// }

// //////////////////////////////////////////////////


// const b4 = document.querySelector('#b-4')
// b4.onclick = () => {
//   let out = document.querySelector('#out-4')
//   let nowYear = 2023
//   let a = +document.querySelector('#i-4').value
//   let b = nowYear - a
//   b < 18 ? out.innerHTML = 'Вы несовершеннолетний!' : out.innerHTML = 'Вы совершеннолетний!'
// }

// ////////////////////////////////////////////////////

// const b6 = document.querySelector('#b-6')
// b6.onclick = () => {
//   let out = document.querySelector('#out-6')
//   let a = +document.querySelector('#i-6').value
//   a % 2 == 0 ? out.innerHTML = 'Четное!' : out.innerHTML = 'Нечетное!'
// }

// //////////////////////////////////////////////////////

// const b8 = document.querySelector('#b-8')
// b8.onclick = () => {
//   let out = document.querySelector('#out-8')
//   let a = +document.querySelector('#s-8').value
//    out.innerHTML = a
// }

// //////////////////////////////////////////////////////


// // Регистрация (одноразовая), я знаю как сделать массив на много аккаунтов, но мне лень сейчас это делать!

// let loginRegistration
// let passwordRegistration
// const buttonReg = document.querySelector('#buttonReg')

// buttonReg.onclick = () => {
//   loginRegistration = document.querySelector('#loginReg').value
//   passwordRegistration = document.querySelector('#passwordReg').value
//   document.querySelector('#passedReg').innerHTML = 'Вы успешно зарегистрировались!'
//   document.querySelector('#loginReg').value = ''
//   document.querySelector('#passwordReg').value = ''
//   document.querySelector('#passedAuto').innerHTML = ''
//   document.querySelector('#loginAuto').value = ''
//   document.querySelector('#passwordAuto').value = ''
// }

// // Авторизация (одноразовая), я знаю как сделать массив на много аккаунтов, но мне лень сейчас это делать!

// const buttonAutorization = document.querySelector('#buttonAutorization')
// buttonAutorization.onclick = () => {
//   let loginAutorization = document.querySelector('#loginAuto').value
//   let passwordAutorization = document.querySelector('#passwordAuto').value
//   if (loginRegistration === loginAutorization && passwordRegistration === passwordAutorization) {
//     document.querySelector('#passedAuto').innerHTML = 'Вы успешно авторизовались!'
//     document.querySelector('#passedReg').innerHTML = ''
//     document.querySelector('#loginReg').value = ''
//     document.querySelector('#passwordReg').value = ''
//   }
//   else {
//     document.querySelector('#passedAuto').innerHTML = 'Вы ввели неправильный логин или пароль!'
//     document.querySelector('#passedReg').innerHTML = ''
//   }
// }

// ////////////////////////////////////////////////////////
// let body = document.querySelector('body')
// let backColor = document.querySelector('#backColor')
// backColor.oninput = () => {
//   body.style.backgroundColor = document.querySelector('#backColor').value
// }
// //////////////////////////////////////////////////////////
// // ИММИТАЦИЯ РЕГУЛИРОВКИ ГРОМКОСТИ
// const buttonOffVolume = document.querySelector('#offImmitationVolume')
//   document.querySelector('#immitationVolume').oninput = () => {
//   document.querySelector('#resultImmitationVolume').innerHTML = document.querySelector('#immitationVolume').value
//   if (document.querySelector('#immitationVolume').value > 0 && document.querySelector('#immitationVolume').value < 25) {
//     document.querySelector('#imVoOff').innerHTML = '  <)   '
//   }
//   else if (document.querySelector('#immitationVolume').value > 0 && document.querySelector('#immitationVolume').value < 50) {
//     document.querySelector('#imVoOff').innerHTML = '  <))   '
//   }
//   else if (document.querySelector('#immitationVolume').value > 0 && document.querySelector('#immitationVolume').value <= 100) {
//     document.querySelector('#imVoOff').innerHTML = '  <)))   '
//   }
//   else if (document.querySelector('#immitationVolume').value == 0) {
//     document.querySelector('#imVoOff').innerHTML = '  X   '
//   }
// }

// let localValueVolume = document.querySelector('#immitationVolume').value

// buttonOffVolume.onclick = () => {
//   if (document.querySelector('#immitationVolume').value > 0) {
//   localValueVolume = document.querySelector('#immitationVolume').value
//   document.querySelector('#immitationVolume').value = 0
//   document.querySelector('#resultImmitationVolume').innerHTML = 0
//   document.querySelector('#imVoOff').innerHTML = '  X   '
// }
//   else if (document.querySelector('#immitationVolume').value == 0) {
//     document.querySelector('#immitationVolume').value = localValueVolume
//     let ll = document.querySelector('#resultImmitationVolume').innerHTML = document.querySelector('#immitationVolume').value
//     if (ll > 0 && ll < 25) {
//       document.querySelector('#imVoOff').innerHTML = '  <)   '
//     }
//     else if (ll > 0 && ll < 50) {
//       document.querySelector('#imVoOff').innerHTML = '  <))   '
//     }
//     else if (ll > 0 && ll <= 100) {
//       document.querySelector('#imVoOff').innerHTML = '  <)))   '
//     }
//   }
// }

// ///////////////////////////////////////////////////////////////////

// const btnTest = document.querySelector("#btnTest")
// btnTest.onclick = () => {
// }

// ////////////////////////////////////////////////////////////////////
// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// const randomBtn = document.querySelector("#randomBtn")
// randomBtn.onclick = () => {
//   let a = +document.querySelector('#firstRandomValue').value
//   let b = +document.querySelector('#secondRandomValue').value
//   document.querySelector('#resultRandomValue').innerHTML = randomInteger(a, b)
//   console.log(document.querySelector('#resultRandomValue'));
// }

// function randColor(elem) {
// let element = document.querySelector(elem),
// r = Math.floor(Math.random() * (256)),
// g = Math.floor(Math.random() * (256)),
// b = Math.floor(Math.random() * (256)),
// color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

// element.style.background = color;
// return color
// }
// const randomColorBtn = document.querySelector('#randomColorBtn')
// randomColorBtn.onclick = () => {
//   randColor('#randomColor')
//   document.querySelector('#randomColorId').innerHTML = randColor('#randomColor')
// }

/////////////////////////////////////////////////////////////////////
// РАНДОМ РОЛЕЙ В МАФИИ
const mafiaBtn09 = document.querySelector('#mafiaBtn09')
const mafiaBtn10 = document.querySelector('#mafiaBtn10')
const mafiaBtn11 = document.querySelector('#mafiaBtn11')
const mafiaBtn12 = document.querySelector('#mafiaBtn12')
const mafiaBtn13 = document.querySelector('#mafiaBtn13')
const mafiaBtn14 = document.querySelector('#mafiaBtn14')
const mafiaBtn15 = document.querySelector('#mafiaBtn15')
const mafiaRoleResult = document.querySelector('#mafiaRoleResult')

let randomRoleMassive = [];

let resultRoleRole = []



let shuffle = function (arr) {
    for (let i = arr.length - 1; i > 0 ; i--) {
        let tmp = arr[i];
        let rnd = Math.floor(Math.random() * (i + 1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    resultRoleRole = [...arr]
    return arr;
}


mafiaBtn09.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
`
}

mafiaBtn10.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
`
}

mafiaBtn11.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Доктор💉','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
`
}

mafiaBtn12.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Дон🕵🏻','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
`
}

mafiaBtn13.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
`
}

mafiaBtn14.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Доктор💉','Дон🕵🏻','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪','Мирный житель🙍‍♂️']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
<br>
14) ${resultRoleRole[13]}
`
}

mafiaBtn15.onclick = () => {
  randomRoleMassive = []
  randomRoleMassive = ['Мафия🔫','Мирный житель🙍‍♂️','Мафия🔫','Мирный житель🙍‍♂️','Комиссар👮‍♂️','Мирный житель🙍‍♂️','Дон🕵🏻','Мирный житель🙍‍♂️','Доктор💉','Мафия🔫','Мирный житель🙍‍♂️','Любовница💖','Маньяк🔪','Мафия🔫','Доп.Роль❓']
// Run
for (let i = 0; i < 30; i++) {
  shuffle(randomRoleMassive);
}
mafiaRoleResult.innerHTML = 
`
1) ${resultRoleRole[0]}
<br>
2) ${resultRoleRole[1]}
<br>
3) ${resultRoleRole[2]}
<br>
4) ${resultRoleRole[3]}
<br>
5) ${resultRoleRole[4]}
<br>
6) ${resultRoleRole[5]}
<br>
7) ${resultRoleRole[6]}
<br>
8) ${resultRoleRole[7]}
<br>
9) ${resultRoleRole[8]}
<br>
10) ${resultRoleRole[9]}
<br>
11) ${resultRoleRole[10]}
<br>
12) ${resultRoleRole[11]}
<br>
13) ${resultRoleRole[12]}
<br>
14) ${resultRoleRole[13]}
<br>
15) ${resultRoleRole[14]}
`
}


///////
// РАНДОМ СЛОТОВ В МАФИИ
const slotBtn09 = document.querySelector('#slotBtn09')
const slotBtn10 = document.querySelector('#slotBtn10')
const slotBtn11 = document.querySelector('#slotBtn11')
const slotBtn12 = document.querySelector('#slotBtn12')
const slotBtn13 = document.querySelector('#slotBtn13')
const slotBtn14 = document.querySelector('#slotBtn14')
const slotBtn15 = document.querySelector('#slotBtn15')
const slotRoleResult = document.querySelector('#slotRoleResult')

let randomSlotMassive = [];

let resultSlotRole = []

let shuffleSlots = function (arr) {
  for (let i = arr.length - 1; i > 0 ; i--) {
      let tmp = arr[i];
      let rnd = Math.floor(Math.random() * (i + 1));

      arr[i] = arr[rnd];
      arr[rnd] = tmp;
  }
  resultSlotRole = [...arr]
  return arr;
}

slotBtn09.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
`
}

slotBtn10.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
`
}

slotBtn11.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
`
}

slotBtn12.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
`
}

slotBtn13.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
`
}

slotBtn14.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
<br>
14) ${resultSlotRole[13]}
`
}

slotBtn15.onclick = () => {
  randomSlotMassive = []
  randomSlotMassive = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// Run
for (let i = 0; i < 30; i++) {
  shuffleSlots(randomSlotMassive);
}
slotRoleResult.innerHTML = 
`
1) ${resultSlotRole[0]}
<br>
2) ${resultSlotRole[1]}
<br>
3) ${resultSlotRole[2]}
<br>
4) ${resultSlotRole[3]}
<br>
5) ${resultSlotRole[4]}
<br>
6) ${resultSlotRole[5]}
<br>
7) ${resultSlotRole[6]}
<br>
8) ${resultSlotRole[7]}
<br>
9) ${resultSlotRole[8]}
<br>
10) ${resultSlotRole[9]}
<br>
11) ${resultSlotRole[10]}
<br>
12) ${resultSlotRole[11]}
<br>
13) ${resultSlotRole[12]}
<br>
14) ${resultSlotRole[13]}
<br>
15) ${resultSlotRole[14]}
`
}


const mafiaBtnClose = document.querySelector('#mafiaBtnClose')
const mafiaCloseRandom = document.querySelector('#blockRules')
mafiaBtnClose.onclick = () => {
  mafiaCloseRandom.classList.toggle('blockRules')
}
////////////////
// CONTROL PANEL MAFIA

const controlBtn09 = document.querySelector('#controlBtn09')
const controlBtn10 = document.querySelector('#controlBtn10')
const controlBtn11 = document.querySelector('#controlBtn11')
const controlBtn12 = document.querySelector('#controlBtn12')
const controlBtn13 = document.querySelector('#controlBtn13')
const controlBtn14 = document.querySelector('#controlBtn14')
const controlBtn15 = document.querySelector('#controlBtn15')

const controlPanelResult = document.querySelector('#controlPanelResult')
const btnFalls = document.querySelector('#btnFalls')


// 9 ИГРОКОВ
controlBtn09.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 10 игроков
controlBtn10.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 11 Игроков

controlBtn11.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer11"> 11)  <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")

}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 12 игроков

controlBtn12.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer11"> 11)  <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer12"> 12)  <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 13 игроков
controlBtn13.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer11"> 11)  <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer12"> 12)  <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer13"> 13)  <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 14 игроков
controlBtn14.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer11"> 11)  <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer12"> 12)  <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer13"> 13)  <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer14"> 14)  <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer14.innerHTML = `14) <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer14.innerHTML = `14) <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Fall5" class="mafiaGreenBtn">5</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall5').onclick = () => {
  document.querySelector('#player14Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}
}
}

// 15 игроков
controlBtn15.onclick = () => {
  // Run
  btnFalls.innerHTML = 
  `
  <button id="fallBtn04">4 фола</button>
  <button id="fallBtn05">5 фолов</button> 
  `
  controlPanelResult.innerHTML = 
`
<br>
<span id = "mafiaPlayer1"> 1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer2"> 2)  <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer3"> 3)  <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer4"> 4)  <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer5"> 5)  <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer6"> 6)  <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer7"> 7)  <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer8"> 8)  <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer9"> 9)  <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer10"> 10)  <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer11"> 11)  <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer12"> 12)  <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer13"> 13)  <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer14"> 14)  <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить"></span>
<br>
<span id = "mafiaPlayer15"> 15)  <input type="button" id="pushVoting15" class = "voteBtn10" value = "Выставить"></span>
<br>
<div id="mafiaVoteResultString">
<br>
<button id="clearVoteMafia">Очистить</button>
</div>
`
let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#fallBtn04').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer14.innerHTML = `14) <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer15.innerHTML = `15) <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer15.innerHTML += 
`
<button id="player15Fall1" class="mafiaGreenBtn">1</button>
<button id="player15Fall2" class="mafiaGreenBtn">2</button>
<button id="player15Fall3" class="mafiaGreenBtn">3</button>
<button id="player15Fall4" class="mafiaGreenBtn">4</button>
<button id="player15Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player15Fall1').onclick = () => {
  document.querySelector('#player15Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall2').onclick = () => {
  document.querySelector('#player15Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall3').onclick = () => {
  document.querySelector('#player15Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall4').onclick = () => {
  document.querySelector('#player15Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Plus30').onclick = () => {
  document.querySelector('#player15Plus30').classList.toggle('mafiaRedBtn')
}

}



document.querySelector('#fallBtn05').onclick = () => {
  // Run
  mafiaPlayer1.innerHTML = `1) <input type="button" id="pushVoting1" class = "voteBtn" value = "Выставить">`
  mafiaPlayer2.innerHTML = `2) <input type="button" id="pushVoting2" class = "voteBtn" value = "Выставить">`
  mafiaPlayer3.innerHTML = `3) <input type="button" id="pushVoting3" class = "voteBtn" value = "Выставить">`
  mafiaPlayer4.innerHTML = `4) <input type="button" id="pushVoting4" class = "voteBtn" value = "Выставить">`
  mafiaPlayer5.innerHTML = `5) <input type="button" id="pushVoting5" class = "voteBtn" value = "Выставить">`
  mafiaPlayer6.innerHTML = `6) <input type="button" id="pushVoting6" class = "voteBtn" value = "Выставить">`
  mafiaPlayer7.innerHTML = `7) <input type="button" id="pushVoting7" class = "voteBtn" value = "Выставить">`
  mafiaPlayer8.innerHTML = `8) <input type="button" id="pushVoting8" class = "voteBtn" value = "Выставить">`
  mafiaPlayer9.innerHTML = `9) <input type="button" id="pushVoting9" class = "voteBtn" value = "Выставить">`
  mafiaPlayer10.innerHTML = `10) <input type="button" id="pushVoting10" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer11.innerHTML = `11) <input type="button" id="pushVoting11" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer12.innerHTML = `12) <input type="button" id="pushVoting12" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer13.innerHTML = `13) <input type="button" id="pushVoting13" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer14.innerHTML = `14) <input type="button" id="pushVoting14" class = "voteBtn10" value = "Выставить">`
  mafiaPlayer15.innerHTML = `15) <input type="button" id="pushVoting15" class = "voteBtn10" value = "Выставить">`

  mafiaPlayer1.innerHTML += 
`
<button id="player1Fall1" class="mafiaGreenBtn">1</button>
<button id="player1Fall2" class="mafiaGreenBtn">2</button>
<button id="player1Fall3" class="mafiaGreenBtn">3</button>
<button id="player1Fall4" class="mafiaGreenBtn">4</button>
<button id="player1Fall5" class="mafiaGreenBtn">5</button>
<button id="player1Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer2.innerHTML += 
`
<button id="player2Fall1" class="mafiaGreenBtn">1</button>
<button id="player2Fall2" class="mafiaGreenBtn">2</button>
<button id="player2Fall3" class="mafiaGreenBtn">3</button>
<button id="player2Fall4" class="mafiaGreenBtn">4</button>
<button id="player2Fall5" class="mafiaGreenBtn">5</button>
<button id="player2Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer3.innerHTML += 
`
<button id="player3Fall1" class="mafiaGreenBtn">1</button>
<button id="player3Fall2" class="mafiaGreenBtn">2</button>
<button id="player3Fall3" class="mafiaGreenBtn">3</button>
<button id="player3Fall4" class="mafiaGreenBtn">4</button>
<button id="player3Fall5" class="mafiaGreenBtn">5</button>
<button id="player3Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer4.innerHTML += 
`
<button id="player4Fall1" class="mafiaGreenBtn">1</button>
<button id="player4Fall2" class="mafiaGreenBtn">2</button>
<button id="player4Fall3" class="mafiaGreenBtn">3</button>
<button id="player4Fall4" class="mafiaGreenBtn">4</button>
<button id="player4Fall5" class="mafiaGreenBtn">5</button>
<button id="player4Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer5.innerHTML += 
`
<button id="player5Fall1" class="mafiaGreenBtn">1</button>
<button id="player5Fall2" class="mafiaGreenBtn">2</button>
<button id="player5Fall3" class="mafiaGreenBtn">3</button>
<button id="player5Fall4" class="mafiaGreenBtn">4</button>
<button id="player5Fall5" class="mafiaGreenBtn">5</button>
<button id="player5Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer6.innerHTML += 
`
<button id="player6Fall1" class="mafiaGreenBtn">1</button>
<button id="player6Fall2" class="mafiaGreenBtn">2</button>
<button id="player6Fall3" class="mafiaGreenBtn">3</button>
<button id="player6Fall4" class="mafiaGreenBtn">4</button>
<button id="player6Fall5" class="mafiaGreenBtn">5</button>
<button id="player6Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer7.innerHTML += 
`
<button id="player7Fall1" class="mafiaGreenBtn">1</button>
<button id="player7Fall2" class="mafiaGreenBtn">2</button>
<button id="player7Fall3" class="mafiaGreenBtn">3</button>
<button id="player7Fall4" class="mafiaGreenBtn">4</button>
<button id="player7Fall5" class="mafiaGreenBtn">5</button>
<button id="player7Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer8.innerHTML += 
`
<button id="player8Fall1" class="mafiaGreenBtn">1</button>
<button id="player8Fall2" class="mafiaGreenBtn">2</button>
<button id="player8Fall3" class="mafiaGreenBtn">3</button>
<button id="player8Fall4" class="mafiaGreenBtn">4</button>
<button id="player8Fall5" class="mafiaGreenBtn">5</button>
<button id="player8Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer9.innerHTML += 
`
<button id="player9Fall1" class="mafiaGreenBtn">1</button>
<button id="player9Fall2" class="mafiaGreenBtn">2</button>
<button id="player9Fall3" class="mafiaGreenBtn">3</button>
<button id="player9Fall4" class="mafiaGreenBtn">4</button>
<button id="player9Fall5" class="mafiaGreenBtn">5</button>
<button id="player9Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer10.innerHTML += 
`
<button id="player10Fall1" class="mafiaGreenBtn">1</button>
<button id="player10Fall2" class="mafiaGreenBtn">2</button>
<button id="player10Fall3" class="mafiaGreenBtn">3</button>
<button id="player10Fall4" class="mafiaGreenBtn">4</button>
<button id="player10Fall5" class="mafiaGreenBtn">5</button>
<button id="player10Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer11.innerHTML += 
`
<button id="player11Fall1" class="mafiaGreenBtn">1</button>
<button id="player11Fall2" class="mafiaGreenBtn">2</button>
<button id="player11Fall3" class="mafiaGreenBtn">3</button>
<button id="player11Fall4" class="mafiaGreenBtn">4</button>
<button id="player11Fall5" class="mafiaGreenBtn">5</button>
<button id="player11Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer12.innerHTML += 
`
<button id="player12Fall1" class="mafiaGreenBtn">1</button>
<button id="player12Fall2" class="mafiaGreenBtn">2</button>
<button id="player12Fall3" class="mafiaGreenBtn">3</button>
<button id="player12Fall4" class="mafiaGreenBtn">4</button>
<button id="player12Fall5" class="mafiaGreenBtn">5</button>
<button id="player12Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer13.innerHTML += 
`
<button id="player13Fall1" class="mafiaGreenBtn">1</button>
<button id="player13Fall2" class="mafiaGreenBtn">2</button>
<button id="player13Fall3" class="mafiaGreenBtn">3</button>
<button id="player13Fall4" class="mafiaGreenBtn">4</button>
<button id="player13Fall5" class="mafiaGreenBtn">5</button>
<button id="player13Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer14.innerHTML += 
`
<button id="player14Fall1" class="mafiaGreenBtn">1</button>
<button id="player14Fall2" class="mafiaGreenBtn">2</button>
<button id="player14Fall3" class="mafiaGreenBtn">3</button>
<button id="player14Fall4" class="mafiaGreenBtn">4</button>
<button id="player14Fall5" class="mafiaGreenBtn">5</button>
<button id="player14Plus30" class="mafiaGreenBtn">+30</button>
`
mafiaPlayer15.innerHTML += 
`
<button id="player15Fall1" class="mafiaGreenBtn">1</button>
<button id="player15Fall2" class="mafiaGreenBtn">2</button>
<button id="player15Fall3" class="mafiaGreenBtn">3</button>
<button id="player15Fall4" class="mafiaGreenBtn">4</button>
<button id="player15Fall5" class="mafiaGreenBtn">5</button>
<button id="player15Plus30" class="mafiaGreenBtn">+30</button>
`

let localArrVote = []

document.querySelector('#pushVoting1').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting1').value === 'Выставить') {
    document.querySelector('#pushVoting1').value = 'Отменить'
    localArrVote.push(1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting1').value === 'Отменить') {
    let localIndexVote1 = localArrVote.indexOf(1)
    localArrVote.splice(localIndexVote1, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting1').value = 'Выставить'
  }
}

document.querySelector('#pushVoting2').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting2').value === 'Выставить') {
    document.querySelector('#pushVoting2').value = 'Отменить'
    localArrVote.push(2)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting2').value === 'Отменить') {
    let localIndexVote2 = localArrVote.indexOf(2)
    localArrVote.splice(localIndexVote2, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting2').value = 'Выставить'
}
}

document.querySelector('#pushVoting3').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting3').value === 'Выставить') {
    document.querySelector('#pushVoting3').value = 'Отменить'
    localArrVote.push(3)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting3').value === 'Отменить') {
    let localIndexVote3 = localArrVote.indexOf(3)
    localArrVote.splice(localIndexVote3, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting3').value = 'Выставить'
}
}

document.querySelector('#pushVoting4').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting4').value === 'Выставить') {
    document.querySelector('#pushVoting4').value = 'Отменить'
    localArrVote.push(4)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting4').value === 'Отменить') {
    let localIndexVote4 = localArrVote.indexOf(4)
    localArrVote.splice(localIndexVote4, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting4').value = 'Выставить'
}
}

document.querySelector('#pushVoting5').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting5').value === 'Выставить') {
    document.querySelector('#pushVoting5').value = 'Отменить'
    localArrVote.push(5)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting5').value === 'Отменить') {
    let localIndexVote5 = localArrVote.indexOf(5)
    localArrVote.splice(localIndexVote5, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting5').value = 'Выставить'
}
}

document.querySelector('#pushVoting6').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting6').value === 'Выставить') {
    document.querySelector('#pushVoting6').value = 'Отменить'
    localArrVote.push(6)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting6').value === 'Отменить') {
    let localIndexVote6 = localArrVote.indexOf(6)
    localArrVote.splice(localIndexVote6, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting6').value = 'Выставить'
}
}

document.querySelector('#pushVoting7').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting7').value === 'Выставить') {
    document.querySelector('#pushVoting7').value = 'Отменить'
    localArrVote.push(7)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting7').value === 'Отменить') {
    let localIndexVote7 = localArrVote.indexOf(7)
    localArrVote.splice(localIndexVote7, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting7').value = 'Выставить'
}
}

document.querySelector('#pushVoting8').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting8').value === 'Выставить') {
    document.querySelector('#pushVoting8').value = 'Отменить'
    localArrVote.push(8)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting8').value === 'Отменить') {
    let localIndexVote8 = localArrVote.indexOf(8)
    localArrVote.splice(localIndexVote8, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting8').value = 'Выставить'
}
}

document.querySelector('#pushVoting9').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting9').value === 'Выставить') {
    document.querySelector('#pushVoting9').value = 'Отменить'
    localArrVote.push(9)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting9').value === 'Отменить') {
    let localIndexVote9 = localArrVote.indexOf(9)
    localArrVote.splice(localIndexVote9, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting9').value = 'Выставить'
}
}

document.querySelector('#pushVoting10').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting10').value === 'Выставить') {
    document.querySelector('#pushVoting10').value = 'Отменить'
    localArrVote.push(10)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting10').value === 'Отменить') {
    let localIndexVote10 = localArrVote.indexOf(10)
    localArrVote.splice(localIndexVote10, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting10').value = 'Выставить'
}
}

document.querySelector('#pushVoting11').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting11').value === 'Выставить') {
    document.querySelector('#pushVoting11').value = 'Отменить'
    localArrVote.push(11)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting11').value === 'Отменить') {
    let localIndexVote11 = localArrVote.indexOf(11)
    localArrVote.splice(localIndexVote11, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting11').value = 'Выставить'
}
}

document.querySelector('#pushVoting12').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting12').value === 'Выставить') {
    document.querySelector('#pushVoting12').value = 'Отменить'
    localArrVote.push(12)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting12').value === 'Отменить') {
    let localIndexVote12 = localArrVote.indexOf(12)
    localArrVote.splice(localIndexVote12, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting12').value = 'Выставить'
}
}

document.querySelector('#pushVoting13').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting13').value === 'Выставить') {
    document.querySelector('#pushVoting13').value = 'Отменить'
    localArrVote.push(13)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting13').value === 'Отменить') {
    let localIndexVote13 = localArrVote.indexOf(13)
    localArrVote.splice(localIndexVote13, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting13').value = 'Выставить'
}
}

document.querySelector('#pushVoting14').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting14').value === 'Выставить') {
    document.querySelector('#pushVoting14').value = 'Отменить'
    localArrVote.push(14)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting14').value === 'Отменить') {
    let localIndexVote14 = localArrVote.indexOf(14)
    localArrVote.splice(localIndexVote14, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting14').value = 'Выставить'
}
}

document.querySelector('#pushVoting15').onclick = () => {
  // Run
  if (document.querySelector('#pushVoting15').value === 'Выставить') {
    document.querySelector('#pushVoting15').value = 'Отменить'
    localArrVote.push(15)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
  }
  else if (document.querySelector('#pushVoting15').value === 'Отменить') {
    let localIndexVote15 = localArrVote.indexOf(15)
    localArrVote.splice(localIndexVote15, 1)
    document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
    document.querySelector('#pushVoting15').value = 'Выставить'
}
}

document.querySelector('#clearVoteMafia').onclick = () => {
  // Run
  document.querySelector("#pushVoting1").value = 'Выставить'
  document.querySelector("#pushVoting2").value = 'Выставить'
  document.querySelector("#pushVoting3").value = 'Выставить'
  document.querySelector("#pushVoting4").value = 'Выставить'
  document.querySelector("#pushVoting5").value = 'Выставить'
  document.querySelector("#pushVoting6").value = 'Выставить'
  document.querySelector("#pushVoting7").value = 'Выставить'
  document.querySelector("#pushVoting8").value = 'Выставить'
  document.querySelector("#pushVoting9").value = 'Выставить'
  document.querySelector("#pushVoting10").value = 'Выставить'
  document.querySelector("#pushVoting11").value = 'Выставить'
  document.querySelector("#pushVoting12").value = 'Выставить'
  document.querySelector("#pushVoting13").value = 'Выставить'
  document.querySelector("#pushVoting14").value = 'Выставить'
  document.querySelector("#pushVoting15").value = 'Выставить'
  localArrVote = []
  document.querySelector('#resultVoteMafia').innerHTML = `<span></span>` + localArrVote.join(" ")
}

document.querySelector('#player1Fall1').onclick = () => {
  document.querySelector('#player1Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall2').onclick = () => {
  document.querySelector('#player1Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall3').onclick = () => {
  document.querySelector('#player1Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall4').onclick = () => {
  document.querySelector('#player1Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Fall5').onclick = () => {
  document.querySelector('#player1Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player1Plus30').onclick = () => {
  document.querySelector('#player1Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player2Fall1').onclick = () => {
  document.querySelector('#player2Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall2').onclick = () => {
  document.querySelector('#player2Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall3').onclick = () => {
  document.querySelector('#player2Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall4').onclick = () => {
  document.querySelector('#player2Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Fall5').onclick = () => {
  document.querySelector('#player2Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player2Plus30').onclick = () => {
  document.querySelector('#player2Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player3Fall1').onclick = () => {
  document.querySelector('#player3Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall2').onclick = () => {
  document.querySelector('#player3Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall3').onclick = () => {
  document.querySelector('#player3Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall4').onclick = () => {
  document.querySelector('#player3Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Fall5').onclick = () => {
  document.querySelector('#player3Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player3Plus30').onclick = () => {
  document.querySelector('#player3Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player4Fall1').onclick = () => {
  document.querySelector('#player4Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall2').onclick = () => {
  document.querySelector('#player4Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall3').onclick = () => {
  document.querySelector('#player4Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall4').onclick = () => {
  document.querySelector('#player4Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Fall5').onclick = () => {
  document.querySelector('#player4Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player4Plus30').onclick = () => {
  document.querySelector('#player4Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player5Fall1').onclick = () => {
  document.querySelector('#player5Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall2').onclick = () => {
  document.querySelector('#player5Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall3').onclick = () => {
  document.querySelector('#player5Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall4').onclick = () => {
  document.querySelector('#player5Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Fall5').onclick = () => {
  document.querySelector('#player5Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player5Plus30').onclick = () => {
  document.querySelector('#player5Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player6Fall1').onclick = () => {
  document.querySelector('#player6Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall2').onclick = () => {
  document.querySelector('#player6Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall3').onclick = () => {
  document.querySelector('#player6Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall4').onclick = () => {
  document.querySelector('#player6Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Fall5').onclick = () => {
  document.querySelector('#player6Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player6Plus30').onclick = () => {
  document.querySelector('#player6Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player7Fall1').onclick = () => {
  document.querySelector('#player7Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall2').onclick = () => {
  document.querySelector('#player7Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall3').onclick = () => {
  document.querySelector('#player7Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall4').onclick = () => {
  document.querySelector('#player7Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Fall5').onclick = () => {
  document.querySelector('#player7Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player7Plus30').onclick = () => {
  document.querySelector('#player7Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player8Fall1').onclick = () => {
  document.querySelector('#player8Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall2').onclick = () => {
  document.querySelector('#player8Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall3').onclick = () => {
  document.querySelector('#player8Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall4').onclick = () => {
  document.querySelector('#player8Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Fall5').onclick = () => {
  document.querySelector('#player8Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player8Plus30').onclick = () => {
  document.querySelector('#player8Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player9Fall1').onclick = () => {
  document.querySelector('#player9Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall2').onclick = () => {
  document.querySelector('#player9Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall3').onclick = () => {
  document.querySelector('#player9Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall4').onclick = () => {
  document.querySelector('#player9Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Fall5').onclick = () => {
  document.querySelector('#player9Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player9Plus30').onclick = () => {
  document.querySelector('#player9Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player10Fall1').onclick = () => {
  document.querySelector('#player10Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall2').onclick = () => {
  document.querySelector('#player10Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall3').onclick = () => {
  document.querySelector('#player10Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall4').onclick = () => {
  document.querySelector('#player10Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Fall5').onclick = () => {
  document.querySelector('#player10Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player10Plus30').onclick = () => {
  document.querySelector('#player10Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player11Fall1').onclick = () => {
  document.querySelector('#player11Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall2').onclick = () => {
  document.querySelector('#player11Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall3').onclick = () => {
  document.querySelector('#player11Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall4').onclick = () => {
  document.querySelector('#player11Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Fall5').onclick = () => {
  document.querySelector('#player11Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player11Plus30').onclick = () => {
  document.querySelector('#player11Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player12Fall1').onclick = () => {
  document.querySelector('#player12Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall2').onclick = () => {
  document.querySelector('#player12Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall3').onclick = () => {
  document.querySelector('#player12Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall4').onclick = () => {
  document.querySelector('#player12Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Fall5').onclick = () => {
  document.querySelector('#player12Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player12Plus30').onclick = () => {
  document.querySelector('#player12Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player13Fall1').onclick = () => {
  document.querySelector('#player13Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall2').onclick = () => {
  document.querySelector('#player13Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall3').onclick = () => {
  document.querySelector('#player13Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall4').onclick = () => {
  document.querySelector('#player13Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Fall5').onclick = () => {
  document.querySelector('#player13Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player13Plus30').onclick = () => {
  document.querySelector('#player13Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player14Fall1').onclick = () => {
  document.querySelector('#player14Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall2').onclick = () => {
  document.querySelector('#player14Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall3').onclick = () => {
  document.querySelector('#player14Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall4').onclick = () => {
  document.querySelector('#player14Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Fall5').onclick = () => {
  document.querySelector('#player14Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player14Plus30').onclick = () => {
  document.querySelector('#player14Plus30').classList.toggle('mafiaRedBtn')
}

document.querySelector('#player15Fall1').onclick = () => {
  document.querySelector('#player15Fall1').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall2').onclick = () => {
  document.querySelector('#player15Fall2').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall3').onclick = () => {
  document.querySelector('#player15Fall3').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall4').onclick = () => {
  document.querySelector('#player15Fall4').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Fall5').onclick = () => {
  document.querySelector('#player15Fall5').classList.toggle('mafiaRedBtn')
}
document.querySelector('#player15Plus30').onclick = () => {
  document.querySelector('#player15Plus30').classList.toggle('mafiaRedBtn')
}
}
}

/// КОНЕЦ КНОПОЧЕК
/// Секундомер
var base = 60; 
   var clocktimer,dateObj,dh,dm,ds,ms; 
   var readout=''; 
   var h=1,m=1,tm=1,s=0,ts=0,ms=0,init=0; 
   
   //функция для очистки поля
   function ClearСlock() { 
        clearTimeout(clocktimer); 
        h=1;m=1;tm=1;s=0;ts=0;ms=0; 
        init=0;
        readout='00:00.00'; 
        document.MyForm.stopwatch.value=readout; 
   } 
   
   //функция для старта секундомера
   function StartTIME() { 
        var cdateObj = new Date(); 
        var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
        if (t>999) { s++; } 
        if (s>=(m*base)) { 
                ts=0; 
                m++; 
        } else { 
                ts=parseInt((ms/100)+s); 
                if(ts>=base) { ts=ts-((m-1)*base); } 
        } 
        if (m>(h*base)) { 
                tm=1; 
                h++; 
        } else { 
                tm=parseInt((ms/100)+m); 
                if(tm>=base) { tm=tm-((h-1)*base); } 
        } 
        ms = Math.round(t/10); 
        if (ms>99) {ms=0;} 
        if (ms==0) {ms='00';} 
        if (ms>0&&ms<=9) { ms = '0'+ms; } 
        if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
        dm=tm-1; 
        if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
        dh=h-1; 
        if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
        readout = dm + ':' + ds + '.' + ms; 
        document.MyForm.stopwatch.value = readout; 
        clocktimer = setTimeout("StartTIME()",1); 
   } 
   
   //Функция запуска и остановки
   function StartStop() { 
        if (init==0){ 
                ClearСlock();
                dateObj = new Date(); 
                StartTIME(); 
                init=1; 
        } else { 
                clearTimeout(clocktimer);
                init=0;
        } 
   } 
///////////////////////////////////////