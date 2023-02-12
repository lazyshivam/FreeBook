const mongoose=require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({

 firstname:{
    type:String,
    required:true
    
 },
 lastname:{
    type:String
 },
 email:{
   type:String,
   required:true,
 },
 phone:{
      type:String,
      required:true
 },
 aboutCustomer:{
    type:String,
    required:true,
 },
 date:{
    type:Date,
    default:Date.now
 }
 

});
const Customer=mongoose.model('customers',customerSchema);
// User.createIndexes();
module.exports=Customer;