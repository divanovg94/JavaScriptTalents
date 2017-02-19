function Student(name, subject, grade, yearInCollege, age, hasDegree, money) {
    this.name = name,
        this.subject = subject,
        this.grade = grade,
        this.yearInCollege = yearInCollege,
        this.age = age,
        this.hasDegree = hasDegree,
        this.money = money
}
Student.prototype = {
    constructor: Student,
    upYear: function (dgdgd) {
        if (this.hasDegree === false) {
            this.yearInCollege++;
        }
        if (this.yearInCollege >= 4) {
            this.hasDegree = true;

        }
        if (this.hasDegree === true) {
            console.log("Student" + this.name + "has Degree");
        }
    },
    receiveScholarship: function (min, amount) {
        if (min < 6 && min > 2) {

            if (min <= this.grade && this.age < 30) {

                this.money += amount;
            }
        }
        return this.money;
    }
}
function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject,
    this.students = [],
    this.freePlaces = 5;
}

StudentGroup.prototype = {
    constructor: StudentGroup,
    addStudent: function (student) {
        if (this.groupSubject === student.subject && this.freePlaces >= 1) {
            this.students.push(student);
            this.freePlaces--;
        }
    },

    emptyGroup: function () {
        this.students = [];
        this.freePlaces = 5;

    },

    theBestStudentName: function () {
        bestStudent = this.students[0];

        for (var index = 0; index < this.students.length; index++) {
            if (bestStudent.grade <= this.students[index].grade) {
                bestStudent = this.students[index];
            }
        }
        return bestStudent.name;
    },
     printStudentsInGroup: function(){
         for(var index=0;index < this.students.length;index++){
             console.log(this.students[index].name+","+this.students[index].subject+","+this.students[index].grade+","+
             this.students[index].yearInCollege+","+this.students[index].age+","+this.students[index].hasDegree
             +","+this.students[index].money );
         }
     }
}

var student1 = new Student("Pencho Mencho", "Math", 4, 2, 24, false, 200);
var student2 = new Student("Ewqewq Mencho", "Himiq", 3, 3, 24, false, 200);
var student3 = new Student("Penko Mencho", "Math", 4, 2, 34, false, 200);
var student4 = new Student("Kaka Mencho", "Math", 4, 1, 24, false, 200);
student1.upYear();
var total = student1.receiveScholarship(4, 10);

console.log(student1);
var studentGroup = new StudentGroup('Math');
studentGroup.addStudent(student1);
studentGroup.addStudent(student2);
studentGroup.addStudent(student3);
studentGroup.addStudent(student4);
console.log(studentGroup.theBestStudentName());
// console.log(studentGroup);
// studentGroup.emptyGroup();
studentGroup.printStudentsInGroup();

// console.log(studentGroup);