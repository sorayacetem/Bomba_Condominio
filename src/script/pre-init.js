const mariadb = require('mariadb');
const config = require(process.cwd() + '/config.json').db;

mariadb.createConnection({
    host: config.host,
    user: config.username,
    password: config.password
}).then((connection) => {
    connection.execute('CREATE DATABASE IF NOT EXISTS pesa_agua;')
        .then(() => {
            console.log('Banco pesa_agua CRIADO COM SUCESSO!');
            process.exit(0);
        })
        .catch(() => process.exit(1));
});