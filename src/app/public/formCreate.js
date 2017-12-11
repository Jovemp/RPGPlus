
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
    '                                    <select id="raceInput" class="form-control col-9">\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                                <div class="form-group row">\n' +
    '                                    <label class="col-3" for="classInput">Classe: </label>' +
    '                                    <select id="classInput" class="form-control col-9">\n' +
    '                                    </select>\n' +
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

var jsonClass = require("../JSONdb/classes.json");

for (var i in jsonClass) {
    document.getElementById('classInput').innerHTML += "<option value='" + jsonClass[i].name + "'>" + jsonClass[i].name + "</option>";
}

var jsonRace = require("../JSONdb/races.json");

for (var i in jsonRace) {
    document.getElementById('raceInput').innerHTML += "<option value='" + jsonRace[i].name + "'>" + jsonRace[i].name + "</option>";
}

// Queries
/*
$statusQuery = 'SELECT * FROM characters WHERE user_iduser=(SELECT iduser FROM user WHERE email="' + email + '");';
$languageQuery = 'SELECT language_idlanguage FROM char_language WHERE character_id=' + idChar + ';';
$magicQuery = 'SELECT magic_idmagic FROM char_magic WHERE character_id=' + idChar + ';';
$proficiencyQuery = 'SELECT proficiency_idproficiency FROM char_proficiency WHERE character_id=' + idChar + ';';
$classQuery = 'SELECT * FROM class WHERE character_id=' + idChar + ';';
$itemQuery = 'SELECT * FROM item WHERE character_id=' + idChar + ';';
$backgroundQuery = 'SELECT * FROM background WHERE character_id=' + idChar + ';';
*/