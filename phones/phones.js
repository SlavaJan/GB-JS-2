var namesList = document.createElement('ul');
var body = document.getElementsByTagName('body');
document.body.appendChild(namesList);
namesList.className = 'list';


function loadPhones() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'phones.json', true);

	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			// обработать ошибку
			alert(xhr.status + ': ' + xhr.statusText);
		} else {
			// вывести результат
			
			var phones = xhr.responseText;
			
			phones = JSON.parse(phones);
			
			phones.forEach(function(phone){
				var result = document.createElement('li');
				result.innerHTML = phone.name;
				namesList.appendChild(result);
			});
		}
	}
	xhr.send();
}
loadPhones();