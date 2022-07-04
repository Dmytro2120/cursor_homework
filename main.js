class Student {
constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks1 = [];
} 

getInfo() {
    return `Студент ${this.course} курсу ${this.university}, ${this.fullName}`
  }
  

  get marks() {
    if (this.isDismissed) {
      return null;
    }
     return this.marks1;
    }
    
  set marks(mark) {
    if (this.isDismissed) {
      return null;
    }
  return this.marks1.push(mark);
  }

  getAverageMark() {
    const sum = this.marks.reduce((sum, current) => {
    return sum + current;
    });
    return (sum / this.marks.length).toFixed(2);
  }

  dismiss() {
    this.isDismissed = true; 
  }

  recover() {
    this.isDismissed = false;
  }
}

const student1 = new Student('WSEI', '2', 'Дмитро Говоавнець');


console.log(student1.getInfo());
student1.marks = 5;
student1.marks = 4;
student1.marks = 4;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
student1.marks = 3;
console.log(student1.marks)
student1.recover();
console.log(student1.getAverageMark());
