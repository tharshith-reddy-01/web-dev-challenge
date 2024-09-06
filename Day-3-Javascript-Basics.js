let a = 1;
a = 2;
console.log(a);

let name = "hair";
let age = 18;
let ism = false;
console.log(name, age, ism);

if (age > 18) {
  console.log("You are not a child");
} else if (age == 18) {
  console.log("You are 18");
} else {
  console.log("You are a child");
}

let sum = 0;
for (let i = 0; i <= 10000; i++) {
  sum += i;
}
console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]);
console.log(numbers.length);

const persons = [
  { name: "hair1", age: 185, ism: false },
  { name: "hair2", age: 18, ism: false },
  { name: "hair3", age: 185, ism: false },
];
console.log(persons[0].name);

let str = "  hello world world bye world. ";
console.log(str);
console.log(str.length);
console.log(str.includes("world"));
console.log(str.indexOf("world"));
console.log(str.lastIndexOf("world"));
console.log(str.slice(0, 5));
console.log(str.substring(0, 5)); 
console.log(str.split("r"));
console.log(str.replace("world", "hair"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

console.log(parseInt("42"));
console.log(parseFloat("42.42"));
console.log(parseInt("42.42"));

const arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr);
arr.push(6);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(8);
console.log(arr);

const arr2 = [21, 45, 36, 7, 9];
const combined = arr.concat(arr2);
console.log(combined);

const personObj = {
  name: "we",
  age: 18,
  todo: function () {
    console.log(this.age + " is a good age");
  },
};

personObj.todo(); 
personObj.nationality = "India"; 
console.log(personObj.nationality);

console.log(Object.values(personObj));
console.log(Object.keys(personObj));
console.log(Object.entries(personObj));

let jsonString = JSON.stringify(personObj);
console.log(jsonString);

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English"; 
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myFather, myMother, mySister, mySelf);
