Plugin verMais
=============

Plugin criado para exibir determinado número (qtdShow) de itens (boxes), escondendo o restante e só mostrando através do clique no link (classLink). Quando acabar todos os itens o link é escondido.

- Como usar
Necessário o uso do jQuery
chame o arquivo jquery.verMais.js e a chamado do plugin no seu header dessa forma:
<script type="text/javascript" src="jquery.verMais.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$('.box-ver-mais').verMais({
				//Coloque qual nome da sua class do link ver mais
				classLink: "ver-mais", //default ver-mais
				//Coloque qual nome da sua class dos Itens
				classBoxes: "boxes", // default boxes
				//Coloque quantos itens deseja exibir
				qtdShow: 5 //default 5
			});			
		});		
	</script>

Com isso seu HTML deve ter uma class para os itens que serao exibidos (classBoxes) e a class do link para Ver Mais (classLink).

Contribuições: Hugo Vasconcelos e Giovanni Keppelen
Agradecimentos: jQuery Boilerplate