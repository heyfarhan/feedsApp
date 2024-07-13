require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')



const UserRoutes = require('./Routes/user.routes')


const app = express()

const PORT = process.env.PORT || 4000;

app.use(express.json())


app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Feed App Api" })
})

app.use('/api/user', UserRoutes)



async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
        process.exit(1);
    }
}

startServer();