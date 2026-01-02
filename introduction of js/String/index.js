const country = 'bangladesh';
const capital = "dhaka";
const city = `mirpur`;
const numbers = [1, 2, 3, 4, 5];

// const city = new String('boro bhag');
// console.log(area);

//string is immutable --> not changeable
city[0] = 'M';
// console.log(city);
// console.log(city.length);
// console.log(city[5]);

//array is mutable --> changeable
numbers[0] = 10;
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[0]);

/* convert string to lowercase and uppercase */
const name = 'Abu Bakar Siddique';
const username = 'abu bakar siddique';
// console.log(name.toLowerCase());
// console.log(username.toUpperCase());


if(name.toLowerCase == username.toLowerCase){
    // console.log('sob name e to akoi');
}
else{
    // console.log('name e difference ase');
}

/* trim()  --> remove whitespace */
//trimstart() --> remove whitespace from start
//trimend() --> remove whitespace from end
const drik =' water';
const liquid = 'water ';

if(drik.trim() == liquid.trim()){
    // console.log('same water');
}   
else{
    // console.log('different water');
}

//slice() --> extract part of a string
//substring() --> extract part of a string
//substr() --> extract part of a string
//split() --> split a string into an array of substrings
const sentence = 'I am learning JavaScript programming language. JavaScript is fun.';
const word = sentence.slice(5,13);
// console.log(word);
// console.log(sentence.split(' '));
// console.log(sentence.split('e'));

const joinword = ['I', 'am', 'learning', 'JavaScript'];
// console.log(joinword.join(' ')); 
// console.log(joinword.join('-'));


//---------reverse a string -1st ---------
let munaSaid = 'i like beef';
let reverse = '';
for(const letter of munaSaid){
    reverse = letter + reverse;
}
// console.log(reverse);
//---------reverse a string -2nd ---------
const rev = munaSaid.split('').reverse().join('');
// console.log(rev);
