//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
}

//const {edad, clave, nombre,  } = persona;

//console.log(persona.nombre)
//console.log(persona.edad)
//console.log(persona.clave)

const useContext = ({nombre, edad, rango = 'Capitan'}) => {
    //console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng } = useContext(persona);