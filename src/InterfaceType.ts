interface car {
    carName: string,
    model: string,
    year: number
}

let carNameBrand: car = {
    carName: "Audi",
    model: "A5",
    year: 2024

}

// updating the car value 
carNameBrand.year = 2034;

console.log(carNameBrand)


// interface can be extends

interface Reactangle {
    height : number,
    width : number 
}

interface colorReactangle extends Reactangle {
    color : string 
}

const react : colorReactangle = {
    height : 20,
    width : 30 ,
    color : "blue"
};

// updating the color property
react.height = 10;
console.log(react)



// Type 

type Company = {
    name : string,
    role : string,
    join : number
}

let abcd : Company = {
    name : "Neeraj",
    role : "Developer",
    join : 2023 
}


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car2: Car = {
  year: carYear,
  type: carType,
  model: carModel
};


// type we give the Union hence ,can’t do in the interface 

 //type StringNumber = string | number 

// function sum (a : StringNumber  , b : StringNumber ) {

//  & = intersection 
// | = Uniom

// Intersection types
type StringNumber = string | number;

type Person = {
    name : string,
    age : number,
    no : StringNumber
}

type Employee = Person & {
    position : string ,
    salary : number
}

const Manager : Employee = {
    name : "Neeraj",
    age : 12,
    no : "1223", // we can defined in both string and array
    position : "Line Manger",
    salary : 12334
}

console.log(Manager)



