/*  "🍉🍉🍉"  */

let x;
const num =new Number(5.35875);

x=num.toString();
console.log(x); // 5

// x = num.length();
// console.log(x); //error

x = num.toString().length;
console.log(x); // 1

x = num.toFixed(2)
console.log(x); //5.36

x = num.toPrecision(2);
console.log(x); //5.4

x = num.toExponential(2);
console.log(x); //5.36e+0
 
x= num.toLocaleString('ar-EG')
console.log(x); //٥٫٣٥٩


console.log(num); //Number {5.35875}


x=num.valueOf();
console.log(x); //5.35875



// lagest number

x = Number.MAX_VALUE;
console.log(x); //1.7976931348623157e+308

x = Number.MIN_VALUE;
console.log(x); //  5e-324
 