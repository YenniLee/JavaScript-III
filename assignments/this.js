/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*From MDN, the value of "this" is determined by how a function is called, and it is a keyword that refers to an object. Scope and context are needed to understand what the "this" keyword points to. 

* 1. New binding- The "this" value points to a new obkext that is created by the constructor function.
* 2. Explicit binding- When .call() or .apply() methods are used, "this" is explicitly defined in the argument.
* 3. Implicit Binding- Applies to objects with methods; when a function is called by a preceding dot, the object before that dot is "this".
* 4. Winndow Binding - if the function is called in the global scope, the value of "this" inside of that function will be the window object or undefinied if in strict mode. 
*
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
'use strict';
function learningJS(topic) {
    console.log(this)
    return topic;
};
learningJS("JavaScript");

// Principle 2
// code example for Implicit Binding
const myObj = {
    shape: "cone",
    color: "mint green",
    whatAmI: function(name) {
        console.log(`I am a food that is ${this.shape} shaped and ${this.color} colored, what am I?`)
    }
}
myObj.whatAmI();

// Principle 3
// code example for New Binding
function WearWhat(item) {
    this.clothing = item,
    this.wear = function() {
        console.log(`Today, I will wear a ${this.clothing}.`)
        console.log(this)
    }
};
const denimJacket = new WearWhat('denim jacket');
denimJacket.wear();

// Principle 4
// code example for Explicit Binding
function sayHello(person) {
    alert(`Hello, ${this.name}!`)
};

const kyle = {
    name: "Kyle",
    age: 25
}
sayHello.call(kyle);