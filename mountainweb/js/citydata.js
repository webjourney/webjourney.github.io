var output = document.querySelector('article');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var jsondata = request.response;
	var cities = jsondata['towns'];
    for (var i = 0; i < cities.length; i++) {
        
	if (cities[i].name == "Franklin" || cities[i].name == "Springfield" || cities[i].name == "Greenville" ){
        
            if (cities[i].name == "Franklin"){
                var pic =document.createElement('img');
                var altt = document.createElement('img').alt= "franklin city image";
            pic.src= "images/franklin.jpg";
                output.appendChild(pic);
            }
            if (cities[i].name == "Springfield"){
                var pic = document.createElement('img');
                var altt = document.createElement('img').alt= "Springfield city image";
            pic.src= "images/springfield.jpeg";
                output.appendChild(pic);
            }
            if (cities[i].name == "Greenville"){
                var pic =document.createElement('img');
                var altt = document.createElement('img').alt= "Greenville city image";
            pic.src= "images/greenville.jpeg";
                output.appendChild(pic);
            }

		var city = document.createElement('h2');
        city.textContent = ''+ cities[i].name + ' City';
        
        /*var pic =document.createElement('img');
        pic.src= "images/franklin.jpg"; *//*, "images/springfield.jpeg", "greenville.jpeg";*/
        
        var altt = document.createElement('img').alt= "franklin city image";
        
        var motto = document.createElement('p');
        motto.textContent = '"' + cities[i].motto + '"';

        var yrfd = document.createElement('p');
        yrfd.textContent = 'Year founded: ' + cities[i].yearFounded;
        
        var pop = document.createElement('p');
        pop.textContent =  'Population: ' + cities[i].currentPopulation; 

        var rainf = document.createElement('p');
        rainf.textContent = 'Annual Rainfall: ' + cities[i].averageRainfall;
        
		output.appendChild(city);
        /*output.appendChild(pic);*/
		output.appendChild(motto);
        output.appendChild(yrfd);
        output.appendChild(pop);
        output.appendChild(rainf);
        
    }
  }
};
















/*var output = document.querySelector('main');*/
/*var frank = document.querySelector('article');
var green = document.querySelector('section');
var spring = document.querySelector('b');

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
    springfield(cities);
}

function franklin(cities) {
    var city = document.createElement('h2');
    city.textContent = ''+ cities[0].name + ' City';   
    frank.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/franklin.jpg";
    
    frank.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('p');       
     var rainf = document.createElement('p');
    motto.textContent = '"' + cities[0].motto + '"'; 
    yrfd.textContent ='Year founded: ' + cities[0].yearFounded;
	pop.textContent = 'Population: ' + cities[0].currentPopulation; 
    rainf.textContent ='Annual Rainfall: ' + cities[0].averageRainfall;
    
    frank.appendChild(motto);
    frank.appendChild(yrfd);
    frank.appendChild(pop);
    frank.appendChild(rainf);
};
	
function greenville(cities) {
    var city = document.createElement('h2');
    city.textContent = ''+ cities[1].name + ' City';   
    green.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/greenville.jpeg";
    green.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('p');       
     var rainf = document.createElement('p');
    motto.textContent = '"' + cities[1].motto + '"'; 
    yrfd.textContent = 'Year founded: ' + cities[1].yearFounded;
	pop.textContent = 'Population: ' + cities[1].currentPopulation; 
    rainf.textContent ='Annual Rainfall: ' +  cities[1].averageRainfall;
    
    green.appendChild(motto);
    green.appendChild(yrfd);
    green.appendChild(pop);
    green.appendChild(rainf);
};

function springfield(cities) {
    var city = document.createElement('h2');
    city.textContent = ''+ cities[3].name + ' City';   
    spring.appendChild(city);
   
    var pic =document.createElement('img');
    pic.src = "images/springfield.jpeg";
    spring.appendChild(pic); 
    var motto = document.createElement('p');
        
    var yrfd = document.createElement('p');
     var pop = document.createElement('p');       
     var rainf = document.createElement('p');
    motto.textContent = '"' + cities[3].motto + '"'; 
    yrfd.textContent = 'Year founded: ' + cities[3].yearFounded;
	pop.textContent = 'Population: ' + cities[3].currentPopulation; 
    rainf.textContent = 'Annual Rainfall: ' + cities[3].averageRainfall;
    
    spring.appendChild(motto);
    spring.appendChild(yrfd);
    spring.appendChild(pop);
    spring.appendChild(rainf);
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