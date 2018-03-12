var output = document.querySelector('main');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
    franklin(cities);
    greenville(cities);
}

function franklin(cities) {
    var city = document.createElement('h2');
    city.textContent = ''+ cities[0].name + ' City';   
    output.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/greenville.jpeg";
    output.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('div');       
     var rainf = document.createElement('h3');
    motto.textContent = '"' + cities[0].motto + '"'; 
    yrfd.textContent = cities[0].yearFounded + ' year';
	pop.textContent = cities[0].currentPopulation + ' people'; 
    rainf.textContent = cities[0].averageRainfall + ' rain';
    
    output.appendChild(motto);
    output.appendChild(yrfd);
    output.appendChild(pop);
    output.appendChild(rainf);
};
	
function greenville(cities) {
    var city = document.createElement('h2');
    city.textContent = ''+ cities[1].name + ' City';   
    output.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/franklin.jpg";
    output.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('div');       
     var rainf = document.createElement('h3');
    motto.textContent = '"' + cities[1].motto + '"'; 
    yrfd.textContent = cities[1].yearFounded + ' year';
	pop.textContent = cities[1].currentPopulation + ' people'; 
    rainf.textContent = cities[1].averageRainfall + ' rain';
    
    output.appendChild(motto);
    output.appendChild(yrfd);
    output.appendChild(pop);
    output.appendChild(rainf);
};







/*var output = document.querySelector('main');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];


    var city = document.createElement('h2');
    city.textContent = ''+ cities[0].name + ' City';   
    output.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/franklin.jpg";
    output.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('div');       
     var rainf = document.createElement('h3');
    motto.textContent = '"' + cities[0].motto + '"'; 
    yrfd.textContent = cities[0].yearFounded + ' year';
	pop.textContent = cities[0].currentPopulation + ' people'; 
    rainf.textContent = cities[0].averageRainfall + ' rain';
    
    output.appendChild(motto);
    output.appendChild(yrfd);
    output.appendChild(pop);
    output.appendChild(rainf);
};
*/	

/*
var output = document.querySelector('main');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
	for (var i = 0; i < cities.length; i++) {
     var city = document.createElement('h2');
     var motto = document.createElement('p');
     var yrfd = document.createElement('p');
     var pop = document.createElement('div');       
     var rainf = document.createElement('h3');      
        
        city.textContent = ''+ cities[i].name + ' City';
        motto.textContent = '"' + cities[i].motto + '"';
        yrfd.textContent = cities[i].yearFounded + ' year';
		pop.textContent = cities[i].currentPopulation + ' people'; 
        rainf.textContent = cities[i].averageRainfall + ' rain';
        
		output.appendChild(city);
		output.appendChild(motto);
        output.appendChild(yrfd);
        output.appendChild(pop);
        output.appendChild(rainf);
	}
};

*/
/*(motto)motto, (year founded)yearFounded, (population)currentPopulation, (annual rainfall)averageRainfall*/






/*var output = document.querySelector('main');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
	for (var i = 0; i < cities.length; i++) {
		var city = document.createElement('h3');
		 city.textContent = ''+ cities[i].name + ' City';
        var motto = document.createElement('p');
        motto.textContent = '"' + cities[i].motto + '"';

        var yrfd = document.createElement('p');
		 yrfd.textContent = cities[i].yearFounded + ' year';
        
        var pop = document.createElement('div');
		 pop.textContent = cities[i].currentPopulation + ' people'; 

        var rainf = document.createElement('h3');
		 rainf.textContent = cities[i].averageRainfall + ' rain';
        
		output.appendChild(city);
		output.appendChild(motto);
        output.appendChild(yrfd);
        output.appendChild(pop);
        output.appendChild(rainf);
	}
};
*/

/*(motto)motto, (year founded)yearFounded, (population)currentPopulation, (annual rainfall)averageRainfall*/