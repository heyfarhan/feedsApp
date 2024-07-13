const UserModel = require('../Models/user.model')

const signup = async (req, res) => {
    const { username, password, email, phone, admin } = req.body;

    try {

        const user = await UserModel.signup(username, password, email, phone, admin);

        const token = UserModel.createToken(user._id)

        res.status(200).json({ user, token })

    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }

}

module.exports = signup