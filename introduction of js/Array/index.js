//(), {}, []
//Store more than one value in a variable using Array
const numbers = [1, 2, 3, 4];  // number array
const friends = ['abul', 'mofjul', 'dibul'] //string array
const passed = [true, false, true] //boolean array
const mixedArray = [1, 'abul', true] //Mixed Array 

//we can define array length by using
console.log(mixedArray.length);

//we can define array index by using
console.log(numbers[3]);

//we declare and assigne a variable by using array index
const secondFriend = friends[1];
console.log(secondFriend);

//we can change array value by using index
numbers[2] = 33;
console.log(numbers);

//we can push a new value to an array by using push() method
friends.push('kabul');
console.log(friends); 

//we can pop a value from an array by using pop() method
const out1 = friends.pop();
console.log(friends);
console.log(out1); //popped value

// we can shift a value from an array by using shift() method
friends.shift();
console.log(friends);

// we can unshift a value to an array by using unshift() method
friends.unshift('newFriend');
console.log(friends);


//we can find out that a exact element exit in an array by using includes() method 
console.log(friends.includes('mofjul')); //true

if (friends.includes('mofjul')){
    console.log('we watch supermen ');         //---important---//
}
else {
    console.log("no movie");
}

//we can find the index of an element in an array by using indexOf() method
console.log(friends.indexOf('dibul'));
console.log(friends.indexOf('tomato')); //-1 means not found

//we can examine a variable is an array or not by using Array.isArray() method
console.log(Array.isArray(friends));
