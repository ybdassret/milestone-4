/*
*LOOPING TECHNIQUE
*1. for loop
*2. while loop
*3. do while -->  ignore
*4. for in --> object
*5. for of --> array 
*/

const cousins = ['munu', 'joju', 'hiru', 'anku', 'saru',];
let i = 0;
for (const cousin of cousins) {
    // console.log(cousin);
}

for (let i = 0; i < cousins.length; i++) {
    // console.log(cousins[i]);
}

while (i < cousins.length) {
    // console.log(cousins[i]);
    i++;
}

//reverse array --->

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const reverseNum = [];

for(let m = numbers.length - 1; m >= 0; m--){
    // console.log(numbers[m]);
}

// for(const num of numbers){
//     reverseNum.unshift(num);
// }
// console.log(reverseNum);

// for(let n = 0; n < numbers.length; n++){
//     reverseNum.unshift(numbers[n]);
// }
// console.log(reverseNum);

// console.log(numbers); /* before reverse */
// numbers.reverse();
// console.log(numbers); /* after reverse */


// sort --->
// Ascending order --> smallest to largest : [1, 3, 4, 5, 8]
// Descending order --> largest to smallest : [8, 5, 4, 3, 1]
const unsorted = [5, 3, 8, 1, 4];
