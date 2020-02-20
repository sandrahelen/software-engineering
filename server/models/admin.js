const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {type: String, default: '', required: true},
    password: {type: String, default: '', required: true},
    studentby: {type: Schema.Types.ObjectID, ref: "Studentby"}
});

const Admin= mongoose.model('Admin', AdminSchema);

module.exports = Admin;

