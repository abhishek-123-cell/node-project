const mongoose=require('mongoose');
const contactSchema=new mongoose.Schema({
FirstName:{
    type:String,required:true
},
LastName:{
    type:String,required:true  
},
phone:{
    type:String,required:true   
},
email:{
    type:String,required:true  
},
gender:{
    type:String,required:true  
 
},
age:{
    type:String,required:true  

},
date:{
    type:String,required:true
},
category:{
    type:String,required:true

}
});
const Contact=mongoose.model('Contact',contactSchema);
module.exports=Contact;