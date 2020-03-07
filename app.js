//const multiplicar = require('./multiplicar/multiplicar')
//usamos destructuracion
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = '5'
    //el module es un objeto global que esta disponible a lo largo de toda la aplicacion
    //console.log(module);
    //console.log(multiplicar);

//If options is a string, then it specifies the encoding. Example:
//fs.readFile('/etc/passwd', 'utf8', callback);

/*fs.readFile('tablas.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Reading file');
    console.log(data);
});*/
crearArchivo(base).then(archivo => console.log(`Archivo creado ${archivo}`)).catch(e => console.log(e));