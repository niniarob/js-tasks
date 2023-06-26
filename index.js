// return the sum of all the positives ones:

let arr = [1, 2, -2, 5, 6, -3];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum = sum + arr[i];
  }
}
console.log(sum);



let x = [1, -2, 3, -4, 5, -6];
let y = x.filter(x => x > 0).reduce((acc, curr) => acc + curr, 0);

console.log(y);



// Abbreviate the name and return the name initials and move it to Upper Case:

let name = "nino robakidze";
let split= name.split(' ');
let firstC = "";

for (let i = 0; i < split.length; i++) {
  firstC = firstC + split[i].charAt(0).toUpperCase();
}
console.log(firstC);


const name = "nino robakidze ";
const split = name.split(' ');
const firstC = split.map(word => word.charAt(0).toUpperCase()).join(' ');

console.log(firstC);





// Given an array of strings, remove the last character of each string:

let strings = ["help", "me"];
let array = [];

for (let i = 0; i < strings.length; i++) {
  let str = strings[i].slice(0, -1);
  array.push(str);
}
console.log( array);


const strings = ["help", "me"];
const array = strings.map(str => str.slice(0, -1));

console.log(array);
