// A classe tem que aceitar parametros uma vez que tem pegar o numero do id para alterar o background
// Deve pegar o valor que está no localStorage e colocar como id
// Pego o objeto do ID passado
// Caso exista alguma coisa eu listo
// Caso contrário eu retorno o registro

localStorage.setItem("character_id", "1");

/////////////////////////////////////////////////////////////////////////////////////////////
function addBackground() {

    var mysql = require("mysql");
    var flag = false;

    // Só mudar esse cara, caso seja preciso
    const characterId = localStorage.getItem("character_id");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "rpgplus"
    });

    connection.connect(function (err) {
        if (err) {
            console.log(err.stack);
            return console.log(err.stack);
        }
    });

    // $checkQuery = 'SELECT character_id FROM background WHERE character_id="' + characterId + '"';


    // connection.query($checkQuery, function (err, rows, fields) {
    //     console.log('ACONTECEU PRIMEIRO O QUE ALTERA A FLAG');
    //     console.log(rows);
    //     console.log(rows[0].character_id);
    //     if (rows[0].character_id != 0) {
    //         console.log('caralho');
    //         flag = true;
    //         console.log(flag);
    //     }

    //     if (err) {
    //         return console.log("An error ocurred with the query", err);
    //     }
    // });

    // connection.end(function () {
    //     console.log("Connection succesfully closed");
    //     filhadaputa();
    // });


    // connection.end(function () {
    //     console.log("Connection succesfully closed");
    // });

    // 47 é o length de um campo 
    // Queries
    $characterQuery = 'INSERT INTO `background` (allignment, age, profession, weight, height, character_id) ' +
        'VALUES ("' + document.getElementById('allignSelect').value + '","' +
        document.getElementById('ageSelect').value + '","' +
        document.getElementById('professionSelect').value + '","' +
        document.getElementById('weightSelect').value + '","' +
        document.getElementById('heightSelect').value + '", (SELECT id FROM characters WHERE id="' + characterId + '"));'

    connection.query($characterQuery, function (err, rows, fields) {
        if (err) {
            return alert('deu pau'), console.log("An error ocurred with the query", err);
        }
    });


    connection.end(function () {
        console.log("Connection succesfully closed");
    });
}

/////////////////////////////////////////////////////////////////////////////////////////////
function changeBackground() {
    
        var mysql = require("mysql");
        var flag = false;
    
        // Só mudar esse cara, caso seja preciso
        const characterId = localStorage.getItem("character_id");
    
        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "rpgplus"
        });
    
        connection.connect(function (err) {
            if (err) {
                console.log(err.stack);
                return console.log(err.stack);
            }
        });
    
        // Queries
        $characterQuery = 'UPDATE INTO `background` (allignment, age, profession, weight, height, character_id) ' +
            'VALUES ("' + document.getElementById('allignSelect').value + '","' +
            document.getElementById('ageSelect').value + '","' +
            document.getElementById('professionSelect').value + '","' +
            document.getElementById('weightSelect').value + '","' +
            document.getElementById('heightSelect').value + '", (SELECT id FROM characters WHERE id="' + characterId + '"));'
    
        connection.query($characterQuery, function (err, rows, fields) {
    
            if (err) {
                return console.log("An error ocurred with the query", err);
            }
    
        });
    
    
        connection.end(function () {
            console.log("Connection succesfully closed");
        });
    }
