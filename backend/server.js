const express = require('express')

const UserRoutes = require('./Routes/user.routes')


const app = express()

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json({ msg: "Welcome to Feed App Api" })
})

app.use('/api/user', UserRoutes)



app.listen(PORT, () => {
    console.log("listening to port " + PORT);
})