const UserModel = require('../Models/user.model')

const signup = async (req, res) => {
    const { username, password, email, phone, admin } = req.body;


    try {

        if (!username || !password || !email || !phone)
            throw Error('Fill All the Fields')

        const user = await UserModel.create({ username, password, email, phone, admin })
        res.status(200).json(user)

    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }




}

module.exports = signup