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
		$('<li>').text(item.name).appendTo(countriesList);
		$('<ul>').text(item.capital).appendTo(countriesList);
	});
}
/* Nie działa dodawanie do zagnieżdżonej listy nazwy stolicy 
var lowerCountriesList = $('#lower-list');
function showCountriesList(resp) {
    countriesList.empty();
    lowerCountriesList.empty();
   resp.forEach(function(item){
   	$('<li>').text(item.name).appendTo(countriesList);
   	$('<li>').text(item.capital).appendTo(lowerCountriesList);
});
}
*/