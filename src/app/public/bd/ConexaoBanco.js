var mysql = require('mysql');

function ConexaoBanco() {
  this.connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '',
      database: 'rpgplus'
  });

  this.connected = function() {
    this.connection.connect();
    return this.connection;
  };
}
