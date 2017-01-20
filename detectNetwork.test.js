
/* describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    } 
  });
}); */

describe('Diner\'s Club', function() {
  var card_number_seed = ['38186782345634', '39206782345634'];

  for (var prefix = 38; prefix < 40; prefix++ ) {
    (function(prefix, card_num) {
      it('has a prefix of '+ prefix +' and a length of 14', function() {
        detectNetwork(card_num).should.equal('Diner\'s Club');
      });
    })(prefix, card_number_seed[(prefix % 2)]);
  }
  
});

describe('American Express', function() {
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();
  var card_numbers = [5112345678901234, 5212345678901234, 5312345678901234, 5412345678901234, 5512345678901234];

  for (var prefix = 51; prefix <= 55; prefix++) {
    (function (pfix, card_num) {
      it('has a prefix '+ pfix +' and a length of 16', function() {
        detectNetwork(card_num.toString()).should.equal('MasterCard');
      });
    })(prefix, card_numbers[(prefix % 10) - 1]);

  }
});

describe('Discover', function() {
  var prefixes = ['6011', '65', '644', '645', '646', '647', '648', '649'];
  var lengths = [16, 19];
  var card_number_seed = ['6011678234561234', '6520678234561234', '6446498234561234', '6456498234561234', '6466498234561234', '6476498234561234', '6486498234561234', '6496498234561234'];
  
  // for every prefix
  for (var p = 0; p < prefixes.length; p++ ) {
    // for every length
    for (var length_index = 0; length_index < lengths.length; length_index++) {

    (function(prefix, card_num){
      
      //string to concatenate to the card number of length 12
      var toAddLength = lengths[length_index] - 16;
      var toAdd = '';
      for ( var i = 0; i < toAddLength; i++) {
        toAdd += '1';
      }
       
      // use right cardnumber for right prefix
      it('has a prefix of '+ prefix +' and a length of '+ lengths[length_index], function() {
        detectNetwork(card_num + toAdd).should.equal('Discover');
      });

    })(prefixes[p], card_number_seed[p]);
    }
  }  
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var prefixes = [5018, 5020, 5038, 6304];
  var card_number_seed = [501867823456, 502067823456, 503849823456, 630449823456];
  
  // for every prefix
  for (var l = 0; l < prefixes.length; l++ ) {
    // for every length
    for (var length = 12; length < 20; length ++) {

    (function(prefix, card_num) {
      //string to concatenate to the card number of length 12
      var toAddLength = length - 12;
      var toAdd = '';
      for ( var i = 0; i < toAddLength; i++) {
        toAdd += '1';
      }
      
      it('has a prefix of '+ prefix +' and a length of '+ length, function() {
        detectNetwork(card_num + toAdd).should.equal('Maestro');
      });

    })(prefixes[l], card_number_seed[l]);
    }
  }

});

describe('China UnionPay', function() {
  // China UnionPay : prefix - 622126-622925, 624-626, or 6282-6288,    length - 16-19
  var prefixes = [];
  // populate prefixes
  for (var i = 622126; i <= 622925; i++) {
    prefixes.push(i.toString());
  }
  for (var i = 624; i <= 626; i++) {
    prefixes.push(i.toString());
  }
  for (var i = 6282; i <= 6288; i++) {
    prefixes.push(i.toString());
  }

  var card_number_seed = [];
  // populating card_number_seed for length 16
  for (var i = 622126; i <= 622925; i++) {
    card_number_seed.push(i.toString() + '1234567899');
  }
  for (var i = 624; i <= 626; i++) {
    card_number_seed.push(i.toString() + '1234567899876');
  }
  for (var i = 6282; i <= 6288; i++) {
    card_number_seed.push(i.toString() + '123456789987');
  }

  // for every prefix
  for (var i = 0; i < prefixes.length; i++) {
    for (var length = 16; length <= 19; length++) {
      (function(prefix, card_num) {
        // string to concatenate to increase length of cardnumber
        var toAddLength = length - 16;
        var toAdd = '';
        for ( var i = 0; i < toAddLength; i++) {
          toAdd += '1';
        }

        // test statement
        it('has a prefix of '+ prefix +' and a length of '+ length, function() {
          detectNetwork(card_num + toAdd).should.equal('China UnionPay');
        });

      })(prefixes[i], card_number_seed[i]);
    }
  } 
});

describe('Switch', function() {
  var prefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var card_number_seed = ['4903987654321234', '4905987654321234', '4911987654321234', '4936987654321234', '5641827654321234', '6331107654321234', '6333827654321234', '6759827654321234']
  var lengths = [16, 18, 19];
  
  for (var i = 0; i < prefixes.length; i++) {
    for (var length_index = 0; length_index <= 2; length_index++) {
      (function(prefix, card_num) {
        // string to concatenate to increase length of cardnumber
        var toAddLength = lengths[length_index] - 16;
        var toAdd = '';
        for ( var i = 0; i < toAddLength; i++) {
          toAdd += '1';
        }

        // test statement
        it('has a prefix of '+ prefix +' and a length of '+ lengths[length_index], function() {
          detectNetwork(card_num + toAdd).should.equal('Switch');
        });

      })(prefixes[i], card_number_seed[i]);
    }
  }
});

