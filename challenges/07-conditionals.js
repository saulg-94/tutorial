/*
## Conditional Statements #7

1. create two objects "person1", "person2"
2. setup name,age (15-25),
   status ('resident', 'tourist') keys

3. setup if else, condition where
   age must be bigger than 18 and status must be
   equal to 'resident'
4. test with both objects
*/

const person1 = {
  name: 'john',
  age: 17,
  status: 'tourist',
};
const person2 = {
  name: 'joe',
  age: 23,
  status: 'resident',
};

if (person1.age >= 18 && person1.status == 'resident') {
  console.log('person can vote');
} else {
  console.log('person can not vote');
}
if (person2.age >= 18 && person2.status == 'resident') {
  console.log('person can vote');
} else {
  console.log('person can not vote');
}
