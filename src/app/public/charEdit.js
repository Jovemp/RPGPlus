
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
$characterAddQuery = 'UPDATE `characters` SET ' +
    'name="' + document.getElementById('charNameInput').value + '", ' +
    'race="' + document.getElementById('charRaceInput').value + '", ' +
    'experience=0, ' +
    'strength="' + document.getElementById('charStrInput').value + '", ' +
    'dexterity="' + document.getElementById('charDexInput').value + '", ' +
    'constitution="' + document.getElementById('charConInput').value + '", ' +
    'inteligence="' + document.getElementById('charIntInput').value + '", ' +
    'wisdom="' + document.getElementById('charWisInput').value + '", ' +
    'charisma="' + document.getElementById('charChaInput').value + '", ' +
    'movement="' + movement + '", ' +
    'max_health="' + health + '", ' +
    'health="' + document.getElementById('charHPInput')+'", ' +
    'carry_capacity=0 WHERE id=' + charId + ';';

connection.query($characterAddQuery, function(err, rows, fields) {

    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);

    console.log("Adicionou o personagem - falta adicionar: classe");
});

connection.end(function() {
    console.log("Connection succesfully closed");
    addClass();
});




function addClass() {

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
    $characterAddQuery = 'UPDATE `class` SET ' +
        'idclass=' + id + ', ' +
        'level=' + document.getElementById('charLevelInput').value + ' WHERE character_id= ' + charId + ';';

    connection.query($characterAddQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);

        console.log("Adicionou a classe");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
        location.reload();
    });
}