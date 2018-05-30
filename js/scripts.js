var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if (!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		var countryName = $('<li>').text(item.name);
		var countryCapital = $('<li>').text(item.capital);
		var list = $('<ul>');
		countryCapital.appendTo(list);
		list.appendTo(countryName);
		countryName.appendTo(countriesList);
	});
}