const UserModel = require('../Models/user.model')

const login = async (req, res) => {

    try {

        const { username, password } = req.body

        if (!username || !password)
            throw Error('Fill All the Fields')

        const user = await UserModel.findOne({ username })

        if (!user) {
            throw Error('User Not Found')
        }

        res.status(200).json({ user })


    }
    catch (err) {
        res.status(404).json({ error: err.message })
    }



}

module.exports = login