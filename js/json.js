// Classe para chamar o Json
function json(){
	var qtd;
	var retorno;

	//JQuery
	json.prototype.resgatarValores = function(){
		$('#resultado').html('Carregando dados...');

		// Estrutura para resgatar resultado
		$.getJSON('https://pbmedia.pepblast.com/pz_challenge/assets.json', function(data){
		
			this.qtd = data.objects.length; //Quantidade de objetos		
			this.retorno = '';

			var urlImagens = "https://pbmedia.pepblast.com/pz_challenge/assets/"; //URL para acesso as imagens

			//Percorrendo o JSON
			for(i in data.objects){
				this.retorno += '<div class="panel panel-default panel-float col-sm-3 col-md-3">';
	    		this.retorno += '<div class="panel-heading">' + data.objects[i].name + '</div>';
		    	this.retorno += '<div class="panel-body"> <img src="' + urlImagens + data.objects[i].im + '" class="img-responsive" /></div>';
		        this.retorno += '</div>';
		    }

			$('#resultado').html(this.retorno);

		});

	}

}

// Objeto.
var obj = new json();
obj.resgatarValores();