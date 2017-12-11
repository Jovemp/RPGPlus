var searchBtn = document.getElementById('searchBtn');
if(searchBtn) {

    const mysql = require('mysql');
    const express = require('express');

    searchBtn.addEventListener("click", function () {

        var search = document.getElementById('search').value;

        var successSearch = false;

        console.log("Recebeu a palavra a ser buscada");

        var connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "rpgplus"
        });

        console.log("Criou a conexão");

        connection.connect(function (err) {
            if (err) {
                console.log(err.stack);
                console.log("Não conectou");
                return console.log(err.stack);
            }

            console.log("Conectou");
        });

        // Queries
        $searchQuery = 'SELECT * FROM user WHERE name LIKE "%'+search +'%";';

        connection.query($searchQuery, function (err, rows, fields) {

            if (err) {
                return console.log("An error ocurred with the query", err);
            }
            document.getElementById('resultadoPesquisa').innerHTML = "";
            for (var i in rows) {
                document.getElementById('resultadoPesquisa').innerHTML +=
                    "<div class=\"card\" style=\"margin-top: 10px\">\n" +
                    "<div class=\"card-block\" id=\""+i+"\" style=\"margin: 15px\">\n" +
                    "<h4 class=\"card-title\" id=\"cardName"+i+"\" ></h4>\n" +
                    "<p class=\"card-text\" id=\"cardEmail"+i+"\"></p>\n" +
                    "<p style=\"color: lawngreen\" id=\"online"+i+"\" class=\"\"></p>\n" +
                    "<p style=\"color: red\" id=\"offline"+i+"\" class=\"\"></p>\n" +
                    "<button class='btn btn-primary'>Adicionar como amigo</button>" +
                    "</div>\n" +
                    "</div>";
                document.getElementById('cardName' + i).innerText = rows[i].name;
                document.getElementById('cardEmail' + i).innerText = rows[i].email;
                if(rows[i].isOnline){
                    document.getElementById('online' + i).innerText = "Online";
                }else{
                    document.getElementById('offline' + i).innerText = "Offline";
                }
            }

            console.log(rows[0]);
            successEdit = true;
            console.log("Executou a Query");
        });


        connection.end(function () {
            console.log("Connection succesfully closed");
        });


    }, false);
}
