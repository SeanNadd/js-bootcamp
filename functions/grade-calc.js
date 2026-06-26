let studendScore, totalPossibleScore;

studendScore = 18;
totalPossibleScore = 20;

let calculatePercentage = function(studendScore, totalPossibleScore) {
    return (studendScore / totalPossibleScore) * 100;
}

let calculateGrade = function(gradePercentage){
    if(gradePercentage >= 90){
        return 'A';
    }else if(gradePercentage >= 80){
        return 'B';
    }else if(gradePercentage >= 70){
        return 'C';
    }else if(gradePercentage >= 60){
        return 'D';
    }else{
        return 'F';
    }
}

let gradePercentage = calculatePercentage(studendScore, totalPossibleScore);

console.log(`The score is: ${gradePercentage}%`);
console.log(`The corresponding letter grade is: ${calculateGrade(gradePercentage)}`)