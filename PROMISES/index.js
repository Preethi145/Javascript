/*let mypromise = new Promise(function(resolve,rejected){
    let a =10
    if(a<1){
        resolve("promise done");
    }
    else {
        rejected("promise not done");
    }
})
console.log(mypromise) 


  /*let promise =new Promise(function(resolve,reject){

        resolve("i am done")
    

  })
  console.log(promise) 

   let a= "https://gorest.co.n/public/v2/users" // we need to fetch the data from these website
   const main=async()=> {
    const a = "hello";
    console.log(a);
     await new Promise((resolve) => {
      setTimeout(() => {
        console.log("inside interval");
        resolve();
      }, 1000);
    });
 
    console.log("outside");
}
 
main(); 

let promise = new Promise(function(resolve,reject){
    setTimeout(()=>resolve("done"),1000)
});
console.log(promise) 

let a =10;
console.log(a);
setTimeout(()=>{
    console.log("hello javascript")
},1000)
console.log("learning promises") 

const mypromise = new Promise(function(resolve,reject){
    let a = 9;
    if(a<0){
        resolve("promise is resolved")
    }
    else{
        reject("promise rejected")
    }

});
mypromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
}) 




const main=async()=> {
    const a = "hello";
    console.log(a);
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log("inside interval");
        resolve();
      }, 1000);
    });
 
    console.log("outside");
}
 
main(); 

const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    //setTimeout(() => {
      const success = true; // Simulated success
      if (success) {
        resolve("Operation succeeded!"); // Resolve with a result
      } else {
        reject("Operation failed!"); // Reject with an error
      }
    }, 1000);
  //});
  console.log(myPromise)

  myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  }); 
  

  var a=10;
  var b =20
  try{
    var c = a+b;
    console.log(c);
  }catch(error){
    console.log(error)

  }
  finally{ 
    console.log("finally")
  }
  var x =10;
  console.log(x) 
  //let a= "https://gorest.co.n/public/v2/users"

  async function getdata(){
    const data = await fetch("https://gorest.co.in/public/v2/users");
    const jsonData = await data.json();
    console.log(jsonData);
  }
  getdata(); --- async and await example 


  async function fetchdata(){
    try{
        const response = await fetch("https://gorest.co.in/public/v2/users")
        const data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
  }
  fetchdata() --try catch example 

  let promise = new Promise(function(resolve,reject){
    let a =10
    if(a=10){
        resolve("promise done")
    }
    else{
        reject("promise not done")
    }
  })
  console.log(promise)  

  let promise = new Promise(function(resolve,reject){
    console.log("hello")
    setTimeout(()=>{
        let a =10
    if(a>10){
        resolve("promise done")
    }
    else{
        reject("promise not done")
    }
  },1000)
  

  })
  console.log(promise)
  promise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  }); */
  
let a =10;
console.log(a);
setTimeout(()=>{
    console.log("hello javascript")
},1000)
console.log("learning promises") 





















