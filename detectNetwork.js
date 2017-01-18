// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  console.log('card_num:' + cardNumber);
  var length = cardNumber.length;
  console.log('length = ' + length);
  var company = '';
  var prefix = parseInt(cardNumber.slice(0, 1));
  if (prefix !== 4) {
  	prefix = parseInt(cardNumber.slice(0, 2));
  	if (prefix === 50 || prefix === 63 || prefix === 60) {
  		prefix = parseInt(cardNumber.slice(0, 4));
  	} else if (prefix === 64) {
  		prefix = parseInt(cardNumber.slice(0, 6));
  	}
  }

  if (length === 14 && (prefix === 38 || prefix === 39)) {
    company = "Diner's Club";
  } else if (length === 15 && (prefix === 34 || prefix === 37)) {
	company = "American Express";
  } else if (prefix === 4 && (length === 13 || length === 16 || length === 19)) {
  	company = "Visa";
  } else if ((prefix >= 51 && prefix <= 55) && length === 16) {
  	company = "MasterCard";
  } else if ((prefix === 6011 || prefix === 644649 || prefix === 65) && (length === 16 || length === 19)) {
  	company = 'Discover';
  } else if ((prefix === 5018 || prefix === 5020 || prefix === 5038 || prefix === 6304) && (length >= 12 && length <= 19)) {
  	company = 'Maestro';
  }

  console.log(company);
  return company;

}


