// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 60;

const person = {
  name: "john",
  age: age,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log(`Hello, my name is ${name}`);
  },
  sayHello(name) {
    console.log(`Hello, my name is ${name}`);
  },
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
