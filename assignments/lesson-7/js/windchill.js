/*var high = parsFloat(document.getElementById('highT').innerHTML);
var low = parseFloat(document.getElementById('lowT').innerHTML);
var averageT = (high + low) / 2;
var sp = parseFloat(document.getElementById('windS').innerHTML);
var f = 35.74 + 0.6215 *  averageT - 35.75 * Math.pow(sp, 0.16) + 0.4275 *  averageT * Math.pow(sp, 0.16);
*/
var f =35.74 + 0.6215 *  15 - 35.75 * Math.pow(2, 0.16) + 0.4275 *  2 * Math.pow(3, 0.16)
document.write(f);
/*get("windchill").innerHTML= f.toFixed()+ "&deg;F";*/

/*document.getElementById("windchill").innerHTML= "one two three"/*f + "&deg;F";*/
