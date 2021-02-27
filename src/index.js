const express = require('express');
require('dotenv').config();
const app = express();
const router = require('./routes/index');
//definição da porta
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(router);
//Informações sobre o servidor
app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});