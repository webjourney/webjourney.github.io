document.write(156156156)

var header = document.querySelector('main');
    
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'text'; // now we're getting a string!
    request.send();
