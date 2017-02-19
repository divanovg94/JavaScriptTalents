function Computer(year,price,isNotebook,hardDiskMemory,freeMemory,operationSystem){
    this.year=year,
    this.price=price,
    this.isNotebook=isNotebook,
    this.hardDiskMemory=hardDiskMemory,
    this.freeMemory=freeMemory,
    this.operationSystem=operationSystem
}

Computer.prototype={
    constructor: Computer,
    comparePrice: function(computer){
     if(this.price > computer.price){
         console.log("-1");
     }
     if(this.price<computer.price){
         console.log("1");
     }
     if(this.price==computer.price){
         console.log("0");
     }
    }
}

var computer1 = new Computer(1994,1200,"yes","100GB","50GB","Windows XP");
var computer2 = new Computer(19948,50022,"yes","500GB","100GB","Windows 7");

computer1.comparePrice(computer2);