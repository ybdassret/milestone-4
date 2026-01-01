//-----------------------------loop----------------------------------
// for (){
//
// }

//--------------------simple-loop--------------------
const dish = ['polao', 'ilish', 'chinese vegutable', 'gorur mansho'];
for (const food of dish){
    console.log(food);
    console.log("i can't share this food with you");
}

//--------------------while-loop--------------------
let i = 1;
while (i <= 5){
    console.log(i);
    i += 1 ;
}

let h = 20;
while(h >= 11){
    console.log(h);
    h -= 1;
}

//--------------------sum-loop--------------------
let num1 = 2 ;
let sum = 2;

while(num1 <= 5){
    sum = sum + num1 ;
    console.log(sum);
    num1++;
}

//-------------------use if else in loop----------
let x = 2;

while(x <= 10){
    console.log(x);

    if (x % 2 === 0){
        console.log("even number", x);
    }

    x++;
}

//----------------------------for-loop--------------------------------
let sum2 = 0;
for (let num2 = 11; num2 <= 20; num2 ++){
    sum2 = sum2 + num2;
}

console.log('sum of number  11 to 20 is', sum2);

//------------------------incremental-for-loop--------------------------
for(let age = 1; age <= 10; age++){
    console.log(age);
}

//------------------------decremental-for-loop--------------------------

for(let age2 = 10; age2 >= 0; age2--){
    console.log(age2);
}

// continue --> skip the current iteration and move to the next one
// break --> exit the loop entirely

for(let jojo = 1; jojo <= 20; jojo++){
    if(jojo >= 10){
        break;
    }
    console.log(`ami bhat khai ${jojo} bar`);
}

let anika = 1;
while(anika <= 20){
    anika++ ;
    if(anika % 2 === 1){
        continue;
    }
    console.log(anika);
}
for(let muna = 12; muna>=1; muna--){
    if(muna % 3 !==0){
        continue;
    }
    console.log(muna);
}

//-----------------------do-while-loop------------------------
//first execute then check condition
// let j = 1;
let k = 6;
do{
    console.log(k);
    k++ ;
}
while(k <= 5)

//for of --> array
//for in --> object