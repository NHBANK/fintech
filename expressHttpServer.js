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


app.get('/join', function(req,res){
    console.log(req.query.userId);
    console.log(req.query.userPassword);
    console.log(req.query.userName);
    res.json(1);
})


app.post('/join', function(req,res){
    var userId = req.body.userId;
    var userPassword = req.body.userPassword;
    console.log(req.body)//req.body 안에 정보를 숨겨서 보냄
})

app.listen(3000)