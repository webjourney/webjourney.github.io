var serviceObject = new XMLHttpRequest();

serviceObject.open('GET', 'https://webjourney.github.io/mountainweb/data/pricing.json', true);

serviceObject.send();

serviceObject.onload = function () {
    
    var priceInfo = JSON.parse(serviceObject.responseText);
    console.log(priceInfo);
    document.getElementById('basi').innerHTML = priceInfo.repair["0"].basicTune;
    
    document.getElementById('annT').innerHTML = 
		priceInfo.repair["0"].yrTune;
    
    
    
    document.getElementById('babI').innerHTML = 
		priceInfo.repair[1].babySeat;
    
    document.getElementById('barI').innerHTML = 
		priceInfo.repair[1].barTape;
    
    document.getElementById('comI').innerHTML = 
		priceInfo.repair[1].computer;
    
    document.getElementById('racI').innerHTML = 
		priceInfo.repair[1].rack;
    
    
    
    document.getElementById('asseB').innerHTML = 
		priceInfo.repair[2].assemble;
    
    document.getElementById('buiF').src = 
		priceInfo.repair[2].buildUP;
    
    document.getElementById('strF').innerHTML = 
		priceInfo.repair[2].stripFram;
    
    
    
    document.getElementById('brakA').src = 
		priceInfo.repair[3].brkAdj;
    
    document.getElementById('brakB').innerHTML = 
		priceInfo.repair[3].brkBleed;
    
    document.getElementById('brakI').src = 
		priceInfo.repair[3].brkCable;
    
    document.getElementById('brakPi').innerHTML = 
		priceInfo.repair[3].brkPad;
    
    
    
    
    document.getElementById('wheB').src = 
		priceInfo.repair[4].weelB;
    
    document.getElementById('spoR').innerHTML = 
		priceInfo.repair[4].spokeRep;
    
    document.getElementById('truW').src = 
		priceInfo.repair[4].trueW;
    
    document.getElementById('tirI').innerHTML = 
		priceInfo.repair[4].tireTub;
    
    
    
    document.getElementById('hubA').src = 
		priceInfo.repair[5].hubAdj;
    
    document.getElementById('hubO').innerHTML = 
		priceInfo.repair[5].hubAll;
    
    document.getElementById('pedIn').src = 
		priceInfo.repair[5].pedIns;
    
    document.getElementById('toeI').innerHTML = 
		priceInfo.repair[5].toeClip;
   
}






