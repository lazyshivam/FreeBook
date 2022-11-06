const mongoose = require('mongoose');
const mongoURI="mongodb://localhost:27017/inotebook?";

//connecting with the mangodb database
const connectToMongo=()=>{
          mongoose.connect(mongoURI,()=>{
            console.log("Database connected succesfully.");
          })
}
module.exports=connectToMongo;