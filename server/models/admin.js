const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Model for hvilke atributter som ingår i et Admin-Objekt
const AdminSchema = new Schema({
    username: {type: String, default: '', required: true},
    password: {type: String, default: '', required: true}
});

const Admin= mongoose.model('Admin', AdminSchema);

module.exports = Admin;

