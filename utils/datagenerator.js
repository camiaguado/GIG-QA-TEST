var faker = require('faker');


var countryCode = ['CA', 'FI', 'NO', 'DE', 'GB'];
var index = Math.floor(Math.random()*(countryCode.length));
countryCode = countryCode[index];

var data = {
	email: faker.internet.email().toLowerCase()+'.ar',
	username: getCleanedString(faker.internet.userName()),
	password: /A2/g + faker.internet.password(),
	firstname: faker.name.firstName(),
	lastname: faker.name.lastName(),
	day: faker.random.number({ min: 1, max: 28}),
	month: faker.random.number({ min: 1, max: 12}),
	year: faker.random.number({ min: 1960, max: 1995}),
	street: faker.address.streetAddress(),
	zipcode: faker.address.zipCode(),
	city: faker.address.city(),
	country: countryCode,
	phone: faker.random.number({ min: 000000000, max: 999999999}),
};

function getCleanedString(cadena){
   var specialChars = '!@#$^&%*()+=-_[]\/{}|:<>?,.';
   for (var i = 0; i < specialChars.length; i++) {
       cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
   }   
   cadena = cadena.toLowerCase();
   cadena = cadena.replace(/ /g,"");
   cadena = cadena.replace(/á/gi,"a");
   cadena = cadena.replace(/é/gi,"e");
   cadena = cadena.replace(/í/gi,"i");
   cadena = cadena.replace(/ó/gi,"o");
   cadena = cadena.replace(/ú/gi,"u");
   cadena = cadena.replace(/ñ/gi,"n");
   return cadena;
}

module.exports = {data};
