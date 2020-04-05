interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//let user = ["Jane User", "jacob"];
let user = { firstName: "Zhang", lastName: "Jacob"}
document.body.textContent = greeter(user);