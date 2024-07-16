//Funciones

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Holamundo`



console.log(saludar2('Vegeta'));
console.log(saludar2('Goku'))
console.log(saludar4())

const getUser  = () => ({
        uid: '1234567890',
        username: 'admin',
    })

const user = getUser();
console.log(user)

//Tarea
//1. Transformar a una función de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const  getUsuarioActivo =   (nombre)  =>
    ({
        uid: '1234567890',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Gustavo')
console.log(usuarioActivo)