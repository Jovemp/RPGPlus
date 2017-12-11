var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "rpgplus"
});

console.log("Criou a conexão");

connection.connect(function(err) {
    if(err){
        console.log(err.stack);
        console.log("Não conectou");
        return console.log(err.stack);
    }

    console.log("Conectou");
});

var id;

var classes = require("../JSONdb/classes.json");
for (var i in classes) {
    if (classes[i].name == document.getElementById('charClassInput').value) {
        id = classes[i].id;
    }
}


// Queries
$characterAddQuery = 'DELETE FROM `class` WHERE ' +
    'idclass=' + id + ';';

connection.query($characterAddQuery, function(err, rows, fields) {

    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);

    console.log("Removeu a classe");
});

connection.end(function() {
    console.log("Connection succesfully closed");
    delChar();
});


function delChar() {

    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "rpgplus",
        multipleStatements: true
    });

    console.log("Criou a conexão");

    connection.connect(function(err) {
        if(err){
            console.log(err.stack);
            console.log("Não conectou");
            return console.log(err.stack);
        }

        console.log("Connection successfuly established");
    });

    var movement;
    var health;
    var charId = localStorage.getItem("charId");

    var races = require("../JSONdb/races.json");
    for (var i in races) {
        if (races[i].name == document.getElementById('charRaceInput').value) {
            movement = races[i].movement;
        }
    }

    var classes = require("../JSONdb/classes.json");
    for (var i in classes) {
        if (classes[i].name == document.getElementById('charClassInput').value) {
            var hpDice = classes[i].life;
            var hp = 0;
            for (var j = 0; j < hpDice; j++) {
                hp += (Math.floor(Math.random() * classes[i].life) + 1);
            }
            health = hp + (Math.floor(document.getElementById('charConInput').value / 2) - 5) * document.getElementById('charLevelInput').value;
        }
    }


// Queries
    $characterDelQuery = 'DELETE FROM `characters` WHERE id=' + charId + ';';

    connection.query($characterDelQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);

        console.log("Removeu o personagem");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
        location.reload();
    });
}