 function first(name){
   this.name=name;
 }
 first.prototype.display=function(){
   console.log(" My name is " + this.name);
 }
 function second(name,job){
   first.call(this, name);
   this.job=job;
 }
 second.prototype=Object.create(first.prototype);
 second.prototype.constructor=second;
 console.log(second.prototype.constructor);
 second.prototype.display=function(){
    
   console.log("my name is " + this.name + " and my job is " + this.job +".");
 }
 function third(name,age){
   second.call(this, name, null);
   this.age=age;
 }
 third.prototype=Object.create(second.prototype);
 third.prototype.constructor=third;
 third.prototype.display=function(){
   
         console.log("my name is " + this.name + " and I am " + this.age + "years old.");
 }
function fourth(age){
   third.call(this, null, age);
}
fourth.prototype=Object.create(third.prototype);
fourth.prototype.constructor=fourth;
fourth.prototype.display=function(){
   console.log("I am " + this.age + " years old.");
}
function fiveth(name,school,age){
  third.call(this, name);
  this. school=school;
  this.age=age;
}
fiveth.prototype=Object.create(fourth.prototype);
fiveth.prototype.constructor=fiveth;
fiveth.prototype.display=function(){
  console.log(`my name is ${this.name} and i am ${this.age} years old am learning at ${this.school} secondary school.`)
}
let obj=new fourth(21);
obj.display();
let student=new fiveth("kebede","Addis Ketema",16);
student.display();