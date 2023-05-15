require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts')
// routes
const mainRoute = require('./server/routes/main');
// connect to db
const connectDB = require('./server/config/db');


const app = express();
const port =  process.env.PORT || 5000;

connectDB();
// use public folder
app.use(express.static('public'));
// Teplating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine' , 'ejs') ;

// set routes
app.use('/',mainRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})