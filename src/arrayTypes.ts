// const names : string[]  = []  ;       // defining the array 

// names.push('neeraj');
// names.push('sagar');
// names.push('Prathemesh');


// for( let i =0 ;i <names.length; i++){      
//     console.log(names[i]);
// }


// // defing the read only array in the js
// const name1 : readonly string[] = [];

// // wroung way to defined the array in the ts
// // const number  = [1,2,4,5];
// // number.push(3);
// // number.push('3');

// // right way to defined the array and pushing the element
// const number : any = [1,2,4,5];
// number.push(3);
// number.push('3');



// // Typed Arrays
// // A tuple is a typed array with a pre-defined length and types for each index.

// // Tuples are great because they allow each element in the array to be a known type of value.

// // To define a tuple, specify the type of each element in the array:

// // ExampleGet your own TypeScript Server
// // define our tuple
// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

// // Example
// // define our tuple
// let ourTuple1: [number, boolean, string];

// // initialized incorrectly which throws an error
// ourTuple1 = [false, 'Coding God was mistaken', 5];
