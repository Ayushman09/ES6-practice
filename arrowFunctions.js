const nameOfStudents = ['Abhijit', 'Ayushman', 'Barun','Dipanwita','Fahim','Ravi'];
const heightsOfStudents = [170,179,176,156,160,181];
const ageOfStudents = [21,20,22,22,21,20];

//using arrow functions
const studentsDetails = nameOfStudents.map((studentName,index) => ({Name : studentName, Age : ageOfStudents[index], heightInCM: heightsOfStudents[index]}));

console.log(studentsDetails)

const requiredHeights = heightsOfStudents.filter(height => height>170)

console.log(requiredHeights)