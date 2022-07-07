//alert('Mi archivo está bien linkeado');

//restar(a, b)
//Crear una función restar que tome como argumentos dos números y devuelva la resta de ellos

//restar(3, 2) // 1
//restar(10, 5.5) // 4.5
//restar(3, 5) // -2

const a = prompt('Ingresa el primer número');
const b = prompt('Ingresa el segundo número');

const restar = (a,b) => {
    return a - b;
};
console.log(restar(a,b));

const resultadoDeLaResta = restar(a,b);

console.log(`El resultado de la resta de ${a} - ${b}   es:  ${resultadoDeLaResta}`);

alert(`El resultado de la resta de ${a} - ${b}es: ${resultadoDeLaResta}`);