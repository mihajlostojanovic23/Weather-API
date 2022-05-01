const express = require('express')
const app = express()
const Port = 3000

app.set("view engine", "ejs");

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/img'));
app.use('/js',express.static(__dirname + 'public/js'));


app.get('/', (req,res) => {
    res.render('home')
})

app.listen(Port, () => {
    console.log('Port:', Port)
}) 

