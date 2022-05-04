// have access to students from data.js

const updatedStudents = students.map(function (student) {
  //   console.log(student);
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

const highScores = students.filter(function (student) {
  //   if (student.score >= 80) {
  //     return student;
  //   }
  //   if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

const specificId = students.find(function (banana) {
  return banana.id === 1;
});

const fruits = ['banana', 'orange'];

const random = fruits.find(function (fruit) {
  return fruit === 'orange';
});

// console.log(random);
// console.log(specificId);

const averageScore =
  students.reduce(function (scoreTotal, student) {
    //   console.log(student);
    // console.log(scoreTotal);
    return scoreTotal + student.score;
  }, 0) / students.length;

// console.log(averageScore);

const subject = 'math';

const total = {};

total[subject] = 'some value';
// console.log(total);

const survey = students.reduce(function (survey, student) {
  //   console.log(student.favoriteSubject);
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }

  return survey;
}, {});

console.log(survey);
