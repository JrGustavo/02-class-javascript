


const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55432123,
        lat: 13.43434,
        lng: 13.4343411,
    }
}

console.log(persona);

const persona2 = {...persona}
persona2.nombre = 'Peter';


console.log(persona2)