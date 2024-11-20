const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
fs.readFile("firstname.txt", "utf8")
    .then(firstname => {
        return fs.readFile("lastname.txt", "utf8").then(lastname => {
            return { firstname, lastname };
        });
    })
    .then(name => {
        return fs.readFile("age.txt", "utf8").then(age => {
            return { ...name, age };
        });
    })
    .then(person => {
        return fs.readFile("hobbies.txt", "utf8").then(hobbies => {
            return { ...person, hobbies };
        });
    })
    .then(person => {
        personHobbies = JSON.parse(person.hobbies);
        console.log(`${person.firstname} ${person.lastname} is ${person.age} years old and his hobbies are ${personHobbies[0]} and ${personHobbies[1]}.`);
    })
    .catch(err => {
        console.error("Error reading files", err);
    });


// ASYNC/AWAIT SOLUTION BELOW THIS LINE

async function readFiles() {
    try {
        const firstname = await fs.readFile("firstname.txt", "utf8");
        const lastname = await fs.readFile("lastname.txt", "utf8");
        const age = await fs.readFile("age.txt", "utf8");
        const hobbies = await fs.readFile("hobbies.txt", "utf8");
        const person = { firstname, lastname, age, hobbies };
        const personHobbies = JSON.parse(person.hobbies);
        console.log(`${person.firstname} ${person.lastname} is ${person.age} years old and his hobbies are ${personHobbies[0]} and ${personHobbies[1]}.`);
    } catch (err) {
        console.error("Error reading files", err);
    }
}
readFiles();