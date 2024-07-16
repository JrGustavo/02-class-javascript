// Desestructuración
// Asignación Desestrcuturante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
}



//console.log(nombre)
//console.log(edad)
//console.log(clave)

const retornaPersona = ({nombre, edad, clave }) => {


    console.log(nombre, edad, clave )
}

retornaPersona(persona)