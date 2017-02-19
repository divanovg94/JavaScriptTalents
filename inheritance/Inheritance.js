function Person(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
}
Person.prototype.showPersonInfo = function () {
    console.log(this.name + "," + this.age + "," + this.isMale);
}

function Student(name, age, isMale, score) {
    Person.call(this, name, age, isMale);
    this.score = score
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showStudentInfo = function () {
    this.showPersonInfo()
    console.log(this.score);
}

var studen = new Student('name', 12, true, 10);
studen.showStudentInfo();
// studen.showPersonInfo();


function Employee(name, age, isMale, daySalary){
    Person.call(this, name, age, isMale);
    this.daySalary = daySalary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.calculateOvertime = function(hours){
    if(this.age < 18){
        return 0;
    }

    return this.daySalary * 1.5; 
}

Employee.prototype.showEmployeeInfo = function(){
    this.showPersonInfo();
    console.log(this.daySalary);
}

var persons = [];
function initArr(){
    var arr = [];
    for(index = 0; index < 10; index++){
        arr.push(new Person('Mitaka'+ index, 22+index, true))
    }

    return arr;
}

persons = initArr();
console.log(persons);

var person1 = new Person('MehP', 22, true);
var person2 = new Person('MehP', 22, true);

var student1 = new Student('MehS', 22, true, 10);
var student2 = new Student('MehS', 22, true, 10);

var employee1 = new Employee('MehE', 22, true, 8);
var employee2 = new Employee('MehE', 22, true, 8);

persons.push(person1);
persons.push(person2);
persons.push(student1);
persons.push(student2);
persons.push(employee1);
persons.push(employee2);

console.log(persons);

function showAll(){
    for(index = 0; index < persons.length; index++){
        if (persons[index] instanceof Student){
            persons[index].showStudentInfo();            
        } else if(persons[index] instanceof Employee){
            persons[index].showEmployeeInfo();
        } else if(persons[index] instanceof Person){
            persons[index].showPersonInfo();            
        }
    }
}
showAll();

function showEmployeeOvertimes(){
    for(index = 0; index < persons.length; index++){
        if (persons[index] instanceof Employee){
            console.log(persons[index].calculateOvertime(2));            
        }
    }
}

showEmployeeOvertimes();
