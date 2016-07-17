// Шахматная доска всегда представляет из себя доску 8*8,
// поэтому метод заполнения доски клетками и участвующие в этом
// переменные  я решил сделать скрытыми. Родительский элемент,
// в который следует поместить доску и размер в пикселях указываем
// при вызове конструктора

function Chessboard(parent, size) {
	'use strict';
	var board = document.createElement('div');
	var parent = document.getElementById(parent);
	var letters = "ABCDEFGH";
	var letterBox = document.createElement('div');
	var numbers = "12345678";
	var numBox = document.createElement('div');
	parent.appendChild(numBox);
	parent.appendChild(letterBox);
	board.id = "board";
	parent.appendChild(board);
		board.style.width = size + "px";
		board.style.height = size + "px";
	numBox.className = "num-box";
		numBox.style.width = size + "px";
		numBox.style.marginLeft = (size/8)*2 + "px";
	letterBox.className = "letter-box";
		letterBox.style.height = size + "px";
		letterBox.style.marginTop = 15 + "px";
		parent.style.width = size * 1.3 + "px";
		parent.style.margin = "0 auto";

	for (var n=1; n<9; n++) {
		var numPad = document.createElement('div');
		numPad.className = "numbers";
		numBox.appendChild(numPad);
		numPad.innerHTML = n;
			numPad.style.width = size/8 + "px";
			numPad.style.height = size/8 + "px";
			numPad.style.lineHeight = size/8 + "px";
			numPad.style.fontSize = size/8 + "px";
	}

	for (var l=0; l<8; l++) {
		var lettersPad = document.createElement('div');
		lettersPad.className = "letters";
		letterBox.appendChild(lettersPad);
		lettersPad.innerHTML = letters.charAt(l);
			lettersPad.style.width = size/8 + "px";
			lettersPad.style.height = size/8 + "px";
			lettersPad.style.lineHeight = size/8 + "px";
			lettersPad.style.fontSize = size/8 + "px";
	}

	var mkTile = function () {
		for (var y = 0; y < 8; y++) {
			for (var x = 1; x < 9; x++) {
				var tile = document.createElement('div');
				board.appendChild(tile);
					tile.style.width = size/8 + "px";
					tile.style.height = size/8 + "px";
				if ((x + y) % 2 == 0) {
					tile.className = "tile white";
				}
				else {
					tile.className = "tile black";
				}
				tile.classList.add("" + letters.charAt(y));
				tile.classList.add("" + x);
			}
		}
	}
	mkTile();
}

var myBoard = new Chessboard("main", "450");
