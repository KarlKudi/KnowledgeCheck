const express = require('express');
const app = express();
const port = 3000;
const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);

app.use(express.static('public'));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/ggst', (req,res) =>{
    res.sendFile(__dirname + '/ggst/index.html');
});

app.listen(port,() =>{
    console.log('KnowledgeCheck listening on port ' + port)
})