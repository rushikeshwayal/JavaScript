// primitive data type
/*
1.string - seq of char
2.Number - integer and floting point numbers
3.Boolean - true or false , 1 or 0 etc
4.Null - absence of any object
// 5.Undefind - variable that has not yet been deen define / assinged
6.Symbol -  built-in pbject whose constructor returns a uniqe symbole
7.BigInt - number that are greater than"Number"
*/

// Javascript is dynamic type of lang
// also python is dynamic


// String

const firstName ='Sara';
console.log(firstName , typeof firstName);

// Number
const num = 20;
console.log(num , typeof num);

const temp = 44.65;
console.log(temp,typeof temp);

//Null

const apartmentNumber = null;
console.log(apartmentNumber,typeof apartmentNumber);

// undefined

const score =undefined;
console.log(score,typeof score);

// Symble
const id =Symbol('id');
console.log(id,typeof id);

// bigInt
const big =134352352452233;
console.log(big,typeof big);

// referance type
const arr =[1,33,44,5];
console.log(arr,typeof arr);

const person={
    yourName:'rushikesh',
}
console.log(person,typeof person);

// referance type- function

function sayHello() {
    console.log('Hello!');
}
sayHello();
console.log(sayHello,typeof sayHello);
