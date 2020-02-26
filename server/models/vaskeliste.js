const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaskelisteSchema = new Schema({
    liste: {type: Array, default: ["Kjøkken", "Stue", "Bad", "Gang"], required:true}
})

const Vaskeliste= mongoose.model('Vaskeliste', VaskelisteSchema);

module.exports = Vaskeliste;