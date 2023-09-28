/*let a =10;
console.log(a)
setTimeout(()=>{
    console.log("hi js")
},1000)
console.log("learning javascript")//--- asynchronous order 


const main = async()=>{
    let a =10;
console.log(a)
await new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("hi js")
        resolve();
    },1000)
});
    console.log("learning javascript")
    
}
main();--by using async and await 

const promise = new Promise((resolve,reject)=>{
    let a=9;
    if(a<10){
        resolve("promise is done")
    }
    else{
        reject("promse is not done")
    }
},1000)
console.log(promise)--- 


const promise = new Promise((resolve,reject)=>{
    let a=9;
    if(a<10){
        resolve("promise is done")
    }
    else{
        reject("promse is not done")
    }
},1000)
console.log(promise)
promise
.then((result)=>{
    console.log(result)-- only called when the promise is resolvedor completed sucessfully
})
.catch((error)=>{
    console.log(error)--only callled when the promise is rejected

}) 

var a =10;
//var b =10;
try{
    var c =a+b;
console.log(c)//define a block of code to try


}catch(error){
    console.log(error)// define a block of code to handle the errors
}
var x =10;
console.log(x) 

async function getdata(){
const data  = await fetch("https://gorest.co.in/public/v2/users");
const jsonData = await data.json();
console.log(jsonData)
}
getdata()//async and await 

async function fetchdata(){
    try{
        const response = await fetchdata("https://gorest.co.in/public/v2/users")
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
  }


fetchdata() 

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("done");
    },  100);
});

p.then((result) => {
    console.log(result); // 
    return result ;
}).then((result) => {
    console.log(result); // 
    return result ;
}).then((result) => {
    console.log(result); // 
    return result ;
});-- we can return the result number of times 

const promise = new Promise((resolve,reject)=>{
    let a=9;
    if(a<10){
        resolve("promise is done")
    }
    else{
        reject("promse is not done")
    }
},1000)
console.log(promise)
promise
.then((result)=>{
    console.log(result)
    return result;
})
.then((result)=>{
    console.log(result)
    return result;
})
.then((result)=>{
    console.log(result)
    return result;
})

.catch((error)=>{
    console.log(error) 

})  

let object  = new Promise(function(resolve,reject){
    person = {
        name :"preethi",
        age :"24"

    }
    resolve(person);
})
object.then(function(name){
    console.log(person.name)
    return name;
})
.then(function(age){
    console.log(person.age)
    return age
}
) 

let promise = new Promise((resolve,reject)=>{
    const a = 10
    if(b<0){
        resolve("promise is done")---producing code
    }
    else{
        reject("promise is not done")
    }

})
promise.then((result)=>{
    console.log(result)
    return result ----consuming code
}).catch ((error)=>{
    console.log(error)
})--- it shows error because we r not  defined b */
   


