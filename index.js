console.log("The server is running, better go catch it");

const express = require('express');
const generate= require('shortid').generate;

//instantiate server app
const app=express();
app.use(express.json());

//pick a port
const PORT = 2222;

//make some data
const data = [];