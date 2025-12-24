//---------------------task-1---------------------
const burger = 250; 
if (burger > 500){
    console.log('free coke');
}
else{
    console.log('buy coke 30tk');
}

//---------------------task-2---------------------
const weight =  50;
const height =  1.615;
const BMI = weight / height ** 2

if (BMI < 18.5){
    console.log('you are underweight.');
}
else if (BMI >= 18.5 && BMI <=24.9){
    console.log('you are normal.');
}
else if (BMI >= 25 && BMI <=29.9){
    console.log('you are overweight.');
}
else{
    console.log('you are obese.');
}

//---------------------task-3---------------------
const grade = 92;
if(grade >= 90 && grade <=100){
    console.log('your grade is A');
}
else if(grade >= 80 && grade <=89){
    console.log('your grade is B');
}
else if(grade >= 70 && grade <=79){
    console.log('your grade is C');
}
else if(grade >= 60 && grade <=69){
    console.log('your grade is D');
}
else{
    console.log('your grade is F');
}

//---------------------task-4---------------------
const myScore = 81;
const friendScore = 39;
if (myScore > 80){
    if(friendScore > 80){
        console.log('then go for a lunch.');
    }
    if(friendScore < 80 && friendScore >= 60){
        console.log(' good luck next time.');
    }
    if (friendScore < 60 && friendScore >= 40) {
        console.log("keep your friend's message unseen.");
    }
    if (friendScore < 40) {
        console.log('block your friend');
    }
}
else{
    console.log('go to home and sleep and act sad');
}

//---------------------task-5---------------------
const num1 = 5;
const num2 = 11;
let result;
if (num1 > num2){
    result = num1 * 2
    console.log(result);
}
else{
    result = num1 + num2
    console.log(result);
}
result = num1 > num2 ? num1 * 2 :num1 + num2
// console.log(result);

//---------------------task-6---------------------
const age = 18;
const student = true;
const fareTicket = 800;
if (age < 10){
    console.log('free');
}
else if (age >= 60){
    //15%
    const discount = fareTicket * 15/100
    const totalPrice = fareTicket - discount
    console.log(totalPrice);
}
else if (student){
    //50%
    const discount = fareTicket * 50/100
    const totalPrice = fareTicket - discount
    console.log(totalPrice);
}
else{
    console.log('reguler ticket 800tk');
}
