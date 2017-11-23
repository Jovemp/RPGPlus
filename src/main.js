const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

var mainWindow = null;
var log = console.log;

console.log('alou');

app.on('ready', function(){

    console.log('alou 2');

    mainWindow = new BrowserWindow({
        width: 612,
        height: 384
    });

    console.log('alou 3');

    mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:',
        slashes: true
    }));

 console.log('alou 4');
})
