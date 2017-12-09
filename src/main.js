const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

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

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

})
