//----------------task 1----------------//
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

// console.log(colors['golden rod']);

//----------------task 2----------------//
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    "passenger capacity": 5
};

//----------------task 3----------------//
const uniStudent = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
// console.log(student.physics.marks);

//----------------task 4---------------//
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const x = Object.keys(student);
// console.log(x.length);

//----------------task 5---------------//
let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(const b in myObject){
    // console.log('key:', b, '|', 'typr:', typeof myObject[b] );
}

// const a = ["name", "age", "city", "isStudent"];
// i = 0;
// while(i < a.length){
//     console.log('key:', a[i], '|', 'typr:', typeof myObject[a[i]] );
//     i++ ;
// }

