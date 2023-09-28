/*let url = "https://gorest.co.in/public/v2/users/"

let options = {
    method:"GET",
    headers :{

    },

}
fetch(url,options)
.then((response)=>{
    return response.json();---servee understand json format only

})

.then((data)=>{
   console.log(data)
})----GET method used to read  data from a resource  

let data ={
    name:"raman",
    status:"active",
    gender:"female",
    gmail:"preethiraman@gmail.com"
}
let url="https://gorest.co.in/public/v2/users"

let options = {
    method :"POST",
    headers :{
        "Content-Type" : "application/Json",
        Accept : "application/Json",
        Authorization: "Bearer 2e590185c35f9b43db149ae601d3cc1df62df678d86f9e3b53066859082cb4f1	"/*---in post method we need to take the permission from th website 
        },
        body : JSON.stringify(data)
    }

fetch(url,options)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
       console.log(data)
    }) 


    /*let data ={
        email:"jsjson@gmail.com",
    }
    
    
    let url="https://gorest.co.in/public/v2/users/5184388"
    
    
    let options ={
        method : "DELETE",  
        headers: {
              "Content-Type" : "application/Json",
              Accept : "application/Json",
            Authorization : "Bearer 20955982edea6a3113dcaba5796abdd08fb6b995a0c0b66b445532389edfbf93"
        },
        //  body : JSON.stringify(data)
    }
    fetch(url,options)
    .then((response)=>{  
        return response.json();
     })
    .then((data)=>{
       console.log(data)
    }) 



    /*let data ={
        email:"jsjson@gmail.com",
    }
    
    
    let url="https://gorest.co.in/public/v2/users/5184387"
    
    
    let options ={
        method : "PUT",  
        headers: {
              "Content-Type" : "application/Json",
              Accept : "application/Json",
            Authorization : "Bearer 20955982edea6a3113dcaba5796abdd08fb6b995a0c0b66b445532389edfbf93"
        },
          body : JSON.stringify(data)
    }
    fetch(url,options)
    .then((response)=>{  
        return response.json();
     })
    .then((data)=>{
       console.log(data)
    })---put method used to update a data */
    
    
    
