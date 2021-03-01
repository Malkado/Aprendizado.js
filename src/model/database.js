const mongoose = require('mongoose');


const _url = process.env.DB_URL;

mongoose.connect(_url, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.on('open', () => console.log('Mongo: Connection Open'));
connection.on('error', () => console.log('Mongo: Connection Failed'));



module.exports = connection;