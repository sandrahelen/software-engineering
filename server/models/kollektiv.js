const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KollektivSchema = new Schema({
    kollektivnummer: {type: Number, required: true},
    studentby: {type: Schema.Types.ObjectId, ref: "Studentby", required: true},
    vaskeliste: {type: Schema.Types.ObjectId, ref: "Vaskeliste", required: true},
    medlemmer: {type: Array, required: true},
    godkjent: {type: Boolean, required: true}
})

const Kollektiv= mongoose.model('Kollektiv', KollektivSchema);

module.exports = Kollektiv;

