const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentbySchema = new Schema({
    navn: {type: String, required: true},
    vaskeliste: {type: Schema.Types.ObjectId, ref: "Vaskeliste"}
})

const Studentby= mongoose.model('Studentby', StudentbySchema);

module.exports = Studentby;