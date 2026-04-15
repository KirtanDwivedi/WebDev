function greet(name: string): string {
    return "Hello " + name;
}
console.log(greet("Kirtan Dwivedi"));

let subs: number | string = '1M' // union both number and string
let airline: 'indigo' | 'air india' | 'vistara' = 'indigo'

let count: number | undefined;
for (let i = 0; i < 10; i++) {
    if (i == 8) count = i;
}
console.log(count)

function logMessage(message?: string) { // ? makes the variable optional
    if (message != undefined) console.log(message)
    else console.log("No message")
}
logMessage("Hello")

type User = {
    name: string;
    age: number;
}
type Admin = {
    type: 'admin'; // type is just keyword
    role: 'super admin' | 'head';
}
type Person = User | Admin;
function isUser(obj: any): obj is User {
    return obj === 'object' && typeof obj.age === 'number' && obj!= null;
}

// Partial type
type PartialUser = Partial<User> //to create a new type where every property of the original type is made optional.
// Readonly type
type ReadonlyUser = Readonly<User> // read only.

function isUser1(obj: Omit<User, 'name'>): User {
    const user: User= {
        name: 'Kirtan',
        ...obj
    }
    return user;
}


// static checker- check the code for errors before running it while javascript doesn't do that
// use unknown or undefined or void rather than any
// use switch case

// next.js- patching (hot reloading) & rate limiting