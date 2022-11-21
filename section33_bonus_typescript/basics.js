"use strict";
//Primitives
let age;
age = 25;
let userName;
userName = "Max";
let isInstructor;
isInstructor = true;
//More complex types
let hobbies;
hobbies = ["Sports", "Cooking"];
let person;
person = {
    name: "Max",
    age: 32,
};
let people;
//Type inference
// let course = "React - The complete guide";
//Union type
let course;
course = "React - The complete guide";
course = 1231;
//Functions & types
// function add(a: number, b: number) {
// 	return a + b;
// }
function printOutput(value) {
    //void
    console.log(value);
}
//Generics
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updatedArray[0].split("");
//Classes
class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    // constructor(first: string, last: string, age: number, courses: string[]) {
    //     this.firstName = first;
    //     this.lastName = last;
    //     this.age = age;
    //     this.courses = courses;
    // }
    //shorthand notation
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    enrol(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("React");
student.listCourses();
// type Human = {
//     firstName: string;
//     age: number;
//     greet: () => void;
// }
let max;
max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello!");
    },
};
class Instructor {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    greet() {
        console.log("Hello!!");
    }
}
