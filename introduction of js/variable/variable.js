/* variable -->
5 things to declear a variable
*/

/*
// 1. no keyword in varibale name 
var var = "hello"; // invalid
var false = "hello"; // invalid

// 2. no space in variable name
var my name = "talha"; // invalid
var my address = "dahka"; // invalid

// 3. no quotation mark in variable name
var "myname" = "talha"; // invalid
var 'myaddress' = "dahka"; // invalid

// 4. can't start with a number 
var 2name = "talha"; // invalid
var 3address = "dahka"; // invalid

// 5. name is case sensitive
var myName = "talha"; // valid
var Myname = "talha"; // valid
var MYNAME = "talha"; // valid

// 6. how to write long variable names
var my_full_name = "talha"; // snake case
var myFullName = "talha"; // camel case
var MyFullName = "talha"; // pascal case 
*/

/**
 * COMPARISON
 * 1. bigger: >
 * 2. smaller: <
 * 3. equal: ==
 * 4. greater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 7. strict equal: ===
 * 8. strict not equal: !==
 * 
 * ------------------------------
 * 7. and: &&
 * 8. or: ||
*/

//------------chapter1------------------
/* Number */
var age = 45 ; 
age = 22;
var height = 5 ;
height = 6;
console.log(age, height);

/* String */
var name = "talha";  
var address = "dahka is beutiful city in the world";
console.log(name, address);

/* boolean */
var ismunathife = true ;
var ismunagoodwoamn = false ;
console.log(ismunathife, ismunagoodwoamn);
//------------------------------

//-------------chapter2-----------------
var muna_age = 22;
var talha_age = '15';
talha_age = parseInt("15"); //string convert to number

console.log(typeof muna_age, typeof talha_age);

var ilish_price = '500.50';
ilish_price = parseFloat('500.50'); //string convert to float number
console.log(ilish_price);

var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total.toFixed(1))
//------------------------------

//-------------chapter2----------------
/*addition, subtraction, multiplication, division, modulus, exponentiation*/
var a = 3;
var b = 2;

var addition = a + b;
console.log(addition);
var subtraction = a - b;
console.log(subtraction);
var multiplication = a * b;
console.log(multiplication);
var division = a / b;
console.log(division);
var modulus = a % b;
console.log(modulus);
var exponentiation = a ** b;
console.log(exponentiation);
//------------------------------

//-------------chapter3----------------
var sunglass_price = 500; 
sunglass_price = sunglass_price + 200; //1st way, 1st update 500 + 200 = 700
sunglass_price += 200; //2nd way, 2nd update 700 + 200 = 900
console.log(sunglass_price);
//------------------------------

//-------------chapter4----------------
console.log(5 > 10);
console.log(5 < 10);
console.log(5 == 5);
console.log(5 >= 8);
console.log(5 <= 2);
console.log(5 != 1);
console.log(5 == '5'); //true
console.log(5 === '5'); //false
//------------------------------












