//create task Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const taskSchema = new Schema({
    taskName: {
        type: String
    },
    creationTimestamp: {
        type: Date
    },
    editTimestamp: {
        type: Date
    },
    expiry: {
        type: Date
    },
    completionStatus: {
        type: String
    },
    createdBy: {
        type: String
    }   
})
module.exports = mongoose.model('taskDetail', taskSchema);