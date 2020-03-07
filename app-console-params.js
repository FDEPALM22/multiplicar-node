//usamos yargs
const argv2 = require('yargs').command('Listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }

    }).help()
    .argv;

//usamos destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar');


//usamos yargs




//lo utilizamos para pasar parametros por consola 
// ejemplo : node app-console-params.js --base=3
let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(base);
//let base = '5'

//console.log(argv);
console.log(argv2.limite);

crearArchivo(argv2.base).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(e => console.log(e));