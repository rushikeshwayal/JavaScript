console.log(1000);


console.log('hello');

console.log('hii' ,30 , 'namaste');

const x=20;
let y=x+10;

console.log('x = ' , x ,"y = ",y);

console.error('Aleart');

console.warn('Warning');

console.table({fullName :'rushikesh' , email:'rushikeshwayal6@gmail.com'});


console.group('simple');
console.log('x = ' , x ,"y = ",y);
console.error('Aleart');
console.warn('Warning');
console.groupEnd();

let style = 'padding : 10px; background-color: white; color:green;';
console.log('%c hello world!',style);