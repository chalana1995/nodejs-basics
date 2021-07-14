// const person = {
//     name: "Chalana Kalpitha",
//     age: 26
// }

// Module Wrapper Function
// (function (export, require, module, __filename, __dirname) {

// }) 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
}



module.exports = Person;