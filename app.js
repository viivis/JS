//alert("Hello from APPJS file!");
const name = "Viivi";
const age = 25;
const city = "Haapsalu";
const job = "unknown";

console.log('Name: ', name, typeof(name));
console.log('Age: ', age, typeof(age));

function hello() {
    console.log("Hello!");
}
hello();

// ul unordered list, li list, create a un list ES5 - vanem versioon
//let html = '<ul><li>Name:'+ name + '</li><li>Age:' + age + '</li><li>City:' + city + '</li><li>Job:' + job + '</ul></li>';

//Template Literal ES6- uuem versioon
let html =  `

    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>City: ${city} </li>
        <li>Job: ${job} </li>
    </ul>

`;
document.body.innerHTML = html;

//Arrays
const numbers1 = [1,2,3,4,5];
console.log(numbers1);
console.log(typeof(numbers1));
//add an element to the end of the array, push lisab elemendi massivi lõppu
numbers1.push(6);
console.log(numbers1);
//add an element to the beginning of the array, unshifti'ga
numbers1.unshift(0);
console.log(numbers1);
//remove the last element of the array, let'iga antud versioonis saab kuvada eemaldatud elemendi
let removedElement = numbers1.pop();
console.log(numbers1);
console.log('Removed element: ', removedElement);
//remove the first element of the array
numbers1.shift();
console.log(numbers1);
//remove an element from a certain position using SPLICE() 1- tähistab mitu elementi tahame eemaldada, 2- mitmendal kohal olevat elementi
let splicedElement = numbers1.splice(2, 1);
console.log(numbers1);
console.log('Spliced element: ', splicedElement);
//search for an element with certain value
let index = numbers1.indexOf(5);
console.log(index);

let mixedArray = [22, 'banana', true];
//foreach loop
mixedArray.forEach(element=>{
    console.log(element, typeof(element));

});
//sõna "banaan" pikkus
console.log(mixedArray[1].length);

//Objects 

let johnName = 'John';
let johnAge = 30;

let steveName = 'Steve';
let steveAge = 100;

let person1 = {
    name: johnName,
    age: johnAge

}


let person2 = {
    name: steveName,
    age: steveAge

}

//massiiv people
let people = [person1, person2];

console.log(person1, person2);

people.forEach(person =>{
    console.log(person.name);
    console.log(`${person.name} is ${person.age} years old`);
})


