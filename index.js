const connectToMongo= require('./db')
const express = require('express')
const cors=require('cors');
require('dotenv').config();

 connectToMongo()
const app = express()

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
//end point for routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));
app.use('/api/customers',require('./routes/customers'));


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})