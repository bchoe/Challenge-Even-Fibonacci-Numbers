/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
  // do your work here



function _sumFibs( maxFibValue ) {

  var sum = 0;

  var a = 0;
  var b = 1;

  var fibArr = [];

  for (var i = 0; i < maxFibValue; i ++){
    a = a + b;
      sum.push(a);
    b = a + b;
      sum.push(b);
  }


  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};