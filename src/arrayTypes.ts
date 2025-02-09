const names : string[]  = []  ;       // defining the array 

names.push('neeraj');
names.push('sagar');
names.push('Prathemesh');


for( let i =0 ;i <names.length; i++){      
    console.log(names[i]);
}


// defing the read only array in the js
const name1 : readonly string[] = [];

// wroung way to defined the array in the ts
// const number  = [1,2,4,5];
// number.push(3);
// number.push('3');

// right way to defined the array and pushing the element
const number : any = [1,2,4,5];
number.push(3);
number.push('3');