/*let promise = new Promise(function(resolve,reject){
    let a =10;
    if(a<10){
        resolve("promise is done")
    }
    else{
        reject("promise is not done")
    }

})
console.log(promise) 

let promise  = new Promise(function(){

})
console.log(promise)-- pending promise 


let a =10
console.log(a);
setTimeout(()=>{
    console.log("js")
})
console.log("hello")//--execute asynchronus order to handle this we use async and await functions  


const main = async()=>{
    let a =10;
console.log(a)
await new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("javascript")
    })
    console.log("hello")
    resolve();
    

},1000)

}

main(); 


let promise = new Promise((resolve,reject)=>{
    const a =10;
    if(a<1){
        resolve("promise is done")
    }
    else{
        reject("promise is not done")
    }
})
promise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
}) 

var a =10;

try{
    var c =a+b
    console.log(c)
}
catch(error){
    console.log(error)--- shows the error 

} */




