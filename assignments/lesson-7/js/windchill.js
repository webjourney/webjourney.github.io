let high = parseFloat(document.getElementById('highT').innerHTML);
let low = parseFloat(document.getElementById('lowT').innerHTML);
let averageT = (high + low) / 2;
let sp = parseFloat(document.getElementById('windS').innerHTML);
let f = 35.74 + 0.6215 *  averageT - 35.75 * Math.pow(sp, 0.16) + 0.4275 *  averageT * Math.pow(sp, 0.16);

//Round the number to two digits after the decimal.
	var digits = 1;
	var multiplier = Math.pow(10, digits);
	result= Math.round(f * multiplier) / multiplier;

document.getElementById('windchill').innerHTML = 'Wind Chill: ' + result;