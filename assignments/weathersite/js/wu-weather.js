var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'http://api.wunderground.com/api/07dd5555c9ddfa39/forecast/geolookup/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('w_string').innerHTML = weatherInfo.current_observation.weather;
    
    document.getElementById('nowT').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('windS').innerHTML = weatherInfo.current_observation.wind_gust_mph;
    
    document.getElementById('direction').innerHTML = weatherInfo.current_observation.wind_dir;
    
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
    
    document.getElementById('for_string').innerHTML = weatherInfo.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById('w_icon').src = "<img src= \"" + weatherInfo.current_observation.icon_url+ "\" > ";
    var rep = str.replace("http:", "https:");
    document.getElementById('w_icon').innerHTML = rep;
    
}