function calculateFinalScore(obj) {
if(typeof obj !='object' || Array.isArray(obj)){
    return 'invalid input';
}
    let totalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily){
        totalScore += 20; 
    }
    return totalScore >=80 ?true :false;
}
console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }

));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
));
console.log(calculateFinalScore("hello" 
));
