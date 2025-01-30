function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type assertion
console.log(greeter(user.join(' ') as string));

// Solution 2: Modify function parameter type to accept array of strings or string
function greeter2(person: string | string[]): string {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else {
        return "Hello, " + person.join(' ');
    }
}
console.log(greeter2(user));
console.log(greeter2("Jane Doe"));