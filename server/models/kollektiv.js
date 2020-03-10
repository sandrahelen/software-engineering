const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KollektivSchema = new Schema({
    kollektivnummer: {type: Number, required: true},
    studentby: {type: Schema.Types.ObjectId, ref: "Studentby", required: true},
    godkjentVask: {type: Boolean, ref: "godkjentVask", default: false}
})

const Kollektiv= mongoose.model('Kollektiv', KollektivSchema);

module.exports = Kollektiv;

