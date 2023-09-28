/*const string = "a";
const result = string.charCodeAt(0)
console.log(result)--ASCII value by using charCodeAt  

const data = "a";
const result = data.codePointAt(0)
console.log(result)-- SCII value by using codepoint at 

function checkPalindrome(string){
   //covert string to array values
    const arrayvalues = string.split('');
    //reverse the array values
    const reversearrayvalues = arrayvalues.reverse();
    //convert string to array
    const reversestring = reversearrayvalues.join('');
    if(string == reversestring){
        console.log("its palindrome")
    }
    else{
        console.log("its not a palindrom")
    }


}
const string = "madam"
checkPalindrome(string) -- find the string is pallindrome or not 


// program to sort words in alphabetical order


const string = "i am learning javascript";

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}



const string = "My name is preethi raman";
const newText = string.replace("raman","ganta");-- use replace keyword
console.log(newText)---replace acharacter with new character 

function reversestring(str){
    //convert array values
    const arrayvalues = str.split("");
    //reverse ana array
    const arrayreverse = arrayvalues.reverse()
    //convert string to array
    const  joinarray = arrayreverse.join("");
    return joinarray;

}
const string = "hello"
const result = reversestring(string)
console.log(result) --reverse a string in built in methods 

const person ={
    name:"preethi",
    age:"24",
    hobbies:["reading","dancing","watching"],
    greet: function(){
        console.log("hello everyone")
    },
    score:{
        maths:80,
        science:90    }

}

console.log(typeof person) -- find the type of our data typr 
console.log(person)
console.log(person.name)
console.log(person.hobbies[0])
console.log(person.score)
person.greet();--- creeat a object in different ways  using object literals and using object directly and uding constructor function 

//using instance object direclty

const person = new Object({
    name:"preethi",
    age:"24",
    hobbies:["reading","dancing","watching"],
    greet: function(){
        console.log("hello everyone")
    },
    score:{
        maths:80,
        science:90    }



})
console.log(typeof person);
console.log(person)
console.log(person.name)
console.log(person.hobbies[0])
console.log(person.score)
person.greet(); 

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths); 


function capitalizedfirstletter(str){
    const capitalized= str.charAt(0).toUpperCase()+ str.slice(1)
    return capitalized;
}
const string = "javascript"
const result = capitalizedfirstletter(string)
console.log(result)  ---convert first letter to uppercase 

function countvowel(str){
    const count = str.match(/[aeiou]/gi).length;
    return count

}
const string = "javascript"
const result = countvowel(string)
console.log(result)--count the vowels in string 

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
console.log(result) 


const person = {
    name:"preethi",
    age:"24",
    greet: function(){
        console.log("hello")
    },
    score:{
        maths:90,
        science:40
    }

};
delete person.greet
delete person["score"];
console.log(person) -- delete the property from object  

function checkstring(str){
    if(str.startsWith("s") && str.endsWith("g")){
        console.log(" the string starts with s and ends with g")
    }
    else if (str.startsWith("s")){
        console.log("the string starts with s doenot ends with g ")
    }
    else if(str.endsWith("g")){
        console.log("The string does not starts with s ends with g ")

    }
    else{
        console.log(" the string doesnt dtarts with s and doesnot ends with g")
    }

}

/*const person ={
    name:"preethi",
    age:"24"
}
const haskey = "gender" in person;
if(haskey){
    console.log("The key exits")
}
else{
    console.log(" the key doent exits")
}--- find the key include in object or not 

const person = {
    name : "preethi",
    age : "23"
}
const cloneperson = {...person}
console.log(cloneperson) //copy of an object

cloneperson.name = "mani"
console.log(cloneperson.name)
console.log(person.name) --- change a object 

const person = {
    name : "preethi",
    age :"24",
    hobbies :["watching","playing"]
}
for( let key in person){
    let value
    value = person[key];
    console.log(key + ":" + value)


} --- loop through object using for in 

const person1 = {
    name : "preethi",
    age : "24"
}
const person2 = {
    gender : "female",
    
}
const newobject = {...person1,...person2}
console.log(newobject) -- merge two objects 

const person = {
    name :"preethi",
    age : "23",
    gender : "female"
}
let count =0
for(let key in person ){
    ++count
}
console.log(count) -- count the keys in object */

