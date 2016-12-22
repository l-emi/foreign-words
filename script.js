
			
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
    ['하늘', 'небо, cielo'],
    ['친구', 'друг, amigo'],
    ['우유', 'молоко, leche'],
    ['뚱뚱하다', 'быть толстым, ser gorgo'],
    ['사진', 'фотография, foto'],
    ['사람', 'человек, persona'],
    ['기다리다', 'ждать, esperar']
];

var spanishWords = [
    ['madrugada', '새벽, рассвет'],
    ['manzana', '사과, яблоко'],
    ['amarillo', '노란, жёлтый'],
    ['cascabel', '벨, колокол'],
    ['hechizo', '마법, заклинание'],
    ['anochecer', '저녁, наступит вечер'],
    ['ojalá', '바라건대, надеюсь']
];

$(document).ready(function randomize() {
	var i = Math.floor(Math.random() * russianWords.length); //Random number
    
	$('#ru-word').append(russianWords[i][0]);
    $('#ru-definition').append(russianWords[i][1]);
    $('#kr-word').append(koreanWords[i][0]);
    $('#kr-definition').append(koreanWords[i][1]);
    $('#es-word').append(spanishWords[i][0]);
    $('#es-definition').append(spanishWords[i][1]);

	$('body').click(function(){
		location.reload();
	});
	
});
