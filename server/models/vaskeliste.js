const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaskelisteSchema = new Schema({
    kollektivnummer: Number,
    studentby: String,
    medlemmer: Array,
    vaktmester: String
})

const Vaskeliste= mongoose.model('Vaskeliste', VaskelisteSchema);

module.exports = Vaskeliste;