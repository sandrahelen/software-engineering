const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model for hvilke atributter som ingår i et Studentby-Objekt
const StudentbySchema = new Schema({
    navn: {type: String, required: true},
    vaskeliste: {type: Schema.Types.ObjectId, ref: "Vaskeliste"},
    admin: {type: Schema.Types.ObjectID, ref: "Admin"}
})

const Studentby= mongoose.model('Studentby', StudentbySchema);

module.exports = Studentby;