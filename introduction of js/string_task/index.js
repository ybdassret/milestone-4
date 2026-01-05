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
let alphaX = 'my name is X';
// let alphaXindex = 0;
// while(alphaXindex <= alphaX.length){
//     if(alphaX[alphaXindex] === 'X'){
//         alphaX[alphaXindex] = 'Y';
//     }
//     alphaXindex++ ;
// }
// console.log(alphaX.join(''));

alphaX = alphaX.replace('X', 'Y');
// console.log(alphaX);

//-----------------------task 5-----------------------//
let movie = 'i like movies, my fav movie is john wick';
let final = '';
let isMovie = false;
for(let i = 0; i < movie.length; i++){
    if(movie[i] !== ' ' && isMovie === false){
        final += movie[i].toUpperCase();
        isMovie = true;
    }
    else if(isMovie && movie[i] !== ' '){
        final += movie[i];
    }
    else if(movie[i] === ' '){
        final += movie[i];
        isMovie = false;
    }

}
// console.log(final);