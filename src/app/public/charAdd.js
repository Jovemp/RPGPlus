
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

var email = "email@example.com";
var movement;
var health;
var id;

var races = require("../JSONdb/races.json");
for (var i in races) {
    if (races[i].name == "Anão da Montanha"/*document.getElementById('raceInput').value*/) {
        movement = races[i].movement;
    }
}

var classes = require("../JSONdb/classes.json");
for (var i in classes) {
    if (classes[i].name == "Paladino"/*document.getElementById('classInput').value*/) {
        health = (Math.floor(Math.random() * classes[i].life) + 1) + (Math.floor(/*document.getElementById('conInput').value*/12 / 2) - 5);
        id = classes[i].id;
    }
}


// Queries
$characterAddQuery = 'INSERT INTO `characters` (name, race, experience, strength, dexterity, constitution, inteligence, wisdom, charisma, movement, max_health, health, carry_capacity, user_iduser) ' +
    'VALUES ("' + "Hulgar"/*document.getElementById('nameInput').value*/ + '", ' +
    '"' + "Anão da Montanha"/*document.getElementById('raceInput').value*/ + '", ' +
    '0, ' +
    '"' + 12/*document.getElementById('strInput').value*/ + '", ' +
    '"' + 12/*document.getElementById('dexInput').value*/ + '", ' +
    '"' + 12/*document.getElementById('conInput').value*/ + '", ' +
    '"' + 12/*document.getElementById('intInput').value*/ + '", ' +
    '"' + 12/*document.getElementById('wisInput').value*/ + '", ' +
    '"' + 12/*document.getElementById('chaInput').value*/ + '", ' +
    '"' + movement + '", ' +
    '"' + health + '", ' +
    '"' + health + '", ' +
    0 +
    ', (SELECT iduser FROM user WHERE email="' + email + '") ' +
    ');';

$classAddQuery =
    'INSERT INTO `class` (idclass, level, character_id) ' +
    'VALUES (' + id + ', ' +
    1/*document.getElementById('levelInput').value*/ + ', ' +
    '(SELECT id FROM characters WHERE name="' + "Hulgar"/*document.getElementById('nameInput')*/ + '" AND ' +
    'user_iduser=(SELECT iduser FROM user WHERE email="' + email + '"))' +
    ');';

/*connection.beginTransaction(function(err) {
    if (err) { throw err; }
    connection.query($characterAddQuery, function (error, results, fields) {
        if (error) {
            return connection.rollback(function() {
                throw error;
            });
        }

        connection.query($classAddQuery, function (error, results, fields) {
            if (error) {
                return connection.rollback(function() {
                    throw error;
                });
            }
            connection.commit(function(err) {
                if (err) {
                    return connection.rollback(function() {
                        throw err;
                    });
                }
                console.log('success!');
            });
        });
    });
});*/

connection.query($characterAddQuery, function(err, rows, fields) {
    console.log("Entrou na função de query. Talvez tenha dado isso: ", err);

    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);

    console.log("Adicionou o personagem - falta adicionar: classe");
});

/*connection.query($classAddQuery, function(err, rows, fields) {
    console.log("Entrou na função de query. Talvez tenha dado isso: ", err);

    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);

    console.log("Adicionou o personagem - falta adicionar: classe");
});*/

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

    var email = "email@example.com";
    var id;

    var classes = require("../JSONdb/classes.json");
    for (var i in classes) {
        if (classes[i].name == "Paladino"/*document.getElementById('classInput').value*/) {
            id = classes[i].id;
        }
    }


    // Queries
    $characterAddQuery = 'INSERT INTO `class` (idclass, level, character_id) ' +
        'VALUES (' + id + ', ' +
        '' + 1/*document.getElementById('levelInput').value*/ + ', ' +
        '(SELECT id FROM characters WHERE name="' + "Hulgar"/*document.getElementById('nameInput')*/ + '" AND ' +
        'user_iduser=(SELECT iduser FROM user WHERE email="' + email + '"))' +
        ');';

    connection.query($characterAddQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);

        console.log("Adicionou a classe");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
    });
}