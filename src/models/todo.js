const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    action :{
        type : String,
        required : [true,'Text field required']
    }
})

const ToDo = mongoose.model('todo',ToDoSchema);

module.exports = ToDo;