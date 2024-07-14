const UserModel = require('../Models/user.model')

const login = async (req, res) => {

    try {

        const { username, password } = req.body

        const user = await UserModel.login(username, password)

        const token = UserModel.createToken(user._id)

        res.status(200).json({ user: { username: user.username, email: user.email, phone: user.phone, admin: user.admin }, token })


    }
    catch (err) {
        res.status(404).json({ error: err.message })
    }



}

module.exports = login