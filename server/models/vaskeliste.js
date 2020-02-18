const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VaskelisteSchema = new Schema({
    kollektiv: {type: Schema.Types.ObjectId, ref: "Kollektiv", required: true},
    liste: {type: Array, default: false, required:true}
})

const Vaskeliste= mongoose.model('Vaskeliste', VaskelisteSchema);

module.exports = Vaskeliste;