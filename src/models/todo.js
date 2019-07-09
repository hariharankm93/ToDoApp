const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    action :{
        type : String,
        required : [true,'Text field required']
    },
    isChecked :{
        type : Boolean
    }
})

const ToDo = mongoose.model('todo',ToDoSchema);

module.exports = ToDo;