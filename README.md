<h1 align="center">TypeScript Notes</h1>

- [TypeScript Introduction:](#typescript-introduction)
  - [What is TypeScript:](#what-is-typescript)
  - [TypeScript Main Features:](#typescript-main-features)
  - [JavaScript Vs TypeScript](#javascript-vs-typescript)
  - [How to run TypeScript:](#how-to-run-typescript)
  - [Inference vs Explicit Typing (Type Annotation):](#inference-vs-explicit-typing-type-annotation)
    - [1. Inference:](#1-inference)
    - [2. Explicit Typing (Type Annotation):](#2-explicit-typing-type-annotation)
    - [When to use what:](#when-to-use-what)
- [Number, Boolean, String:](#number-boolean-string)


# TypeScript Introduction:

## What is TypeScript:

TypeScript is a superset of JavaScript that design to make large-scale application development safer, more predictable, and easier to maintain. It is a compiled language, meaning TypeScript code first converted into JavaScript before execution.

![image](./assets/images/typeScript-introduction/hello-world.webp)

Note: Superset means a language that includes all features of another language, plus add additional features.

## TypeScript Main Features: 
- Static Typing: Allows us to define types.
- Static Type Checking: TypeScript detects type errors while writing code (during development) and at compile time, before the code runs.
- Code Suggestions & IntelliSense:

## JavaScript Vs TypeScript

| JavaScript                                                   | TypeScript                                                                               |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| A scripted programming language                              | A compiled language that is superset of JS                                               |
| Runs directly in browsers or Node.js (no compilation needed) | Must be compiled to JavaScript using the TypeScript compiler (tsc)                       |
| Errors appear only at runtime                                | Errors while writing code (during development) and at compile time, before the code runs |
| Prototype based OOP                                          | Class-based OOP syntax (compiles to JS prototypes)                                       |
| Basic editor support, limited IntelliSense.                  | Rich editor support, full IntelliSense with type information                             |

## How to run TypeScript:

- Step 1: Install Node.js for windows/linux/mac using NVM with NPM:

![alt text](./assets/images/typeScript-introduction/node.js-installing.png)

- Step 2: Install TypeScript:

  - Option 1: Global install (Good for learning raw TS)

```bash
npm install -g typescript
```

By using the -g flag, we install TypeScript globally on our computer. But when we build real projects, we should install TypeScript as a dev dependency, so it only works inside that project.

  - Option 2: Project-based install (Recommended for real projects)

```bash
npm install typescript --save-dev
```
Now TypeScript is installed only inside that project. To use the compiler:

```bash
npx tsc index.ts
```

- step 3: First program: 

```ts
const str: string = 'Hello World'
console.log(str)
```

Now How to See the Output?

  - Option 1: Using Node.js directly (Node 22.6.0+)

```bash
node index.ts
```

Output: 
```
Hello World
```

We might wondered that how node understand ts code? 

Starting from Node.js v22.6.0, Node introduced Type Stripping. Type Stripping means:
- Node removes typeScript from the file
- Then executes the remaining JavaScript
So Node is NOT running TypeScript directly. It removes the types first, then runs JavaScript behind the scenes.

Note: Still Node.js won't fully support TS, It only can remove basic type annotations. So when we do `node index.ts` advance TS features like enum, namespace etc  might not works. For that case we need to manually compiled the ts code by using TypeScript Compiler `tsc` so se the output of our code in raw js. 

  - Option 2: Using TypeScript Compiler (TSC)
Compile the file manually using TypeScript Compiler:

```bash
tsc index.ts
```

Now we can see a new index.js file create, se basically TSC convert you index.ts to index.js:

```js
// index.js
var str = 'Hello World';
console.log(str);
```
so, now our code runner extension on vs code works, or you can see output manually by using `node index.js`: 

```
Hello World
```

  - Option 3: Using ts-node (Development shortcut): 

Install `ts-node` along with ts: 

```bash
npm install typescript ts-node --save-dev
```

Then run: 

```bash
npx ts-node index.ts
```

This compiles the TypeScript in memory and runs the output instantly. Basically Behind the scenes it do:

```
TypeScript → JavaScript → Node execution
```

## Inference vs Explicit Typing (Type Annotation): 
In TypeScript there are two main ways types are handled: 

### 1. Inference:

Type inference is when TypeScript guess and assigns a type automatically based on the value or context.

```ts
let age = 20; // let age: number
let myName = "Tamim"; // let name: string
let active = true;  // let active: boolean


```
![alt text](./assets/images/typeScript-introduction/type-infers.png)

```ts
const user = {
    name: "Alice", // (property) name: string
    age: 30, // (property) age: number
    isAdmin: true // (property) isAdmin: boolean
};
```

```ts
const id = 2; // const id: 2
```
here, id types is set to 2, Because const data types are immutable.

### 2. Explicit Typing (Type Annotation): 
Explicit typing is when we assigns the type ourself. Means here, we manually define the type.

```ts
let age: number = 20;
let name: string = "Tamim";
let isAdmin: boolean = false;
```

### When to use what: 
- Use inference for small, local variables.
- Use explicit typing for important or shared code.

# Number, Boolean, String:

```ts
let age: number = 25;
let price: number = 99.99;

let isLoggedIn: boolean = true;
let hasPaid: boolean = false;

let username: string = "Tamim";
let greeting: string = `Hello, ${username}!`;
```