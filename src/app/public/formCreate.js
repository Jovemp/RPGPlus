
document.getElementById('charDetails').innerHTML = '' +
    '<!-- Página 1(Esquerda) -->\n' +
    '            <form class="col-12">\n' +
    '                <div class="card h-100">\n' +
    '                    <div class="card-body">\n' +
    '\n' +
    '                        <div class="row">\n' +
    '                            <!-- Foto do personagem -->\n' +
    '                            <div class="col-5">\n' +
    '                                <img/>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <!-- Informações básicas do personagem -->\n' +
    '                            <div class="col-7">\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="nameInput">Nome: </label>' +
    '                                    <input id="nameInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="raceInput">Raça: </label>' +
    '                                    <input id="raceInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="classInput">Classe: </label>' +
    '                                    <input id="classInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="levelInput">Nível: </label>' +
    '                                    <input id="levelInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <!-- Itens e status -->\n' +
    '                        <div class="row">\n' +
    '\n' +
    '                            <!-- Status -->\n' +
    '                            <div class="col-6">\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="strInput">Força: </label>' +
    '                                    <input id="strInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="dexInput">Destreza: </label>' +
    '                                    <input id="dexInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="vitInput">Vitalidade: </label>' +
    '                                    <input id="conInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="intInput">Inteligência: </label>' +
    '                                    <input id="intInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="wisInput">Sabedoria: </label>' +
    '                                    <input id="wisInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="chaInput">Carisma: </label>' +
    '                                    <input id="chaInput" class="form-control col-9">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <!-- Itens -->\n' +
    '                            <div class="col-6">\n' +
    '                                <div class="card h-100">\n' +
    '                                    <div class="card-body">\n' +
    '                                        <div class="row">\n' +
    '                                            <div class="col-2">\n' +
    '                                                2x\n' +
    '                                            </div>\n' +
    '                                            <div class="col-8">\n' +
    '                                                Espadão grande demais mesmo\n' +
    '                                            </div>\n' +
    '                                            <div class="col-2">\n' +
    '                                                2ton.\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '\n' +
    '                        <!-- Barra de Experiência -->\n' +
    '                        <div class="progress" style="margin-top: 8px;">\n' +
    '                            <div class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </form>\n';

console.log("Inicializou o formulário");
document.getElementById('addChar').style.display = "initial";
/*

function addChar(){
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

        console.log("Connection successfuly established");
    });

    var email = "email@example.com";
    var movement;
    var health;

    var races = require("../JSONdb/races.json");
    for (var i in races) {
        if (races[i].name == document.getElementById('raceInput').value) {
            movement = races[i].movement;
        }
    }

    var classes = require("../JSONdb/classes.json");
    for (var i in classes) {
        if (classes[i].name == document.getElementById('classInput').value) {
            health = (Math.floor(Math.random() * classes[i].life) + 1) + (Math.floor(document.getElementById('conInput').value / 2) - 5);
        }
    }


    // Queries
    $characterAddQuery = 'INSERT INTO `characters` (name, race, experience, strength, dexterity, constitution, inteligence, wisdom, charisma, movement, max_health, health, user_iduser) ' +
        'VALUES ("' + document.getElementById('nameInput').value + '", ' +
        '"' + document.getElementById('raceInput').value + '", ' +
        '0, ' +
        '"' + document.getElementById('strInput').value + '", ' +
        '"' + document.getElementById('dexInput').value + '", ' +
        '"' + document.getElementById('conInput').value + '", ' +
        '"' + document.getElementById('intInput').value + '", ' +
        '"' + document.getElementById('wisInput').value + '", ' +
        '"' + document.getElementById('chaInput').value + '", ' +
        '"' + movement + '", ' +
        '"' + health + '", ' +
        '"' + health + '", ' +
        '(SELECT iduser FROM user WHERE email="' + email + '") ' +
        ');';

    connection.query($characterAddQuery, function(err, rows, fields) {
        console.log("Entrou na função de query. Talvez tenha dado isso: ", err);

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);

        console.log("Adicionou o personagem - falta adicionar: classe");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
        //addClass();
    });
}

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
        if (classes[i].name == document.getElementById('classInput').value) {
            id = classes[i].id;
        }
    }


    // Queries
    $characterAddQuery = 'INSERT INTO `class` (idclass, level, character_id) ' +
        'VALUES (' + id + ', ' +
        '' + document.getElementById('levelInput').value + ', ' +
        '(SELECT id FROM characters WHERE name="' + document.getElementById('nameInput') + '" AND ' +
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
*/


// estava no body
/*
<script>

//Consigo os dois
//var name = document.getElementById('inputName').value;
//var email = document.getElementById('inputEmail').value;

var mysql = require("mysql");

var successSignIn = false;

console.log("Inicializou as variáveis de nome, email e senha");

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

// Queries
$statusQuery = 'SELECT * FROM characters WHERE user_iduser=(SELECT iduser FROM user WHERE email="' + email + '");';
$languageQuery = 'SELECT language_idlanguage FROM char_language WHERE character_id=' + idChar + ';';
$magicQuery = 'SELECT magic_idmagic FROM char_magic WHERE character_id=' + idChar + ';';
$proficiencyQuery = 'SELECT proficiency_idproficiency FROM char_proficiency WHERE character_id=' + idChar + ';';
$classQuery = 'SELECT * FROM class WHERE character_id=' + idChar + ';';
$itemQuery = 'SELECT * FROM item WHERE character_id=' + idChar + ';';
$backgroundQuery = 'SELECT * FROM background WHERE character_id=' + idChar + ';';

connection.query($statusQuery, function(err, rows, fields) {

    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);
    console.log("entrei na query");
});

connection.end(function() {
    console.log("Connection succesfully closed");
});

if (successSignIn) {
    window.location.href = "../index.html"
}
</script>*/