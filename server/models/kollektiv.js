const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model for hvilke atributter som ingår i et Kollektiv-Objekt
const KollektivSchema = new Schema({
    kollektivnummer: {type: Number, required: true},
    studentby: {type: Schema.Types.ObjectId, ref: "Studentby", required: true},
    godkjentVask: {type: Boolean, ref: "godkjentVask", default: false},
    checkBoxes: {type: Array[Boolean]}
})

const Kollektiv= mongoose.model('Kollektiv', KollektivSchema);

module.exports = Kollektiv;

