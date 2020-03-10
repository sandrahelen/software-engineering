const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model for hvilke atributter som ingår i et Vaskeliste-Objekt
const VaskelisteSchema = new Schema({
    liste: {type: Array, default: ["Kjøkken", "Stue", "Bad", "Gang"], required:true}
})

const Vaskeliste= mongoose.model('Vaskeliste', VaskelisteSchema);

module.exports = Vaskeliste;