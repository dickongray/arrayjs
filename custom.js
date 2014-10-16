var people = [

	{
		name: 'Casey',
		rate: 60
	},
	{
		name: 'Camille',
		rate: 80
	},
	{
		name: 'Gordon',
		rate: 75
	},
	{
		name: 'Nigel',
		rate: 120
	}

];

//this is a new array will hold all of the matching resluts
var results = [];
//this foreach method can target an array and can apply
//the anonymous callback a
people.forEach(function(person){
	if(person.rate >= 65 && person.rate <= 90) {
		results.push(person);
	}
});

$(function (){
//the tablebody = table body is set value to html, it uses jquery libary
var $tableBody = $('<tbody></tbody>');
for(var i = 0; i < results.length; i++) {
	var person = results[i];
	var row = $('<tr></tr>');
	$row = $('<tr></tr>');
	$row.append($('<td></td>').text(person.name));
	$row.append($('<td></td>').text(person.rate));
	$tableBody.append( $row);
}
//append adds it to the content. the dots in (person.name) is getting the item
//add the new content after the body of the page
//thead = a element 
$('thead').after($tableBody);
});
//it utalises a four loop and using an array to filte out the results.