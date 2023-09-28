/*var a = 10
function print(){
    var square = a * a
    console.log(a)
}
console.log(a)
print() ---global scope*/

/*function print(){
    var a =10
    var square = a * a
    console.log(square)
}
print()
console.log(a)---local scope*/

/*let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    let largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()---large number not declared in block */


/*const number = 10

function play(){
    const square = number * number
    if(number < 60){
        const largerNumber = 80
        const anotherLargerNumber = 100
        console.log(square)
    }
    console.log(largerNumber)
    console.log(anotherLargerNumber)

}
play()*/

/*function print() {
    var square1 = number * number
    console.log(square1)
  
    var number = 50
  
    var square2 = number * number
    console.log(square2)
  }
  
  print()*/

  /*function print() {
    let square = number * number
  
    let number = 50
  }
  
  print() */

/*let a = 10;
console.log(a)---Represents the numeric values

let a ="preethi"
console.log(a) ---represents the sequence of characters 

let a = "null"
console.log(a) ---represnets the null--no value at all

let a =BigInt( "1202398593859309924549")
console.log( a) 



 var a =10
 console.log(typeof(a)) -- returns the type of variable 

 let arr=[1, "hello" , null , 23]
 console.log(arr) 


 const number =[1,2,3,4,5,]
 number.push = (6 ,7)
 console.log(number)

 let arr =[1,2,3,4,5,]

 let number = arr.push(6)
 console.log(number)
 console.log(arr)
 
 
let arr=[1,2,3]
 let number = arr.pop()
 console.log(arr) 

 let arr=[1,2,3,4]
 let c= arr.pop()
 console.log(c)
 console.log(arr) 

 const arr = [1,2,3]
 const d = arr.shift()
 console.log(d)
 console.log(arr) 

 let arr =["heloo" ,"preethi","raman"]
 console.log(arr) 

 const number = [1,2,3]
 const numbersString = number.toString()
 console.log(numbersString) 

let arr =["yamaha","honda","tvs"]
console.log(arr.join())
console.log(arr.join(""))
console.log(arr.join("-"))

const fruits =["apple","banana","mango"]
const joinedfruits =fruits.join()
console.log(joinedfruits) 

let arr =["yamaha","honda","tvs"]
delete arr[1]
console.log(arr) 

let arr1 =[1,2,3]
let arr2 =[4,5,6]
let arr3 =[7,8,9]

let arr_new = arr1.concat(arr2,arr3)
console.log(arr_new) 

const  arr1 =[1,2,3]
const arr2 =[4,5]
const newarray = arr1.concat(arr2)
console.log(newarray) 

let arr =[22,10,56,45]
let str =["apple","banana","mango"]

arr.sort()
console.log(arr)

str.sort()
console.log(str) 

let numbers = [1,2,3,4,5]
let num2 = numbers.slice(1,4)
console.log(num2) 

let arr = [1,2,3,4,5]
arr.reverse()
console.log(arr) 

let arr =[1,2,3,4,5]
let str ="preethi"

console.log(Array.isArray(arr))

console.log(Array.isArray(str)) 

const fruits=["banana","apple","mango"]

const appleIndex = fruits.indexOf("apple")
console.log(appleIndex)
console.log(fruits.indexOf("apple")) 

const fruits=["banana","apple","mango","watermelon"]

const appleIndex = fruits.lastIndexOf("apple")
console.log(appleIndex) 

const arr = [5,13,35,56]
const found = arr.find((element)=> element>59)
console.log(found) 

const arr = [5,13,35,56]
const found = arr.findIndex((element)=> element>12)
console.log(found) 

const arr =[1,2,3,4]
console.log(arr.includes(2)) 

const arr =[23,45,67,34]
const found = (currentvalue) => currentvalue <90
console.log(arr.every(found)) 

const number =[1,2,3,4,5]
const found = number.some((num) => num <6)
console.log(found) 

const num =[1,2,3]
const found = num.map((num) => num+2)
console.log(found) 

const num =[1,2,3]
const found = num.filter((num) => num<2)
console.log(found) */ 






/*var a=100
var a=200
console.log(a)--variable redeclaration

var b=100
b=200
console.log(b)--variable reassigment
var c;
c=100
console.log(c)--at the time of declration value assignment not mandotory for intialization

let a=JSON
function play() {---function declaration
  console.log(a)
}
play()----fucntion calling 

var number = 50
function play(){
  var square= number*number
  consol.log(square)

}
console.log(number)
play()----global scope

function play(){
  var a = 10
  var square = a*a
  console.log(square)
}
play()
console.log(a)--local scope 

let a =50

function play(){
  let square = a*a
  if(true){
    let largerNumber =100
    console.log(largerNumber)===block scope
  }
  console.log(square)

}
console.log(a)---global
play() 
  

function play(){
  let suare = number * number
  let number =40
}
play()

console.log(a)
const a = 500--error 

let a =500
console.log(a)---hoisting  

let a =10
console.log(typeof(a))--to find the  type of java script variable */









