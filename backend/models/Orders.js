const mongoose = require('mongoose')

//de structerin in js
const { Schema } = mongoose;

const OrderSchema = new Schema({
    email:{
        type:String,
        require:true,
        // unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },
})
module.exports = mongoose.model('order',OrderSchema);