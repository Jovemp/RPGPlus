var express = require('express');
var morgan = require('morgan');
var session = require('express-session');
var app = express();

app.use(morgan('combined'));

app.use(session({
    secret:'superSecret'
}));

app.get('/', function (request, response) {
    if(!request.session.userName && !request.session.visitCount){
        request.session.userName = "teste";
        request.session.visitCount = 1;
        response.status(201).send(request.session);
    }else{
        request.session.visitCount += 1;
        request.status(200).send(request.session);
    }
});

app.listen(3000, function () {
 console.log('Listening on port 3000');
});