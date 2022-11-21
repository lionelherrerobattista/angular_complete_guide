//Primitives
let age: number;
age = 25;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

//More complex types
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//Type alias
type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: "Max",
	age: 32,
};

let people: Person[];

//Type inference
// let course = "React - The complete guide";

//Union type
let course: string | number;
course = "React - The complete guide";
course = 1231;

//Functions & types
// function add(a: number, b: number) {
// 	return a + b;
// }

function printOutput(value: any) {
	//void
	console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
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
	constructor(
		public firstName: string,
		public lastName: string,
		public age: number,
		private courses: string[]
	) {}

	enrol(courseName: string) {
		this.courses.push(courseName);
	}

	listCourses() {
		return this.courses.slice();
	}
}

const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("React");
student.listCourses();

//Interfaces
interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}
// type Human = {
//     firstName: string;
//     age: number;

//     greet: () => void;
// }

let max: Human;

max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello!");
        
    },
}

class Instructor implements Human {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number){
        this.firstName = firstName;
        this.age = age;
    }

    greet() {
        console.log("Hello!!");
    }
}
