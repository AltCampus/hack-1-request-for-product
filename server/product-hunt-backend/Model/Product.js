const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const productSchema = new Schema ({
    title:{type:String},
    slug:{type:String,slug:'title'},
    description:{type:String},
    body:{type:String},
    author:{type:String,ref:'User'},
    upvotes:{type:Number,default:0},
    interestsToHackathon:[{type:Schema.Types.ObjectId,ref:'User'}],
    comments:[{type:Schema.Types.ObjectId,ref:'Comment'}],
    images:[{type:String}],
    tags:[{type:String}],
    acceptedUsers:[{type:Schema.Types.ObjectId,ref:'User'}]
},{timestamps:true})


const Product = mongoose.model('Product',productSchema)

module.exports = Product


