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
let obj=new fourth(21);
obj.display();