const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, default: '', required: true},
    password: {type: String, default: '', required: true},
    admin: {type: Boolean, default: false, required: true},
    kollektiv: {type: Schema.Types.ObjectID, ref: "Kollektiv"}
});

const User= mongoose.model('User', UserSchema);

module.exports = User;

