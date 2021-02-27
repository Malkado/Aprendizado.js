const express = require('express');
const app = express();

app.use(express.json())
//definição da porta
const port = process.env.SERVER_PORT || 3000;

//Informações sobre o servidor
app.listen(port, () => {
    console.log(`Listening on the port: ${port}`);
});