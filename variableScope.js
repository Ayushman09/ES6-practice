// use const by default
// for variables like looping variables,which needs to get updated, use 'let'
// don't use var

// eg of using var
for (var iterator = 0; iterator<=5;iterator++){
    console.log(iterator);
}
console.log(iterator); // iterator value got leaked i.e 6

// instead use let
for (let iteratorTwo = 10; iteratorTwo<=15;iteratorTwo++){
    console.log(iteratorTwo);
}

// console.log(iteratortwo)  //it gives error as 'let' keyword is block scoped

const allStudentsMarks = [55,58,76,79,33,90,14,94,75,07,85];
//remove students who have less than 75
// allStudentsMarks = allStudentsMarks.filter(marks => marks>75) //throws error as qit is const
let filteredCandidates = allStudentsMarks.filter(marks => marks>75);
console.log(filteredCandidates)
