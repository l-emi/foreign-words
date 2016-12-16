
			
var words = [
		// Russian, Korean, Spanish
		['бабушка', '할머니', 'abuela'],
	        ['почему', '유', 'por qué'],
	        ['большой', '크', 'grande'],
	        // You can add here a word and its translation
	    ];

$(document).ready(function randomize() {
	var i = Math.floor(Math.random() * words.length); //Random number
	$("#ru-word").append(words[i][0]);
	$("#kr-word").append(words[i][1]);
	$("#es-word").append(words[i][2]);

	$('body').click(function(){
		location.reload();
	});
	
});
