// requirements
const express = require('express')
const path = require('path')


const app = express()

// view engine and path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// static file path
app.use(express.static(path.join(__dirname, 'public')))


app.use('/home', (req, res) => {
    res.render('home')
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is connected at PORT:${PORT}`);
})
