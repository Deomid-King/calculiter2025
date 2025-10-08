function calculate() {
	var price = document.getElementById("price").value;
	var weight = document.getElementById("weight").value;
	var result = document.getElementById("result").value;
	var procent = document.getElementById("procent").value;

	// рассчитываем результат
	var output = (+price + +result +(weight == "5t" ? 150: weight == "15t" ? 1195 : weight == "5kg" ? 2255 : weight == "15kg" ? 2703 : weight == "50kg" ? 4831 : 8079)) / 0.83;

	// расчет процентов
	var procent = (+result / +price) * 100;

	// выводим результат на страницу
	document.getElementById("procent").innerHTML = Math.round(procent) + "%";

	// выводим результат на страницу
	document.getElementById("output").innerHTML = "Итоговая цена для Каспи: " + Math.round(output);
}