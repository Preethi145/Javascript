/*let number =[1,2,3];
number .push(4,5);
console.log(number)--- push means add one or more Elements to the end of an array and return new length of an array 

let number =[1,2,3]
console.log(number.pop())
//number.pop()
console.log(number)---pop means removes the last element of an array and return that element 

const number =[1,2,3]
//number.shift()
console.log(number.shift())
console.log(number)---shift means removes the first element of an array and return that element 

const Number=[1,2,3]
Number.unshift(4,5)
console.log(Number)---add one or more elemnts to the beginning of an array return the new lenth of an array 

let bikes =["yamaha","honda","tvs"]
console.log(bikes.toString())---to string returns a stirng with array values  seperated by commas does not change the length of an array 

let bikes =["yamaha","honda","tvs"];
console.log(bikes.join())--joins all the elements of an array into a string ,elements are seperated by commas 

let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=[7,8,9];
let arr_new = arr1.concat(arr2,arr3);
console.log(arr_new);--- concat means join one or  more arrays returns new array containing the joined array 

let arr=[22,67,45,34];
let str=["zera","yar","van"]
arr.sort();
str.sort();
console.log(arr);
console.log(str);---sort means sort the elements of an array , and sorts the elements as strings in alphabatical  and acending order 

let numbers = [1,2,3,4,5];
let num2 =numbers.slice(1,4);
console.log(num2) ---slices out  a piece from an array it creates a new array 

let arr=[1,2,3,4,5];
arr.reverse()
console.log(arr)--reverse method reverse the order of the  elements in an  array 


const fruits=["apple","banana","graps","orange"];
const appleIndex = fruits.indexOf("apple");
console.log(appleIndex);---indexof method returns the 1st index position of an array and returns -1 if the value is not found. it searches from left from right 

const fruits=["apple","banana","graps","oranage"];
const lastappleIndexOf = fruits.lastIndexOf("apple");
console.log(lastappleIndexOf);---returns the last index position of an array and returns -1 if the value is not found. it searches from right to left 

const number=[1,2,3,4];
const found= number.find((num)=>num>3);
console.log(found);---returns the value of the  1st element in the array that satisfies the provied testing function otherwise undefined is returned 

const number=[1,2,3,4];
const found=number.findIndex((num)=>num=3);
console.log(found);--returns the indexof the 1st element in an array that satisfies the proved testing function other wise undefined 

const num=[1,2,3];
console.log(num.includes(3));---returns true array contains a specified value other returns false 

const arr=[2,34,32,45]
const found=(currentvalue) =>currentvalue<50;
console.log(arr.every(found));----test weather all the elemets in the array pass the test implemented by the provided functionreturns true.otherwsie false

const arr=[2,3,5,7];
const found=(currentvalue)=> currentvalue<6;
console.log(arr.some(found));--- test weather at least one element in an array pass the test implememted by the proved function. return true if the one condtion is pass otherwsie its false 

const number=[1,2,3];
const doublenumber=number.map((num)=>num*2);
console.log(doublenumber);---creates a new array from calling a function for every array Element, map doesnot change the lenght of array 

const number=[1,2,3,4];
const evennumber=number.filter((num)=>num *2 = 0);
console.log(evennumber);---creates a new array with all elemets that pass the test implemeted by provied function 

const number=[1,2,3,4];
const sum= number.reduce((total,num)=> total+num,0);
console.log(sum)---executes a reducer function on each element of the array resulting in a single output 


const number=[1,2,3];
number.forEach((num)=>console.log(num*2));---executes a provied function once for each array element */

