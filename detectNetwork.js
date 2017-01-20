/* Rules:

Diner's Club : prefix - 38 or 39 ,    length -  14 
American Express : prefix - 34 or 37,    length - 15
Visa : prefix - 4,    length - 13, 16, or 19.
MasterCard : prefix - 51, 52, 53, 54, or 55,    length - 16.
Discover : prefix - 6011, 644-649, or 65,    length - 16 or 19.
Maestro : prefix - 5018, 5020, 5038, or 6304,    length - 12-19.
China UnionPay : prefix - 622126-622925, 624-626, or 6282-6288,    length - 16-19.
Switch : prefix - 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759,    length - 16, 18, or 19.
 
 */

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string

  var length = cardNumber.length;
  var company = '';

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
        return company;
      }
    }
  }

}


