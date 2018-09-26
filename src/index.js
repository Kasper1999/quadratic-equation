module.exports = function solveEquation(equation) {
  var a,b,c;

  var res = equation.split('* x').pop();
  c=res.replace(/\s/g, '');

  equation = equation.slice(0,-res.length-4)
  var res = equation.split('x^2').pop();
  b=res.replace(/\s/g, '');

  equation = equation.slice(0,-res.length-6)
  a=equation;

  var x1,x2;

  x1=((-b+Math.sqrt(b*b-4*a*c))/(2*a));
  x2=((-b-Math.sqrt(b*b-4*a*c))/(2*a));
  
  var tr;
      if (x1 > x2)
      { tr = x1; x1 = x2; x2 = tr; }
  
  var otv=[x1.toFixed(),x2.toFixed()];

  return otv;
}
