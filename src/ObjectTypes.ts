const car : { type : string ,model : string, year : number } = {
    type : "Toyata",
    model : "Corola",
    year : 2008
}
console.log(car)


//  brand object definition 
const brands : { brand : string , model : string , engine : string, drive : number} = {
    brand : "BMW",
    model : "M5CS",
    engine : "V12",
    drive : 4
}
console.log(brands)
console.log(brands.brand);


// Type Inference
// here we are updating the object value
const brands1 = {
    type : "Mercedes" 
};
car.type = "ford";


// Optional Property 
// ?: : Optional Parameter
const cars : {type :string, mileage ?: number} = {
    type : "Sedan"
}

console.log(cars)

