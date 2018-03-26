/*Lesson 3-6:Hierarchically Traversing the DOM*/
$(function(){
    $('.servicesBtn').closest('div').css('background-color', 'rgba(255, 0, 0, 0.2)');
})
/*$(function(){
    $(".navigation > li:eq(2)").parent().parent().parent().css('opacity', '0.3');
})*/

/*$(function(){
    $('.header').children().css('background-color', 'rgba(255, 0, 0, 0.2)');
})
*/
/*$(function(){
   // $('#alcoveLogo').next().css('background-color', 'rgba(255, 0, 0, 0.2)');
   
    $('.box1').nextAll().css('background-color', 'rgba(255, 0, 0, 0.2)');
})*/

/*$(function(){
    $('#alcoveLogo').next().css('background-color', 'rgba(255, 0, 0, 0.2)');
})*/



///////////*Lesson 3-4:Using Selection Filters: Basic Filters*/
/*in Lesson 3 folder for BasicFiltersBegin.htm*///////////



/*Selecting by Element Type and Attribute Value*/
/*index.htm page*/
$(function(){
    $('input[name$="Val"]').css('border', '1px solid red');
})

/*$(function(){
    $('input[name*="Num"]').css('border', '1px solid red');
})*/
/*$(function(){
    $('input[name!="phoneNum"]').css('border', '1px solid red');
})
*/
/*
$(function(){
    $('input[name="nameVal"]').css('border', '1px solid red');
})*/

/*$(function(){
    $('button').css('border', '1px solid red');
    $('h2').css('border', '1px solid red');
})*/


/*INTRODUCTION TO BASIC jQUERY SELECTORS: IDs and CLASSES*/
$(function(){
    $('#alcoveLogo').css('opacity', 0.4);
    
    $('.servicesBtn').css('color', '#FFF');
    
})


/*INTRODUCTION TO SELECTORS*/
/*index.htm page*/
$(function(){
        var elements = document.querySelectorAll(" .navigation > li:nth-child(even) > a");
        
        for(var i = 0; i < elements.length; i ++){
            elements[i].style.color = 'rgb(255, 0, 0)';       
        }    
})
/*
$(function(){
        var element = document.querySelector(".navigation > li:nth-child(3) > a");
        element.style.color = 'rgb(255, 0, 0)';
})
*/
/*window.onload = function (){
    var elements = document.getElementsByTagName('h2');
    
    for (var i = 0; i < elements.length; i ++) {
        elements[i].style.borderColor = 'rgb(255,0,0)';
        elements[i].style.borderWidth = '2px';
        elements[i].style.borderStyle = 'solid';
        elements[i].style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    }    
}*/

/*window.onload = function (){
    var elements = document.getElementsByClassName('servicesBtn');
    
    for (var i=0; i < elements.length; i ++ ){
        if (i % 2 == 0){
            elements[i].style.color = 'rgb(0, 106, 255)';
        }
    }
}
*/

/*
window.onload = function () {
    var element = document.getElementById('alcoveLogo');
    element.style.opacity = 0.2;
}
*/