const express = require('express')
const morgan = require('morgan')
require ('colors')
const connectDB = require('./config/config')
const dotenv = require('dotenv')


//config dotenv
dotenv.config()

//connection mongodb
connectDB()

const app = express();
//middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use("/api/items", require('./routes/itemRoute'));
app.get( '/', (req, res)=> {
    res.send("<h1>ANNEYYONGG</h1>");
});

const port = process.env.PORT || 8080
app.listen(port, ()=> {
console.log(`process running on port ${process.env.NODE_ENV} monde on ${process.env.PORT}`. bgMagenta.white);

});

