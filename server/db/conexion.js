const { Client } = require('pg');

connectionObject = {
    user: process.env.DB_USER,
    host: '',
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432
}
const client = new Client(connectionObject);

client.connect().then(res => { console.log(`Conectado a db ${connectionObject.database}`) }).catch(err => {
    console.error(err);
})

module.exports = client;
