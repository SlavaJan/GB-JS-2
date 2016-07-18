
function placeFigures() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'chesspositions.json', true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			// обработать ошибку
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			// вывести результат
			var figures = JSON.parse(xhr.responseText);
			
			
			
			figures.forEach(function(figure){
				var piece = document.createElement('img');
				piece.setAttribute('src', figures.src);
				
				document.getElementById('main').appendChild(piece);
			});
		}
	}
	xhr.send();
	alert (typeof(figures));
}
placeFigures();