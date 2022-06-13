const person = { firstName: 'Darnell', lastName: 'Plivins', hobby: 'Glass Blowing' };

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

person.job = 'Line Cook';
console.log("This person's current job is:", person.job);

person.previousJob = 'Violinist';
console.log("This person's previous job was as a:", person.previousJob);

console.log(person);
