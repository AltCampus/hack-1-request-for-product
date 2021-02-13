const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment:{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    product:{type:Schema.Types.ObjectId,ref:'Product'}
},{timestamps:true})

const Comment = mongoose.model('Comment',commentSchema)

module.exports = Comment