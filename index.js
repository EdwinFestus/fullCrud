const express = require('express')
const app = express()
const userRouter = require('./routes/users')
const path = require('path')
const PORT = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users', userRouter)


app.listen(PORT, ()=> { console.log(`Server running on PORT: ${PORT}...`)
})