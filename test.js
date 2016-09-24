function _sumFibs( maxFibValue ) {

  /*var sum = 0;*/

  var a = 0;
  var b = 1;

  var fibArr = [];



  for (var i = 0; i < maxFibValue; i ++){
    a = a + b;
      fibArr.push(a);
    b = a + b;
      fibArr.push(b);
  }
   console.log(fibArr);
    return fibArr;

  /*return sum;*/
}

_sumFibs(3);