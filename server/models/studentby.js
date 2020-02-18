const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentbySchema = new Schema({
    navn: {type: String, required: true},
    kollektiv: {type: Array(Schema.Types.ObjectId), ref: "Kollektiv", required: true},
    vaktmester: {type: String, required: true}
})

const Studentby= mongoose.model('Studentby', StudentbySchema);

module.exports = Studentby;