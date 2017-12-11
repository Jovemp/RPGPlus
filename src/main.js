const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const mySql = require ('mysql');
const path = require('path');
const url = require('url');

var mainWindow = null;
var log = console.log;

console.log('Inicializou as variáveis');

app.on('ready', function(){

    console.log('Entrou na função');

    mainWindow = new BrowserWindow({
        width: 1366,
        height: 768
        //612
        //384
    });

    console.log('Abriu a janela');

    var willQuitApp = false;

    mainWindow.on('close', function e (){
        if (willQuitApp){
            mainWindow = null;
        }
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
});

app.on('before-quit', function() {
    willQuitApp = true;

var mysql = require("mysql");

console.log("Inicialização de variáveis email e senha");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "rpgplus"
});

console.log("Criação da conexão");

connection.connect(function(err) {
    if(err){
        console.log(err.stack);
        console.log("Conexão falhou");
        return console.log(err.stack);
    }

    console.log("Connection succesfully established");

    $updateOnlineQuery = 'UPDATE user SET isOnline = 0 WHERE email="rod"';

    connection.query($updateOnlineQuery, function(err, rows, fields){

        if(err){
            return console.log("Erro ocorrido", err);
        }

        if(rows.length <= 0){
            alert("Não foi possível estabelecer conexão");
        }
        console.log(rows);
    });

    connection.end(function() {
        console.log("Connection succesfully closed");
    })
});
});

