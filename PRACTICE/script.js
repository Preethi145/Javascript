/*let a =10;
let b = 20;
let c =a+b;
console.log(c) 

const num1 = 2;
const num2 = 4;
const num3 = 6;
const result1 = Math.sqrt(num1);
const result2 = Math.sqrt(num2);
const result3 = Math.sqrt(num3);
console.log(result1);
console.log(result2);
console.log(result3); 

const side1 = 1;
const side2 = 2;
const side3 = 3;
const s = (side1+side2+side3)/2;
const area =Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)))
console.log(area); 

let a =10;
let b =20;
[a,b]=[b,a]
console.log(a)
console.log(b) 


1 kilimeter = o.62131 miles 

let kilometer = 1.2;
let  factor = 0.62131;
let miles = kilometer*factor;
console.log(miles) 

fahrienhit = celsius *1.8+32 

const celsius = 22;
const fahrienhit = celsius *1.8+32;
console.log(fahrienhit) 

const a = Math.random();--- equal to 0 and less than 1
console.log(a) 
const a = Math.random() *(10-1)+1;
console.log(a)--findg the randome number between 2 numbers
formula = Math.random () * (higestnumber-lowestnumber)+lowestnumber 

const a = -8;
if(a >0){
    console.log("number is positive")
}
else if( a==0){
    console.log("number is zero")
}
else{
    console.log("number is negative")
} ---find the number is positive or nagative or zero 

const a =5;
if(a%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
} --- find the even and odd number 
const a =2;
const b =3;
const c =1;
const largest = Math.max(a,b,c);
console.log(largest) -- find the largest number among three numbers 
const number = 7;
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log("prime number");
    } else {
        console.log("not a prime number");
    }
}--- Prime number is divied by 1 it self  for examples 1,3,2, 5 
const lowerNumber = 2;
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


const number = 4;
//check if the number is negative
if(number <0){
    console.log("number is negatives")
}
else if(number == 0){
    console.log("The factorial number is 1")
}
else{
    let fact = 1;
    for(i = 1 ; i<number; i++){
        fact*= i;

    }
    console.log(fact)
}

const num = 4;
for(let i = 1; i <= 10; i++){
  const  result = i * num;
  console.log(result)
}--- multiplication of number 

const number = 7;
let n1=0,n2=1,nextTerm;
//console.log("Fabinacci series");
for(let i =1;i<=number;i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
}--- print fibanocci series 

const operator = ("+","-","*","/")
const num1 = 3;
const num2 = 5;
let result;
if(operator  == '+'){
   result = num1+num2;
}
else if(operator == '-'){
    result = num1 - num2;
}
else if(operator == '*'){
    result = num1 * num2;
}
else{
    result = num1 / num2
}
console.log(result)  calculator operator 

let result;
const num1 = 4;
const num2 = 6;
const operator= ("+","-","*","/");
switch("+"){
    case '+':
        result = num1 + num2;
        console.log(result)
        break;
    case '-':
        result = num1 - num2;
        console.log(result)
        break;
    case '*':
        result = num1 * num2;
        console.log(result)
        break;
    case '/':
        result = num1 / num2;
        console.log(result)
        break;
    default :
    console.log("Invalid operator")  
    break;  


} 

const number = 32;
let sum = 0;
looping from i = 1 to number
for(i = 1; i<=number; i++){
    sum+=i;
}
console.log(sum) ---sum of natural numbers  

const number = 22;
let sum = 0; i = 1;
while(i<=number){
    sum+=i;
    i++;


}
console.log(sum)----- sum of number by using while loop 

const a =2;
const b =22;
const c =32;

const result1 = a%2;
const result2 = b%2;
const result3 = c%2;
 
if(result1==result2 && result1==result2){
    console.log("same last digit number")
}
else{
    console.log("different last digit number")
}---finding the same last digit number 


// program to find the HCF or GCD of two integers-- highest common factor

let hcf;
// take input
const number1 = 60;
const number2 = 72;

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
} 
console.log(hcf)


The LCM of two numbers can also be found using the formula:-- Lowest common factorv

LCM = (num1*num2) / HCF 

// program to find the LCM of two integers

let hcf;
// take input
const number1 = 6;
const number2 = 8;

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

// display the hcf
console.log(lcm); 

Find the factors of the number 

const number = 6;
for(let i = 1; i <= number ; i++){
    if(number%i==0){
        console.log(i)
    }
}---factors of the 6 

// program to find the sum of natural numbers using recursion
function sum(num){
    if(num>0){
        return num + sum(num - 1) 
    }
    else{
        return num;
    }

}
const num = 5;
const result = sum(num);
console.log(result) 

const number = 9;
const result = number.toString(2)
console.log(result)-- finding decimal to binary values */






