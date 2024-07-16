// Arreglos

const arreglo = [1,2,3,4,5];

let arreglo2 = [...arreglo]

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)

