//-----------------------task-1----------------------------
const fruits = ['appale', 'mango', 'angur', 'peyara', 'pinappale'];
console.log(fruits[2]);
fruits[2] = 'jambura';
console.log(fruits); 

//-----------------------task-2----------------------------
const destination = ["bandarbon", 'paris', 'Newyork']
destination.push('tokyo');
destination.push('beijing', 'moscow');
destination.pop();
console.log(destination);

//-----------------------task-3----------------------------
const books = ['css', 'english', 'uponnash'];
const isexist = books.includes('javascript');
console.log(isexist);

//-----------------------task-4----------------------------
const x = [1, 2, 3];
const y = 5;
const z = 'muna';

const isarray1 = Array.isArray(x);
const isarray2 = Array.isArray(y);
const isarray3 = Array.isArray(z);

console.log(isarray1, isarray2, isarray3);

//-----------------------task-5----------------------------

const a = [1, 2, 2, 3];
const b = [3, 5, 8, 9];

const conbine = a.concat(b);
console.log(a, b, conbine);




