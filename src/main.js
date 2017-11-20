const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = new BrowserWindow({width: 800, height: 600});
var log = console.log;

console.log('alou');
app.on('ready', function(){
 console.log('alou 2');

 console.log('alou 3');
 mainWindow.loadURL(`file://${__dirname}/app/index.html`);
 console.log('alou 4');
})
