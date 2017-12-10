const express = require('express');
const mysql = require('mysql');

var email;

function inserirDados () {

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
    $selectQuery = 'SELECT name, email, password FROM user WHERE email = "'+email+'"';

    connection.query($selectQuery, function(err, rows, fields) {

        if(err){
            return console.log("An error ocurred with the query", err);
        }
        document.getElementById('editName').value = rows[0].name;
        document.getElementById('editEmail').value = rows[0].email;
        document.getElementById('editPassword').value = rows[0].password;
        console.log(rows);
        console.log('Inserted ' + rows.affectedRows + ' rows');
        console.log("Entrei na query");
        successEdit = true;
        console.log("Executou a Query");
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
        if (successEdit){
        }
    });
}

document.getElementById('loginBtn').addEventListener("click", function(){
    email = document.getElementById('inputEmail').value;
});

document.getElementById('editProfileBtn').addEventListener("click", function() {

    var nameEdit = document.getElementById('editName').value;
    var emailEdit = document.getElementById('editEmail').value;
    var passwordEdit = document.getElementById('editPassword').value;

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
    $editQuery = 'UPDATE `user` SET name = "'+nameEdit+'", password = "'+passwordEdit+'", email = "'+emailEdit+'" WHERE email = "'+email+'"';

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