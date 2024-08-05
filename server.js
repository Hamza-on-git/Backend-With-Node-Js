const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db')
require('dotenv').config();


const app = express(); 

app.use(bodyParser.json()) // store data in req.body and we can use it
const PORT = process.env.PORT || 4000

 
app.get('/', function(req, res){
    res.send('Welcome to my hotel... how i can help you ?, we have list of menus')
})

app.get('/chicken', (req, res)=>{
    res.send("sure ir... i would love to serve chicken")
})

app.get('/idli', (req, res)=>{
    let customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney:false
    }
    res.send(customized_idli)
})



// Import the router files.
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(PORT, ()=>{
    console.log('listening on port 4000');
})















