function Task(name,workingHour){
    this.name=name,
    this.workingHour=workingHour
}




function Employee(name,currentTask,hoursLeft){
    this.name=name,
    this.currentTask=currentTask,
    this.hoursLeft=hoursLeft
}
Employee.prototype={
    constructor:Employee,
    work: function(){
        if(this.hoursLeft<this.currentTask.workingHour){
            this.currentTask.workingHour-=this.hoursLeft;
            this.hoursLeft=0;

        }
        if(this.hoursLeft>this.currentTask.workingHour){
            this.hoursLeft-=this.currentTask.workingHour;
            this.currentTask.workingHour=0;
        }
        

    },
    showReport: function(){

        console.log("Employee Name:"+this.name);
        console.log("Task name:"+this.currentTask.name);
        console.log("Hours that left for this Task:"+this.currentTask.workingHour);
        console.log(this.name+" have to work "+this.hoursLeft+"more hours today.");
    }

}
var employee1=new Employee("Pencho Petkov",new Task("Stroej 123",20),10);
employee1.work();
employee1.showReport();