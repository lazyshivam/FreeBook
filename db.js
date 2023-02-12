const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI=`${process.env.Mongo_URI}/inotebook?`;

//connecting with the mangodb database
const connectToMongo=()=>{
          mongoose.connect(mongoURI,()=>{
            console.log("Database connected succesfully.");
          })
}
module.exports=connectToMongo;