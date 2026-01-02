//-----------------------task 1-----------------------//

// let nameA ="Myy name is talha";
// let a = nameA.split('');

// let sum = 0;
// for(const b of a){
//     if(b === 'a'){
//         sum++ ;
//     }
// }
// console.log(sum);

//-----------------------task 2-----------------------//

// let nameB ="Myy name is TALHA";
// let x = nameA.split('');

// let calculate = 0;
// for(const y of x){
//     if(y === 'a' || y === 'A'){
//         calculate++ ;
//     }
// }
// console.log(calculate);

//-----------------------task 3-----------------------//

// let sentance = "I love programing and  u";
// let letter = sentance.split('');
// // let vowels = ['a','e', 'i', 'o', 'u']
// let a = 0, b = 0, c = 0, d = 0, e = 0;
// let fullvowel = false;
// for(const check of letter){
//     if(check === "a"){
//        a = 1;
//     }
//     else if(check === "e"){
//        b = 1;
//     }
//     else if(check === "i"){
//        c = 1;
//     }
//     else if(check === "o"){
//        d = 1;
//     }
//     else if(check === "u"){
//        e = 1;
//     }

//     let sum = a + b + c + d + e;
//     if(sum == 5){
//         fullvowel = true;
//         break;
//     }
// }
// console.log(fullvowel);

//-----------------------task 4-----------------------//
let alphaX = " Mr. X live in this country, his dauther name is x".split('');
let ax;


for(const exists of alphaX){
    if(exists === "X" ){
        ax = exists.replace('X', 'Y');
    }
}
console.log(ax);
console.log(alphaX);

