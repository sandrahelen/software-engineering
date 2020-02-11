const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KollektivSchema = new Schema({
    nummer: {
        type: Number,
        required: [true, 'The todo text field is required']
    }
})

const Kollektiv= mongoose.model('Kollektiv', KollektivSchema);

module.exports = Kollektiv;

