var weatherObj = new XMLHttpRequest();

weatherObj.open('GET', 'https://api.wunderground.com/api/07dd5555c9ddfa39/geolookup/conditions/forecast/q/Australia/Mission_Beach.json', true);

weatherObj.send();

weatherObj.onload = function () {
    
    var weatherIn = JSON.parse(weatherObj.responseText);
    console.log(weatherIn);
    document.getElementById('plac').innerHTML = weatherIn.current_observation.display_location.full;
    
    document.getElementById('w_strin').innerHTML = weatherIn.current_observation.weather;
    
    document.getElementById('nowTt').innerHTML = weatherIn.current_observation.temp_f;
    
    document.getElementById('windSs').innerHTML = weatherIn.current_observation.wind_gust_mph;
    
    document.getElementById('directio').innerHTML = weatherIn.current_observation.wind_dir;
    
    document.getElementById('windchill').innerHTML = weatherIn.current_observation.windchill_f;
    
    document.getElementById('for_strin').innerHTML = weatherIn.forecast.txt_forecast.forecastday["0"].fcttext;
    
    document.getElementById('w_ico').src = weatherIn.current_observation.icon_url;
    
    /*document.getElementById('w_icon').innerHTML = "<img src= \"" + weatherInfo.current_observation.icon_url + "\" > ";
    var newst = document.getElementById('w_icon').innerHTML;*/
    
    /*document.getElementById('w_ico').innerHTML = "<img src=\"" + weatherIn.current_observation.icon_url + "\" > ";
    
    var ne = document.getElementById('w_ico').innerHTML;
    var repp = ne.replace("http:", "https:");
    document.getElementById("w_ico").src = repp;*/
    
    
}
