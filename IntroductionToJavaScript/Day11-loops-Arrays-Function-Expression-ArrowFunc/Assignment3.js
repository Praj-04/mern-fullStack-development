let marks = [98, 78, 45, 90];

let totalMarks = (marks) => {
  for (i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  return sum;
};
let sum = 0;
let total = totalMarks(marks);

let avgMarks = total / marks.length;
console.log(avgMarks);
