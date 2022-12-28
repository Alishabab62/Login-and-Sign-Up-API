const { default: mongoose } = require("mongoose");

const userSchema= new mongoose.Schema({
mobileNumber:{
    type:Number,
    required:true,
    unique:true,
},
Password:{
    type:String,
    required:true,
},
full_name:{
    type:String,
    maxLength:30,
    required:true,
},
email:{
    type:String,
},
gender:{ type: String,
    
},
alternate_phoneNumber:{
    type:Number,

},
time:{
    type:Date,
    default: Date.now,
}
})


const User=mongoose.model('User',userSchema)

module.exports=User
