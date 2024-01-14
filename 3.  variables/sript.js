//ways of variable declaration

//var ,const , let

let firstName= 'rushikesh'; 
let lastName='wayal';

console.log(firstName,lastName);

let age =30;

console.log(age);

//Naming convention
// -only letters,underscore and doller sign
// - can't start with numbers


//Multi-Word Formating
// firstName = camalCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

age=age+1;
console.log(age);

let marks;
marks= 29;

if (true) {
    marks=marks+1;
}
console.log(marks);

// console.log(num);
// var num=12;


const num=12;
console.log(num);

/*
num=num+1;
console.log(num);

//constant can not be directly reassing

*/


/*
const score;

//cannot decleare without initialisation
 
*/

let array=[1,2,3,4];
array = [1,2,3,4,5];

console.log(array);


const arr =[1,2,3,4];
// aarr=[1,2,3,4,5] can't directly reassing 
arr.push(5);
console.log(arr);


const person={
    Name:'rushikesh',

}

person.Name='Avinash';
person.email='rushikesh@gmail.com'
// it is valid because we are not changing the varibles
//  value we are changing
// the property or key value inside the variable

console.log(person);

// declear multiple variable

let a,b,c;

const d=20,e=5,f=55;

console.log(d,e,f);
