const fs = require('fs');
const color = require('colors');
//con promesas

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es valido`);
            return
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }
        fs.writeFile(`tablas/tabla - ${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else resolve(`tabla - ${base}-al-${limite}.txt`.green);
        });
    });
}

let listarArchivos = (base) => {
        return new Promise((resolve, reject) => {

            if (!Number(base)) {
                reject(`El valor ingresado ${base} no es valido`);
                return
            }
            fs.readFile(`tablas/tabla - ${base}.txt`, 'utf8', (err, data) => {
                if (err)
                    reject(err);
                else resolve(`tabla - ${base}.txt`);
                console.log(data);
            });
        });
    }
    //LISTAR CON LIMITES
    // EJEMPLO TABLA DEL 2 HASTA EL LIMITE 2X5 OSEA LIMITE 5

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(color.rainbow(`${base} * ${i} = ${ base * i}`));
    }

}


//con async
/*
let crearArchivo = async(base) => {

    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${ base * i}\n`;
    }
    fs.writeFile(`tablas/tabla - ${base}.txt`, data, (err) => {
        if (err)
            throw new Error(err);
        else return (`tabla - ${base}.txt`);
    });

}*/

module.exports = {
    crearArchivo,
    listarTabla,
    listarArchivos
}