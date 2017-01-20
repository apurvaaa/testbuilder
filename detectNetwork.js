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


  var length = cardNumber.length;
  var company = '';
  /*
  var prefix = parseInt(cardNumber.slice(0, 1));
  if (prefix !== 4) {
  	prefix = parseInt(cardNumber.slice(0, 2));
  	if (prefix === 50 || prefix === 63 || prefix === 60) {
  		prefix = parseInt(cardNumber.slice(0, 4));
  	} else if (prefix === 64 || prefix === 62) {
  		prefix = parseInt(cardNumber.slice(0, 3));
  		if (prefix === 622) {
  			prefix = parseInt(cardNumber.slice(0, 6));
  		} else if (prefix === 628) {
  			prefix = parseInt(cardNumber.slice(0, 4));
  		} 
  	} 
  } else {
  	if (parseInt(cardNumber.slice(0, 4) in {4903: undefined, 4905:undefined , 4911: undefined, 4936:undefined})
  		prefix = (parseInt(cardNumber.slice(0, 4);
  } */
   var conditions = {
     13: {4: 'Visa'},
     14: {38: "Diner's Club", 39:"Diner's Club"},
     15: {34: 'American Express', 37: 'American Express'},
     16: {4: 'Visa', 51: 'MasterCard', 52: 'MasterCard', 53: 'MasterCard', 54: 'MasterCard', 55: 'MasterCard', 6011: 'Discover', 65: 'Discover', 644: 'Discover', 645: 'Discover', 646: 'Discover', 647: 'Discover', 648: 'Discover', 649: 'Discover'},
     19: {4: 'Visa', 6011: 'Discover', 65: 'Discover', 644: 'Discover', 645: 'Discover', 646: 'Discover', 647: 'Discover', 648: 'Discover', 649: 'Discover'}
   }
 
   //populating Maestro's rules:
   for (var i = 12; i <= 19; i++) {
     if (i.toString() in conditions) {
   	   conditions[i.toString()]['5018'] = 'Maestro';
   	   conditions[i.toString()]['5020'] = 'Maestro';
   	   conditions[i.toString()]['5038'] = 'Maestro';
   	   conditions[i.toString()]['6304'] = 'Maestro';
   	 } else {
   	 	conditions[i.toString()] = {};
   	 	i--;
   	 }
   }
   
   //populating China Union Pay:
   for (var i = 16; i <= 19; i++) {
   	 for (var j = 622126; j <= 622925; j++) {
   	 	conditions[i.toString()][j.toString()] = 'China UnionPay';
   	 }
   	 conditions[i.toString()]['624'] = 'China UnionPay';
   	 conditions[i.toString()]['625'] = 'China UnionPay';
   	 conditions[i.toString()]['626'] = 'China UnionPay';
   	 conditions[i.toString()]['6282'] = 'China UnionPay';
   	 conditions[i.toString()]['6283'] = 'China UnionPay';
   	 conditions[i.toString()]['6284'] = 'China UnionPay';
   	 conditions[i.toString()]['6285'] = 'China UnionPay';
   	 conditions[i.toString()]['6286'] = 'China UnionPay';
   	 conditions[i.toString()]['6287'] = 'China UnionPay';
   	 conditions[i.toString()]['6288'] = 'China UnionPay';
   }
   
   //populating Switch Rules:

   for (var i = 16; i <= 19; i++) {
     if (i !== 17) {
       conditions[i.toString()]['4903'] = 'Switch';
       conditions[i.toString()]['4905'] = 'Switch';
       conditions[i.toString()]['4911'] = 'Switch';
       conditions[i.toString()]['4936'] = 'Switch';
       conditions[i.toString()]['564182'] = 'Switch';
       conditions[i.toString()]['633110'] = 'Switch';
       conditions[i.toString()]['6333'] = 'Switch';
       conditions[i.toString()]['6759'] = 'Switch';
     }
   }
  
  

  for (var i = length - 1; i > 0; i-- ) {
    if (length in conditions) {
      conditions_for_the_length = conditions[length.toString()];
      possible_prefix = cardNumber.slice(0, i)
      if (possible_prefix in conditions_for_the_length) {
        company = conditions_for_the_length[possible_prefix]	
        //console.log(company + " : " + cardNumber + ' | Prefix : ' + possible_prefix + ' | length : ' + length);
        //console.log('conditions: ' + conditions_for_the_length);	
        return company;
      }
    }
  }

  /*
  if (length === 14 && (prefix === 38 || prefix === 39)) {
    company = "Diner's Club";
  } else if (length === 15 && (prefix === 34 || prefix === 37)) {
	company = "American Express";
  } else if (prefix === 4 && (length === 13 || length === 16 || length === 19)) {
  	company = "Visa";
  } else if ((prefix >= 51 && prefix <= 55) && length === 16) {
  	company = "MasterCard";
  } else if ((prefix === 6011 || (prefix >= 644 && prefix <= 649) || prefix === 65) && (length === 16 || length === 19)) {
  	company = 'Discover';
  } else if ((prefix === 5018 || prefix === 5020 || prefix === 5038 || prefix === 6304) && (length >= 12 && length <= 19)) {
  	company = 'Maestro';
  } else if (((prefix >= 622126 && prefix <= 622925) || (prefix >= 624 && prefix <= 626) || (prefix >= 6282 && prefix <= 6288)) && (length >= 16 && length <= 19)) {
    company = 'China UnionPay'
  }
  */
  //Switch : prefix - 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759,    length - 16, 18, or 19.

}


