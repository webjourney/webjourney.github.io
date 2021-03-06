var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/07dd5555c9ddfa39/forecast/geolookup/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function () {
    
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('w_string').innerHTML = weatherInfo.current_observation.weather;
    
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
    
    /*document.getElementById('w_ico').src = weatherIn.current_observation.icon_url;*/
    
    /*document.getElementById('w_icon').innerHTML = "<img src= \"" + weatherInfo.current_observation.icon_url + "\" > ";
    var newst = document.getElementById('w_icon').innerHTML;*/
    
    document.getElementById('w_ico').innerHTML = "<img src=\"" + weatherIn.current_observation.icon_url + "\" > ";
    
    var ne = document.getElementById('w_ico').innerHTML;
    var repp = ne.replace("http:", "https:");
    document.getElementById("w_ico").innerHTML = repp; 
}



var weatherOb = new XMLHttpRequest();

weatherOb.open('GET', 'https://api.wunderground.com/api/07dd5555c9ddfa39/geolookup/conditions/forecast/q/Thailand/Sahatsakhan.json', true);

weatherOb.send();

weatherOb.onload = function () {
    
    var weatherI = JSON.parse(weatherOb.responseText);
    console.log(weatherI);
    document.getElementById('placb').innerHTML = weatherI.current_observation.display_location.full;
    
    document.getElementById('w_stri').innerHTML = weatherI.current_observation.weather;
    
    document.getElementById('nowTta').innerHTML = weatherI.current_observation.temp_f;
    
    document.getElementById('windSsa').innerHTML = weatherI.current_observation.wind_gust_mph;
    
    document.getElementById('directioa').innerHTML = weatherI.current_observation.wind_dir;
    
    document.getElementById('windchilla').innerHTML = weatherI.current_observation.windchill_f;
    
    document.getElementById('for_strina').innerHTML = weatherI.forecast.txt_forecast.forecastday["0"].fcttext;
    
    /*document.getElementById('w_icoa').src = weatherI.current_observation.icon_url;*/
    
    /*document.getElementById('w_icon').innerHTML = "<img src= \"" + weatherInfo.current_observation.icon_url + "\" > ";
    var newst = document.getElementById('w_icon').innerHTML;*/
    
    document.getElementById('w_icoa').innerHTML = "<img src=\"" + weatherI.current_observation.icon_url + "\" > ";
    
    var ner = document.getElementById('w_icoa').innerHTML;
    var reppp = ner.replace("http:", "https:");
    document.getElementById("w_icoa").src = reppp;
    
    
}






