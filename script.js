
			
var russianWords = [
		// Russian, Korean, Spanish
		    ['бабушка', '할머니, abuela'],
	        ['почемучка', 'someone who asks "why?" a lot'],
	        ['большой', '크, grande']
	        
	    ];

$(document).ready(function randomize() {
	var i = Math.floor(Math.random() * russianWords.length); //Random number
	$('#ru-word').append(russianWords[i][0]);
    $('#ru-definition').append(russianWords[i][1]);
	//$('#kr-word').append(words[i][1]);
	//$('#es-word').append(words[i][2]);

	$('body').click(function(){
		location.reload();
	});
	
});
