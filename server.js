const express = require('express');

const dbConnect = require('./config/db');

const app = express();

//*********Databse Connection with mongo_DB **************
dbConnect();

//**init Middleware */

app.use(express.json({extended: false}));

//*********Define Routes****************/

app.use('/api', require('./routes/api/companyall'))
app.use('/api', require('./routes/api/userall'));
app.use('/api', require('./routes/api/cpost'));
app.use('/api', require('./routes/api/upost'));






const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server is Running On => ${PORT}😀` ));