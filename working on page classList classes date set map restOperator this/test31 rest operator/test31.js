const log = function(a, b, ...rest) { // ...rest - operator that makes parameters infinityso you everything you get except of a and b is ...rest 
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); // logs a, b and then give you an array with rest

function calcOrDouble(number, basis = 2) { // parametr by default if we dont get basis
    console.log(number * basis);
};

calcOrDouble(3, 5);

