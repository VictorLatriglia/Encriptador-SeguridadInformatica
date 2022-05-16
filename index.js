const { Decrypt } = require('./MessageDecriptor.js')
const { CreateKey } = require('./KeyGen.js');
const { Encrypt } = require('./MessageEncriptor.js')
var readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

console.log("¿Que desea hacer?")
console.group('Opts')
console.log('1. Generar llave de encripción')
console.log('2. Encriptar data')
console.log('3. Desencriptar data')
console.log('4. Terminar')
console.groupEnd('Opts')

rl.setPrompt(`Ingrese su opción `);
rl.prompt();
rl.on('line', async (opt) => {
    switch (opt) {
        case '1':
            const Key = CreateKey();
            console.log('Su llave es: ', Key)
            console.log(`Ingrese su opción `);
            break;
        case '2':
            rl.question('Ingrese su llave: ', (key) => {
                console.log('Key', key)
                rl.question('Ingrese su mensaje: ', (message) => {
                    let encription = Encrypt(message, key);
                    console.log('Mensaje encriptado: ', encription);
                    console.log(`Ingrese su opción `);
                });
            });
            break;
        case '3':
            rl.question('Ingrese su llave: ', (key) => {
                console.log('Key', key)
                rl.question('Ingrese su mensaje: ', (message) => {
                    let decription = Decrypt(message, key);
                    console.log('Mensaje desencriptado: ', decription);
                    console.log(`Ingrese su opción `);
                });
            });
            break;
        case '4':
            rl.close();
            break;

        default:
            console.error('Comando no reconocido', opt)
            break;
    }

});


