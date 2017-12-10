document.getElementById('editProfileBtn').addEventListener("click", function() {

    var name = document.getElementById('editName').value;
    var email = document.getElementById('editEmail').value;
    var password = document.getElementById('editPassword').value;

    var mysql = require("mysql");

    var successEdit = false;

    console.log("Modificou as variáveis de nome, email e senha");

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
    $editQuery = 'UPDATE `user` SET name = `name`, password = `password`, email = `email` WHERE email LIKE `email`';

    connection.query($editQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        console.log(rows);
        console.log('Inserted ' + rows.affectedRows + ' rows');
        console.log("Entrei na query");
        successEdit = true;
        console.log("Executou a Query");
    });



    connection.end(function() {
        console.log("Connection succesfully closed");
        if (successEdit) {
            window.location.href = "homeView.html"
        }
    });


}, false);