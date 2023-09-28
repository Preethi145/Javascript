//console.log("Hello  world");
/*const a =10;
const b = 20;
const c = a+b;
console.log(c)---adding two numbers 


const number1 = 2
const number2 = 4
const number3 = 3

const result1 = Math.sqrt(number1)--returns the square root of number
const result2 = Math.sqrt(number2)
const result3 = Math.sqrt(number3)


console.log(result1)
console.log(result2)
console.log(result3)---square root of numbers 


const side1 = 5;
const side2 = 6;
const side3 = 7;
const s = (side1 + side2 +side3)/2;
const area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);---find the area of traiangle 



const basevalue = 4;
const height = 6;
const area=(4*6)/2;
console.log(area)----area = (base value * height)/2---find the area of triangle 

let a = 10;
let b = 20;
let temp;-- created one temp variable 
temp = a;
a = b;
b = temp;
//[a,b] = [b,a]--- using destructuring assignment
console.log(a)
console.log(b)//---swapping two numbers




const kilometer = 2.3;
const factor = 0.62131;
const miles = kilometer *factor; miles = kilometer *factor
console.log(miles); converting kilometers to miles 


//fahrenheit = celsius * 1.8 + 32
const celsius = "23"
const fahrenheit = celsius*1.8+32;
console.log(fahrenheit) 


const a = Math.random();--means equal to 0 and leass than 1
console.log(a)---we have declared a variable a and assigned it a random number greater than or equal to 0 and less than 1 

const a = Math.random()*(10-1)+1;
console.log(a)---get random number between 1 to 10 
formula= Math.random () * (highestnumber-lowestnumber) + lowestnumber 
Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber - we can use math floor also 

const number =4;
if(number >0){
    console.log("value is posititve");
}
else if(number = 0){
    console.log("number is  equal to zero")
}
else {
    console.log("valuse is negative");
}--- check a number is positive , nagitive or zero we use if  statemnet  

const number = 7;
if(number %2 ==0 ){
    console.log("The number is even")

}
else {
    console.log("The number is odd")
}
//----check the number is even od odd 


const num1 = 2;
const num2 = 1;
const num3 = 4;
let largest;
if(num1>=num2 && num1>=num3){
    largest = num1;
}
else if(num2>=num1 && num2>=num3){
    largest = num2;
}
else {
    largest = num3;
}
console.log(largest)---- find the largest number among three numbers 
 const num1 =2;
 const num2 =5;
 const num3 = 3;
 const largest = Math.max(num1,num2,num3);-- Math.max  function to find the largest among the numbers
 console.log(largest)---by using Math.max we find largest number among three numbers 

Prime number id divied by 1 if self for example 1,2,3,5,7 

const num = 32;
let isPrime = true;
if(num ==1){
    console.log(" either positive or composite number")

}
else if (num > 1){
    for(let i=2;num<2;i++){
        if(num%i==0){
            isPrime = false;
            break;

        }
        }
        if(isPrime){
            console.log("prime number")
        }
        else{
            console.log("not a prime number")
        
    }
} 


const lowerNumber = 4;
const higherNumber = 10;

console.log(`The prime numbers between lowerNumber and higherNumber are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
} 

factorial of n (n!) = 1 * 2 * 3 * 4.....n 

var number = 2

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number == 0) {
    console.log(`The factorial of numbewr is 1`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}
// program to find the factorial of a number

// program to generate a multiplication table

// take input from the user
const number = 3;

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(result);
} 

let num = 2;
for(i=1;i<=10;i++){
    let result = i*num
    console.log(result)
}---- finding the maultiplication of table 

const number = 7;
let n1=0,n2=1,nextTerm;
console.log("Fabinacci series");
for(let i =1;i<=number;i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
}--- print fabinacci series 
const operator = ('+','-','*','/');

const number1 = 2;
const number2 = 4;
let result ;
if(operator == '+'){
    result = number1+number2;
}
else if(operator == '-'){
    result = number1-number2;

}
else if(operator == '*'){
    result = number1*number2;
}
else {
    result =number1/number2
}
console.log(result) --- find the calulatore operator 


const number =22;
let sum = 0;
for(let i = 1; i <= number; i++){
    sum+=i;
}
console.log(sum) ---find the sum of natural numbers 

const a =3;
const b =33;
const c =43;
const result1 = a%2;
const result2 = b%2;
const result3 = c%2;
if(result1 == result2 && result1 == result3){
    console.log("same digit number")

}
else{
    console.log("different digit number")
} ---finding the same last digit number 

let hcf;
const number1 = 60;
const number2 = 72;
for(let i = 1; i<=number1 && i<=number2; i++){
    if(number1%i==0 && number2%i==0){
        hcf = i;
    }

}
console.log(hcf)---finding the hcf number -- higest common factory


let hcf;
const number1 = 6;
const number2 = 8;
for(let i = 1; i<= number1 && i<= number2; i++){
    if(number1%i==0 && number2%i ==0){
        hcf = i;
    }

}
let lcm = (number1 * number2)/hcf;
console.log(lcm)--- finding the lowest common factory 


const number = 6;
for(let i = 1; i<= number; i++){
    if(number%i==0){
        console.log(i)
    }
}---finding the sum of the number */



