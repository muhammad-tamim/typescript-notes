<h1 align="center">TypeScript Notes</h1>

- [TypeScript Introduction:](#typescript-introduction)
    - [What is TypeScript:](#what-is-typescript)
    - [TypeScript Features:](#typescript-features)
    - [How to run TypeScript:](#how-to-run-typescript)
    - [Explicit Typing and Type Inference:](#explicit-typing-and-type-inference)
- [number, bigint, boolean, string, symbol, null, undefined:](#number-bigint-boolean-string-symbol-null-undefined)
- [any, unknown](#any-unknown)
    - [any](#any)
    - [unknown](#unknown)
- [literal, union, enum, and as const:](#literal-union-enum-and-as-const)
    - [Literal:](#literal)
    - [union:](#union)
    - [enum:](#enum)
    - [as const:](#as-const)
      - [Diference between as const and readonly:](#diference-between-as-const-and-readonly)
    - [Difference between literal, union, enum and as const:](#difference-between-literal-union-enum-and-as-const)
- [Function:](#function)
    - [void:](#void)
    - [never:](#never)
- [object:](#object)
- [array and tuple](#array-and-tuple)
    - [array:](#array)
    - [tuple:](#tuple)
- [type alias, interface and intersection:](#type-alias-interface-and-intersection)
    - [type alias](#type-alias)
    - [interface](#interface)
    - [intersection:](#intersection)
- [Type Assertion:](#type-assertion)
- [Type Guards](#type-guards)
    - [Typeof:](#typeof)
    - [in Operator:](#in-operator)
    - [Instanceof:](#instanceof)
    - [Equality Narrowing:](#equality-narrowing)
    - [Truthiness Narrowing:](#truthiness-narrowing)
    - [Array.isArray():](#arrayisarray)
- [Generics](#generics)
    - [Constrain](#constrain)
      - [with keyof:](#with-keyof)
    - [conditional Types:](#conditional-types)
    - [Mpped Types:](#mpped-types)
- [Utility Types:](#utility-types)
- [OOP:](#oop)
    - [Classes:](#classes)
    - [Static Keyword:](#static-keyword)
    - [The Four Pillars of OOP:](#the-four-pillars-of-oop)
      - [Encapsulation:](#encapsulation)
      - [Abstraction:](#abstraction)
        - [Difference Between Encapsulation and Abstraction:](#difference-between-encapsulation-and-abstraction)
      - [Inheritance:](#inheritance)
      - [Polymorphism:](#polymorphism)
        - [Using Methods Overriding:](#using-methods-overriding)
        - [Using Duck Typing:](#using-duck-typing)


# TypeScript Introduction:

### What is TypeScript:

TypeScript is a superset of JavaScript means its includes everthing from javaScript plus add extra type featues on top of it.
![image](./images/typeScript/TypeScript-introduction/hello-world.webp)

Note: TypeScript is a compiled language, meaning TypeScript code is first converted into JavaScript before execution.

### TypeScript Features: 
- Static Typing: Allows you to define types for variables, functions, objects, etc.
- Static Type Checking: TypeScript detects type errors before runtime, both while writing code (through the editor) and during compilation with tsc.
- Code Suggestions & IntelliSense: TypeScript improves your editor experience with autocompletion and better hints.
- Type Inference: TypeScript can automatically understand (infer) types even when you don’t explicitly declare them.
  

### How to run TypeScript:

Step 1: Install Node.js for linux using NVM with NPM: 

![image](./images/typeScript/TypeScript-introduction/noode.js-installing.png)

Note: 

When we used js we don't need to worry about node version, but when we used typescript we need to control our version, because if we used node version 19.9.0 and anoter computer if we used node version 24.4.1 or another version the same typescript might not work, for this issue we have to contorl node vresion. for that there are two  some way available using NVM or Docker. For now Im using NVM

For installing a differnt node verison: 

```bash
nvm i 19.9.0
```

- For check all install Node Version:

```bash
nvm ls
```

- For switching a different install node version: 

```bash
nvm use 24.4.1
```

Step 2: Install TypeScript:

If you run this command, then you need to install the TypeScript for every porject:

```bash
npm install typescript --save-dev
```

If you run this command, then you need to install the TypeScript once for your computer.

```bash
npm install -g typescript
```

step 3: Convert your ts file to js:

test.ts:

```ts
const firstName: string = "Muhammad";
const lastName: string = "Tamim";

console.log(firstName + " " + lastName)

console.log(firstName)
```

```bash
tsc test.ts
```

Now you see a test.js file added with:

```js
var firstName = "Muhammad";
var lastName = "Tamim";
console.log(firstName + " " + lastName);

```


Now you can use `node test.js` to see the output: 

Note: we need to conver the ts file to js file because node dones't understand the TS code, it only understand the js code.

but when node relesed their 22.6.0  they experimentally intoduce typescript suppor using typeStripg. TypeStrping means node.js remove all ts to you code and then your code is gonna be js code, then node.js run this js code. and latyer they enable this experieceml feture to buidling feature for later versions. But still node.js not fully suppor this feture. for some typescipt that need transformation , we have to use a node.js flag for this. So the best practice using typectipt compiler to conver the ts code to js and then print the output.

so for now if we write a ts code we can direlty run this ts code by : 

```bash
node test.ts
```

### Explicit Typing and Type Inference: 

Explicit typing is when you tell TypeScript the type yourself.

```ts
let age: number = 20;
let name: string = "Tamim";
let isAdmin: boolean = false;
```

Type inference is when TypeScript assigns a type automatically based on the value.

```ts
let age = 20;   // TypeScript infers: number
let name = "Tamim"; // inferred: string
let active = true;  // inferred: boolean
```

# number, bigint, boolean, string, symbol, null, undefined: 

```ts
// 1. number
let age: number = 25;
let price: number = 99.99;


// 2. bigint
let bigNumber: bigint = 100n;
let anotherBig: bigint = BigInt(100); // same as 100n
let bigSum: bigint = bigNumber + anotherBig;
console.log(bigSum); // 200n

// 3. boolean
let isLoggedIn: boolean = true;
let hasPaid: boolean = false;

// 4. string
let username: string = "Tamim";
let greeting: string = `Hello, ${username}!`;
console.log(greeting); // Hello, Tamim!

// 5. symbol
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(sym1 === sym2); // false

// 6. null
let emptyValue: null = null;
console.log(emptyValue); // null

// 7. undefined
let notAssigned: undefined = undefined;
console.log(notAssigned); // undefined
```

# any, unknown

### any

any is disables the TypeScript type checking. Means we can assign any value to it, and TypeScript won’t give errors like a normal js.

```ts
let something: any;

something = 42;         // number
something = "Hello";    // string
something = true;       // boolean
something = [1, 2, 3]; // array

console.log(something);
```
### unknown
unknown is like any, but safer. here we can assign any value to an unknown variable, but you cannot use it directly without type checking. You must check the type first, using typeof, Array.isArray(), or other type guards.

```ts
let value: unknown;

value = "Hello";    // string
value = true;       // boolean
value = 10.23435;         // number

// console.log(value.toFixed(2)); // 'value' is of type 'unknown'.

console.log(typeof value === 'number' && value.toFixed(2)) // 10.23
```


# literal, union, enum, and as const:

### Literal:
Represent exact value a variable can hold.

Note: Works only on primitive values:

```ts
let direction: 'left';

// direction = 'right'; // Type '"right"' is not assignable to type '"left"'.

direction = 'left'
```

```ts
let dice: 1 | 2 | 3 | 4 | 5 | 6; // union numbers literal

dice = 3;
dice = 6;
dice = 7; // Type '7' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
```

### union: 
Combine multiple literal types or general types into one variable. It is written using the pipe (|) symbol.

```ts
let direction: "left" | "right"; // literal union
direction = "left";
direction = "right"
// direction = "UP" // Type '"UP"' is not assignable to type '"left" | "right"'.
```

```ts
let id: number | string; // general union

id = 234
id = 'id123'
// id = true // Type 'boolean' is not assignable to type 'string | number'.
```

### enum: 
Enum is a collection of named constants grouped under a single type, which can have numeric (default) or string values.

```ts
enum Days {
    saturday, // 0
    sunday, // 1
    monday // 2
}

let dayName: Days = Days.saturday
console.log(dayName) // 0

// Note: If you don’t assign values, TypeScript gives automatic numeric values starting from 0.
```

```ts
enum Direction {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}

let move: Direction = Direction.Left;
console.log(move) // left
```

### as const:
Automatically turns a value into literal type + readonly.

Note: as const works for primitives, arrays, and objects.

```ts
let direction: "left";
// direction = "right" // Type '"right"' is not assignable to type '"left"'.

let direction2 = "left" as const;
direction2 = "right"; // Type '"right"' is not assignable to type '"left"'.
```

```ts
const directions = ["left", "right", "up", "down"] as const;

// directions.push("forward"); // Property 'push' does not exist on type 'readonly ["left", "right", "up", "down"]'.
```

```ts
const person = {
    name: "Tamim",
    age: 20
} as const;

// person.name = "Alex"; // Cannot assign to 'name' because it is a read-only property.
```
#### Diference between as const and readonly:

| Feature       | `readonly`                 | `as const`                    |
| ------------- | -------------------------- | ----------------------------- |
| Scope         | Single property or element | Whole object, array, or tuple |
| Literal types | stays general types        | converts to literal types     |

```ts
let user: {
    readonly id: number;
    name: string
} = {
    id: 1,
    name: "Tamim"
};

// Hover over `user` in VS Code or use `typeof`
type UserType = typeof user;

/*
type UserType = {
    readonly id: number;
    name: string;
}
*/


let userConst = { id: 1, name: "Tamim" } as const;

type UserConstType = typeof userConst;

/*
type UserConstType = {
    readonly id: 1;
    readonly name: "Tamim";
}
*/
```

### Difference between literal, union, enum and as const:

- Literal: Restricts a variable to one exact value.
- Union: Allows a variable to be one of several specified types or values.
- Enum: A collection of named constants under a single type.
- as const: Converts a value (primitive, array, or object) into a literal type + readonly.

# Function: 

```ts
function add(a: number, b: number): number {
    return a + b;
}

let greet1 = (name: string): string => {
    return `Hello, ${name}`;
}
```

### void:
void is used for functions that do not return anything. You can’t return any value (except undefined optionally).

```ts
function sayHello(): void {
    console.log("Hello")
}

sayHello() // Hello
```

```ts
function optionalReturn(): void {
    // return undefined;
    return;
}

console.log(optionalReturn())
```

### never: 
Represents a function that cannot produce a value at all awalys throw an error or infinite loop:

```ts
function throwError(): never {
    throw new Error("Oops");
}

function infiniteLoop(): never {
    while(true) {}
}
```

# object:

```ts
let person: {
    name: string;
    age: number;
    isAdmin: boolean
} = {
    name: "Tamim",
    age: 20,
    isAdmin: true
}

// Optional Properties

let user: {
    name: string,
    age?: number
} = {
    name: "Tamim"
}

console.log(person)
console.log(user)

// Readonly Properties
let admin: {
    readonly id: number;
    name: string;
} = {
    id: 1,
    name: "Tamim"
};

// admin.id = 2; // Cannot assign to 'id' because it is a read-only property.

// as const
let userConst = {
    name: "Tamim",
    age: 20
} as const;

userConst.name = "Muhamamd" // Cannot assign to 'name' because it is a read-only property.
```

# array and tuple

### array: 

```ts
let numbers: number[] = [1, 2, 3]
let names: string[] = ['a', 'b']

let mix: (string | number)[] = [1, "Hello"] // union array
```

### tuple:

Tuples are fixed-length arrays with fixed types for each element.

```ts
let user: [string, number] = ['tamim', 20]
let user: [number, number] = [20, 20]

// let user2: number[] = [20, 20] --> just a normal array

// tuple with optional element
let user: [string, number?];

user = ["Tamim"];      
user = ["Tamim", 20];  

// tuple with readonly and as const
let coords: readonly [number, number] = [10, 20];

// coords[0] = 30; // Cannot assign to '0' because it is a read-only property.

let coords2: [number, number] = [10, 20] as const;
// coords[0] = 30; // Cannot assign to '0' because it is a read-only property.
```


# type alias, interface and intersection:

### type alias 
The type keyword is used to create an alias for any type—primitive, object, union, tuple, etc. Means a type alias allows you to define a custom type that can be reused throughout your code.

```ts
// Without type alias
const user1: {
    id: number;
    name: string;
    isAdmin?: boolean; 
} = {
    id: 1,
    name: "Tamim",
    isAdmin: true
}

// with type alias
type User = {
    id: number;
    name: string;
    isAdmin?: boolean; // optional property
};

const user2: User = {
    id: 2,
    name: "Nasrin"
};

const user3: User = {
    id: 3,
    name: "Kuddus"
};
```

```ts
// without type alias
const sum = (n1: number, n2: number): number => {
    return n1 + n2
}

// with type alias
type Add = (num1: number, num2: number) => number

const sum2: Add = (num1, num2) => {
    return num1 + num2
}

const sum3: Add = function (num1, num2) {
    return num1 + num2;
};
```

```ts
// Union type alias
type ID = string | number;

const userId1: ID = "abc123";
const userId2: ID = 101;
```

### interface 

Defines the shape of an object: 

```ts
// without interface
const user1: {
    name: string;
    age: number;
    isAdmin?: boolean
} = {
    name: "nasrin",
    age: 11,
    isAdmin: false
}

// with interface
interface User {
    name: string;
    age: number;
    isAdmin?: boolean; 
}
const user2: User = {
    name: "tamim",
    age: 20
}

// with type alias
type User = {
    name: string;
    age: number;
    isAdmin?: boolean; 
}
const user3: User = {
    name: "tamim",
    age: 20
}
```


```ts
// with type alias
type Friends = string[]
const friends: Friends = ["A", "B", "C"]

// with interface
interface iFriends {
    [i: number]: string 
}
const friends2: iFriends = ["D", "E", "F"]

interface INumberArray {
  [index: number]: number;
}

const nums: INumberArray = [1, 2, 3];
```

here, 
- [index: number] --> the key type
- :number --> the value type

Note: for array interface is little bit comple because interfaces do not have built-in syntax for arrays menas 
Interfaces describe objects, not arrays.


```ts
// with type alias
type Add = (num1: number, num2: number) => number
const add1: Add = (num1, num2) => num1 + num2

// with interface
interface iAdd {
    (number1: number, number2: number): number
}
const add2: iAdd = (number1, number2) => number1 + number2
```

Note: interface not suppoer intersection, so for intersection we must use extends keywords.
- extends keywords inherit all properties from another interface. 

```ts
type User = {
    name: string;
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

const user1: UserWithRole = {
    name: "x",
    age: 1,
    role: 'user'
}


interface User2 {
    name: string;
    age: number
}


interface IUserWithRole extends User2 {
    role: 'admin' | 'user'
}

const user2: IUserWithRole = {
    name: "x",
    age: 1,
    role: 'user'
}
```

**Tips:**
- Use interface → for object structure and class
- Use type alias → for everything else

### intersection: 
Combines multiple type alias. Unline union here the value must be satisfy all type alias that are combained by intersection.

```ts
type Name = { name: string }
type Age = { age: number }

type Person = Name & Age;

const p1: Person = {
    name: "tamim",
    age: 20
}

const p2: Person = {
    name: "Muhammad",
}

/*
Type '{ name: string; }' is not assignable to type 'Person'.
  Property 'age' is missing in type '{ name: string; }' but required in type 'Age'.
*/
```

# Type Assertion: 

Sometimes TypeScript doesn’t know the exact type and cannot infers type correctly. Type assertion lets you override TypeScript's type and force a value to be treated as a specific type. 

we used type assertion: 
- When we know more about the type than TypeScript
- for third party packages that dones support ts

We can perform type using using `as` keyword: 

```ts
let someValue: any = "Hello TypeScript";
let strLength: number = (someValue as string).length;

console.log(strLength); // 17
```

```ts
type User = {
    name: string;
    age: number;
};

let data = {} as User;
data.name = "Tamim";
data.age = 20;
```

# Type Guards
Type guards help TypeScript narrow a variable’s type at runtime.

When a variable can have multiple possible types (union type), TypeScript needs extra information to know what operations are safe. A type guard tells TypeScript At this point, the value is this type.

### Typeof:

```ts
function printValue(v: string | number) {
    if (typeof v === "string") {
        console.log(v.toUpperCase()); // string methods allowed
    } else {
        console.log(v.toFixed(2)); // number methods allowed
    }
}

printValue(20) // 20.00
```

```ts
type NumOrStr = number | string

const add = (num1: NumOrStr, num2: NumOrStr) => {

    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    else {
        return num1.toString() + num2.toString()
    }

}

const result1 = add(2, 2)
const result2 = add("2", 2)

console.log(result1, result2) // 4 22
```

### in Operator:
Checks if a property exists in the object:

```ts
type Admin = { username: string; isAdmin: true };
type User = { username: string };

function checkRole(person: Admin | User) {
    if ("isAdmin" in person) {
        console.log("Admin user");
    } else {
        console.log("Normal user");
    }
}

checkRole({ username: "Tamim", isAdmin: true }) // Admin user
```
### Instanceof:

the instanceof operator is used to check whether an object is an instance of a specific class or not.

```js
object instanceof Class
```
- object → the variable you want to check
- Class → the constructor/class you are checking against
- Returns true if the object is created from that class or a subclass, otherwise false

```ts
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

speak(new Dog()); // Woof!
speak(new Cat()); // Meow!
```

```ts
class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }
    getSleep(hours: number) {
        console.log(`he sleep ${hours} daily`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    doStudy(hours: number) {
        console.log(`he study ${hours} daily`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(hours: number) {
        console.log(`i take ${hours} of class`)
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student
}
const isTeacher = (user: Person) => {
    return user instanceof Teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    }
    else if (isTeacher(user)) {
        user.takeClass(5)
    }
    else {
        user.getSleep(20)
    }
}

const person1 = new Person("x miya")
const student1 = new Student("student kamrul")
const Teacher1 = new Teacher("teacher lotip")

getUserInfo(person1) // he sleep 20 daily 
getUserInfo(student1) // he study 10 daily
getUserInfo(Teacher1) // i take 5 of class
```
  
### Equality Narrowing:

Using ===, !== to narrow types.

```ts
function compare(a: string | number, b: string | number) {
    if (a === b) {
        console.log("Same values");
    }
    else{
        console.log("Different values")
    }
}

compare('2', 2) // Different values
```

### Truthiness Narrowing:
TypeScript narrows based on truthy/falsy values.

```ts
function print(msg?: string) {
    if (msg) {
        console.log(msg.toUpperCase());
    }
    else {
        console.log("Please write something")
    }
}
print() // Please write something
```
### Array.isArray():

```ts
function process(x: string | string[]) {
    if (Array.isArray(x)) {
        console.log("Array");
    } else {
        console.log("String");
    }
}

process(['a', 'b']) // Array
```
  

# Generics
Generics allow you to write reusable code that works with multiple types while keeping strong type safety.

Instead of using any, which removes type checking, generics let you pass types as parameters.

```ts
// with any
function getFirstElement(arr: any[]) {
    return arr[0];
}

const num = getFirstElement([1, 2, 3]);   // Type is any
const str = getFirstElement(["a", "b"]);  // Type is any

console.log(num, str) // 1 a


// with generics
function getFirstElement2<T>(arr: T[]): T {
    return arr[0];
}

const num2 = getFirstElement([1, 2, 3]);   // Type is number
const str2 = getFirstElement(["a", "b"]);  // Type is string

console.log(num2, str2) // 1 a
```

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "Tamim" }, { age: 20 });
console.log(result) // { name: 'Tamim', age: 20 }
```

```ts
// Generic in Interfaces

interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 123 };
const stringBox: Box<string> = { value: "Hello" };

console.log(numberBox) // { value: 123 }
console.log(stringBox) // { value: 'Hello' }
```

```ts
// Generic with type alias

type Coordinates<X, Y> = [X, Y]

const coordinates1: Coordinates<number, number> = [20, 30]
const coordinates2: Coordinates<string, string> = ['20', '30']

console.log(coordinates1) // [20, 30]
```

```ts
type GenericArray<T> = Array<T>


// const strArray: string[] = ['a', 'b', 'c']
const strArray: GenericArray<string> = ['a', 'b', 'c']

// const numArray: number[] = [1, 2, 3]
const numArray: GenericArray<number> = [1, 2, 3]

// const boolArray: boolean[] = [true, false, true]
const boolArray: GenericArray<boolean> = [true, false, true]
```
Note:  Array[T] === T[]

```ts
// type GenericArray<T> = Array<T>

// const userList: GenericArray<{ name: string, age: number }> = [
//     {
//         name: 'x',
//         age: 20
//     },
//     {
//         name: 'y',
//         age: 24,
//     },
//     {
//         name: 'z',
//         age: 30
//     }
// ]


type GenericArray<T> = Array<T>

type User = {
    name: string,
    age: number
}

const userList: GenericArray<User> = [
    {
        name: 'x',
        age: 20
    },
    {
        name: 'y',
        age: 24,
    },
    {
        name: 'z',
        age: 30
    }
]
```

```ts
interface Developer<T, X = null> { // X = null (Default value)
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string
    };
    smartWatch: T;
    bike?: X
}

interface PoorWatch {
    heartRate: string;
    stopWatch: boolean
}

const poorDeveloper: Developer<PoorWatch> = {
    name: 'x',
    salary: 20,
    device: {
        brand: 'oppo',
        model: "a5s",
        releasedYear: '2005'
    },
    smartWatch: {
        heartRate: '56',
        stopWatch: true
    },
    bike: null
}

const richDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
    calling: boolean;
    ai: boolean
}, { brand: "yamaha" }> = {
    name: 'x',
    salary: 20,
    device: {
        brand: 'oppo',
        model: "a5s",
        releasedYear: '2005'
    },
    smartWatch: {
        heartRate: '56',
        stopWatch: true,
        calling: true,
        ai: true
    }
}
```

```ts
// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObj = (value: { id: number, name: string }) => [value]

// const arrString = createArrayWithString('Apple')
// const arrNumber = createArrayWithNumber(10)
// const arrObj = createArrayWithUserObj({ id: 3, name: "x" })

const createArrayWithGeneric = <T>(value: T) => [value]

const arrString = createArrayWithGeneric('Apple')
const arrNumber = createArrayWithGeneric(10)
const arrObj = createArrayWithGeneric({ id: 3, name: "x" })


const createArrayWithTuple = (param1: string, param2: string) => [param1, param2]

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]
const res1 = createArrayTupleWithGeneric("tamim", false)
const res2 = createArrayTupleWithGeneric(222, { name: "tamim" })


const addStudentToCourse = <T>(studentInfo: T) => {
    return { course: "Next Level", ...studentInfo }
};

const student1 = {
    id: 123,
    name: "tamim",
    hasPen: true
}

const student2 = {
    id: 32434,
    name: "zunker",
    hasCar: true,
    isMarried: true
}

const result = addStudentToCourse(student1)
```

### Constrain
Generic constraints allow you to restrict what types are allowed in a generic. we do this using extends keyword.

```ts
function printName<T extends { name: string }>(person: T) {
    console.log(person.name)
}

printName({ name: "tamim", age: 20 }) // Tamim
printName({ age: 20 }) // Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.
```

```ts
function toArray<T extends string | number>(value: T): T[] {
    return [value]
}

toArray("Hello")
toArray(20)
toArray(true) //  Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
```

```ts
function getFirst<T extends any[]>(arr: T) {
    return arr[0]
}

getFirst([1, 2, 3])
getFirst(['1', '2'])
getFirst("Hello") // Argument of type 'string' is not assignable to parameter of type 'any[]'.
```

```ts
interface Person {
    name: string;
}

function greet<T extends Person>(value: T) {
    console.log("Hello", value.name);
}

greet({ name: "Tamim", id: 1 });   // ok
greet({ id: 1 });                  // ❌ error
```


```ts
type student = { id: number, name: string }

const addStudentToCourse = <T extends student>(studentInfo: T) => {
    return {
        course: "Next Lavel",
        ...studentInfo
    }
}

const student1 = {
    id: 123,
    name: "tamim",
    hasPen: true
}

const student2 = {
    name: "zunker",
    hasCar: true,
    isMarried: true
}

const result1 = addStudentToCourse(student1)
const result2 = addStudentToCourse(student2) // error
```

#### with keyof: 
keyof is an operator that extracts all keys of a type as a union of string literal types.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = {
    name: "Tamim",
    age: 20
};

getProperty(user, "name"); // Tamim
getProperty(user, "age");  // 20
getProperty(user, "location");  // Argument of type '"location"' is not assignable to parameter of type '"name" | "age"'.
```

```ts
type User = {
    id: number,
    name: string,
    address: {
        city: string
    }
}

const user: User = {
    id: 222,
    name: "mezba",
    address: {
        city: "Barisal"
    }
}

// const myId = user["id"]
// const myName = user["name"]
// const address = user["address"]
// console.log(myId, myName, address) // 222 mezba { city: 'Barisal' }

const getPropertyFromObj = <X,>(obj: X, key: keyof X) => {
    return obj[key]
}

const result = getPropertyFromObj(user, "name")
console.log(result) // mezba

const product = {
    brand: "apple"
}
const student = {
    id: 123,
    class: 5
}

const result2 = getPropertyFromObj(product, "brand")
const result3 = getPropertyFromObj(student, "id")

console.log(result2, result3) // apple 123
```
### conditional Types:

Conditional types allow you to choose a type based on a condition, similar to an if/else, but inside the type system.

syntax: 

```
T extends U ? X : Y
```
- If T extends (matches) U, return X else Y

```ts
type A = null;
type B = undefined

type c = A extends number ? true : B extends undefined ? true : false
```
```ts
type RichPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true : false

type HasBike = CheckVehicle<"bike">
```

```ts
type IsNumber<T> = T extends number ? "YES" : "NO";

type A = IsNumber<number>;   // "YES"
type B = IsNumber<string>;   // "NO"
```

### Mpped Types:

Mapped types allow you to create new types by transforming existing types. 

```ts
type Person = {
  name: string;
  age: number;
};

// Make all properties optional
type PartialPerson = {
  [K in keyof Person]?: Person[K];
};
```
here, 
- [K in keyof Person] → iterate over all keys of Person.
- Person[K] → type of that property.
- ? → make it optional.

```ts
type AreaOfNum = {
    height: number;
    width: number;
}

// type AreaOfString = {
//     height: string;
//     width: string;
// }

type Area<T> = {
    [key in keyof T]: T[key]
}

const area1: Area<{ height: string; width: number }> = {
    height: '50',
    width: 40
}
```

# Utility Types: 
TypeScript provides several built-in utility types that help you transform existing types and create new types from them.

Utility types are extremely important because they save you time, reduce code duplication, and let you write cleaner, more flexible TypeScript.

- Partial<> : Makes all Properties of a type optional: 

```ts
type User = {
    name: string;
    age: number;
}

type PartialUser = Partial<User>;

const user: PartialUser = {
    name: "Tamim" // age is optional
}
```

- Required<>: Opposite of Partial — makes all properties required.

```ts
type User = {
    name?: string;
    age?: number;
}

type RequiredUser = Required<User>;

const user: RequiredUser = {
    name: "Tamim",
    age: 20
}
```
- Readonly<>: Makes all properties immutable (cannot be changed):

```ts
type User = {
    name: string;
    age: number;
}

const user: Readonly<User> = {
    name: "Tamim",
    age: 20
};

// or
const user2 = Readonly<user>

user.age = 21; // ❌ Error: cannot modify readonly property
```

- Record <K, T>: Used to create an object with specific key type K and value type T:

```ts
type Scores = Record<string, number>;

const studentScores: Scores = {
    Tamim: 34,
    John: 40,
}

// manual version of recoard
type Scores = {
    [key: string]: number;
};

const studentScores: Scores = {
    Tamim: 34,
    John: 40,
    Math: 100,
};
```

- Pick<>: Selects specific properties from a type:

```ts
type User = {
    name: string;
    age: number;
    email: string;
}

type UserPreview = Pick<User, "name" | "email">;

const data: UserPreview = {
    name: "Tamim",
    email: "t@gmail.com"
}
```

- Omit<>: Opposite of Pick — removes specific properties:

```ts
type User = {
    name: string;
    age: number;
    email: string;
}

type WithoutEmail = Omit<User, "email">;

const user: WithoutEmail = {
    name: "Tamim",
    age: 20
}
```

- Exclude<>: Removes types from a union:

```ts
type Letters = "a" | "b" | "c";
type RemoveB = Exclude<Letters, "b">; 
// "a" | "c"
```

- Extract<>: Opposite of Exclude, keeps only matching types: 

```ts
type Letters = "a" | "b" | "c";
type OnlyB = Extract<Letters, "b" | "d">;
// "b"
```

- NonNullable<>: Removes null and undefined:

```ts
type Maybe = string | null | undefined;

type Clean = NonNullable<Maybe>;
// string
```

- ReadOnlyArray<>: Cereates a readonly array: 

```ts
const numbers: ReadonlyArray<number> = [1, 2, 3];

numbers.push(4); // ❌ Error
numbers[0] = 10; // ❌ Error
```

# OOP:

### Classes: 

```ts
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`hi, i am ${this.name}`)
    }
}


const p1 = new Person("tamim", 20)
p1.greet() // hi, i am tamim
console.log(new Person("nasrin", 2)) // Person { name: 'nasrin', age: 2 }
```

Note: In JavaScript, we don’t need to declare class properties because they are automatically created when assigned in the constructor. In TypeScript, however, we must declare class properties explicitly unless we use an access modifier like public, private, or protected in the constructor, which automatically declares and assigns them:

```ts
class Person {

    constructor(public name: string, public age: number) { }

    greet() {
        return `Hello, I'm ${this.name}`;
    }
}


const p1 = new Person("tamim", 20)

console.log(p1.greet()); // hello, I'm tamim
```

### Static Keyword:

```ts
class MathUtils {
    // Static property
    static PI: number = 3.1416;

    // Static method
    static square(x: number): number {
        return x * x;
    }
}

console.log(MathUtils.PI);        // 3.1416
console.log(MathUtils.square(5)); // 25

const obj = new MathUtils();
// console.log(obj.PI);
// Property 'PI' does not exist on type 'MathUtils'. Did you mean to access the static member 'MathUtils.PI' instead?
```

**Without Static:** 

```ts
class Counter {
    count: number = 0;

    increment() {
        return this.count += 1
    }
    decrement() {
        return this.count -= 1
    }
}

const instance1 = new Counter()
console.log(instance1.increment()) // 1 
console.log(instance1.increment()) // 2
console.log(instance1.increment()) // 3

const instance2 = new Counter()
console.log(instance2.increment()) // 1
console.log(instance2.increment()) // 2
```
here, Each instance has its own separate count.
 
**with static:**

```ts
class Counter {
    static count: number = 0;

    static increment() {
        return Counter.count += 1
    }
    static decrement() {
        return Counter.count -= 1
    }
}

console.log(Counter.increment()) // 1 
console.log(Counter.increment()) // 2
console.log(Counter.increment()) // 3
console.log(Counter.increment()) // 4
console.log(Counter.increment()) // 5
```
### The Four Pillars of OOP:


#### Encapsulation: 

Encapsulation (in js) is the process of hiding the internal state (properties) of an object using private fields (#), and providing controlled access through methods or getters/setters. This protects the object’s data and prevents unintended modifications.

Note:
- Private fileds Properties cannot be accessed outside the class and it Declared using #
- Getter and Setter allow accessing and modifying private fields like normal properties, instead of calling methods.

Encapsulation in js and ts are same, just change in js we have just public and private field. in ts the thoes field called access modifies. and here we have 3 access modifiers:
- Public: Accessible everywhere: inside class, subclasses, and outside
- private: Accessible only inside the class, Cannot be accessed outside or by subclasses
- protected(extra): Accessible inside the class and subclasses, Cannot be accessed outside the class

```ts
class Person {
  public name: string;     // public field
  private ageValue: number; // private field (TS private)
  protected country: string; // protected field (extra example)

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.ageValue = age;
    this.country = country;
  }

  // Getter
  get age(): number {
    return this.ageValue;
  }

  // Setter
  set age(newAge: number) {
    this.ageValue = newAge;
  }
}

const p = new Person("John", 25, "USA");

console.log(p.name);  // John (public)
console.log(p.age);   // 25 (via getter)

p.age = 30;           // via setter
console.log(p.age);   // 30

// console.log(p.ageValue);   ❌ Error: private
// console.log(p.country);    ❌ Error: protected
```

Without getter and setter:

```ts
class Person {
  public name: string;        // public field
  private ageValue: number;   // private field
  protected country: string;  // protected field

  constructor(name: string, age: number, country: string) {
    this.name = name;
    this.ageValue = age;
    this.country = country;
  }

  // Public method to get private age
  public getAge(): number {
    return this.ageValue;
  }

  // Public method to set private age
  public setAge(newAge: number): void {
    this.ageValue = newAge;
  }
}

const p = new Person("John", 25, "USA");

console.log(p.name);    // John (public)
console.log(p.getAge()); // 25

p.setAge(30);           // modify via method
console.log(p.getAge()); // 30

// console.log(p.ageValue);  ❌ Error: private
// console.log(p.country);   ❌ Error: protected
```

```ts
class BackAccount {
    readonly userId: number;
    protected userName: string;
    private userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
    addBalance(balance: number) {
        this.userBalance += balance
    }
}

class StudentBankAccount extends BackAccount {
    test() {
        // console.log(this.balance) // Property 'balance' does not exist on type 'StydentBankAccount'.
        console.log(this.userName)
    }
}

const myAccount = new BackAccount(111, 'Tamim', 100);
myAccount.addBalance(100)
console.log(myAccount)
```

```ts
class BankAccount {
    private _balance: number = 0;

    deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Deposit must be positive");
        }
        this._balance += amount;
    }

    withdraw(amount: number) {
        if (amount > this._balance) {
            throw new Error("Insufficient balance");
        }
        this._balance -= amount;
    }

    get balance() {
        return this._balance; // getter
    }
}

const acc = new BankAccount();
acc.deposit(1000);
acc.withdraw(300);

console.log(acc.balance); // ✔ 700
// acc._balance = 5000;   // ❌ ERROR (private)
```

#### Abstraction: 
Abstraction is the process of hiding implementation details using private field and showing only the necessary functionality to the user.

```ts
class BankAccount {
  private balance: number;  // TS private field

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds!");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance()); // 1300
```
here, User doesn’t need to know how #balance is stored or updated internally. They just call deposit/withdraw.

```ts
// using interface
interface MediaPlayer {
    play(): void
    pause(): void
    stop(): void
}

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Playing Music....")
    }
    pause() {
        console.log("Music paused....")
    }
    stop() {
        console.log("Music Stopped...")
    }
}

const customPlayer = new MusicPlayer()
customPlayer.play()
```

```ts
// using abstract class and methods
abstract class MediaPlayer {
    abstract play(): void
    abstract pause(): void
    abstract stop(): void
}

class MusicPlayer extends MediaPlayer {
    play() {
        console.log("Playing Music....")
    }
    pause() {
        console.log("Music paused....")
    }
    stop() {
        console.log("Music Stopped...")
    }
}

const customPlayer = new MusicPlayer()
customPlayer.play()
```

```ts
abstract class Vehicle {
    abstract start(): void; // abstract method (no body)
    
    stop() {
        console.log("Vehicle stopped.");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car engine started.");
    }
}

const c = new Car();
c.start(); // ✔
c.stop();  // ✔
```

##### Difference Between Encapsulation and Abstraction: 

| Encapsulation                     | Abstraction                                    |
| --------------------------------- | ---------------------------------------------- |
| Protect/hide object’s data        | Hide complexity, expose only necessary details |
| getters/setters or public methods | Public methods                                 |


#### Inheritance: 

Inheritance is a process that allows a chaild class inherits properties and methods from a parent class using extends keyword and super() method.

here, 
- extends: Used to create a child class that inherits from a parent class. It sets up the prototype chain so the child class can access parent methods and properties.
- super(): Used inside the child class constructor to call the parent class constructor.
  
```js
class Animal {
  public type: string;

  constructor(type: string) {
    this.type = type;
  }

  makeSound(): void {
    console.log(`${this.type} makes a sound`);
  }
}

class Dog extends Animal {
  public breed: string;

  constructor(breed: string) {
    super("Dog"); // call parent constructor
    this.breed = breed;
  }

  describe(): void {
    console.log(`This is a ${this.breed} of type ${this.type}`);
  }
}

const dog = new Dog("Labrador");
dog.describe();    // This is a Labrador of type Dog
dog.makeSound();   // Dog makes a sound
```
here, Child class inherits properties and methods from parent and can add its own functionality.

```ts
class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address
    }

    getSleep(hours: number) {
        console.log(`${this.name} sleep ${hours} a day`)
    }
}


class Student extends Parent { }

class Teacher extends Parent {
    designation: string; // own properties

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }

    // own methods
    takeClass(numberOfClass: number) {
        console.log(`${this.name} ${numberOfClass} hours class nan`)
    }
}

const student1 = new Student("x", 20, "barisal")
student1.getSleep(15)

const teacher1 = new Teacher("y", 20, "dhaka", "Senior Teacher")
teacher1.takeClass(4)
```

#### Polymorphism: 
Polymorphism is the process that allows a child class to inherit methods from a parent class using the extends keyword, and lets the same method behave differently depending on the child class.

We can do Polymorphism using two ways: 
1. Methods Overriding: Child class changes parent method behavior.
2. Duck Typing(Interfae-Based): Different objects implement the same method name.

##### Using Methods Overriding: 
Child class changes parent method behavior.

```js
class Animal {
  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Cat meows");
  }
}

const dog: Dog = new Dog();
const cat: Cat = new Cat();

dog.makeSound(); // Dog barks
cat.makeSound(); // Cat meows
```
Here, makeSound() is overridden in each child class. Same method name behaves differently.

##### Using Duck Typing:
Different objects implement the same method name, allowing them to be used interchangeably.

```js
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car starts");
  }
}

class Bike implements Vehicle {
  start(): void {
    console.log("Bike starts");
  }
}

function startVehicle(vehicle: Vehicle): void {
  vehicle.start(); // works for any object with start()
}

const car = new Car();
const bike = new Bike();

startVehicle(car);  // Car starts
startVehicle(bike); // Bike starts
```
Here, any object with a start method can be passed to startVehicle, demonstrating polymorphism without inheritance.

```ts
class Person {
    getSleep() {
        console.log(`I am a normal person, I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`i am a student, i sleep 7 hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a next level developer. I sleep for 6 hours`)
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person()
const person2 = new Student()
const person3 = new NextLevelDeveloper()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3) 
```

```ts
class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10, 20)

getArea(shape1)
getArea(shape2)
getArea(shape3)
```

```ts
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

function makeAnimalSpeak(a: Animal) {
    a.speak();
}

makeAnimalSpeak(new Dog()); // "Dog barks"
makeAnimalSpeak(new Cat()); // "Cat meows"
```
