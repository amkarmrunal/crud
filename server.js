require('./models/db')
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')

const employeeController = require('./controllers/employeeController')

var app= express()
app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json())

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs.engine({ 
    extname: '.hbs', 
    defaultLayout: 'mainLayout', 
    layoutsDir: path.join(__dirname, '/views/layouts/') 
}));

app.set('view engine', 'hbs');

port=3000
app.listen(port,()=>{
    console.log(`Server Started at port ${port}`)
})

app.use('/employee',employeeController)