const express = require('express');

const {ServerConfig, Logger} = require('./config');
const apiRoute = require('./routes');


const app = express();

app.use('/api', apiRoute);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
});

