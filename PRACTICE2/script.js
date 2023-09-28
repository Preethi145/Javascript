//ASCII values of a string by usinf charcodeat(), codepointat()
/*const string = "a"
const result = string.charCodeAt(0)
console.log(result)

const array = "A"
const result1 = array.codePointAt(0)
console.log(result1) 

//check the string is palindrome or not

function checkPalindrome(string){
    //convert string toarray values
    const arrayvalues = string.split("")
    //reverse array values
    const reversearrayvalues = arrayvalues.reverse();
    //convert reversearrayvalues to string
    const reversestring = reversearrayvalues.join("")
    
    if(string == reversestring){
        console.log("its a palindrome")
    }
    else{
        console.log("its not a palindrome")
    }


}
const string = "preethi"
checkPalindrome(string) 

//sort words in alphabatical order
const string = "i am learning javacsript"
//convert string to array values
const words = string.split(" ")
words.sort() 
for(const element of words){
    console.log(element)
} 

const string = "i am preethi raman ";
const result = string.replace("preethi","ganta")
console.log(result) 


function reversestring(str){
    //convert string to array values
    const arrayvalues = str.split("");
    //reverse array
    const reversearray = arrayvalues.reverse();
    //convert array to string
    const joinarray = reversearray.join("");
    return joinarray;

}
const string = "helloo"

const result = reversestring(string)
console.log(result) 

const person = {
    name:"preethi",
    age:"24",
    hobbies:["watching","playing"],
    greet:function(){
        console.log("hello")
    },

score:{
    maths:80,
    science:90
}
}
console.log(typeof person)
console.log(person)
console.log(person.name)
console.log(person.hobbies[0])
console.log(person.score)
person.greet(); 

function capitalizedfirstletter(str){
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1)
    return capitalized
}
const string = "javascript"
const result = capitalizedfirstletter(string)
console.log(result) -- convert first letter to uppercase 

function countvowel(str){
    const count = str.match(/[aeiou]/gi).length
    return count
}
const string = "javascript"
const result = countvowel(string)
console.log(result) 

const vowels = ["a","e","i","o","u"]
function countvowel(str){
    let count = 0;
    for(let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
            count ++;
        }

    }
    return count
}
const string = "javascript"
const result = countvowel(string)
console.log(result) -- find the vowels in string 

const person = {
    name :"preethi",
    age:"24",
    greet:function(){
        console.log("hellow")
    },
    score :{ 
        maths:90,
        science:80


    }


}
delete person.greet;
delete person["score"];
console.log(person) -- remoce property of an object 

function checkstring(str){
    if(str.startsWith("S") && str.endsWith("G")){
        console.log("thestring starts with S and ends with G ")

    }
    else if(str.startsWith("S")){
        console.log("the string starts with S doesnto end with G")


    }
    else if(str.endsWith("G")){
        console.log(" the string does nto starts with S but ends with G")
    }
    else{
        console.log("the string doesnto starts with S and  ends with G")
    }

}
const string ="String"
checkstring(string) -- check the string with starts and ends with certain function 

const person ={
    name :"preethi",
    age : "23"
}
const haskey = "name" in person
if(haskey){
   console.log(" key exits")
}
else {
    console.log(" key doesnot exits")
}--  key exits in object or not 

const person = {
    name : "preethi",
    age : "23"
}
const newobj = {...person}
console.log(newobj)//-- clone means copy of object 
newobj .name = "raman"
console.log(newobj.name)
console.log(person.name)--chaing object 

const person = {
    name : "preethi",
    age :"24",
    hobbies :["watching","playing"]
}
for(let key in person){
    let value;
    value = person[key]
    console.log(key + " -" +value)
}-- loop through the key  

const person1 ={
    name:"preethi",
    age : '23'
}
const person2 = {
    gender : "female"
}
const newobject = {...person1,...person2}
console.log(newobject)--- merge two objects 

const person1 ={
    name:"preethi",
    age : '23'
}
let count = 0
for(let key in person1){
    ++count
}
console.log(count)-- count the key values in object 

const person  = {
    name:"preethi",
    age :"23"
}
person.gender = "female"
console.log(person)---add property to object 

const string = `
this 
is 
preethi raman
ganta`
console.log(string)---creating multiline string */