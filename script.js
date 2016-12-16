
			
var russianWords = [
    ['бабушка', '할머니, abuela'],
    ['почемучка', 'una persona que dice "por qué?" todo el tiempo'],
	['большой', '크, grande'],
    ['красный', '빨간, rojo'],
    ['фрикаделька', '고기 완자, albóndiga'],
    ['медведь', '곰, oso'],
    ['каша', '오트밀 죽, crema de avena']
];

var koreanWords = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

var spanishWords = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
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
