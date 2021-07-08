function makeANumber() {
  let myNum = 5;
  return myNum;
}

function makeInteger() {
  let myInt = 4;
  return myInt;
}

function makeAFloat() {
  let myFloat = 3.4567;
  return myFloat;
}
function makeZero() {
  let zilch = 0;
  return zilch;
}

function makeNothing() {
  let huh;
  return huh;
}

function makeBoolean() {
  let myBool = true;
  return myBool;
}

function makeTrue() {
  let yep = true;
  return true;
}

function makeFalse() {
  let nope = false;
  return nope;
}

function makeNull() {
  let nothingMuch = null;
  return nothingMuch;
}

function helloWorld() {
  return "Hello, World!";
}

function helloName(name) {
  return `Hello ${name}!`;
}

function abstractLength() {
  const tarPitAbstract =
    "Complexity is the single major difficulty in the successful development of large-scale software systems. " +
    "Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. " +
    "We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. " +
    "To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.";
  return tarPitAbstract.length;
}

function makeLoud() {
  let chorus = "Who let the dogs out?";
  return chorus.toUpperCase();
}

function makeQuiet(str) {
  return str.toLowerCase();
}

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function threeFruits() {
  let fruits = ["Apple", "Banana", "Cherry"];
  return fruits;
}
function multipleTypes() {
  let diverseArray = [
    "Skateboard",
    null,
    8.75,
    "Eiffel Tower",
    44,
    7,
    true,
    null
  ];
  return diverseArray;
}

function indexAccess() {
  let people = ["Mike", "Scott", "Al", "Carmen", "Erik", "Jake", "Julia"];
  return people[2];
}

function useLength() {
  let arr = ["a", "b", "c"];
  return arr.length;
}

function usePush() {
  let arr = ["a", "b", "c"];
  arr.push("d");
  return arr;
}

function useIndexOf() {
  let arr = ["a", "g", "t", "a", "a", "g", "t"];
  return arr.indexOf("t");
}

function useJoin() {
  let arr = ["a", "b", "c", "d", "e", "f"];
  return arr.join("-");
}
function threeNumbers() {
  const numbers = { numberOne: 1, numberTwo: 2, numberThree: 3 };
  return Object.values(numbers);
}

function manyTypes() {
  const diverseObject = { name: "banana", count: 42, isDelicious: true };
  return Object.values(diverseObject);
}

// console.log(threeNumbers());
console.log(manyTypes());
// console.log(useJoin());
// console.log(useIndexOf("t"));
// console.log(usePush());
// console.log(makeQuiet("YOLO"));
// console.log(makeLoud());
// console.log(abstractLength());
// console.log(helloName("Mike"));
// console.log(helloWorld());
// console.log(makeANumber());
// console.log(makeInteger());
// console.log(makeAFloat());
