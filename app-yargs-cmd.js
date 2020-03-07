const { crearArchivo, listarArchivos, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


let commando = argv._[0];

switch (commando) {

    case 'listar':
        // listarArchivos(argv.base).then(archivo => console.log(`Archivo listados ${archivo}`)).catch(e => console.log(e));
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido :'.inverse);
}




console.log(argv.limite);