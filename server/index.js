const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { MONGOURI } = require('./keys')
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log("Connected")
});
mongoose.connection.on('error', (err) => {
    console.log(err)
});

require('./models/user')
app.use(express.json())
app.use(require('./routes/auth'))
app.listen(5000);