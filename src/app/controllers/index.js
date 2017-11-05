module.exports.index = function( application, req, res){
	res.status(201).send('Servidor Rodando!!!!');
}

module.exports.autenticar = function( application, req, res){
		var usuario  = req.body;


		if (usuario.usuario == undefined || usuario.usuario == ''){
			res.status(201).send ({erro:'É necessário informar o usuário!'});
		}else if (usuario.senha == undefined || usuario.senha == ''){
			res.status(201).send ({erro:'É necessário informar a senha!'});
		}else{
			//var connection = application.config.dbConnection;
			//var UsuariosDAO = new application.models.UsuariosDAO(connection);
		 	usuario.senha = application.util.criptografia_md5.hex_md5(usuario.senha);
			
			//UsuariosDAO.autenticar(usuario, req, res);
			res.status(201).send({msg:'Usuário autenticado com sucesso', usuario});
		}
    
}