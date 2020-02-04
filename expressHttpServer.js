const express = require('express')
const app = express()

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function (req, res) {
    res.render('test')
})

app.get('/home', function (req, res) {
    res.send('home page')
})

app.get('/member', function (req, res) {
    res.send('member page')
})

app.post('/join', function(req,res){
    console.log(req.body)
})

app.listen(3000)