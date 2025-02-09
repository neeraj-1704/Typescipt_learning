// Type: any
// any is a type that disables type checking and effectively allows all types to be used.

//any can be a useful way to get past errors since it disables type checking,
 //but TypeScript will not be able provide type safety, and tools which rely on type data,
// such as auto completion, will not work. Remember, it should be avoided at "any" cost...


let ab : any = 12;
ab = "string";
console.log("the value after the disable type check through the any ", ab)


let v : any = true;
v ="string";
v = 123.49;
Math.round(v);

console.log(v)


//Type: unknown

//unknown is a similar, but safer alternative to any./

//unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

//Casting is when we use the "as" keyword to say property or variable is of the casted type.


let dummy : unknown = 'steing';

dummy = 3;

let additon = dummy as number + 3 ;
// need to cast with "as " when have to use the 

console.log("the sum of the two is ", additon)



// Type : never ;

//never effectively throws an error whenever it is defined.
//never is rarely used, especially by itself, its primary use is in advanced generics.
//let x: never = true; // Error: Type 'boolean' is not assignable
//never means a function never returns a value.//



function throwError(message: string): never {
    throw new Error(message); // This function never returns
  }

throwError("You are not correct");



  
//throwError1("Something went wrong!");
  

// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

// let y: undefined = undefined;
// let z: null = null;
