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
$statusQuery = 'SELECT A.* FROM (SELECT * FROM characters INNER JOIN class ON characters.id=class.character_id) as A ' +
    'WHERE A.id=' + localStorage.getItem("charId") + ';';
//$languageQuery = 'SELECT language_idlanguage FROM char_language WHERE character_id=' + idChar + ';';
//$magicQuery = 'SELECT magic_idmagic FROM char_magic WHERE character_id=' + idChar + ';';
//$proficiencyQuery = 'SELECT proficiency_idproficiency FROM char_proficiency WHERE character_id=' + idChar + ';';
//$itemQuery = 'SELECT * FROM item WHERE character_id=' + idChar + ';';
//$backgroundQuery = 'SELECT * FROM background WHERE character_id=' + idChar + ';';

connection.query($statusQuery, function(err, rows, fields) {
    if(err){
        return console.log("An error ocurred with the query", err);
    }
    console.log(rows);
    console.log("entrei na query");

    var jsonClass = require("../JSONdb/classes.json");

    document.getElementById('charDetails').innerHTML =
        '<!-- Página 1(Esquerda) -->\n' +
        '            <form>\n' +
        '                <div class="card h-100 col-12">\n' +
        '                    <div class="card-body">\n' +
        '\n' +
        '                        <div class="row">\n' +
        '                            <!-- Foto do personagem -->\n' +
        '                            <div class="col-5">\n' +
        '                                <img/>\n' +
        '                            </div>\n' +
        '\n' +
        '                            <!-- Informações básicas do personagem -->\n' +
        '                            <div class="col-6 row">\n' +
        '                                <div class="form-group col-12 row">\n' +
        '                                    <label for="charNameInput" class="col-3">Nome: </label> ' +
        '                                    <input id="charNameInput" class="form-control col-9" value="' + rows[0].name +'" >' +
        '                                </div>\n' +
        '                                <div class="form-group col-12 row">\n' +
        '                                    <label for="charRaceInput" class="col-3">Raça: </label> ' +
        '                                    <input id="charRaceInput" class="form-control col-9" value="' + rows[0].race +'" >' +
        '                                </div>\n' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charClassInput" class="col-3">Classe: </label> ' +
        '                                    <input id="charClassInput" class="form-control col-9" value="' + jsonClass[rows[0].idclass - 1].name + '" >' +
        '                                </div>\n' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charLevelInput" class="col-3">Nível: </label> ' +
        '                                    <input id="charLevelInput" class="form-control col-9" value="' + rows[0].level + '" >' +
        '                                </div>' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <!-- Itens e status -->\n' +
        '                        <div class="row">\n' +
        '\n' +
        '                            <!-- Status -->\n' +
        '                            <div class="col-6 row">\n' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charMaxHPInput" class="col-4">PV Totais: </label>' +
        '                                    <input id="charMaxHPInput" class="form-control col-8" value="' + rows[0].max_health + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charHPInput" class="col-4">PV Atuais: </label>' +
        '                                    <input id="charHPInput" class="form-control col-8" value="' + rows[0].health + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charStrInput" class="col-4">Força: </label>' +
        '                                    <input id="charStrInput" class="form-control col-8" value="' + rows[0].strength + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charDexInput" class="col-4">Destreza: </label>' +
        '                                    <input id="charDexInput" class="form-control col-8" value="' + rows[0].dexterity + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charConInput" class="col-4">Constituição: </label>' +
        '                                    <input id="charConInput" class="form-control col-8" value="' + rows[0].constitution + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charIntInput" class="col-4">Inteligência: </label>' +
        '                                    <input id="charIntInput" class="form-control col-8" value="' + rows[0].inteligence + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charWisInput" class="col-4">Sabedoria: </label>' +
        '                                    <input id="charWisInput" class="form-control col-8" value="' + rows[0].wisdom + '" >' +
        '                                </div>' +
        '                                <div class="form-group col-12 row">' +
        '                                    <label for="charChaInput" class="col-4">Carisma: </label>' +
        '                                    <input id="charChaInput" class="form-control col-8" value="' + rows[0].charisma + '" >' +
        '                                </div>' +
        '                            </div>\n' +
        '\n' +
        '                            <!-- Itens -->\n' +
        '                            <div class="col-6">\n' +
        '                                <p>Inventário</p>' +
        '                                <div class="card h-100">\n' +
        '                                    <div class="card-body">\n' +

        '                                    </div>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <!-- Barra de Experiência -->\n' +
        '                        <div class="progress" style="margin-top: 8px;">\n' +
        '                            <div class="progress-bar" role="progressbar" style="width: ' + rows[0].experience + '%;" aria-valuenow="' + rows[0].experience + '" aria-valuemin="0" aria-valuemax="100">' + rows[0].experience + '%</div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </form>';

    document.getElementById('editChar').style.visibility = "visible";
    document.getElementById('delChar').style.visibility = "visible";
});

connection.end(function() {
    console.log("Connection succesfully closed");
});