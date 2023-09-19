const fruits =['apple','orange','melon','water melon'];

console.log('for');
// recorrido con for 
for(let i=0; i< fruits.length; i++){
    console.log(fruits[i]);
}

console.log('for of')
//recorrido con for of
for(const fruit of fruits){
    console.log(fruit);
}

//Iteradores de Arrays
//for Each()
console.log('forEach');
fruits.forEach(
    function(fruit){
        console.log(fruit);
    }
);

console.log('forEach con arrow function');
fruits.forEach(
    (fruit) =>{
        console.log(fruit);
    }
);

fruits.forEach(fruit => console.log(fruit));

//map
// Iterar un array y genera uno nuevo a partir del origonal 

const numbers = [1,2,3,4,5,6,7 ];

const squares = numbers.map(num => num ** 2);
/*
(num) => {
    return num **2;
}
*/

console.log(numbers);
console.log(squares);

// filter
// Itera un array y regresa uno nuevo con valores que cumplan
// condicion

const mayores = numbers.filter(num => num >4);
/*
(num)=>{
    if (num >4){
        return num;
    }
}
*/
console.log(numbers);
console.log(mayores);

// reduce 
// regresa un unico valor apartir de los valores de un array 

const sumatoria = numbers.reduce((a,b) => a +b);
const fact = numbers.reduce((a,b) => a*b);

console.log(numbers);
console.log(sumatoria);
console.log(fact);

const minusculas = 'abcdefghi'.split('');

const mayusculas = minusculas.map(letra => letra.toUpperCase());

console.log(minusculas);
console.log(mayusculas);

// some
// Regresa True si al menos uno de los elementos cumplen 

const equalTo5 = numbers.some(num => num ===15);
console.log(equalTo5);
