

// coverting String to Number
let amount = '100'; 
// ways -->
// amount = parseInt(amount);
// amount=+amount;
// amount=Number(amount); 
console.log(amount,typeof amount);



// coverting  Number to String 
let score = 100;
// ways -->
// amount=amount.toString();
// amount=String(amount);
console.log(score,typeof score);


// coverting   String to Decimal
// ways -->
// amount=parseFloat(amount);
console.log(amount,typeof amount);


// coverting number to boolen
let num = 1
// ways -->
// num = Boolean(num);
console.log(num,typeof num);




let fullName='a';
fullName=Number(fullName);
console.log(fullName,typeof fullName);
//   output - NaN 'number'
// NaN(not a number)

// following are some example of NaN
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined+undefined);
console.log('f'/3);
