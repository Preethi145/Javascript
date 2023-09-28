/*const person ={
    firstname : "Preethi",
    lastname : "Raman",
    FullName:function(){
        return this.firstname+ ""+this.lastname

    }


}
console.log(person.FullName())----- when used in object method this refers to object 

let x = this;
console.log(this)--- when  used in alone this refers to the global object or windowobject 
function play(){
    return this;

}
play()
console.log(this) --- when used in function this refers to global object or window object 

const person ={
    FullName: function(){
        return this.firstname+""+this.lastname;

    }
}
const person1 = {
    firstname :"Preethi",
    lastname : "Raman",
}
const person2 ={
    firstname :"Dharani",
    lastname :"Manne",
}
console.log(person.FullName.call(person1))
console.log(person.FullName.call(person2)) --- call method binds the this value invoke the fucntion and allows you to pass the list og arguments 

const person = {
    fullname: function(city,country){
        return this.firstname+""+this.lastname+","+ city+","+country;
    }
}
const person1 ={
    firstname:"Preethi",
    lastname:"Raman",
}
const person2 = {
    firstname:"Dharani",
    lastname:"Manne"
}
console.log(person.fullname.call(person1,"guntur","india"))--- call methos takes the arguemnts seperately 


const person = {
    fullname: function(city,country){
        return this.firstname+""+this.lastname+","+ city+","+country;
    }
}
const person1 ={
    firstname:"Preethi",
    lastname:"Raman",
}
const person2 = {
    firstname:"Dharani",
    lastname:"Manne"
}
console.log(person.fullname.apply(person1,["guntur","india"]))-- apply method takes the argumentsas an array 


const person= {
    firstname:"Preethi",
    lastname:"Raman",
    fullname:function(){
        return this.firstname+""+this.lastname;
    }
}
const member={
    firstname:"Dharani",
    lastname:"Manne",
}


let fullname = person.fullname.bind(member);
console.log(fullname())---bind method an object can borrow a method from another method */