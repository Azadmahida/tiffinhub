const mongoose = require('mongoose')

//de structerin in js
const { Schema } = mongoose;

const UserSchema  = new Schema({

    name:{
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true,
        // unique: true
    },
    password:{
        type:String,
        require:true
    }
    
});

module.exports = mongoose.model('user',UserSchema);