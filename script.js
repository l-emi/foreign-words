var russianWords = ['бабушка', 'почемучка', 'красный', 'большой', 'фрикаделька', 'медведь', 'каша'],
    koreanWords = ['하늘', '친구', '우유', '뚱뚱하다', '사진', '사람', '기다리다'],
    spanishWords = ['madrugada', 'manzana', 'amarillo', 'cascabel', 'hechizo', 'anochecer', 'ojalá'];


$("#ru-word").append(russianWords[randomize()]);
$("#kr-word").append(koreanWords[randomize()]);
$("#es-word").append(spanishWords[randomize()]);


function randomize() {
    return Math.floor(Math.random() * 6);
}

console.log(russianWords[randomize()]);

