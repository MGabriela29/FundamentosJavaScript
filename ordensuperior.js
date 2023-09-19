// funciones de Orden Superior 
// High Order Functions
// Funciones que reciben otras funciones como parámetros

const myFuctionWithBigName = () => {
    console.log('Esta es una Funcion');
}

myFuctionWithBigName();

const myFun = myFuctionWithBigName;

myFun();

const funOne = () =>{
    console.log('Ejecuta funcion 1');
}

const funTwo = (name) =>{
    console.log('Hola'+ name);
    console.log('Ejecuta funcion 2');
}

funOne();
funTwo('Gabriela');

const funThree = (otherFunction) =>{
    otherFunction();
    console.log('Ejecuta funcion 3');
}

funThree(funOne);