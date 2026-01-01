//primitive
//basic, primary
const school = 'monipur hi school';
const locate = 'mirpur';
const isSchool = true;


//---->object 
//non-primitive, complex
const person = {
    name: 'mofjul',
    isStudent: false,
    isMale: true,
    nationality: 'bangladeshi',
    age: 24,
    skil: {
        js: true,
        nurse: false
    },
    "favplacec" : ['bandorbon', 'dahaka', 'sajek'],
    favFood : [`bhat`, 51, `egg`]
}

//----> dot notation
const personAge = person.age
// console.log(person.isStudent);
// console.log(personAge);
person.age = 25;


//--->braket notation

// console.log(person['nationality']);
// console.log(person['favplacec']);
const student = person['isStudent'];
// console.log(student);
person['age'] = 26;
// console.log(Array.isArray(person.favFood));
console.log(typeof person['favFood'][1]);
const boyes = 'age';
// console.log(person[boyes]);
person['age'] = 29;
// console.log(person.age);


//----> objest keys and values
const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);

/* nested object */
const meyerDike = {
    baaap: 'police',
    vai: 'army',
    ma: 'ghor radoni',
    "meyer porashona": {
        scc: `4.5`,
        hsc: `3.9`,
        degree: ['science', 'math'],
        eglish:{
            ilts: '8/8'
        }
    }
}
meyerDike['meyer porashona'].eglish.ilts = '7/8';
// console.log(meyerDike['meyer porashona'].eglish.ilts);

delete meyerDike.vai; //delete any property in object
// console.log(meyerDike);


//for of --> array
//for in --> object

const subjects = ['english', 'bangla', 'math ', 'science']; //ARRAY 
const examResult ={
    math: '70/100',
    science: '60/100',
    bangla:{
        bangla1 : '65/100',
        bangla2 : '75/100'
    },
    english :{
        english1 : '85/100',
        englsih2 : '88/100'
    } 
}
//for of : array 
for(const books of subjects ){
    // console.log(books);
}

//for in : object
for(const result in examResult){
    // console.log(result, ':', examResult[result]);
}


//----------------------------object-declare----------------------------
const laptop = {
    brand: 'lenovo',
    color: 'black', 
}
const mobile = new Object();
const tablet = Object.create(laptop);
