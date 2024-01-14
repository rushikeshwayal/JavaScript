//primitive
/*
primitive data type is stored
in memory known as stack
and accessed by 
String | Number | Boolean | Null | Undefined | Symbole |BigInt
*/

//Referance Type
/*
referance data type aree stored 
in memory known as heap
and accessed by
Array | Function | Object
*/


//stored in stack
const name ='john';
const age = 30;

//stored in heap
const person = {
    name :'rushikesh',
    age : 19,
}

let newName = name;
newName='jonathon';
console.log(name,newName);

let newPerson = person;
console.log(person,newPerson);


newPerson.name='rushi';
console.log(person,newPerson);