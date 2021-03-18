const myAge = 38; //assigns a value to myAge variable

let earlyYears = 2; // we declare and assign to earlyYears variable value 2

earlyYears *= 10.5; // converting into dog years 

let laterYears = myAge - 2; // we declare and assign to laterYears varable  a value (subtract from myAge 2)

laterYears *= 4 ; // converting into dog years

let myAgeInDogYears = earlyYears + laterYears; // we declare and assign  to myAgeInDogYears variable a value (calculate my age in a dog years)

const myName = 'Nicu'.toLowerCase(); // we declare and assign to myName variable a value using the metod .toLowerCase() to convert a lower case

//displaying a result using a string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//result: My name is nicu. I am 38 years old in human years which is 165 years old in dog years.
