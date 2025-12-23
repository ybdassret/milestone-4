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

//-------------------------above things are note --------------------------------//
