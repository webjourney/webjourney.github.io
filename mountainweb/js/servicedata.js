/*var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'data/pricing.json', true);

weatherObject.send();

weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(repair);
    document.getElementById('basiT').innerHTML = repair.basicTune;
    */
    
var obj= JSON.parse(repair);
    document.getElementById('basiT').innerHTML = obj.basicTune;
    /*
    document.getElementById('nowT').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('windS').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    
    document.getElementById('direction').innerHTML = weatherInfo.current_observation.wind_dir;
    
    document.getElementById('windchil').innerHTML = weatherInfo.current_observation.windchill_f;
    
    document.getElementById('for_string').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById('w_icon').src = weatherInfo.current_observation.icon_url;
    
    /*document.getElementById('w_icon').innerHTML = "<img src= \"" + weatherInfo.current_observation.icon_url + "\" > ";
    var newst = document.getElementById('w_icon').innerHTML;*/
        
    /*document.getElementById('w_icon').innerHTML = "<img src= \"" + weatherInfo.current_observation.icon_url  + "\" > ";
    
    var newst = document.getElementById('w_icon').innerHTML;
    var rep = newst.replace("http:", "https:");
    document.getElementById("w_icon").innerHTML = rep;*/
    
    
}
