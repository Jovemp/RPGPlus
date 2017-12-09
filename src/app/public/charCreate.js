function inicializaFormulario(){
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
        '                        <button onclick="addChar()" style="margin-top: 8px;" id="addCharacter">Adicionar Personagem</button>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>\n';

    console.log("Inicializou o formulário");
}

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

        console.log("Conectou");
    });

    var email;
    var movement;
    var health;
    var capacity;

    // Queries
    $characterAddQuery = 'INSERT INTO `character` (name, race, experience, strength, dexterity, constitution, inteligence, wisdom, charisma, movement, max_health, health, carry_capacity, user_iduser) ' +
        'VALUES ("' + document.getElementById('nameInput') + '", ' +
        '"' + document.getElementById('raceInput') + '", ' +
        '0, ' +
        '"' + document.getElementById('strInput') + '", ' +
        '"' + document.getElementById('dexInput') + '", ' +
        '"' + document.getElementById('conInput') + '", ' +
        '"' + document.getElementById('intInput') + '", ' +
        '"' + document.getElementById('wisInput') + '", ' +
        '"' + document.getElementById('chaInput') + '", ' +
        '"' + movement + '", ' +
        '"' + health + '", ' +
        '"' + health + '", ' +
        '"' + capacity + '", ' +
        '(SELECT iduser FROM user WHERE email="' + email + '") ' +
        ');';

    connection.query($characterAddQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);

        console.log("Adicionou o personagem - falta adicionar: classe");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
    });
}

function addClass() {

}
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
$statusQuery = 'SELECT * FROM character WHERE user_iduser=(SELECT iduser FROM user WHERE email="' + email + '");';
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