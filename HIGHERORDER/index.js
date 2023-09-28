/*const arr = [4,5,6,7,8]
const area = function(arr){
    return Math.PI *arr *arr
}// area = 2pirsquare  r means radius = arr
const peri = function(arr){
    return Math.PI *2*arr
}
const dia = function(arr){
    return 2*arr
}
console.log(arr.map(area))
console.log(arr.map(peri))
console.log(arr.map(dia)) 

const arr = [2,3,4,5,6]
const area = function(arr){
    const out=[];
    for(i=0;i<arr.length;i++){
        out.push(Math.PI *arr[i]*arr[i])
    }
    return out

}
console.log(area(arr)) 

const arr = [2,3,4,5]
const peri = function(arr){
    const out = [];

for(i=0;i<arr.length;i++){
    out.push(Math.PI*arr[i])
}
return out
}
console.log(peri(arr)) 

const arr = [2,3,4,5,6]
const dia = function(arr){
    const out = []

for(i=0;i<arr.length;i++){
    out.push(2 *arr[i])
}
return out
}
console.log(dia(arr)) 
const arr =[2,3,4,5]
const area = function(arr){
    return Math.PI *arr*arr
}
const peri = function(arr){
    return Math.PI*2*arr
}
const  dia = function(arr){
    return 2*arr
}
const calculate= function (arr,logic){
     const out=[];
    for(let i =0; i<arr.length;i++){
         out.push(logic(arr [i]));
         }
        return out
     }
     console.log(calculate(arr,area))
    
    
     console.log(calculate(arr,peri))
    
    
     console.log(calculate(arr,dia)) 
    

function callbackfunction()    {
    console.log("callback function")
} 
function higherorderfunction(fun){
    console.log("higherorder fucntion")
    fun()
}
higherorderfunction(callbackfunction) 

const radius = [2,3,4,5]
const area = function(radius){
    const out = [];
    for(let i=0;i<radius.length;i++){
        out.push(Math.PI*radius[i]*radius[i]);
    }
    return out;
};
console.log(area(radius))

const peri = function(radius){
    const out = []
    for(let i=0;i<radius.length;i++){
        out.push(2*Math.PI*radius[i])
    }
    return out
}
console.log(peri(radius))

const dia = function(radius){
    const out = []
    for(let i=0;i<radius.length;i++){
        out.push(2*radius[i])
    }
    return out
}
console.log(dia(radius)) 

//we need to simplyfy the code

const arr =[2,3,4,5]
const area = function(arr){
    return Math.PI *arr*arr
}
const peri = function(arr){
    return Math.PI*2*arr
}
const  dia = function(arr){
    return 2*arr
}
const calculate= function (arr,logic){// calculate is higherorder function area,peri,dia are the callback functions
     const out=[];
    for(let i =0; i<arr.length;i++){
         out.push(logic(arr [i]));
         }
        return out
     }
     console.log(calculate(arr,area))
    
    
     console.log(calculate(arr,peri))
    
    
     console.log(calculate(arr,dia)) */

    const arr = [2,3,5,6]
     const area = function(arr){
        return Math.PI *arr *arr
    }// area = 2pirsquare  r means radius = arr
    const peri = function(arr){
        return Math.PI *arr
    }
    const dia = function(arr){
        return 2*arr
    }
    console.log(arr.map(area))
    console.log(arr.map(peri))
    console.log(arr.map(dia)) 
    