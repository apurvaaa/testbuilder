
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  //it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  //});

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    } 
  });
});

describe('Diner\'s Club', function() {
  var card_number_seed = ['38186782345634', '39206782345634'];
  var length = 14;

  for (var prefix = 38; prefix < 40; prefix++ ) {
    var card_num = card_number_seed[(prefix % 2)];


    it('has a prefix of '+ prefix +' and a length of '+ length, function() {
      detectNetwork(card_num).should.equal('Diner\'s Club');
    });
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
  it('has a prefix 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {

  var prefixes = [6011, 65, 644649];
  var lengths = [16, 19];
  var card_number_seed = [6011678234561234, 6520678234561234, 6446498234561234];
  
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
        detectNetwork(card_num.toString() + toAdd).should.equal('Discover');
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

describe('should support China UnionPay')
describe('should support Switch')
