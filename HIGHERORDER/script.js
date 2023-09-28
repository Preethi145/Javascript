/*let obj1 = {
    name :"preethi",
    city :"hyderabad",
    getIntro: function(){
        console.log(this.name + "from" + this.city)
    }
}
let obj2 = {
    name :"mani"
} 

Function.prototype.mybind= function (){
    console.log("hello welcome to prototypa inheritence")
}




function fun(){


} 

let student = {
    id : 1,
}
let tution= {
    id :2,
}
let scholl ={
    id :3
}
student._proto_=scholl
student._proto_proto_=tution
console.log(student.id)
console.log(scholl.id) 

let company = {
    name: "A",
    pay: function () {
      console.log("Paying");
    },
  }; //company object
  let worker = {
    id: 1,
    work: function () {
      console.log("Working");
    },
  }; //worker object
  worker.__proto__ = company; //worker object inherits company object
  console.log(worker);
  worker.pay(); // calling method from company object using worker object. 


 // let arr = ["preethi","famale"];

  let object = {
    name:"preethi",
    city:"hyderabad",
    getintro :function(){
        console.log(this.name + "from"+this.city)
    }

  }
  let object2 ={
    name :"mani"
  }
  object2._proto_=object
  console.log(object2.name) 

  Function.prototype.mybind = function(){
    console.log("adsfgsfg")
  }
  function fun(){} 

  let animal = {
    eats :true
  }
  let rabbit = {
    jumps : true
  }
  rabbit._proto_=animal;
  console.log(rabbit.eats)
  console.log(rabbit.jumps) */


