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
        '                            <div class="col-6">\n' +
        '                                <p id="charNameText" class="col-12">Nome: ' + rows[0].name +'</p> ' +
        '                                <p id="charNameText" class="col-12">Raça: ' + rows[0].race +'</p> ' +
        '                                <p id="charNameText" class="col-12">Classe: ' + jsonClass[rows[0].idclass - 1].name +'</p> ' +
        '                                <p id="charNameText" class="col-12">Nível: ' + rows[0].level +'</p> ' +
        '                            </div>\n' +
        '                        </div>\n' +
        '\n' +
        '                        <!-- Itens e status -->\n' +
        '                        <div class="row">\n' +
        '\n' +
        '                            <!-- Status -->\n' +
        '                            <div class="col-6">\n' +
        '                                <p class="col-12">PV Totais: ' + rows[0].max_health + '</p>' +
        '                                <p class="col-12">PV Atuais: ' + rows[0].health + '</p>' +
        '                                <p class="col-12">Força: ' + rows[0].strength +'</p>' +
        '                                <p class="col-12">Destreza: ' + rows[0].dexterity +'</p>' +
        '                                <p class="col-12">Constituição: ' + rows[0].constitution +'</p>' +
        '                                <p class="col-12">Inteligência: ' + rows[0].inteligence +'</p>' +
        '                                <p class="col-12">Sabedoria: ' + rows[0].wisdom +'</p>' +
        '                                <p class="col-12">Carisma: ' + rows[0].charisma +'</p>' +
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
        '                            <div class="progress-bar" role="progressbar" style="width: ' + rows[0].experience + '%;" aria-valuenow="' + rows[0].experience + '" aria-valuemin="0" aria-valuemax="100">' + rows[0].experience + '%</div>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n';

});

connection.end(function() {
    console.log("Connection succesfully closed");
});

if (successSignIn) {
    window.location.href = "../index.html"
}