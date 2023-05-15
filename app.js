require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
// routes
const mainRoute = require('./server/routes/main');
const authRoute = require('./server/routes/auth');
const {checkUser} = require('./server/middleware/authMiddleware.js')
// connect to db
const connectDB = require('./server/config/db');


const app = express();
const port =  process.env.PORT || 5000;

connectDB();
//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(express.static('public'));
// Teplating Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine' , 'ejs') ;

// set routes
app.use('*',checkUser);
app.use('/',mainRoute)
app.use('/auth',authRoute)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})