function school(arr) {
  let schoolRegister = {};
  for (let i = 0; i < arr.length; i++) {
    let [student, grade, score] = arr[i].split(", ");
    let averageScore = Number(score.split(": ")[1]);
    let finalGrade = grade.split(": ")[1];
    if (!schoolRegister.hasOwnProperty(finalGrade)) {
      schoolRegister[finalGrade] = {
        name: [],
        score: [],
      };
    }
    if (schoolRegister.hasOwnProperty(finalGrade)) {
      // if grade of student is less than 3, don't add him to array of names bcz he doesn't continue
      if (averageScore < 3) {
      } else {
        schoolRegister[finalGrade].name.push(student.split(": ")[1]);
        schoolRegister[finalGrade].score.push(averageScore);
      }
    }
  }
  let entries = Object.entries(schoolRegister);
  entries.sort((a, b) => {
    a = a[0];
    b = b[0];
    return a - b;
  });
  for (let i = 0; i < entries.length; i++) {
    let currGrade = entries[i];
    let grade = Number(currGrade[0]);
    let gradeObject = currGrade[1];
    let scoreArray = gradeObject.score;
    let averageGradeScore = (
      scoreArray.reduce((a, b) => a + b, 0) / scoreArray.length
    ).toFixed(2);
    if (scoreArray.length == 0) {
      continue;
    } else {
      console.log(
        `${(grade += 1)} Grade \nList of students: ${gradeObject.name.join(
          ", "
        )}\nAverage annual grade from last year: ${averageGradeScore}`
      );
      console.log();
    }
  }
}
