function Student(name, email) {
    let homeworkResults = [];

    this.getName = function () {
        return name;
    };

    this.getEmail = function () {
        return email;
    };

    this.addHomeworkResult = function (topic, success) {
        homeworkResults.push({topic: topic, success: success});
    };

    this.getHomeworkResult = function () {
        return homeworkResults;
    };
}

function FrontendLab(students, failedLimit) {

   let failedHomeworksLimit = failedLimit;
   let studentsList = [];

   for (let i = 0; i < students.length; i++) {
     studentsList.push(new Student(students[i].name, students[i].email)); 
   }

   this.printStudentsList = function() {
    for (let i = 0; i < studentsList.length; i++) {
      console.log('name: ' + studentsList[i].getName() + ', email: ' + studentsList[i].getEmail());
      console.log(studentsList[i].getHomeworkResult());
    }
   }

   this.addHomeworkResults = function(homeworkResults){
      for (let i = 0; i < homeworkResults.results.length; i++) {
        for (let j = 0; j < studentsList.length; j++) {
          if (studentsList[j].getEmail() === homeworkResults.results[i].email){
            studentsList[j].addHomeworkResult(homeworkResults.topic, homeworkResults.results[i].success);
          }
        }
      }
   }

   this.printStudentsEligibleForTest = function(){
    for (let i = 0; i < studentsList.length; i++) {
      let homeworkResults = studentsList[i].getHomeworkResult();
      let failedCount = 0;
      for (let j = 0; j < homeworkResults.length; j++) {
        if (!homeworkResults[j].success){
          failedCount++;
        }
      }

      if (failedCount <= failedHomeworksLimit){
        console.log('name: ' + studentsList[i].getName() + ', email: ' + studentsList[i].getEmail());
      }
    }
   }
}