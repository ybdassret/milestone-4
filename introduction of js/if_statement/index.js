/**
* TERNARY --> three parts
*
*  ?   :
*
*condition ? do something when true : do something when false
*/

//simple termary
const gpa = 4.0;
// if (gpa >=4.0){
//     console.log("biryani khao");
// }
// else{
//     console.log('lolipop khao');
// }
gpa >=4.0 ? console.log("biryani khao") : console.log('lolipop khao')

//semi-advance termary
let isleader = false;
let price = 2000;
// if (isleader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price + 1000;
// }
price = isleader === true ? price > 1000 ? price /2 : 0 : price + 1000;



//---------------------------------bottom things are note---------------------------------//


//reguler statements 
var age = 15;
if (age >= 18){
    console.log("Congregation, you can accses this site!");
}
else{
    console.log("soory, you can't accses this site");
}

//nested statement 
/* first contidion have to fullfil if not then second condition will not check */
var age = 18;
if (age >= 18){
    if (age >= 70){
        console.log("You are too old to drink alcohol");
    }
    else{
        console.log("you can drink alcohol ");
    }
}
else{
    console.log("you can NOT drink alcohol");
}

//else if statement
/* first contidion have to fullfil if not then second condition will check */
var mouthAir = 80;
if(mouthAir <= 0){
    console.log("you are dead, you can't drive a car");
}
else if(mouthAir <= 20){
    console.log("you health is NOt good, you can't drive")
}
else if (mouthAir <= 50){
    console.log("you can drive a car!");
}
else{
    console.log("You are very high");
}


const dinnerAge = 8;
const dinnerPrice = 1000;
if (dinnerAge > 60){
    //60% off
    const discount = dinnerPrice * 60 / 100
    const mainPrice = dinnerPrice - discount
    console.log("your total amount is", mainPrice);
}
else if (dinnerAge <= 12){
    //100% off
    const discount = dinnerPrice * 100 / 100
    const mainprice = dinnerPrice - discount
    console.log("you can eat free");
}
else {
    console.log("no discoun, your dinner price", dinnerPrice);
}


//-------------------------above things are note --------------------------------//
const ssc = 3.0;
const hsc = 3.5;
const isbcs = false;
const goodAtEnglish = false;

// if (ssc >= 4.0 || hsc >= 3.0){
//     console.log("you are a fantastic teacher");
// }
// else{
//     console.log("you are not a teacher");
// }

// if (ssc >= 4.0 && hsc >= 3.0){
//     console.log("you are a fantastic teacher");
// }
// else{
//     console.log("you are not a teacher");
// }

//---------complex condition----------

if ((ssc >= 3.0 && goodAtEnglish) || (isbcs && hsc >=3.0)){
    console.log("you are a fantastic teacher");
}
else{
    console.log("you are not a teacher");
}


if ((ssc >= 3.0 || goodAtEnglish == true) && (isbcs == false && hsc >=3.0)){
    console.log("you are a fantastic teacher");
}
else{
    console.log("you are not a teacher");
}

//---------------------logical not operator---------------------------//
const isResultGood = true;
// if (isResultGood === true)
// if (!!isResultGood)
if (isResultGood){
    console.log('biryani khaaa!');
}
else{
    console.log('muriii khaaa!');
}

const phet_bhora = false;
// if (phet_bhora === false)
// if (!!!phet_bhora)
if (!phet_bhora){
    console.log('kacchi khaaa');
}
else{
    console.log('payesh khaaa');
}