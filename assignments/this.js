/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first is "Window/Global Object Binding". It is when you use "this" in a function definition, and then wherever you call that function later, the object it is being called in becomes "this".
* 2. The second is "Implicit Binding". It is when you use dot notation in a method/property to refer to the current object. When a new instance of that class is made, "this" will refer to that new object.
* 3. The third is "New Binding". It is when you use "this" to add variables to a class in your constructor. ex. this.example = ...
* 4. The fourth is "Explicit Binding". It is when you use .call, .apply, .bind, etc and you pass in "this" as the first argument.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function printGlobal () {
    console.log(this);//Window
}
printGlobal();

// Principle 2

// code example for Implicit Binding
let obj = {
    name: "Name",
}
obj.printName = function (){
    console.log(this.name)
}
obj.printName();

// Principle 3

// code example for New Binding
function Constructor () {
    this.newProp = 0,
    this.newMethod = function () {
        return "Test";
    }
}

let obj2  = new Constructor();
console.log(obj2.newMethod());

// Principle 4

// code example for Explicit Binding
function ParentClass (attributes) {
    this.name = attributes.name;
}
function ChildClass (attributes) {
    ParentClass.call(this, attributes);//Explicit Binding
    this.sayName = function () {
        console.log(this.name);
    }
}

let obj3 = new ChildClass({name: "Example Name"});
obj3.sayName();