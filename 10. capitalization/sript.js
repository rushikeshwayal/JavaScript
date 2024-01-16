/*  "🍉🍉🍉"  */


//solution 1
let myString = 'developer';
let myNewString = myString[0];
myNewString = myNewString.toUpperCase();
myString = myString.slice(1);
myNewString = myNewString + myString;
console.log(myNewString);



//solution 2

let myString2 = 'developer';
let myNewString2 = myString2[0].toUpperCase();
myNewString2=myNewString2 + myString.slice(0) ;
console.log(myNewString2);



// solution 3

const myString3 = 'developer';
let myNewString3 = myString2[0].toUpperCase() + myString3.slice(1);
console.log(myNewString3);