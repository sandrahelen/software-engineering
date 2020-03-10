const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model for hvilke atributter som ingår i et Bruker-Objekt
const UserSchema = new Schema({
    username: {type: String, default: '', required: true},
    password: {type: String, default: '', required: true},
    kollektiv: {type: Schema.Types.ObjectID, ref: "Kollektiv"},
    fornavn: {type: String, required: true},
    etternavn: {type: String, required: true}
});

const User= mongoose.model('User', UserSchema);

module.exports = User;

