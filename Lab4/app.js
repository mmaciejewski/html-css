var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var passportLocal = require('passport-local');
var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');'

app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res){
    res.render('index',{
        isAuthenticated: false,
        user: {
            username: 'bolek',
            password: 'tralalala'
        }
    });
});

app.get('/login', function(req, res){
    res.render('login'); 
});

app.post('/login', function(req, res){
   console.log(req.body.username);
   console.log(req.body.password);
});

app.listen(port, function(){
    console.log('http://localhost:' + port);
});