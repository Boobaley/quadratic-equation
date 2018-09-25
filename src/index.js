module.exports = function solveEquation(equation) {

  const abc = equation.split(/\s\*\sx(?:\^2)*/g);

  const a = parseInt(abc[0].replace(/\s/g, ''));

  const b = parseInt(abc[1].replace(/\s/g, ''));

  const c = parseInt(abc[2].replace(/\s/g, ''));

  const d = Math.pow(b, 2) - 4 * a *c;

 

  const result = [];

 

  if (d > 0) {

                const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a));

                const x2 = Math.round((-b - Math.sqrt(d)) / (2 * a));

                if (x1 > x2) {

                                result.push(x2, x1);

                } else {

                                result.push(x1, x2);

                }

  } else if (!d) {

                                result.push(-b / (2 * a));

  }

 

  return result;

}
