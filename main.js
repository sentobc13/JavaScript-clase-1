//alert('JavaScript funcionando correctamente');

//VARIABLES
let variableSinValor;
let booleano1 = "booleano1"
console.log("booleano", booleano1)
let booleano2 = "booleano2"
console.log("booleano", booleano2)

const PI = 3.14;
console.log(PI);
const TAU = 2 * PI
console.log(TAU)
/*const miNombre = "Sento"
console.log(miNombre)*/
const miNumeroFav = 13
console.log(miNumeroFav)

let boolean = true
console.log(boolean)
let boolean2 = false
console.log(boolean2)

const miNombre = "Sento";
let val;
val = miNombre.length;
console.log(val)

console.log(typeof miNumeroFav)

console.log("Mi nombre es " + miNombre + " y mi número favorito es " + miNumeroFav);
console.log("Seré un crack en JavaScript al terminar el bootcamp".toLocaleUpperCase());
console.log("Hola soy un crack".substring(0, 5))

miNumeroFav.toString();
console.log(miNumeroFav);

let variable1 = "JavaScript"
let variable2 = `Estoy aprendiendo ${variable1}, Yuju!!`;
console.log(variable2);

/* falta el último puntito del apartado variables, no he sabido hacerlo
*/

//ARRAYS
const arrayVacio = [];
console.log(arrayVacio);

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo']
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
console.log(loGuardoTodo.length)
loGuardoTodo.push('lol')
console.log(loGuardoTodo);
console.log(loGuardoTodo[1]);
loGuardoTodo.push('Euralio');
console.log(loGuardoTodo);

//OBJETOS
const coche = {
    marca: "Toyota",
    modelo: "iq",
    matricula: "9967HBG",
};
console.log(coche);
const casa = {
    codPostal: 46023,
    calle: "Avenida de Francia",
    portal: 65,
    piso: 11,
};
console.log(casa);
const FullStackDeveloper = {
    lenguajes: ['javascript', 'php'],
    proyectos: ['mi página personal', 'carta html y css'],
};
const perro = {
    nombre: 'Yago',
    raza: 'boxer',
    color: 'marrón y blanco',
    edad: 3,
};
const noticia = {
    titular: 'Aprendiendo JavaScript',
    cuerpo: 'The Bridge es la mejor escuela para aprender programación!!',
};
const persona = {
    nombre: 'Lucas',
    apellidos: 'López Campos',
    edad: 24,
};
console.log(persona.nombre);
console.log(FullStackDeveloper.lenguajes[0]);

let portatil = {
    marca: 'Asus',
};
console.log(portatil.marca);
console.log(portatil['marca']);
const concierto = {
    grupos: ['Infinity song', 'sakanaction', 'jungle']
};
console.log(concierto.grupos);
const led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul',
};
const arrayRGB = [led.lampara1, led.lampara2, led.lampara3];
console.log(arrayRGB);

const O_Error = {
    codigo: '404',
};
const codigo = O_Error.codigo;
console.log(codigo);

const grupo = {
    integrantes: ['Paco', 'Carla', 'Alba', 'Javi'],
};
const integrantes = grupo.integrantes;
console.log(integrantes[2]);

const impresora = {
    tinta: ['rojo', 'verde', 'auzl'],
};
const nivelesTinta = impresora.tinta;
console.log(nivelesTinta);

const movil = {
    especificaciones: ['128GB', 'iphone', 'rojo'],
};
const especificaciones = movil.especificaciones
console.log(especificaciones);


portatil.marca = "msi"
console.log(portatil.marca);

concierto.grupos.push('Guns N Roses');
console.log(concierto.grupos);

concierto.fecha = '11 de febrero';
console.log(concierto.fecha);
console.log(concierto);
concierto.fecha = new Date();
console.log(concierto.fecha);

grupo.integrantes.pop()
console.log(grupo.integrantes.length);
