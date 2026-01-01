// //-------------------task-1-(while, for)--------------------
// // let x = 1;
// // while (x <= 5){
// //     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// //     x++ ;
// // }

// for (let anika = 1; anika <= 60; anika+=1){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
// }

// //-------------------subtask-1-(while, for)--------------------
// // let num1 = 61;

// // while (num1 <= 100){
// //     // console.log(num1);

// //     if (num1 % 2 === 1){
// //         console.log('this is a odd number', num1);
// //     }
// //     num1++ ;
// // }

// for (num = 61; num <= 100; num++){
//     if(num % 2 === 1){
//         console.log('this is a ood number ', num);
//     }
// }

// //-------------------subtask-2-(while, for)--------------------
// // let num2 = 78;

// // while (num2 <= 98){
    
// //     if (num2 % 2 == 0){
// //         console.log('this is a even number', num2);
// //     }

// //     num2++ ;
// // }

// for(num2 = 78; num2 <= 98; num2++){
//     if(num2 % 2 === 0){
//         console.log('this is a even number', num2);
//     }
// }

// //-------------------subtask-3-(while, for)--------------------
// // let num3 = 81;
// // let sum1 = 0;

// // while(num3 <= 131){
// //     if(num3 % 2 == 1){
// //         sum1 = sum1 + num3 ; 
// //         console.log(sum1); 
// //     }

// //     num3++ ;
// // }

// let sum = 0;
// for (let num3 = 91; num3 <= 129; num3++){
//     if(num3 % 2 === 1){
//         sum = sum + num3; 
//     }
// }
// console.log(sum);

// //-------------------subtask-4-(while, for)--------------------
// // let num4 = 206;
// // let sum2 = 0;

// // while(num4 <= 311){
// //     if(num4 % 2 == 0){
// //         sum2 = sum2 + num4 ; 
// //         console.log(sum2); 
// //     }

// //     num4++ ;
// // }

// let sum2 = 0;
// for (let num4 = 51; num4 <= 85; num4++){
//     if(num4 % 2 === 0){
//         sum2 = sum2 + num4; 
//     }
// }
// console.log(sum2);

// //-------------------multiplication-table-(while, for)-------------
// // let numa = 5;
// // let numb = 1;
// // let sum;

// // while(numb <= 10){
// //     sum = numa * numb
// //     console.log(sum);
// //     numb ++;
// // }

// let numX = 9;
// for(let numY = 1; numY <= 10; numY++){
//     console.log(`${numX} x ${numY} =`, numX*numY);
// }

// //-------------------countdown-(while, for)--------------------
// // let countdown = 21;
// // while (countdown >= 15 ){
// //     console.log(countdown);
// //     countdown-- ;
// // }

// for(countdown = 81; countdown >= 65; countdown--){
//     console.log(countdown);
// }
// //-------------------task-2(continue)--------------------
// for(let evenNum = 1; evenNum <= 40; evenNum++){
//     if(evenNum % 2 === 1){
//         continue
//     }
//     console.log(evenNum);
// }

// let oddNum = 55;
// while(oddNum <= 85){
//     oddNum++;
//     if(oddNum % 2 === 0 || oddNum % 5 === 0){
//         continue;
//     }
//     console.log(oddNum);
// }
//  //-------------------task-2(break)--------------------
// for(let bigNum = 1; bigNum < 200; bigNum++){
//     console.log(bigNum);
//     if(bigNum >= 100){
//         break;
//     }
// }

// let addNum = 1;
// let addSum = 0;
// while(addNum <= 111){
//     addSum = addSum + addNum;
//     addNum++
//     if(addSum >= 100){
//         break;
//     }
//     console.log(addSum);
// }

/*for(let i = 1; i <= 5; i++){
    let square = i*i;

    for (let index = i; index <= square; index++) {
        console.log(index);
        if(index == square) break;
    }
    // if(i ** i ){
    //     break;
    // }
}*/

for(let i = 1; i <= 100; i++){
    let x = 2;
    if(i == x * x){
        break;
    }
    console.log(i);
}