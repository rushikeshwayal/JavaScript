let x;


const name='namaste';
const age =30;
x='hello Bharat ' + name +' '+ age ; 
console.log(x);  //hello Bharat namaste 30

//templete literals
x = `hello Bharat ${name} ${age}`;
console.log(x);  //hello Bharat namaste 30

//String Properties and Meathod

const st = 'Hello World!';

//lenth proprty
x= st.length;
console.log(x);  // 12


//acessing string element by its index number or key

x  = st[1];
console.log(x);  // e


// all different methods
x = st.__proto__;
console.log(x);

x= st.toUpperCase();
console.log(x);  // HELLO WORLD!

x= st.toLowerCase();
console.log(x);  // hello world!

x= st.charAt(1);
console.log(x); // e

x= st.indexOf('d');
console.log(x); // 10

x= st.substring(0,5);
console.log(x);  // Hello

x= st.slice(-11,-6);
console.log(x);  // ello 

x = '     Hello World';
x= x.trim();
console.log(x); // Hello World

x= st.replace('World','John');
console.log(x); // Hello John!

x=st.includes('Hello')
console.log(x);  // true

x =  st.valueOf();
console.log(x);   //Hello World!

x= st.split('');
console.log(x); //(12) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!']
