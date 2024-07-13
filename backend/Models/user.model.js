const mongoose = require('mongoose')
const bycrpt = require('bcrypt')
const jwt = require('jsonwebtoken')


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


UserSchema.statics.signup = async function (username, password, email, phone, admin) {

    if (!username || !password || !email || !phone)
        throw Error('Fill All the Fields')

    const salt = await bycrpt.genSalt(10);
    const hashPassword = await bycrpt.hash(password, salt);

    const user = await this.create({ username, password: hashPassword, email, phone, admin })

    return user

}

UserSchema.statics.login = async function (username, password) {

    if (!username || !password)
        throw Error('Fill All the Fields')

    const user = await this.findOne({ username })

    if (!user) {
        throw Error('User Not Found')
    }

    const match = await bycrpt.compare(password, user.password)

    if (!match)
        throw Error('Incorrect Password')

    return user
}


UserSchema.statics.createToken = async function (_id) {

    const token = jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1h' })

    return token
}



module.exports = mongoose.model('User', UserSchema)

