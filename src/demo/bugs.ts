function insecureFunction(password: string) {
    console.log(`Password: ${password}`);
}

const person = {
    name: 'abc',
};

function complexFunction() {
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

function unusedVariable() {
    const x = 10; // This variable is unused
    const y = person && person.name;
}

function vulnerableCode(userInput: string) {
    eval(userInput); // This is a security vulnerability
}

const password = 'password123'; // This is a security vulnerability

insecureFunction(password);
complexFunction();
unusedVariable();
vulnerableCode("alert('Hello, world!')");
