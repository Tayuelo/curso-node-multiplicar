const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base)...
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`)
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite }.txt`, data, (err) => {

            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}-al-${ limite }.txt`)
            }
        });
    })
}

let listarTabla = (base, limite = 6) => {
    console.log('======================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('======================='.green);
    for(let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

// Forma de exportar la función crear archivo
module.exports = {
    crearArchivo,
    listarTabla
}