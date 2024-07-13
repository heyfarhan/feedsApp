const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        required: true,
        type: String,
        unique: true,
    },
    password: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
        unique: true,
    },
    phone: {
        required: true,
        type: Number,
        unique: true,
    },
    admin: {
        required: true,
        type: Boolean,
        default: false,
    },

})
module.exports = mongoose.model('User', UserSchema)