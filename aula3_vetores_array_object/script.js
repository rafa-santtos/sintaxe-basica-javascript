// O que são vetores e arrays

//Declarando Arrays
/* let array = ["string", 1, true];
console.log(array); */

//Arrays guardando valores de vários tipos
/* let array = ["string", 1, true, ['array1'], ['array2'], ['array3']];
console.log(array[3]);  */

//forEach
/* array.forEach(function(item, index){console.log(item, index)}); */

//push
/* array.push("Novo item");
console.log(array); */

//pop
/* array.pop();
console.log(array); */

//shift
/* array.shift();
console.log(array); */

//unshit
/* array.unshift("Teste Unshift");
console.log(array); */

//indexOf
/* console.log(array.indexOf(true)); */

//splice
/* array.splice(0, 3);
console.log(array); */

//slice
/* let novoArray = array.slice(0,3);
console.log(novoArray); */

/* let object = {
    string: "string",
    number: 1,
    Boolean: true,
    array: ['array'],
    objectInterno: {objectInterno: "objeto interno"}
};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, Boolean, objectInterno} = object;
console.log(string, Boolean, objectInterno); */